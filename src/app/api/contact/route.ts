import { NextResponse } from "next/server";
import { Resend } from "resend";

// メール本文（HTML）に入れる前に、入力値をエスケープする
const escapeHtml = (value: unknown) =>
  String(value ?? "").replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c] as string
  );

// 追加の項目（どこで知ったか・流入元）は、文字列だけを受け取り、長さを切る
const MAX_FIELD_LENGTH = 200;
const text = (value: unknown, max = MAX_FIELD_LENGTH) =>
  typeof value === "string" ? value.trim().slice(0, max) : "";

// Slack の文面に入れる前に、メンションやリンクとして解釈される記号を逃がす
const escapeSlack = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const SLACK_MESSAGE_PREVIEW = 300;

// Slack への通知（環境変数 SLACK_CONTACT_WEBHOOK_URL があるときだけ）。
// 失敗してもフォームの結果には影響させない。メールアドレスと電話番号は入れない
async function notifySlack(lines: string[]) {
  const webhookUrl = process.env.SLACK_CONTACT_WEBHOOK_URL;
  if (!webhookUrl) return;
  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: lines.join("\n") }),
      signal: AbortSignal.timeout(5000),
    });
    if (!res.ok) console.error("Slack notify error: status", res.status);
  } catch (error) {
    // Webhook の URL をログに出さないよう、エラーの種類だけを記録する
    console.error("Slack notify error:", error instanceof Error ? error.name : "unknown");
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, company, email, phone, topic, message } = body;

    // 迷惑送信よけ：人には見えない隠し項目が埋まっていたら、成功を返して何も送らない
    if (text(body.hpCheck)) {
      return NextResponse.json({ success: true });
    }

    // Validation
    if (!name || !company || !email || !message) {
      return NextResponse.json(
        { error: "必須項目が入力されていません" },
        { status: 400 }
      );
    }

    // どこで知ったか・流入元（ブラウザ側で記録したもの）
    const extra = {
      source: text(body.source),
      landingPage: text(body.landingPage),
      referrer: text(body.referrer),
      utm: [
        ["source", text(body.utmSource)],
        ["medium", text(body.utmMedium)],
        ["campaign", text(body.utmCampaign)],
      ]
        .filter(([, value]) => value)
        .map(([key, value]) => `${key}=${value}`)
        .join(" / "),
      lastArticle: text(body.lastArticle),
    };

    const safe = {
      name: escapeHtml(name),
      company: escapeHtml(company),
      email: escapeHtml(email),
      phone: escapeHtml(phone),
      topic: escapeHtml(topic),
      message: escapeHtml(message),
      source: escapeHtml(extra.source),
      landingPage: escapeHtml(extra.landingPage),
      referrer: escapeHtml(extra.referrer),
      utm: escapeHtml(extra.utm),
      lastArticle: escapeHtml(extra.lastArticle),
    };

    // メールの送信。失敗しても Slack への通知は行うので、ここではエラーを持っておくだけ
    let mailError: unknown = null;
    try {
      // 入力チェックのあとに作る（APIキー未設定の環境でも入力チェックは動くように）
      const resend = new Resend(process.env.RESEND_API_KEY);

      // Send notification email to SetaLink
      const notification = await resend.emails.send({
        from: "セタリンク お問い合わせ <noreply@setalinkapp.com>",
        to: ["junya.kataguchi@setalinkapp.com"],
        subject: `【お問い合わせ】${company} ${name}様`,
        html: `
        <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #f8fafc; border-radius: 12px;">
          <h2 style="color: #0F172A; font-size: 20px; margin-bottom: 24px; border-bottom: 2px solid #2D5BFF; padding-bottom: 12px;">
            新しいお問い合わせ
          </h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; width: 120px; vertical-align: top;">お名前</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #0F172A; font-weight: 500;">${safe.name}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; vertical-align: top;">会社名</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #0F172A; font-weight: 500;">${safe.company}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; vertical-align: top;">メールアドレス</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #0F172A;">
                <a href="mailto:${safe.email}" style="color: #2D5BFF;">${safe.email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; vertical-align: top;">電話番号</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #0F172A;">${safe.phone || "未入力"}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; vertical-align: top;">ご相談のテーマ</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #0F172A;">${safe.topic || "未選択"}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; vertical-align: top;">お問い合わせ内容</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #0F172A; white-space: pre-wrap; line-height: 1.7;">${safe.message}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; vertical-align: top;">どこで知ったか</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #0F172A;">${safe.source || "未回答"}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; vertical-align: top;">最初に見たページ</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #0F172A;">${safe.landingPage || "不明"}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; vertical-align: top;">参照元</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #0F172A;">${safe.referrer || "なし"}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; vertical-align: top;">UTM</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #0F172A;">${safe.utm || "なし"}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; color: #64748b; vertical-align: top;">直前に読んだ記事</td>
              <td style="padding: 12px 0; color: #0F172A;">${safe.lastArticle || "なし"}</td>
            </tr>
          </table>
          <p style="margin-top: 24px; font-size: 12px; color: #94a3b8;">
            このメールはsetalinkapp.comのお問い合わせフォームから自動送信されました。
          </p>
        </div>
      `,
      });
      // Resend は送信に失敗しても例外を投げず、結果の error に入れて返す
      if (notification.error) {
        throw new Error(`Resend: ${notification.error.name}: ${notification.error.message}`);
      }

      // Send auto-reply to the customer
      const autoReply = await resend.emails.send({
        from: "株式会社セタリンク <noreply@setalinkapp.com>",
        to: [email],
        subject: "【セタリンク】お問い合わせありがとうございます",
        html: `
        <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px;">
          <p style="color: #0F172A; font-size: 15px; line-height: 1.8;">
            ${safe.name} 様<br /><br />
            この度は株式会社セタリンクへお問い合わせいただき、誠にありがとうございます。<br />
            以下の内容でお問い合わせを受け付けいたしました。<br /><br />
            担当者より2営業日以内にご連絡させていただきますので、今しばらくお待ちください。
          </p>
          <div style="margin: 24px 0; padding: 20px; background: #f8fafc; border-radius: 8px; border-left: 3px solid #2D5BFF;">
            <p style="margin: 0 0 8px; color: #64748b; font-size: 13px;">お問い合わせ内容</p>
            <p style="margin: 0; color: #0F172A; font-size: 14px; white-space: pre-wrap; line-height: 1.7;">${safe.message}</p>
          </div>
          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 24px 0;" />
          <p style="color: #94a3b8; font-size: 12px; line-height: 1.6;">
            株式会社セタリンク<br />
            〒154-0023 東京都世田谷区世田谷1-15-23<br />
            E-mail: junya.kataguchi@setalinkapp.com<br />
            Web: https://setalinkapp.com
          </p>
        </div>
      `,
      });
      // 自動返信だけが失敗した場合は、社内には届いているのでフォームは成功のままにする
      if (autoReply.error) {
        console.error("Auto-reply send error:", autoReply.error.name, autoReply.error.message);
      }
    } catch (error) {
      mailError = error;
    }

    // Slack への通知（メールの成否とは独立に行う）
    const messageText = text(message, 5000);
    const preview = Array.from(messageText).slice(0, SLACK_MESSAGE_PREVIEW).join("");
    await notifySlack([
      `【HP問い合わせ】${escapeSlack(text(company))} ${escapeSlack(text(name))}様`,
      `テーマ：${escapeSlack(text(topic)) || "未選択"}`,
      `内容：${escapeSlack(preview)}${preview.length < messageText.length ? "…" : ""}`,
      `どこで知ったか：${escapeSlack(extra.source) || "未回答"}`,
      `最初に見たページ：${escapeSlack(extra.landingPage) || "不明"}`,
      `参照元：${escapeSlack(extra.referrer) || "なし"}`,
      `直前に読んだ記事：${escapeSlack(extra.lastArticle) || "なし"}`,
      mailError
        ? "※通知メールの送信に失敗しました。メールの設定（Resend）を確認してください"
        : "返信先は通知メールを確認",
    ]);

    if (mailError) throw mailError;

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { error: "メールの送信に失敗しました" },
      { status: 500 }
    );
  }
}
