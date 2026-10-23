import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";
import { SectionTitle, PageHero, CtaPanel } from "@/components/Section";
import { TalkIllustration } from "@/components/Illustrations";
import { beliefs } from "@/lib/company";
import {
  MapPin,
  Globe,
  Building2,
  Calendar,
  User,
  Briefcase,
  Banknote,
  Users,
  Shield,
  Zap,
  Database,
  Bot,
  Workflow,
} from "lucide-react";

export const metadata: Metadata = {
  title: "会社概要",
  description:
    "株式会社セタリンクの会社情報。データコンサルティングを中心に、AI導入支援・業務改善（BPR）で企業の改善活動を支えます。",
  alternates: {
    canonical: "https://setalinkapp.com/company",
  },
};

const businesses = [
  {
    icon: Database,
    name: "データコンサルティング",
    body: "見るべき指標の設計、散らばったデータの整理、BIでいつでも見られる状態づくり、数字を見ながらの改善の伴走まで。",
    color: "bg-sky text-accent-blue",
    main: true,
  },
  {
    icon: Bot,
    name: "AI導入支援",
    body: "生成AIを業務の流れに組み込み、手作業の時間を減らします。現場で使い続けられるところまで伴走します。",
    color: "bg-mint text-emerald-700",
  },
  {
    icon: Workflow,
    name: "業務改善（BPR）",
    body: "業務の流れを見える形にしてボトルネックを特定し、自動化も含めて続けられる仕組みにします。",
    color: "bg-peach text-orange-700",
  },
];

const specialists = [
  { name: "データ領域", body: "データ基盤づくり・BIツール・分析設計の現役プレイヤー", tags: ["データ基盤", "BI", "分析設計"], color: "bg-sky text-accent-blue" },
  { name: "AI領域", body: "生成AI・機械学習・AI導入設計の現役プレイヤー", tags: ["生成AI", "機械学習", "AI実装"], color: "bg-mint text-emerald-700" },
  { name: "業務改善領域", body: "業務改善・プロセス設計・組織づくりの現役プレイヤー", tags: ["業務改善", "プロセス設計", "組織づくり"], color: "bg-peach text-orange-700" },
];

const features = [
  { icon: Users, title: "現役のプレイヤーが支援", body: "いまも実務を続けているスペシャリストが参画。現場感覚に基づいた、実践的な支援を行います。" },
  { icon: Zap, title: "課題に合わせたチーム編成", body: "各領域のスペシャリストを、課題に合わせて組み合わせます。" },
  { icon: Shield, title: "窓口はセタリンクが一貫して担当", body: "窓口・品質管理・プロジェクト管理はセタリンクが担当し、成果まで責任を持ちます。" },
];

const companyInfo = [
  { icon: Building2, label: "会社名", value: "株式会社セタリンク" },
  { icon: Globe, label: "英語名", value: "SETALINK Inc." },
  { icon: Calendar, label: "設立", value: "2026年4月" },
  { icon: User, label: "代表者", value: "片口 潤哉" },
  { icon: Banknote, label: "資本金", value: "100万円" },
  { icon: MapPin, label: "所在地", value: "〒154-0023 東京都世田谷区世田谷1-15-23" },
  {
    icon: Briefcase,
    label: "事業内容",
    value: "データコンサルティング（KPI設計・データ整備・BI構築・改善の伴走）を中心に、AI導入支援・業務改善（BPR）を提供",
  },
  { icon: Globe, label: "URL", value: "https://setalinkapp.com", isLink: true },
];

