import type { Metadata } from "next";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import { MapPin, Globe, Building2, Calendar, User, Briefcase, Banknote, Users, Shield, Zap, BarChart2, Sparkles, Settings } from "lucide-react";

export const metadata: Metadata = {
  title: "会社概要",
  description:
    "SETALINK株式会社の会社情報。データコンサルティング・AI導入支援・業務改善を提供。",
};

const companyInfo = [
  { icon: Building2, label: "会社名", value: "SETALINK株式会社（セタリンク）" },
  { icon: Globe, label: "英語名", value: "SETALINK Inc." },
  { icon: Calendar, label: "設立", value: "2026年4月" },
  { icon: User, label: "代表者", value: "片口 潤哉" },
  { icon: Banknote, label: "資本金", value: "100万円" },
  { icon: MapPin, label: "所在地", value: "〒154-0023 東京都世田谷区世田谷1-15-23" },
  {
    icon: Briefcase,
    label: "事業内容",
    value:
      "データ活用・AI活用によるDX支援及び関連するコンサルティングサービスの提供",
  },
  { icon: Globe, label: "URL", value: "https://setalinkapp.com", isLink: true },
];

export default function CompanyPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute -right-32 -top-32 h-[400px] w-[400px] rounded-full bg-accent-blue/5 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
          <FadeIn>
            <p className="font-inter text-xs font-semibold uppercase tracking-[0.25em] text-accent-blue">
              Company
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              会社概要
            </h1>
            <div className="section-divider mt-8" />
          </FadeIn>
        </div>
      </section>

      {/* Golden Circle / Philosophy */}
      <section className="relative bg-navy py-20 md:py-28 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/company-bg.jpg" alt="" fill className="object-cover" quality={60} sizes="100vw" />
          <div className="absolute inset-0 bg-navy/90" />
        </div>
        <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
          <FadeIn>
            <div className="text-center">
              <p className="font-inter text-xs font-semibold uppercase tracking-[0.25em] text-accent-blue">
                Philosophy
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
                セタリンクの考え方
              </h2>
              <div className="mx-auto mt-6 section-divider" />
            </div>
          </FadeIn>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <FadeIn delay={0}>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-500 text-white font-inter font-bold text-lg transition-all duration-500 hover:scale-110 hover:shadow-lg hover:shadow-orange-500/30">
                  WHY
                </div>
                <h3 className="mt-6 text-lg font-bold">存在意義</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  人々が本気ではたらく社会を共に創る
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={120}>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-orange-400 text-orange-400 font-inter font-bold text-lg transition-all duration-500 hover:scale-110 hover:shadow-lg hover:shadow-orange-400/20">
                  HOW
                </div>
                <h3 className="mt-6 text-lg font-bold">アプローチ</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  再現性ある技術を個人と組織になじませる
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={240}>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-orange-300 text-orange-300 font-inter font-bold text-lg transition-all duration-500 hover:scale-110 hover:shadow-lg hover:shadow-orange-300/20">
                  WHAT
                </div>
                <h3 className="mt-6 text-lg font-bold">提供価値</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  データドリブン経営支援・AI導入支援
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Team Structure */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          {/* Header */}
          <FadeIn>
            <div className="text-center">
              <p className="font-inter text-xs font-semibold uppercase tracking-[0.25em] text-accent-blue">
                Our Team
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
                支援体制
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray sm:text-base">
                セタリンクは、大手企業・メガベンチャーで活躍する現役スペシャリストと連携。
                各領域のプロフェッショナルがプロジェクトごとに最適なチームを組み、
                現場ベースの最適解を提供します。
              </p>
              <div className="mx-auto mt-6 section-divider" />
            </div>
          </FadeIn>

          {/* 体制図 */}
          <FadeIn delay={100}>
            <div className="mt-14">
              {/* SETALINK Hub */}
              <div className="flex justify-center">
                <div className="w-full max-w-sm rounded-2xl bg-navy px-8 py-6 text-center text-white shadow-lg shadow-navy/20">
                  <p className="font-inter text-[10px] font-semibold uppercase tracking-[0.2em] text-accent-blue">
                    SETALINK
                  </p>
                  <p className="mt-1 text-lg font-bold sm:text-xl">窓口・統括・品質管理</p>
                  <p className="mt-2 text-xs leading-relaxed text-white/60">
                    プロジェクト全体のマネジメントと成果へのコミットメント
                  </p>
                  <div className="mt-4 flex flex-wrap justify-center gap-2">
                    <span className="rounded-full bg-white/10 px-3 py-1 text-[10px] text-white/80">PM</span>
                    <span className="rounded-full bg-white/10 px-3 py-1 text-[10px] text-white/80">品質管理</span>
                    <span className="rounded-full bg-white/10 px-3 py-1 text-[10px] text-white/80">クライアント窓口</span>
                  </div>
                </div>
              </div>

              {/* Connector: mobile */}
              <div className="flex justify-center md:hidden">
                <div className="h-8 w-px bg-border" />
              </div>

              {/* Connector: desktop tree */}
              <div className="relative hidden h-16 md:block">
                <div className="absolute left-1/2 top-0 h-8 w-px -translate-x-1/2 bg-border" />
                <div className="absolute left-[16%] right-[16%] top-8 h-px bg-border" />
                <div className="absolute left-[16%] top-8 h-8 w-px bg-border" />
                <div className="absolute left-1/2 top-8 h-8 w-px -translate-x-1/2 bg-border" />
                <div className="absolute right-[16%] top-8 h-8 w-px bg-border" />
              </div>

              {/* Specialist Cards */}
              <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
                {/* Data */}
                <div className="rounded-2xl border border-border bg-white p-6 text-center shadow-sm">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
                    <BarChart2 className="h-6 w-6 text-accent-blue" />
                  </div>
                  <p className="mt-3 text-[10px] font-medium uppercase tracking-wide text-gray">Specialist</p>
                  <h3 className="mt-1 text-base font-bold">データ領域</h3>
                  <p className="mt-2 text-xs leading-relaxed text-gray">
                    データ基盤構築・BIツール・分析設計の現役プレイヤー
                  </p>
                  <div className="mt-3 flex flex-wrap justify-center gap-1">
                    <span className="rounded-full bg-blue-50 px-2 py-0.5 text-[10px] text-accent-blue">データ基盤</span>
                    <span className="rounded-full bg-blue-50 px-2 py-0.5 text-[10px] text-accent-blue">BI/可視化</span>
                    <span className="rounded-full bg-blue-50 px-2 py-0.5 text-[10px] text-accent-blue">分析設計</span>
                  </div>
                </div>

                {/* AI */}
                <div className="rounded-2xl border border-border bg-white p-6 text-center shadow-sm">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-violet-50">
                    <Sparkles className="h-6 w-6 text-violet-500" />
                  </div>
                  <p className="mt-3 text-[10px] font-medium uppercase tracking-wide text-gray">Specialist</p>
                  <h3 className="mt-1 text-base font-bold">AI領域</h3>
                  <p className="mt-2 text-xs leading-relaxed text-gray">
                    生成AI・機械学習・AI導入設計の現役プレイヤー
                  </p>
                  <div className="mt-3 flex flex-wrap justify-center gap-1">
                    <span className="rounded-full bg-violet-50 px-2 py-0.5 text-[10px] text-violet-600">生成AI</span>
                    <span className="rounded-full bg-violet-50 px-2 py-0.5 text-[10px] text-violet-600">機械学習</span>
                    <span className="rounded-full bg-violet-50 px-2 py-0.5 text-[10px] text-violet-600">AI実装</span>
                  </div>
                </div>

                {/* BPR */}
                <div className="rounded-2xl border border-border bg-white p-6 text-center shadow-sm">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50">
                    <Settings className="h-6 w-6 text-emerald-600" />
                  </div>
                  <p className="mt-3 text-[10px] font-medium uppercase tracking-wide text-gray">Specialist</p>
                  <h3 className="mt-1 text-base font-bold">BPR領域</h3>
                  <p className="mt-2 text-xs leading-relaxed text-gray">
                    業務改善・プロセス設計・組織変革の現役プレイヤー
                  </p>
                  <div className="mt-3 flex flex-wrap justify-center gap-1">
                    <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] text-emerald-600">業務改善</span>
                    <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] text-emerald-600">プロセス設計</span>
                    <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] text-emerald-600">組織変革</span>
                  </div>
                </div>
              </div>

              {/* Bottom note */}
              <p className="mt-6 text-center text-xs text-gray">
                <span className="font-medium text-foreground">大手企業・メガベンチャーの現役スペシャリスト</span>が参画。
                最前線の知見を、プロジェクトに直接活かします。
              </p>
            </div>
          </FadeIn>

          {/* Feature Cards */}
          <div className="mt-14 grid gap-4 sm:grid-cols-3 sm:gap-6">
            <FadeIn delay={0}>
              <div className="flex gap-4 rounded-xl border border-border bg-white p-5">
                <div className="mt-0.5 flex-shrink-0">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50">
                    <Users className="h-4 w-4 text-accent-blue" />
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-bold">現役プレイヤーによる支援</h3>
                  <p className="mt-1 text-xs leading-relaxed text-gray">
                    実務を継続している現役のスペシャリストが参画。今の現場感覚に基づいた実践的な支援を提供します。
                  </p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={100}>
              <div className="flex gap-4 rounded-xl border border-border bg-white p-5">
                <div className="mt-0.5 flex-shrink-0">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50">
                    <Zap className="h-4 w-4 text-emerald-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-bold">課題に合わせた最適編成</h3>
                  <p className="mt-1 text-xs leading-relaxed text-gray">
                    各領域のスペシャリストを適材適所にアサイン。専門性の高い支援体制を実現します。
                  </p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={200}>
              <div className="flex gap-4 rounded-xl border border-border bg-white p-5">
                <div className="mt-0.5 flex-shrink-0">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-50">
                    <Shield className="h-4 w-4 text-amber-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-bold">セタリンクが一貫して統括</h3>
                  <p className="mt-1 text-xs leading-relaxed text-gray">
                    窓口・品質管理・PMはセタリンクが担当。成果にコミットします。
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Company Info Table */}
      <section className="py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <FadeIn>
            <div className="text-center">
              <p className="font-inter text-xs font-semibold uppercase tracking-[0.25em] text-accent-blue">
                Corporate Information
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
                会社情報
              </h2>
              <div className="mx-auto mt-6 section-divider" />
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="mx-auto mt-12 max-w-3xl">
              <dl className="divide-y divide-border rounded-2xl border border-border bg-background overflow-hidden">
                {companyInfo.map((item) => (
                  <div
                    key={item.label}
                    className="row-highlight grid grid-cols-1 gap-1 px-6 py-5 sm:grid-cols-3 sm:gap-4 sm:py-6"
                  >
                    <dt className="flex items-center gap-2 text-sm font-medium text-gray">
                      <item.icon className="h-4 w-4 text-accent-blue" />
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
        </div>
      </section>
    </>
  );
}
