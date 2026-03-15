import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import {
  Database,
  Bot,
  Settings,
  ArrowRight,
  BarChart3,
  LineChart,
  Brain,
  Workflow,
  ClipboardCheck,
  Cog,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "サービス",
  description:
    "データコンサルティング・AI導入支援・業務改善（BPR）。SETALINK株式会社のサービス一覧。",
};

const services = [
  {
    icon: Database,
    number: "01",
    title: "データコンサルティング",
    titleEn: "Data Consulting",
    color: "from-blue-600 to-accent-blue",
    iconBg: "bg-blue-50 text-accent-blue",
    overview:
      "データはあっても、意思決定に使えない。そんな課題に向き合います。データ整備からプログラム設計、BI開発まで一気通貫で支援し、「いつでもスグに正しいデータを見て、判断と行動が可能」な環境を構築します。",
    challenges: [
      "毎月の集計が大変（Excel・スプレッド連結作業）",
      "入力と管理が大変（手入力による時間消費）",
      "数値で判断できない（経営コンディション把握不可）",
    ],
    outputs: [
      { icon: BarChart3, label: "データ抽出・集計自動化" },
      { icon: LineChart, label: "BI開発（Power BI / Looker等）" },
      { icon: Workflow, label: "運用設計・データ活用定着" },
      { icon: ClipboardCheck, label: "KPI設計・ダッシュボード構築" },
    ],
  },
  {
    icon: Bot,
    number: "02",
    title: "AI導入支援",
    titleEn: "AI Implementation",
    color: "from-emerald-600 to-emerald-500",
    iconBg: "bg-emerald-50 text-emerald-600",
    overview:
      "Gemini・ChatGPT等の生成AIを、経営層・PR部門の業務スピード向上とコア業務への集中を実現する形で導入。月4回の伴走型支援プログラムで、秘書業務の効率化からPR文案作成のAI活用まで、現場に定着するAI活用を支援します。",
    challenges: [
      "AIを導入したいが何から始めればいいかわからない",
      "ツールを入れても現場で使われない",
      "セキュリティやガバナンスが不安",
    ],
    outputs: [
      { icon: Brain, label: "AI伴走支援プログラム（月4回MTG）" },
      { icon: Bot, label: "カスタムAIチャットボット開発" },
      { icon: Cog, label: "業務フロー自動化（GAS・AppScript等）" },
      { icon: ClipboardCheck, label: "AI活用研修・マニュアル提供" },
    ],
  },
  {
    icon: Settings,
    number: "03",
    title: "業務改善 BPR",
    titleEn: "Business Process Re-engineering",
    color: "from-amber-600 to-amber-500",
    iconBg: "bg-amber-50 text-amber-600",
    overview:
      "業務プロセスの可視化・ボトルネック特定・最適化。ツール導入だけでなく、現場の人に寄り添い、実効性の高い改善を実現します。データと人の両面からアプローチし、持続的な業務改善を支援します。",
    challenges: [
      "業務が属人化し、引き継ぎが困難",
      "非効率な作業が慣習として残っている",
      "改善したいが何から手をつければいいかわからない",
    ],
    outputs: [
      { icon: Workflow, label: "業務フロー図の作成・可視化" },
      { icon: ClipboardCheck, label: "改善提案書・実行計画" },
      { icon: Cog, label: "ツール導入による業務自動化" },
      { icon: CheckCircle2, label: "業務マニュアル整備・定着支援" },
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute -right-32 -top-32 h-[400px] w-[400px] rounded-full bg-accent-blue/5 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
          <FadeIn>
            <p className="font-inter text-xs font-semibold uppercase tracking-[0.25em] text-accent-blue">
              Services
            </p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">
              サービス
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray">
              データ基盤構築とAI活用の&quot;現場伴走&quot;を強みに、3つのサービスで
              企業のDX・AXを推進します。
            </p>
            <div className="section-divider mt-8" />
          </FadeIn>
        </div>
      </section>

      {/* Service Sections */}
      {services.map((service, i) => (
        <section
          key={service.number}
          className={`py-20 md:py-28 ${i % 2 === 1 ? "bg-light-blue" : ""}`}
        >
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="grid gap-12 md:grid-cols-12 md:gap-16">
              {/* Left: Title area */}
              <div className="md:col-span-4">
                <FadeIn>
                  <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl ${service.iconBg}`}>
                    <service.icon className="h-7 w-7" />
                  </div>
                  <p className="mt-6 font-inter text-6xl font-bold text-accent-blue/10">
                    {service.number}
                  </p>
                  <h2 className="mt-2 text-2xl font-bold tracking-tight md:text-3xl">
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
                  <p className="text-base leading-relaxed text-foreground/80">
                    {service.overview}
                  </p>

                  {/* Challenges */}
                  <div className="mt-10">
                    <p className="font-inter text-xs font-semibold uppercase tracking-widest text-gray">
                      こんな課題はありませんか？
                    </p>
                    <ul className="mt-4 space-y-3">
                      {service.challenges.map((challenge) => (
                        <li
                          key={challenge}
                          className="flex items-start gap-3 text-sm text-foreground/70"
                        >
                          <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-400">
                            !
                          </span>
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Outputs */}
                  <div className="mt-10">
                    <p className="font-inter text-xs font-semibold uppercase tracking-widest text-gray">
                      支援内容
                    </p>
                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      {service.outputs.map((output) => (
                        <div
                          key={output.label}
                          className="flex items-center gap-3 rounded-xl border border-border bg-white p-4"
                        >
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-light-blue text-accent-blue">
                            <output.icon className="h-4.5 w-4.5" />
                          </div>
                          <span className="text-sm font-medium">{output.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Pricing CTA */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-2xl rounded-3xl bg-navy p-10 text-center text-white md:p-16">
              <p className="font-inter text-xs font-semibold uppercase tracking-[0.25em] text-accent-blue">
                Pricing
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight">
                料金について
              </h2>
              <p className="mt-6 text-sm leading-relaxed text-white/60">
                プロジェクトの規模・内容に応じて、月額制・プロジェクト制の両方に対応。
                まずはお気軽にご相談ください。ヒアリングのうえ、最適なプランをご提案します。
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-accent-blue px-8 text-sm font-medium text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-accent-blue/25"
                >
                  お見積り・ご相談
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
