import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import {
  ArrowRight,
  Bot,
  Brain,
  Users,
  BookOpen,
  Cog,
  MessageSquare,
  Check,
  Star,
  Sparkles,
  Zap,
  Shield,
} from "lucide-react";

export const metadata: Metadata = {
  title: "今すぐAI｜実践型AI活用・定着支援",
  description:
    "中小企業のための実践型AI活用・定着支援パッケージ「今すぐAI」。Gemini・ChatGPT等の生成AIを御社の業務に合わせて導入・定着。SETALINK株式会社。",
  alternates: {
    canonical: "https://setalinkapp.com/services/imasugu-ai",
  },
};

const features = [
  {
    icon: Brain,
    title: "業務フィットのAI選定",
    description:
      "御社の業務フロー・課題をヒアリングし、最適なAIツール・活用方法をご提案。闇雲な導入ではなく、成果が出るポイントに集中します。",
  },
  {
    icon: Users,
    title: "伴走型の定着支援",
    description:
      "導入して終わりではありません。週次のMTGを通じて、現場スタッフが自走できるまで丁寧に伴走します。",
  },
  {
    icon: BookOpen,
    title: "専用マニュアル・研修",
    description:
      "御社専用の操作マニュアルを作成。実践型の研修で、AI活用スキルを社内に定着させます。",
  },
  {
    icon: Cog,
    title: "業務自動化の実装",
    description:
      "GAS・API連携等を活用し、AIを組み込んだ業務フロー自動化を構築。手作業を減らし、コア業務に集中できる環境を作ります。",
  },
];

const flow = [
  {
    step: "01",
    title: "ヒアリング",
    description: "現状の業務フローや課題を整理し、AI活用のゴールを設定",
  },
  {
    step: "02",
    title: "AI選定・設計",
    description: "業務に最適なAIツール・活用シナリオを設計",
  },
  {
    step: "03",
    title: "導入・構築",
    description: "AI環境のセットアップと業務フローへの組み込み",
  },
  {
    step: "04",
    title: "定着・伴走",
    description: "週次MTGで活用をサポートし、現場への定着を実現",
  },
];

const plans = [
  {
    name: "ライト",
    nameEn: "Light",
    price: "15",
    unit: "万円",
    period: "/月（税別）",
    recommended: false,
    description: "まずはAI活用の第一歩を踏み出したい企業向け",
    features: [
      { text: "オンラインMTG（週1回・60分）", included: true },
      { text: "データ分析・示唆出し", included: true },
      { text: "チャットでのQA対応", included: true },
      { text: "実装伴走MTG", included: false },
      { text: "専用マニュアル作成", included: false },
      { text: "個別開発・実装", included: false },
    ],
  },
  {
    name: "スタンダード",
    nameEn: "Standard",
    price: "30",
    unit: "万円",
    period: "/月（税別）",
    recommended: true,
    description: "実装と定着まで伴走。最も成果が出やすいプラン",
    features: [
      { text: "オンラインMTG（週1回・60分）", included: true },
      { text: "データ分析・示唆出し", included: true },
      { text: "チャットでのQA対応", included: true },
      { text: "実装伴走MTG（月2回・各60分）", included: true },
      { text: "専用マニュアル作成", included: true },
      { text: "個別開発・実装", included: false },
    ],
  },
  {
    name: "プレミアム",
    nameEn: "Premium",
    price: "80",
    unit: "万円〜",
    period: "/月（税別）",
    recommended: false,
    description: "開発・実装を含むフルサポートで、成果にコミット",
    features: [
      { text: "オンラインMTG（週1回・60分）", included: true },
      { text: "データ分析・示唆出し", included: true },
      { text: "チャットでのQA対応", included: true },
      { text: "実装伴走MTG（回数無制限）", included: true },
      { text: "専用マニュアル作成", included: true },
      { text: "個別開発・実装（要件に応じて）", included: true },
    ],
  },
];

