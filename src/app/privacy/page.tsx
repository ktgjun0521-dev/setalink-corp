import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/Section";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "プライバシーポリシー",
  description:
    "株式会社セタリンクのプライバシーポリシー。お問い合わせフォームなどで取得する情報、利用目的、第三者への提供、アクセス解析（Google アナリティクス）、開示・訂正・削除のご請求の窓口について記載しています。",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        label="Privacy policy"
        title={
          // スマホで折り返すときは「プライバシー／ポリシー」の間で切る
          <>
            <span className="inline-block">プライバシー</span>
            <span className="inline-block">ポリシー</span>
          </>
        }
        lead="株式会社セタリンク（以下「当社」）は、お客様の個人情報を次のとおり取り扱います。"
      />

      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">
          <div className="article-body">
            <h2>1. 取得する情報</h2>
            <p>
              お問い合わせフォームに入力いただいた、お名前、会社名、メールアドレス、電話番号、ご相談の内容、当社を知ったきっかけ。あわせて、当サイトで最初にご覧になったページ、参照元のサイト、直前にご覧になった記事を記録します。
            </p>

            <h2>2. 利用目的</h2>
            <ul>
              <li>お問い合わせへの回答とご連絡</li>
              <li>ご相談・ご提案の準備</li>
              <li>当サイトとサービスの改善</li>
            </ul>

            <h2>3. 第三者への提供</h2>
            <p>法令に基づく場合を除き、ご本人の同意なく第三者に提供しません。</p>

            <h2>4. 業務の委託</h2>
            <p>
              メールの送信、サイトの運用、社内の連絡などに外部のサービスを利用しており、その範囲で個人情報の取り扱いを委託することがあります。委託先は適切に選び、管理します。
            </p>

            <h2>5. アクセス解析</h2>
            <p>
              当サイトは、利用状況を把握するために Google アナリティクスを使用しています。Google アナリティクスは Cookie
              を使ってアクセスの情報を集めますが、個人を特定する情報は含みません。集められた情報は{" "}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                Google のプライバシーポリシー
              </a>
              に基づいて管理されます。ブラウザの設定で Cookie を無効にするか、Google が提供する
              <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">
                オプトアウト アドオン
              </a>
              で、収集を止めることができます。
            </p>

            <h2>6. 安全管理</h2>
            <p>個人情報への不正なアクセス、紛失、漏えいなどを防ぐため、必要かつ適切な措置を講じます。</p>

            <h2>7. 開示・訂正・削除</h2>
            <p>
              ご本人から、個人情報の開示・訂正・利用停止・削除のご請求があった場合は、ご本人であることを確認のうえ、すみやかに対応します。下の窓口までご連絡ください。
            </p>

            <h2>8. お問い合わせ窓口</h2>
            <p>
              株式会社セタリンク
              <br />
              〒154-0023 東京都世田谷区世田谷1-15-23
              <br />
              <Link href="/contact">お問い合わせフォーム</Link>
            </p>

            <h2>9. 改定</h2>
            <p>内容を見直し、必要に応じて改定することがあります。改定したときは、このページでお知らせします。</p>

            {/* 制定日は代表の確認後に記載 */}
          </div>
        </div>
      </section>
    </>
  );
}
