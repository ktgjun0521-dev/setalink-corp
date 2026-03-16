import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import CountUp from "@/components/CountUp";
import {
  Database,
  Bot,
  Settings,
  ArrowRight,
  TrendingUp,
  Users,
  GraduationCap,
  MessageSquare,
  Search,
  Lightbulb,
  Wrench,
  Rocket,
  Sparkles,
  BarChart3,
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
    accent: "from-accent-blue to-blue-600",
  },
  {
    icon: Bot,
    number: "02",
    title: "AI導入支援",
    titleEn: "AI Implementation",
    description:
      "Gemini・ChatGPT等の生成AIを業務フローに最適化。AI伴走型の支援プログラムで、現場に定着するAI活用を実現します。",
    color: "bg-emerald-50 text-emerald-600",
    accent: "from-emerald-500 to-emerald-600",
  },
  {
    icon: Settings,
    number: "03",
    title: "業務改善 BPR",
    titleEn: "Business Process Re-engineering",
    description:
      "業務プロセスの可視化・ボトルネック特定・最適化。ツール導入だけでなく、現場の人に寄り添った改善を実行します。",
    color: "bg-amber-50 text-amber-600",
    accent: "from-amber-500 to-orange-500",
  },
];

const packageServices = [
  {
    icon: Sparkles,
    name: "今すぐAI",
    tagline: "中小企業のための実践型AI活用・定着支援",
    href: "/services/imasugu-ai",
    color: "bg-emerald-50 text-emerald-600",
    borderColor: "hover:border-emerald-300",
    tagColor: "text-emerald-600",
  },
  {
    icon: BarChart3,
    name: "今すぐインサイト",
    tagline: "データを事業を動かす戦略に変える",
    href: "/services/imasugu-insight",
    color: "bg-blue-50 text-accent-blue",
    borderColor: "hover:border-accent-blue/50",
    tagColor: "text-accent-blue",
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
      "エンジニアリングから運用設計まで一気通貫で対応。ミーティングだけのコンサルではなく、手を動かして現場業務を理解した支援を提供します。",
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
    category: "データ活用",
    company: "全国展開フィットネスクラブ A社",
    result: "店舗別・キャスト別の売上を可視化。約330時間/月の業務削減に成功",
    metric: 330,
    metricSuffix: "h",
    metricLabel: "月間業務削減",
    image: "/images/case-fitness.jpg",
  },
  {
    industry: "サービス業",
    category: "AI活用",
    company: "経営層・PR部門向け D社",
    result: "Gemini × Google連携でPR文案作成40%削減、情報検索60%削減を実現",
    metric: 60,
    metricSuffix: "%",
    metricLabel: "業務時間削減",
    image: "/images/case-service.jpg",
  },
  {
    industry: "公益法人",
    category: "AI活用",
    company: "公益財団法人 E団体",
    result: "区民向け生成AIチャットボット導入で問い合わせ対応を24時間化",
    metric: 24,
    metricSuffix: "h",
    metricLabel: "対応可能時間",
    image: "/images/case-gov.jpg",
  },
];

const processSteps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "ヒアリング",
    description: "現状の業務フローや課題感をお伺いし、やりたいことを明確化します",
  },
  {
    icon: Search,
    step: "02",
    title: "課題抽出・整理",
    description: "業務のボトルネックや改善ポイントを特定し、優先順位を整理します",
  },
  {
    icon: Lightbulb,
    step: "03",
    title: "ご提案",
    description: "課題に対する具体的な解決策・スケジュール・費用感をご提示します",
  },
  {
    icon: Wrench,
    step: "04",
    title: "実装・構築",
    description: "データ基盤やAI環境の構築、業務フローの改善を実行します",
  },
  {
    icon: Rocket,
    step: "05",
    title: "定着・伴走支援",
    description: "現場への定着をサポートし、継続的な改善提案で成果を最大化します",
  },
];

