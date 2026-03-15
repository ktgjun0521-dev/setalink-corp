import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "会社概要",
  description:
    "株式会社セタリンク（SETALink Inc.）の会社情報。データコンサルティング・AI導入支援・業務改善を提供。",
};

const companyInfo = [
  { label: "会社名", value: "株式会社セタリンク" },
  { label: "英語名", value: "SETALink Inc." },
  { label: "設立", value: "2026年4月" },
  { label: "代表者", value: "片口 潤哉" },
  { label: "所在地", value: "東京都世田谷区世田谷1-15-23" },
  {
    label: "事業内容",
    value:
      "データコンサルティング、AI導入支援、業務改善コンサルティング、Webサイト・アプリ開発",
  },
  { label: "URL", value: "https://setalinkapp.com", isLink: true },
];

export default function CompanyPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <FadeIn>
            <p className="font-inter text-xs font-semibold uppercase tracking-[0.25em] text-gray">
              Company
            </p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">
              会社概要
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* Company Info Table */}
      <section className="pb-20 md:pb-28 lg:pb-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-3xl">
              <dl className="divide-y divide-border">
                {companyInfo.map((item) => (
                  <div
                    key={item.label}
                    className="grid grid-cols-1 gap-1 py-5 sm:grid-cols-3 sm:gap-4 sm:py-6"
                  >
                    <dt className="text-sm font-medium text-gray">
                      {item.label}
                    </dt>
                    <dd className="text-sm leading-relaxed text-foreground sm:col-span-2">
                      {item.isLink ? (
                        <a
                          href={item.value}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-inter text-accent-blue underline-offset-4 transition-colors hover:underline"
                        >
                          {item.value}
                        </a>
                      ) : (
                        item.value
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </FadeIn>

          {/* Mission Statement */}
          <FadeIn delay={200}>
            <div className="mx-auto mt-20 max-w-3xl border-t border-border pt-16">
              <p className="font-inter text-xs font-semibold uppercase tracking-[0.25em] text-gray">
                Our Mission
              </p>
              <h2 className="mt-4 text-2xl font-bold leading-snug tracking-tight md:text-3xl">
                データの力で、
                <br />
                すべての企業に変革を。
              </h2>
              <p className="mt-6 text-sm leading-loose text-gray">
                私たちは、データ活用・AI導入・業務改善を通じて、企業の持続的な成長を支援します。
                テクノロジーの力を、現場で使える形にして届ける。
                それがセタリンクの使命です。
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