export default function CompanyPage() {
  return (
    <>
      <PageHero
        label="Company"
        title="会社概要"
        lead="株式会社セタリンクは、データコンサルティングを中心に、企業の改善活動をより効果的にする会社です。"
        illustration={<TalkIllustration className="w-[340px]" />}
      />

      {/* ===== 想い ===== */}
      <section id="belief" className="scroll-mt-20 bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionTitle
              label="Our belief"
              center
              lead="最後は、お客様が自分たちで改善を回せる状態をゴールにしています。"
            >
              人々が本気ではたらく社会を、
              <br />
              共に創る。
            </SectionTitle>
          </FadeIn>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {beliefs.map((b, i) => (
              <FadeIn key={b.label} delay={i * 100}>
                <div className="h-full border border-ink bg-paper p-7">
                  <span className="inline-flex bg-foreground px-3 py-1 font-inter text-xs font-bold tracking-widest text-accent-lime">
                    {b.label}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold leading-snug">{b.title}</h3>
                  <p className="mt-3 text-sm leading-[1.85] text-gray">{b.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 事業内容 ===== */}
      <section id="business" className="scroll-mt-20 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionTitle label="Business" lead="中心はデータコンサルティング。課題に合わせて、AI導入支援と業務改善を組み合わせます。">
              事業内容
            </SectionTitle>
          </FadeIn>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {businesses.map((b, i) => (
              <FadeIn key={b.name} delay={i * 100}>
                <div className={`relative h-full border border-ink bg-paper p-7 ${b.main ? "border-2 border-ink" : "border border-ink"}`}>
                  {b.main && (
                    <span className="absolute -top-3 right-6 whitespace-nowrap bg-foreground px-3 py-1 text-[11px] font-bold text-accent-lime">
                      メインの支援
                    </span>
                  )}
                  <span className={`flex h-12 w-12 items-center justify-center rounded-2xl ${b.color}`}>
                    <b.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold">{b.name}</h3>
                  <p className="mt-3 text-sm leading-[1.85] text-gray">{b.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 支援体制 ===== */}
      <section id="team" className="scroll-mt-20 bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionTitle
              label="Our team"
              center
              lead="大手企業・メガベンチャーで活躍する現役のスペシャリストと連携し、課題ごとに最適なチームを組んでご支援します。"
            >
              支援体制
            </SectionTitle>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="mt-12">
              <div className="flex justify-center">
                <div className="w-full max-w-sm rounded-3xl border-2 border-ink bg-paper px-8 py-6 text-center">
                  <p className="font-display text-sm font-bold text-accent-blue">セタリンク</p>
                  <p className="mt-1 font-display text-xl font-bold">窓口・統括・品質管理</p>
                  <p className="mt-2 text-xs leading-relaxed text-gray">プロジェクト全体の管理と、成果への責任</p>
                </div>
              </div>

              {/* つなぎ線 */}
              <div className="flex justify-center md:hidden">
                <div className="h-8 w-0.5 bg-foreground/20" />
              </div>
              <div className="relative hidden h-14 md:block">
                <div className="absolute left-1/2 top-0 h-7 w-0.5 -translate-x-1/2 bg-foreground/20" />
                <div className="absolute left-[16.5%] right-[16.5%] top-7 h-0.5 bg-foreground/20" />
                <div className="absolute left-[16.5%] top-7 h-7 w-0.5 bg-foreground/20" />
                <div className="absolute left-1/2 top-7 h-7 w-0.5 -translate-x-1/2 bg-foreground/20" />
                <div className="absolute right-[16.5%] top-7 h-7 w-0.5 bg-foreground/20" />
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                {specialists.map((sp) => (
                  <div key={sp.name} className="border border-ink bg-paper p-6 text-center">
                    <p className="font-inter text-[11px] font-bold uppercase tracking-widest text-gray">Specialist</p>
                    <h3 className="mt-1 font-display text-lg font-bold">{sp.name}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-gray">{sp.body}</p>
                    <div className="mt-3 flex flex-wrap justify-center gap-1.5">
                      {sp.tags.map((t) => (
                        <span key={t} className={`px-2.5 py-0.5 text-[11px] font-bold ${sp.color}`}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {features.map((f, i) => (
              <FadeIn key={f.title} delay={i * 100}>
                <div className="flex h-full gap-4 border border-ink bg-paper p-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-lime-soft">
                    <f.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-sm font-bold">{f.title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-gray">{f.body}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 会社情報 ===== */}
      <section id="info" className="scroll-mt-20 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionTitle label="Corporate information" center>
              会社情報
            </SectionTitle>
          </FadeIn>
          <FadeIn delay={100}>
            <dl className="mx-auto mt-10 max-w-3xl divide-y divide-border overflow-hidden rounded-3xl border border-ink bg-paper">
              {companyInfo.map((item) => (
                <div key={item.label} className="grid grid-cols-1 gap-1 px-6 py-5 sm:grid-cols-3 sm:gap-4">
                  <dt className="flex items-center gap-2 text-sm font-bold text-gray">
                    <item.icon className="h-4 w-4 text-accent-blue" />
                    {item.label}
                  </dt>
                  <dd className="text-sm leading-relaxed sm:col-span-2">
                    {item.isLink ? (
                      <a
                        href={item.value}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-inter text-accent-blue underline-offset-4 hover:underline"
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
          </FadeIn>
        </div>
      </section>

      <CtaPanel />
    </>
  );
}
