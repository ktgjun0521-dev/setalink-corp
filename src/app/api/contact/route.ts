import { NextResponse } from "next/server";
import { Resend } from "resend";

// メール本文（HTML）に入れる前に、入力値をエスケープする
const escapeHtml = (value: unknown) =>
  String(value ?? "").replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c] as string
  );

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const { name, company, email, phone, topic, message } = await request.json();

    // Validation
    if (!name || !company || !email || !message) {
      return NextResponse.json(
        { error: "必須項目が入力されていません" },
        { status: 400 }
      );
    }

    const safe = {
      name: escapeHtml(name),
      company: escapeHtml(company),
      email: escapeHtml(email),
      phone: escapeHtml(phone),
      topic: escapeHtml(topic),
      message: escapeHtml(message),
    };

    // Send notification email to SetaLink
    await resend.emails.send({
      from: "SETALINK お問い合わせ <noreply@setalinkapp.com>",
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
              <td style="padding: 12px 0; color: #64748b; vertical-align: top;">お問い合わせ内容</td>
              <td style="padding: 12px 0; color: #0F172A; white-space: pre-wrap; line-height: 1.7;">${safe.message}</td>
            </tr>
          </table>
          <p style="margin-top: 24px; font-size: 12px; color: #94a3b8;">
            このメールはsetalinkapp.comのお問い合わせフォームから自動送信されました。
          </p>
        </div>
      `,
    });

    // Send auto-reply to the customer
    await resend.emails.send({
      from: "SETALINK株式会社 <noreply@setalinkapp.com>",
      to: [email],
      subject: "【SETALINK】お問い合わせありがとうございます",
      html: `
        <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px;">
          <p style="color: #0F172A; font-size: 15px; line-height: 1.8;">
            ${safe.name} 様<br /><br />
            この度はSETALINK株式会社へお問い合わせいただき、誠にありがとうございます。<br />
            以下の内容でお問い合わせを受け付けいたしました。<br /><br />
            担当者より2営業日以内にご連絡させていただきますので、今しばらくお待ちください。
          </p>
          <div style="margin: 24px 0; padding: 20px; background: #f8fafc; border-radius: 8px; border-left: 3px solid #2D5BFF;">
            <p style="margin: 0 0 8px; color: #64748b; font-size: 13px;">お問い合わせ内容</p>
            <p style="margin: 0; color: #0F172A; font-size: 14px; white-space: pre-wrap; line-height: 1.7;">${safe.message}</p>
          </div>
          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 24px 0;" />
          <p style="color: #94a3b8; font-size: 12px; line-height: 1.6;">
            SETALINK株式会社<br />
            〒154-0023 東京都世田谷区世田谷1-15-23<br />
            E-mail: junya.kataguchi@setalinkapp.com<br />
            Web: https://setalinkapp.com
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { error: "メールの送信に失敗しました" },
      { status: 500 }
    );
  }
}
