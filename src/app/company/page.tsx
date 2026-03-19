import type { Metadata } from "next";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import { MapPin, Globe, Building2, Calendar, User, Briefcase, Banknote, Users, Shield, Zap } from "lucide-react";

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
          <FadeIn>
            <div className="text-center">
              <p className="font-inter text-xs font-semibold uppercase tracking-[0.25em] text-accent-blue">
                Our Team
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
                支援体制
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray sm:text-base">
                セタリンクは、大手企業・メガベンチャーで活躍する現役スペシャリストと連携。各領域のプロフェッショナルがプロジェクトごとに最適なチームを組み、現場ベースの最適解を提供します。
              </p>
              <div className="mx-auto mt-6 section-divider" />
            </div>
          </FadeIn>

          <div className="mt-14 grid gap-6 md:grid-cols-3 lg:gap-8">
            <FadeIn delay={0}>
              <div className="group rounded-2xl border border-border bg-white p-8 text-center transition-all duration-300 hover:border-accent-blue/20 hover:shadow-md">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-accent-blue transition-transform duration-300 group-hover:scale-110">
                  <Users className="h-7 w-7" />
                </div>
                <h3 className="mt-6 text-base font-bold sm:text-lg">現役プレイヤーによる支援</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray">
                  コンサルタントではなく、大手企業やメガベンチャーの最前線で実務を担う現役のスペシャリストが参画。今の現場感覚に基づいた、実践的なアドバイスと実装を提供します。
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={120}>
              <div className="group rounded-2xl border border-border bg-white p-8 text-center transition-all duration-300 hover:border-accent-blue/20 hover:shadow-md">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 transition-transform duration-300 group-hover:scale-110">
                  <Zap className="h-7 w-7" />
                </div>
                <h3 className="mt-6 text-base font-bold sm:text-lg">課題ごとに最適チームを編成</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray">
                  プロジェクトの課題を分解し、データ・AI・業務設計など各領域の得意分野を持つスペシャリストをアサイン。一人の担当者に依存しない、専門性の高い支援体制を実現します。
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={240}>
              <div className="group rounded-2xl border border-border bg-white p-8 text-center transition-all duration-300 hover:border-accent-blue/20 hover:shadow-md">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-50 text-amber-600 transition-transform duration-300 group-hover:scale-110">
                  <Shield className="h-7 w-7" />
                </div>
                <h3 className="mt-6 text-base font-bold sm:text-lg">セタリンクが責任を持って統括</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray">
                  お客様との窓口はセタリンクが一貫して担当。プロジェクト全体のマネジメントと品質管理を行い、スペシャリストの知見を最大限活かしながら、成果にコミットします。
                </p>
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
