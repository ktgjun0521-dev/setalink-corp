import Link from "next/link";
import FadeIn from "@/components/FadeIn";

const services = [
  {
    number: "01",
    title: "データコンサルティング",
    titleEn: "Data Consulting",
    description:
      "企業のデータ活用戦略の策定から実行まで。KPI設計、ダッシュボード構築、データ分析基盤の整備を支援します。",
  },
  {
    number: "02",
    title: "AI導入支援",
    titleEn: "AI Implementation",
    description:
      "ChatGPTをはじめとしたAIツールの導入・カスタマイズ。社内向けAIチャットボットや業務自動化ツールを開発します。",
  },
  {
    number: "03",
    title: "業務改善 BPR",
    titleEn: "Business Process Re-engineering",
    description:
      "業務プロセスの可視化・ボトルネック特定・最適化。現場に寄り添った改善施策を実行します。",
  },
];

const strengths = [
  {
    number: "01",
    title: "豊富な事業企画・データ活用経験",
    description:
      "大手人材企業での事業企画・データ活用経験を活かし、ビジネス視点とデータ視点の両面からアプローチします。",
  },
  {
    number: "02",
    title: "課題に合わせたカスタムソリューション",
    description:
      "パッケージ型のサービスではなく、企業ごとの課題・状況に合わせた最適なソリューションを設計・提供します。",
  },
  {
    number: "03",
    title: "導入から運用まで一気通貫",
    description:
      "戦略策定・ツール導入だけでなく、導入後の運用サポート・改善提案まで一気通貫で伴走します。",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex min-h-[90vh] items-center pt-20">
        <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="fade-in-up" style={{ animationDelay: "0ms" }}>
            <p className="font-inter text-xs font-semibold uppercase tracking-[0.25em] text-gray">
              Data Consulting &amp; AI Solutions
            </p>
          </div>

          <div className="fade-in-up" style={{ animationDelay: "150ms", animationFillMode: "both" }}>
            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-7xl">
              データで、
              <br />
              ビジネスを
              <br className="hidden md:block" />
              次のステージへ。
            </h1>
          </div>

          <div className="fade-in-up" style={{ animationDelay: "300ms", animationFillMode: "both" }}>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-gray md:text-lg">
              企業のデータ活用・AI導入・業務改善を一気通貫で支援。
              <br className="hidden md:block" />
              課題の整理から実行、運用まで伴走します。
            </p>
          </div>

          <div className="fade-in-up" style={{ animationDelay: "450ms", animationFillMode: "both" }}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-full bg-accent-blue px-8 text-sm font-medium text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-accent-blue/20"
              >
                お問い合わせ
              </Link>
              <Link
                href="/services"
                className="inline-flex h-12 items-center justify-center rounded-full border border-foreground/20 px-8 text-sm font-medium text-foreground transition-all duration-300 hover:border-foreground hover:scale-[1.02]"
              >
                サービスを見る
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative accent */}
        <div className="absolute right-8 top-1/3 hidden h-24 w-1 rounded-full bg-accent-lime lg:block" />
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <FadeIn>
            <div className="flex items-end justify-between border-b border-border pb-6">
              <div>
                <p className="font-inter text-xs font-semibold uppercase tracking-[0.25em] text-gray">
                  Services
                </p>
                <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
                  サービス
                </h2>
              </div>
              <Link
                href="/services"
                className="link-underline hidden text-sm font-medium text-foreground/70 transition-colors hover:text-foreground sm:block"
              >
                View All →
              </Link>
            </div>
          </FadeIn>

          <div className="mt-12 grid gap-8 md:grid-cols-3 md:gap-6 lg:gap-10">
            {services.map((service, i) => (
              <FadeIn key={service.number} delay={i * 100}>
                <div className="group">
                  <p className="font-inter text-xs font-semibold text-accent-blue">
                    {service.number}
                  </p>
                  <h3 className="mt-3 text-xl font-bold tracking-tight">
                    {service.title}
                  </h3>
                  <p className="mt-1 font-inter text-xs font-medium text-gray">
                    {service.titleEn}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-gray">
                    {service.description}
                  </p>
                  <div className="mt-6 h-px w-full bg-border transition-colors group-hover:bg-accent-blue" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Strengths Section */}
      <section className="border-t border-border py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <FadeIn>
            <p className="font-inter text-xs font-semibold uppercase tracking-[0.25em] text-gray">
              Why SETALink
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
              選ばれる理由
            </h2>
          </FadeIn>

          <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-8">
            {strengths.map((strength, i) => (
              <FadeIn key={strength.number} delay={i * 100}>
                <div>
                  <span className="font-inter text-4xl font-bold text-accent-blue/20">
                    {strength.number}
                  </span>
                  <h3 className="mt-4 text-lg font-bold leading-snug tracking-tight">
                    {strength.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray">
                    {strength.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-6xl px-6 text-center lg:px-8">
          <FadeIn>
            <p className="font-inter text-xs font-semibold uppercase tracking-[0.25em] text-gray">
              Contact
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
              まずはお気軽に
              <br className="md:hidden" />
              ご相談ください
            </h2>
            <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-gray">
              データ活用・AI導入・業務改善に関するご相談を承っております。
              まずはお話をお聞かせください。
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex h-14 items-center justify-center rounded-full bg-foreground px-10 text-sm font-medium text-background transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
              >
                お問い合わせはこちら
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