export default function ImasuguAiPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/hero-bg.jpg" alt="" fill className="object-cover" quality={80} sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/90 via-[#0F1B4C]/85 to-emerald-800/70" />
        </div>
        <div className="floating-shape bg-emerald-400 h-48 w-48 top-20 right-[15%]" style={{ animationDelay: "0s" }} />
        <div className="floating-shape bg-accent-lime h-32 w-32 bottom-20 right-[10%]" style={{ animationDelay: "2s" }} />

        <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 backdrop-blur-sm px-4 py-1.5">
                <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
                <span className="font-inter text-xs font-medium text-emerald-300">
                  Package Service
                </span>
              </div>
              <h1 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                今すぐAI
              </h1>
              <p className="mt-3 text-base font-medium text-emerald-300 sm:text-lg md:text-xl">
                中小企業のための実践型AI活用・定着支援
              </p>
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/70 sm:mt-6 sm:text-base">
                Gemini・ChatGPT等の生成AIを、御社の業務に合わせて導入・定着させます。
                「AIを入れたい」ではなく「業務が変わった」を目指す、伴走型の支援プログラムです。
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="btn-shimmer group inline-flex h-14 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 px-8 text-sm font-medium text-white transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-emerald-500/30 active:scale-[0.98]"
                >
                  無料相談はこちら
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <a
                  href="#pricing"
                  className="gradient-border-hover inline-flex h-14 items-center justify-center rounded-full border border-white/20 px-8 text-sm font-medium text-white transition-all duration-300 hover:border-transparent hover:bg-white/5 active:scale-[0.98]"
                >
                  料金プランを見る
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <FadeIn>
            <div className="text-center">
              <p className="font-inter text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600">
                Challenges
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
                こんな課題はありませんか？
              </h2>
              <div className="mx-auto mt-6 section-divider" />
            </div>
          </FadeIn>

          <div className="mt-10 grid gap-4 sm:mt-14 sm:gap-6 md:grid-cols-3">
            {[
              { icon: MessageSquare, text: "AIを導入したいが何から始めるべきか分からない" },
              { icon: Shield, text: "ツールを入れても現場で使いこなせない" },
              { icon: Zap, text: "自社に合ったAI活用の方法が見えない" },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-border bg-white p-6 sm:p-8 text-center transition-all duration-300 hover:border-emerald-200 hover:shadow-md">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-400 sm:h-12 sm:w-12">
                    <item.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <p className="mt-3 text-sm font-medium leading-relaxed text-foreground/80 sm:mt-4">
                    {item.text}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <FadeIn>
            <div className="text-center">
              <p className="font-inter text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600">
                What We Offer
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
                支援内容
              </h2>
              <div className="mx-auto mt-6 section-divider" />
            </div>
          </FadeIn>

          <div className="mt-10 grid gap-4 sm:mt-14 sm:gap-6 md:grid-cols-2 lg:gap-8">
            {features.map((feature, i) => (
              <FadeIn key={feature.title} delay={i * 100}>
                <div className="group flex gap-4 rounded-2xl border border-border bg-white p-6 sm:gap-5 sm:p-8 transition-all duration-300 hover:border-emerald-200 hover:shadow-md hover:-translate-y-1">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 sm:h-12 sm:w-12">
                    <feature.icon className="h-5 w-5 sm:h-6 sm:w-6 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-base font-bold sm:text-lg">{feature.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Flow */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <FadeIn>
            <div className="text-center">
              <p className="font-inter text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600">
                Process
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
                導入の流れ
              </h2>
              <div className="mx-auto mt-6 section-divider" />
            </div>
          </FadeIn>

          <div className="mt-10 grid gap-4 grid-cols-2 sm:mt-14 md:grid-cols-4 lg:gap-6">
            {flow.map((step, i) => (
              <FadeIn key={step.step} delay={i * 100}>
                <div className={`relative flex h-full flex-col items-center rounded-2xl border border-border bg-white p-6 text-center ${i < flow.length - 1 ? "process-connector" : ""}`}>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 font-inter text-sm font-bold text-white">
                    {step.step}
                  </div>
                  <h3 className="mt-4 text-sm font-bold">{step.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-gray">
                    {step.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="relative py-24 md:py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/hero-bg.jpg" alt="" fill className="object-cover" quality={60} sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0F1B4C]/95 via-[#0F1B4C]/90 to-emerald-900/70" />
        </div>
        <div className="absolute inset-0 grid-pattern opacity-[0.03]" />

        <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
          <FadeIn>
            <div className="text-center">
              <p className="font-inter text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400">
                Pricing
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-white md:text-4xl">
                料金プラン
              </h2>
              <div className="mx-auto mt-6 section-divider" />
            </div>
          </FadeIn>

          <div className="mt-12 grid gap-6 sm:mt-16 md:grid-cols-3 lg:gap-8">
            {plans.map((plan, i) => (
              <FadeIn key={plan.name} delay={i * 120}>
                <div
                  className={`relative flex h-full flex-col rounded-2xl p-6 sm:p-8 transition-all duration-500 ${
                    plan.recommended
                      ? "border-2 border-emerald-400 bg-white shadow-2xl shadow-emerald-500/20 z-10"
                      : "border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/20"
                  }`}
                >
                  {plan.recommended && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <div className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 px-5 py-1.5 text-xs font-bold text-white shadow-lg shadow-emerald-500/30">
                        <Star className="h-3.5 w-3.5 fill-current" />
                        おすすめ
                      </div>
                    </div>
                  )}

                  <div className="text-center">
                    <p className={`font-inter text-xs font-semibold uppercase tracking-wider ${plan.recommended ? "text-emerald-600" : "text-white/50"}`}>
                      {plan.nameEn}
                    </p>
                    <h3 className={`mt-1 text-xl font-bold ${plan.recommended ? "text-foreground" : "text-white"}`}>
                      {plan.name}
                    </h3>
                  </div>

                  <div className="mt-6 text-center">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className={`font-inter text-4xl font-bold tracking-tight sm:text-5xl ${plan.recommended ? "text-foreground" : "text-white"}`}>
                        {plan.price}
                      </span>
                      <span className={`text-base font-bold sm:text-lg ${plan.recommended ? "text-foreground" : "text-white"}`}>
                        {plan.unit}
                      </span>
                    </div>
                    <p className={`mt-1 text-xs ${plan.recommended ? "text-gray" : "text-white/40"}`}>
                      {plan.period}
                    </p>
                  </div>

                  <p className={`mt-6 text-center text-sm leading-relaxed ${plan.recommended ? "text-foreground/70" : "text-white/50"}`}>
                    {plan.description}
                  </p>

                  <div className={`my-6 h-px ${plan.recommended ? "bg-border" : "bg-white/10"}`} />

                  <ul className="flex-1 space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature.text} className="flex items-start gap-3">
                        {feature.included ? (
                          <Check className={`mt-0.5 h-4 w-4 shrink-0 ${plan.recommended ? "text-emerald-600" : "text-accent-lime"}`} />
                        ) : (
                          <span className={`mt-0.5 inline-block h-4 w-4 shrink-0 text-center text-xs ${plan.recommended ? "text-foreground/20" : "text-white/20"}`}>
                            —
                          </span>
                        )}
                        <span className={`text-sm ${
                          feature.included
                            ? plan.recommended ? "text-foreground/80" : "text-white/80"
                            : plan.recommended ? "text-foreground/30" : "text-white/25"
                        }`}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <Link
                      href="/contact"
                      className={`group flex h-12 w-full items-center justify-center gap-2 rounded-full text-sm font-medium transition-all duration-300 active:scale-[0.98] ${
                        plan.recommended
                          ? "btn-shimmer bg-gradient-to-r from-emerald-500 to-emerald-600 text-white hover:scale-[1.03] hover:shadow-xl hover:shadow-emerald-500/30"
                          : "border border-white/20 text-white hover:bg-white/10 hover:border-white/30"
                      }`}
                    >
                      {plan.recommended ? "このプランで相談する" : "お問い合わせ"}
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={400}>
            <p className="mt-12 text-center text-xs leading-relaxed text-white/40">
              ※ 最低契約期間は3ヶ月〜となります。プロジェクトの規模・内容に応じて柔軟に対応いたします。
              <br />
              ※ 料金はすべて税別表記です。まずはお気軽にご相談ください。
            </p>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
                AI活用、まずは相談から
              </h2>
              <p className="mt-6 text-sm leading-relaxed text-gray">
                初回のヒアリングは無料です。御社の課題をお伺いしたうえで、最適なプランをご提案いたします。
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="btn-shimmer group inline-flex h-14 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 px-10 text-sm font-medium text-white transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-emerald-500/30 active:scale-[0.98]"
                >
                  無料相談はこちら
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
