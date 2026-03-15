import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import {
  Database,
  Bot,
  Settings,
  ArrowRight,
  TrendingUp,
  Users,
  GraduationCap,
  BarChart3,
  MessageSquare,
  FileCheck,
  Handshake,
  Rocket,
} from "lucide-react";

const services = [
  {
    icon: Database,
    number: "01",
    title: "データコンサルティング",
    titleEn: "Data Consulting",
    description:
      "データ整備からBI開発、運用設計まで一気通貫で支援。毎月の集計業務を自動化し、正しいデータで意思決定できる環境を構築します。",
    color: "bg-blue-50 text-accent-blue",
  },
  {
    icon: Bot,
    number: "02",
    title: "AI導入支援",
    titleEn: "AI Implementation",
    description:
      "Gemini・ChatGPT等の生成AIを業務フローに最適化。AI伴走型の支援プログラムで、現場に定着するAI活用を実現します。",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: Settings,
    number: "03",
    title: "業務改善 BPR",
    titleEn: "Business Process Re-engineering",
    description:
      "業務プロセスの可視化・ボトルネック特定・最適化。ツール導入だけでなく、現場の人に寄り添った改善を実行します。",
    color: "bg-amber-50 text-amber-600",
  },
];

const strengths = [
  {
    icon: TrendingUp,
    number: "01",
    title: "最先端＜最適解",
    description:
      "最新技術の導入ではなく、事業成果につながる最適解を設計。複数業界のデータ活用支援経験から、実現可能で効果の高い提案を行います。",
  },
  {
    icon: Users,
    number: "02",
    title: "実装力 × 伴走力",
    description:
      "エンジニアや運用設計まで社内で一気通貫対応。ミーティングだけのコンサルではなく、手を動かして現場業務を理解した支援を提供します。",
  },
  {
    icon: GraduationCap,
    number: "03",
    title: "教育・定着支援力",
    description:
      "データ・AI活用を社内に定着させるノウハウ。BI・データ基盤のレクチャーからAIツールの実践教育まで、組織全体の力を底上げします。",
  },
];

const cases = [
  {
    industry: "フィットネス",
    company: "全国展開フィットネスクラブ A社",
    challenge: "各店舗の売上データはPOSで取得していたが、集計が手作業で帳簿のズレが常態化",
    result: "店舗別・キャスト別の売上を可視化。約330時間/月の業務削減に成功",
    metric: "330h",
    metricLabel: "月間業務削減",
  },
  {
    industry: "飲食",
    company: "飲食店 B社",
    challenge: "月次の売上報告や店舗別の簡単集計にExcelで膨大な時間をかけていた",
    result: "商品別利益率分析でセット組み換え、利益率UPを実現",
    metric: "+15%",
    metricLabel: "利益率改善",
  },
  {
    industry: "人材",
    company: "人材会社 C社",
    challenge: "営業日報のExcelが肥大化し、管理コスト月80万円が発生",
    result: "営業データ基盤の再設計により目標達成率+10%を実現",
    metric: "+10%",
    metricLabel: "目標達成率UP",
  },
];

const processSteps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "ヒアリング",
    description: "現状の課題整理、データで実現したいことを明確化",
  },
  {
    icon: BarChart3,
    step: "02",
    title: "データ確認",
    description: "利用可能データの確認、変更すべきことの洗い出し",
  },
  {
    icon: FileCheck,
    step: "03",
    title: "レポート提案",
    description: "BIイメージの共有、要件定義とスケジュール策定",
  },
  {
    icon: Handshake,
    step: "04",
    title: "契約・利用開始",
    description: "プログラム・BIの開発・構築、QAサイクルの実施",
  },
  {
    icon: Rocket,
    step: "05",
    title: "定例支援",
    description: "データ利活用定着支援、継続的な改善提案",
  },
];