export default function Home() {
  return (
    <>
      {/* ===== Hero Section ===== */}
      <section className="relative flex min-h-screen items-center overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bg.jpg"
            alt=""
            fill
            className="object-cover scale-105"
            quality={80}
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0F1B4C]/95 via-[#0F1B4C]/85 to-[#2D5BFF]/60" />
        </div>

        {/* Decorative floating shapes */}
        <div className="floating-shape bg-accent-blue h-64 w-64 top-20 right-[15%]" style={{ animationDelay: "0s" }} />
        <div className="floating-shape bg-accent-lime h-40 w-40 bottom-32 right-[10%]" style={{ animationDelay: "2s" }} />
        <div className="floating-shape bg-cyan-400 h-24 w-24 top-[40%] right-[5%]" style={{ animationDelay: "4s" }} />

        <div className="relative mx-auto max-w-6xl px-6 py-32 lg:px-8 lg:py-40">
          <div className="max-w-3xl">
            <div className="fade-in-up">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-4 py-1.5">
                <span className="h-2 w-2 rounded-full bg-accent-lime animate-pulse" />
                <span className="font-inter text-xs font-medium text-white/90">
                  DX / AX / Data Consulting
                </span>
              </div>
            </div>

            <div className="fade-in-up" style={{ animationDelay: "150ms", animationFillMode: "both" }}>
              <h1 className="mt-8 text-4xl font-bold leading-[1.12] tracking-tight text-white md:text-5xl lg:text-6xl">
                人々が
                <span className="bg-gradient-to-r from-accent-lime to-emerald-300 bg-clip-text text-transparent">本気ではたらく</span>
                <br />
                社会を共に創る。
              </h1>
            </div>

            <div className="fade-in-up" style={{ animationDelay: "300ms", animationFillMode: "both" }}>
              <p className="mt-8 max-w-xl text-base leading-[1.8] text-white/70 md:text-lg">
                データ基盤構築とAI活用の&quot;現場伴走&quot;を強みとする
                ITコンサルティング会社。再現性ある技術を、個人と組織になじませます。
              </p>
            </div>

            <div className="fade-in-up" style={{ animationDelay: "450ms", animationFillMode: "both" }}>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="btn-shimmer group inline-flex h-14 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent-blue to-blue-600 px-8 text-sm font-medium text-white transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-accent-blue/30 active:scale-[0.98]"
                >
                  無料相談はこちら
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/services"
                  className="gradient-border-hover inline-flex h-14 items-center justify-center rounded-full border border-white/20 px-8 text-sm font-medium text-white transition-all duration-300 hover:border-transparent hover:scale-[1.03] hover:bg-white/5 active:scale-[0.98]"
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
            <span className="font-inter text-[10px] uppercase tracking-widest text-white/50">Scroll</span>
            <div className="h-8 w-px bg-gradient-to-b from-white/40 to-transparent" />
          </div>
        </div>
      </section>

      {/* ===== Services Section ===== */}
      <section className="relative section-depth py-24 md:py-32 lg:py-40">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <FadeIn>
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="font-inter text-xs font-semibold uppercase tracking-[0.25em] text-accent-blue">
                  Services
                </p>
                <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
                  3つの専門領域で、DXを推進
                </h2>
              </div>
              <Link
                href="/services"
                className="group inline-flex items-center gap-1 text-sm font-medium text-foreground/70 transition-colors hover:text-accent-blue"
              >
                詳しく見る
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="section-divider mt-6" />
          </FadeIn>

          <div className="mt-16 grid gap-6 md:grid-cols-3 lg:gap-8">
            {services.map((service, i) => (
              <FadeIn key={service.number} delay={i * 120}>
                <Link href="/services" className="card-hover group relative flex h-full flex-col rounded-2xl border border-border bg-white p-8">
                  <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${service.color} transition-transform duration-300`}>
                    <service.icon className="h-6 w-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" />
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
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-gray">
                    {service.description}
                  </p>
                  <div className="mt-6 flex items-center gap-1 text-sm font-medium text-accent-blue opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1">
                    詳しく見る <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>

          {/* Package Services */}
          <FadeIn delay={400}>
            <div className="mt-20">
              <p className="font-inter text-xs font-semibold uppercase tracking-[0.25em] text-accent-blue">
                Package Plans
              </p>
              <h3 className="mt-2 text-2xl font-bold tracking-tight">
                パッケージサービス
              </h3>
              <div className="section-divider mt-4" />

              <div className="mt-8 grid gap-6 md:grid-cols-2">
                {packageServices.map((pkg) => (
                  <Link
                    key={pkg.name}
                    href={pkg.href}
                    className={`card-hover group flex items-center gap-5 rounded-2xl border border-border bg-white p-6 md:p-8 ${pkg.borderColor}`}
                  >
                    <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${pkg.color}`}>
                      <pkg.icon className="h-7 w-7 transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold tracking-tight">{pkg.name}</h4>
                      <p className={`mt-1 text-sm font-medium ${pkg.tagColor}`}>{pkg.tagline}</p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-gray opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1" />
                  </Link>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ===== Strengths Section ===== */}
      <section className="relative bg-navy py-24 md:py-32 lg:py-40 text-white overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-[0.04]" />
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
                <div className="strength-card group relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-500 hover:bg-white/10 hover:border-white/20">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent-blue/20 text-accent-blue transition-transform duration-500 group-hover:scale-110">
                    <strength.icon className="h-6 w-6" style={{ animation: `float 3s ease-in-out ${i * 0.7}s infinite` }} />
                  </div>
                  <span className="absolute right-6 top-6 font-inter text-5xl font-bold text-white/[0.04]">
                    {strength.number}
                  </span>
                  <h3 className="mt-6 text-lg font-bold leading-snug tracking-tight">
                    {strength.title}
                  </h3>
                  <p className="mt-3 text-sm leading-[1.8] text-white/60">
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
                  支援事例
                </h2>
              </div>
              <Link
                href="/cases"
                className="group inline-flex items-center gap-1 text-sm font-medium text-foreground/70 transition-colors hover:text-accent-blue"
              >
                すべての事例を見る
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="section-divider mt-6" />
          </FadeIn>

          <div className="mt-16 grid gap-6 md:grid-cols-3 lg:gap-8">
            {cases.map((c, i) => (
              <FadeIn key={i} delay={i * 120}>
                <Link href="/cases" className="card-hover group flex h-full flex-col rounded-2xl border border-border bg-white overflow-hidden">
                  {/* Image + Metric header */}
                  <div className="relative h-44 overflow-hidden">
                    <Image src={c.image} alt="" fill className="object-cover transition-transform duration-500 group-hover:scale-105" quality={70} sizes="(max-width: 768px) 100vw, 384px" />
                    <div className={`absolute inset-0 ${c.category === "AI活用" ? "bg-gradient-to-t from-emerald-900/80 to-emerald-800/20" : "bg-gradient-to-t from-[#0F1B4C]/80 to-accent-blue/20"}`} />
                    <div className="absolute bottom-0 left-0 px-8 py-5 text-white">
                      <p className="font-inter text-4xl font-bold">
                        <CountUp target={c.metric} suffix={c.metricSuffix} />
                      </p>
                      <p className="mt-1 text-sm font-medium text-white/80">{c.metricLabel}</p>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-8">
                    <div className="flex flex-wrap gap-2">
                      <span className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${c.category === "AI活用" ? "bg-emerald-50 text-emerald-600" : "bg-light-blue text-accent-blue"}`}>
                        {c.category}
                      </span>
                      <span className="inline-flex rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray">
                        {c.industry}
                      </span>
                    </div>
                    <h3 className="mt-3 text-base font-bold tracking-tight">
                      {c.company}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-gray">
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
      <section className="section-depth py-24 md:py-32 lg:py-40">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <FadeIn>
            <div className="text-center">
              <p className="font-inter text-xs font-semibold uppercase tracking-[0.25em] text-accent-blue">
                Process
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
                支援までの流れ
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-gray">
                まずはお気軽にご相談ください。データ・AIどちらの支援でも、貴社の課題に応じて最適なステップをご提案します。
              </p>
              <div className="mx-auto mt-6 section-divider" />
            </div>
          </FadeIn>

          <div className="mt-16 grid gap-4 sm:grid-cols-2 md:grid-cols-5 lg:gap-6">
            {processSteps.map((step, i) => (
              <FadeIn key={step.step} delay={i * 100}>
                <div className={`relative flex h-full flex-col items-center rounded-2xl border border-border bg-white p-6 text-center ${i < processSteps.length - 1 ? "process-connector" : ""}`}>
                  <div className="number-badge">{step.step}</div>
                  <div className="mt-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-light-blue text-accent-blue icon-hover-bounce">
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
        <div className="absolute inset-0">
          <Image
            src="/images/cta-bg.jpg"
            alt=""
            fill
            className="object-cover"
            quality={75}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0F1B4C]/95 via-[#1A1A2E]/90 to-[#2D5BFF]/80" />
        </div>
        <div className="absolute inset-0 grid-pattern opacity-[0.03]" />
        <div className="relative mx-auto max-w-6xl px-6 text-center lg:px-8">
          <FadeIn>
            <p className="font-inter text-xs font-semibold uppercase tracking-[0.25em] text-white/60">
              Contact
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
              まずはお気軽にご相談ください
            </h2>
            <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-white/70">
              データ活用・AI導入・業務改善に関するご相談を承っております。初回のヒアリングは無料です。
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/contact"
                className="btn-shimmer group inline-flex h-14 items-center justify-center gap-2 rounded-full bg-white px-10 text-sm font-bold text-navy transition-all duration-300 hover:scale-[1.03] hover:shadow-xl active:scale-[0.98]"
              >
                無料相談はこちら
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
