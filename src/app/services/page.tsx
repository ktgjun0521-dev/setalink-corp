import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "サービス",
  description:
    "データコンサルティング・AI導入支援・業務改善（BPR）。株式会社セタリンクのサービス一覧。",
};

const services = [
  {
    number: "01",
    title: "データコンサルティング",
    titleEn: "Data Consulting",
    overview:
      "データ活用戦略の策定、KPI設計、ダッシュボード構築。企業が保有するデータの価値を最大化し、意思決定の精度を高めます。",
    target: "データを持っているが活用できていない企業",
    outputs: ["データ分析レポート", "BI環境構築（Tableau / Looker / Power BI）", "KPI設計・ダッシュボード構築", "データ活用ロードマップ策定"],
  },
  {
    number: "02",
    title: "AI導入支援",
    titleEn: "AI Implementation",
    overview:
      "社内向けAIチャットボット、業務自動化ツールの開発・導入。ChatGPTをはじめとした最新AIツールを、企業の業務フローに最適化して導入します。",
    target: "AIを活用したいが何から始めればいいかわからない企業",
    outputs: ["カスタムAIチャットボット開発", "自動化ワークフロー構築", "AI活用研修・トレーニング", "AIツール選定・導入コンサルティング"],
  },
  {
    number: "03",
    title: "業務改善 BPR",
    titleEn: "Business Process Re-engineering",
    overview:
      "業務プロセスの可視化、ボトルネック特定、改善施策の実行。現場の声を丁寧にヒアリングし、実効性の高い改善を実現します。",
    target: "業務の非効率さを感じている企業",
    outputs: ["業務フロー図の作成", "改善提案書", "業務マニュアル整備", "ツール導入による業務自動化"],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <FadeIn>
            <p className="font-inter text-xs font-semibold uppercase tracking-[0.25em] text-gray">
              Services
            </p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">
              サービス
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray">
              データ活用・AI導入・業務改善。企業の課題に合わせた最適なソリューションを、
              戦略策定から運用まで一気通貫で提供します。
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Service Sections */}
      {services.map((service, i) => (
        <section
          key={service.number}
          className={`py-16 md:py-24 ${i > 0 ? "border-t border-border" : ""}`}
        >
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="grid gap-10 md:grid-cols-12 md:gap-12">
              {/* Left: Title area */}
              <div className="md:col-span-4">
                <FadeIn>
                  <p className="font-inter text-6xl font-bold text-accent-blue/15">
                    {service.number}
                  </p>
                  <h2 className="mt-4 text-2xl font-bold tracking-tight md:text-3xl">
                    {service.title}
                  </h2>
                  <p className="mt-1 font-inter text-xs font-medium text-gray">
                    {service.titleEn}
                  </p>
                </FadeIn>
              </div>

              {/* Right: Details */}
              <div className="md:col-span-8">
                <FadeIn delay={100}>
                  {/* Overview */}
                  <div>
                    <p className="font-inter text-xs font-semibold uppercase tracking-widest text-gray">
                      Overview
                    </p>
                    <p className="mt-3 text-base leading-relaxed text-foreground/80">
                      {service.overview}
                    </p>
                  </div>

                  {/* Target */}
                  <div className="mt-8">
                    <p className="font-inter text-xs font-semibold uppercase tracking-widest text-gray">
                      Target
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                      {service.target}
                    </p>
                  </div>

                  {/* Outputs */}
                  <div className="mt-8">
                    <p className="font-inter text-xs font-semibold uppercase tracking-widest text-gray">
                      Output
                    </p>
                    <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                      {service.outputs.map((output) => (
                        <li
                          key={output}
                          className="flex items-start gap-2 text-sm text-foreground/70"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-lime" />
                          {output}
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Pricing Note */}
      <section className="border-t border-border py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <p className="font-inter text-xs font-semibold uppercase tracking-[0.25em] text-gray">
                Pricing
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight">
                料金について
              </h2>
              <p className="mt-6 text-sm leading-relaxed text-gray">
                プロジェクトの規模・内容に応じて、月額制・プロジェクト制の両方に対応しています。
                まずはお気軽にご相談ください。ヒアリングのうえ、最適なプランをご提案いたします。
              </p>
              <div className="mt-10">
                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-accent-blue px-8 text-sm font-medium text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-accent-blue/20"
                >
                  お問い合わせ
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