export default function Home() {
  return (
    <>
      {/* ===== Hero Section ===== */}
      <section className="relative flex min-h-screen items-center overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-accent-blue/5 blur-3xl" />
        <div className="absolute -left-20 bottom-0 h-[300px] w-[300px] rounded-full bg-accent-lime/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6 py-32 lg:px-8 lg:py-40">
          <div className="max-w-3xl">
            <div className="fade-in-up">
              <div className="inline-flex items-center gap-2 rounded-full border border-accent-blue/20 bg-accent-blue/5 px-4 py-1.5">
                <span className="h-2 w-2 rounded-full bg-accent-blue animate-pulse" />
                <span className="font-inter text-xs font-medium text-accent-blue">
                  DX / AX / Data Consulting
                </span>
              </div>
            </div>

            <div className="fade-in-up" style={{ animationDelay: "150ms", animationFillMode: "both" }}>
              <h1 className="mt-8 text-4xl font-bold leading-[1.15] tracking-tight md:text-5xl lg:text-6xl">
                データの力で、
                <br />
                <span className="gradient-text">本気ではたらく</span>
                <br />
                社会を共に創る。
              </h1>
            </div>

            <div className="fade-in-up" style={{ animationDelay: "300ms", animationFillMode: "both" }}>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-gray md:text-lg">
                データ基盤構築とAI活用の&quot;現場伴走&quot;を強みとする
                <br className="hidden md:block" />
                ITコンサルティング会社。再現性ある技術を、
                <br className="hidden md:block" />
                個人と組織になじませます。
              </p>
            </div>

            <div className="fade-in-up" style={{ animationDelay: "450ms", animationFillMode: "both" }}>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="group inline-flex h-14 items-center justify-center gap-2 rounded-full bg-accent-blue px-8 text-sm font-medium text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-accent-blue/25"
                >
                  無料相談はこちら
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex h-14 items-center justify-center rounded-full border border-foreground/20 px-8 text-sm font-medium text-foreground transition-all duration-300 hover:border-foreground hover:scale-[1.02]"
                >
                  サービスを見る
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 fade-in" style={{ animationDelay: "1s", animationFillMode: "both" }}>
          <div className="flex flex-col items-center gap-2">
            <span className="font-inter text-[10px] uppercase tracking-widest text-gray">Scroll</span>
            <div className="h-8 w-px bg-gradient-to-b from-gray to-transparent" />
          </div>
        </div>
      </section>

      {/* ===== Services Section ===== */}
      <section className="relative py-24 md:py-32 lg:py-40">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <FadeIn>
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="font-inter text-xs font-semibold uppercase tracking-[0.25em] text-accent-blue">
                  Services
                </p>
                <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
                  3つのサービスで、
                  <br className="sm:hidden" />
                  DXを推進
                </h2>
              </div>
              <Link
                href="/services"
                className="group inline-flex items-center gap-1 text-sm font-medium text-foreground/70 transition-colors hover:text-accent-blue"
              >
                詳しく見る
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="section-divider mt-6" />
          </FadeIn>

          <div className="mt-16 grid gap-6 md:grid-cols-3 lg:gap-8">
            {services.map((service, i) => (
              <FadeIn key={service.number} delay={i * 120}>
                <div className="card-hover group relative h-full rounded-2xl border border-border bg-white p-8">
                  <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${service.color}`}>
                    <service.icon className="h-6 w-6" />
                  </div>
                  <p className="mt-6 font-inter text-xs font-semibold text-accent-blue">
                    {service.number}
                  </p>
                  <h3 className="mt-2 text-xl font-bold tracking-tight">
                    {service.title}
                  </h3>
                  <p className="mt-1 font-inter text-[11px] font-medium text-gray">
                    {service.titleEn}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-gray">
                    {service.description}
                  </p>
                  <div className="mt-6 flex items-center gap-1 text-sm font-medium text-accent-blue opacity-0 transition-opacity group-hover:opacity-100">
                    詳しく見る <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Strengths Section ===== */}
      <section className="relative bg-navy py-24 md:py-32 lg:py-40 text-white overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-5" />
        <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
          <FadeIn>
            <p className="font-inter text-xs font-semibold uppercase tracking-[0.25em] text-accent-blue">
              Why SetaLink
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
              選ばれる3つの理由
            </h2>
            <div className="section-divider mt-6" />
          </FadeIn>

          <div className="mt-16 grid gap-8 md:grid-cols-3 lg:gap-12">
            {strengths.map((strength, i) => (
              <FadeIn key={strength.number} delay={i * 120}>
                <div className="relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent-blue/20 text-accent-blue">
                    <strength.icon className="h-6 w-6" />
                  </div>
                  <span className="absolute right-6 top-6 font-inter text-5xl font-bold text-white/5">
                    {strength.number}
                  </span>
                  <h3 className="mt-6 text-lg font-bold leading-snug tracking-tight">
                    {strength.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">
                    {strength.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Case Studies Section ===== */}
      <section className="py-24 md:py-32 lg:py-40">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <FadeIn>
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="font-inter text-xs font-semibold uppercase tracking-[0.25em] text-accent-blue">
                  Case Studies
                </p>
                <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
                  導入事例
                </h2>
              </div>
              <Link
                href="/cases"
                className="group inline-flex items-center gap-1 text-sm font-medium text-foreground/70 transition-colors hover:text-accent-blue"
              >
                すべての事例を見る
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="section-divider mt-6" />
          </FadeIn>

          <div className="mt-16 grid gap-6 md:grid-cols-3 lg:gap-8">
            {cases.map((c, i) => (
              <FadeIn key={i} delay={i * 120}>
                <Link href="/cases" className="card-hover group block h-full rounded-2xl border border-border bg-white overflow-hidden">
                  {/* Metric header */}
                  <div className="bg-gradient-to-r from-accent-blue to-blue-600 px-8 py-6 text-white">
                    <p className="font-inter text-4xl font-bold">{c.metric}</p>
                    <p className="mt-1 text-sm font-medium text-white/80">{c.metricLabel}</p>
                  </div>
                  <div className="p-8">
                    <span className="inline-flex rounded-full bg-light-blue px-3 py-1 text-xs font-medium text-accent-blue">
                      {c.industry}
                    </span>
                    <h3 className="mt-3 text-base font-bold tracking-tight">
                      {c.company}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-gray">
                      {c.result}
                    </p>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Process Section ===== */}
      <section className="bg-light-blue py-24 md:py-32 lg:py-40">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <FadeIn>
            <div className="text-center">
              <p className="font-inter text-xs font-semibold uppercase tracking-[0.25em] text-accent-blue">
                Process
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
                導入までの流れ
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-gray">
                まずはお気軽にご相談ください。貴社の課題に応じて最適なステップをご提案します。
              </p>
              <div className="mx-auto mt-6 section-divider" />
            </div>
          </FadeIn>

          <div className="mt-16 grid gap-4 sm:grid-cols-2 md:grid-cols-5 lg:gap-6">
            {processSteps.map((step, i) => (
              <FadeIn key={step.step} delay={i * 100}>
                <div className="relative flex h-full flex-col items-center rounded-2xl bg-white p-6 text-center shadow-sm">
                  <div className="number-badge">{step.step}</div>
                  <div className="mt-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-light-blue text-accent-blue">
                    <step.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-3 text-sm font-bold">{step.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-gray">
                    {step.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA Section ===== */}
      <section className="relative py-24 md:py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="relative mx-auto max-w-6xl px-6 text-center lg:px-8">
          <FadeIn>
            <p className="font-inter text-xs font-semibold uppercase tracking-[0.25em] text-white/60">
              Contact
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
              まずはお気軽に
              <br className="md:hidden" />
              ご相談ください
            </h2>
            <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-white/70">
              データ活用・AI導入・業務改善に関するご相談を承っております。
              初回のヒアリングは無料です。
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/contact"
                className="group inline-flex h-14 items-center justify-center gap-2 rounded-full bg-white px-10 text-sm font-bold text-navy transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
              >
                無料相談はこちら
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
