import type { Metadata } from "next";
import Link from "next/link";
import dynamic from "next/dynamic";
import FadeIn from "@/components/FadeIn";
import ClickTracker from "@/components/concept/ClickTracker";
import { StageVisual } from "@/components/concept/DataStages";
import { topFaqs } from "@/lib/faq";
import {
  ArrowRight,
  Check,
  Database,
  Bot,
  Workflow,
  HelpCircle,
  Layers,
  Gauge,
  PauseCircle,
  Plus,
} from "lucide-react";

// 検討用のコンセプト案（3D・データの世界観）。本番のトップとは別ページ。検索エンジンには載せない
export const metadata: Metadata = {
  title: "コンセプト案（検討用）",
  robots: { index: false, follow: false },
};

// 立体ネットワークは画面に出てから読み込む（初回表示を軽くする）
const DataNetwork = dynamic(() => import("@/components/concept/DataNetwork"));

const wrap = "mx-auto max-w-6xl px-5 sm:px-6 lg:px-8";

const proofs = [
  { value: "330", unit: "時間/月", label: "集計作業を削減", who: "フィットネス（全国展開）" },
  { value: "+15", unit: "%", label: "利益率を改善", who: "飲食" },
  { value: "+10", unit: "%", label: "営業の目標達成率", who: "人材" },
];

const industries = ["フィットネス", "人材サービス", "飲食", "製造", "公益法人・行政系", "農業団体", "サービス業"];

const problems = [
  { icon: HelpCircle, title: "施策の効果が分からない", body: "広告・営業・キャンペーン。打った施策のどれが効いたのか、数字で説明できない。" },
  { icon: Layers, title: "数字が散らばっている", body: "Excel・スプレッドシート・各システムに数字が散らばり、見たいときにすぐ見られない。" },
  { icon: Gauge, title: "感覚の判断に限界がきた", body: "事業が大きくなり、社長や担当者の感覚だけでは、どこを直すべきか決めきれない。" },
  { icon: PauseCircle, title: "ツールを入れても止まる", body: "BIツールを入れたが、更新する人がいなくて、だんだん誰も見なくなった。" },
];

const stages = [
  {
    kind: "raw" as const,
    no: "01",
    title: "集める・つなぐ",
    body: "Excel、スプレッドシート、POS、各種システム。散らばった数字を洗い出し、つなぎます。",
  },
  {
    kind: "structured" as const,
    no: "02",
    title: "整理する・そろえる",
    body: "事業の流れから見るべき指標（KPI）を決め、いつでも正しい数字が見られる状態にします。",
  },
  {
    kind: "value" as const,
    no: "03",
    title: "判断し、成果を測る",
    body: "どこを直せば一番効くかを特定し、打った施策の効果を数字で確かめます。",
  },
];

const services = [
  {
    key: "data",
    icon: Database,
    name: "データコンサルティング",
    headline: "判断に使える数字を、そろえる",
    body: "見るべき指標の設計から、データの整理、BIでいつでも見られる状態づくり、数字を見ながらの改善の伴走まで。",
    fits: ["店舗・拠点・集客チャネルが多く、数字がまとまらない", "施策の効果を数字で確かめたい"],
  },
  {
    key: "ai",
    icon: Bot,
    name: "AI導入支援",
    headline: "手作業の時間を、改善の時間に変える",
    body: "生成AIを業務の流れに組み込み、集計・資料づくり・問い合わせ対応などの手間を減らします。",
    fits: ["集計や資料づくりに時間をとられている"],
  },
  {
    key: "bpr",
    icon: Workflow,
    name: "業務改善（BPR）",
    headline: "仕事の流れを整えて、定着させる",
    body: "業務の流れを見える形にしてボトルネックを特定し、自動化も含めて続けられる仕組みにします。",
    fits: ["業務が人に依存していて、引き継げない"],
  },
];

const cases = [
  {
    metric: "330",
    unit: "時間/月",
    label: "集計作業の削減",
    industry: "フィットネス（全国展開）",
    before: "店舗別・スタッフ別の売上を、毎月手作業で集計",
    after: "基幹システムとPOSのデータを連携し、毎日自動で集計",
  },
  {
    metric: "+15",
    unit: "%",
    label: "利益率の改善",
    industry: "飲食",
    before: "店舗別の売上報告をExcelでまとめ、確認に時間がかかる",
    after: "商品別の利益率を見て、セットの組み替えとスタッフ配置を見直し",
  },
  {
    metric: "24",
    unit: "時間",
    label: "問い合わせに対応",
    industry: "公益法人",
    before: "区民からの問い合わせには、受付時間内でしか対応できない",
    after: "区民向けの生成AIチャットボットで、問い合わせ対応を24時間化",
  },
];

const questions = [
  "いま、事業を伸ばすうえで一番改善したいことは？",
  "いまは、何を見て判断していますか？",
  "その数字を見て、実際に何を変えていますか？",
  "逆に、見えなくて困っていることは？",
  "もしそこが見えたら、何を変えたいですか？",
];

const takeaways = ["改善すべきポイントの仮説", "そのために見るべき数字", "進め方のイメージ"];

const flow = [
  { no: "01", title: "お問い合わせ", body: "フォームから1分ほど。2営業日以内にご連絡します。" },
  { no: "02", title: "初回相談（60分・無料）", body: "オンラインで、いまの改善活動と課題を伺います。" },
  { no: "03", title: "ご提案", body: "課題・進め方・期間・費用をまとめてご提示します。" },
  { no: "04", title: "伴走スタート", body: "定例ミーティングで、改善を一緒に回します。" },
];

/* ===== 部品 ===== */

function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p className={`inline-flex items-center gap-2 font-inter text-[11px] font-semibold uppercase tracking-[0.28em] ${dark ? "text-[#9DB4FF]" : "text-accent-blue"}`}>
      <span className={`h-1.5 w-1.5 rounded-full ${dark ? "bg-accent-lime" : "bg-accent-blue"}`} />
      {children}
    </p>
  );
}

function CtaButton({ location, className = "" }: { location: string; className?: string }) {
  return (
    <Link
      href="/contact"
      data-track="cta_click"
      data-track-location={location}
      className={`group inline-flex h-14 items-center justify-center gap-3 rounded-full bg-accent-lime pl-7 pr-2 text-[15px] font-bold text-[#0B1020] shadow-[0_0_0_1px_rgba(196,229,56,0.4),0_8px_30px_-8px_rgba(196,229,56,0.55)] transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-lime ${className}`}
    >
      無料で相談する（60分）
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0B1020] text-accent-lime transition-transform duration-200 group-hover:translate-x-0.5">
        <ArrowRight className="h-4 w-4" />
      </span>
    </Link>
  );
}

const gridBg = {
  backgroundImage:
    "linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)",
  backgroundSize: "56px 56px",
  maskImage: "radial-gradient(ellipse at 65% 45%, black 10%, transparent 70%)",
  WebkitMaskImage: "radial-gradient(ellipse at 65% 45%, black 10%, transparent 70%)",
} as const;

/* ===== ページ ===== */

export default function ConceptPage() {
  return (
    <div className="bg-[#F5F7FB] text-[#0B1020]">
      <ClickTracker />

      {/* ===== ファーストビュー ===== */}
      <section className="relative overflow-hidden bg-[#060A14] pt-24 text-white sm:pt-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_72%_38%,rgba(45,91,255,0.28),transparent_55%),radial-gradient(ellipse_at_10%_100%,rgba(56,189,248,0.12),transparent_45%)]" />
        <div className="pointer-events-none absolute inset-0" style={gridBg} />

        <div className={`${wrap} relative grid items-center gap-6 pb-12 lg:grid-cols-[1.05fr_1fr] lg:gap-4 lg:pb-20`}>
          <div className="pt-6 lg:pt-10">
            <p className="fade-in text-[13px] font-semibold text-[#9DB4FF]">
              人材・多店舗サービス・フィットネスなど、改善に取り組む企業へ
            </p>
            <h1
              className="fade-in-up mt-5 font-display text-[2.5rem] font-bold leading-[1.22] tracking-tight sm:text-[3.4rem] lg:text-[3.7rem]"
              style={{ animationDelay: "100ms", animationFillMode: "both" }}
            >
              数字を、
              <br />
              <span className="bg-gradient-to-r from-accent-lime via-[#A7E36B] to-[#7DD3FC] bg-clip-text text-transparent">次の一手</span>
              に変える。
            </h1>
            <p
              className="fade-in-up mt-6 max-w-xl text-[15px] leading-[1.95] text-white/70 sm:text-base"
              style={{ animationDelay: "200ms", animationFillMode: "both" }}
            >
              セタリンクは、データコンサルティングの会社です。散らばった数字を整理し、どこを直せば成果が伸びるかを特定して、施策の効果まで測れる状態をつくります。
            </p>
            <div
              className="fade-in-up mt-9 flex flex-col gap-4 sm:flex-row sm:items-center"
              style={{ animationDelay: "300ms", animationFillMode: "both" }}
            >
              <CtaButton location="hero" />
              <Link
                href="/cases"
                data-track="case_view"
                data-track-location="hero"
                className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-white/20 px-7 text-[15px] font-semibold text-white transition-colors hover:border-white/50 hover:bg-white/5"
              >
                支援事例を見る
              </Link>
            </div>
            <p className="mt-4 text-xs text-white/50">初回相談は無料・オンライン ／ 2営業日以内にご連絡します</p>
          </div>

          <div className="relative h-[340px] sm:h-[440px] lg:h-[560px]">
            <DataNetwork className="absolute inset-0 h-full w-full" />
          </div>
        </div>

        {/* 実績の数字 */}
        <div className="relative border-t border-white/10 bg-white/[0.02] backdrop-blur-sm">
          <div className={`${wrap} grid grid-cols-1 divide-y divide-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0`}>
            {proofs.map((p) => (
              <div key={p.label} className="py-6 sm:px-6 sm:first:pl-0">
                <p className="text-[11px] font-semibold text-white/45">{p.who}</p>
                <p className="mt-1 flex items-baseline gap-1.5">
                  <span className="font-inter text-4xl font-semibold tracking-tight">{p.value}</span>
                  <span className="text-sm font-semibold text-white/70">{p.unit}</span>
                  <span className="ml-2 text-sm text-white/70">{p.label}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 業種 ===== */}
      <section className="border-b border-[#E4E7EF] bg-white py-8">
        <div className={`${wrap} flex flex-col gap-4 md:flex-row md:items-center md:gap-8`}>
          <p className="shrink-0 text-xs font-semibold text-[#5B6475]">これまでご一緒した業種</p>
          <ul className="flex flex-wrap gap-2">
            {industries.map((name) => (
              <li key={name} className="rounded-full border border-[#E4E7EF] bg-[#F5F7FB] px-4 py-1.5 text-sm font-medium text-[#2A3142]">
                {name}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== 課題 ===== */}
      <section className="py-20 md:py-28">
        <div className={wrap}>
          <FadeIn>
            <Eyebrow>Problem</Eyebrow>
            <h2 className="mt-4 max-w-3xl font-display text-[1.8rem] font-bold leading-[1.4] tracking-tight sm:text-4xl">
              数字はあるのに、
              <br className="hidden sm:block" />
              改善の判断に使えていない。
            </h2>
          </FadeIn>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {problems.map((p, i) => (
              <FadeIn key={p.title} delay={i * 80}>
                <div className="h-full rounded-[18px] border border-[#E4E7EF] bg-white p-6 transition-shadow duration-300 hover:shadow-[0_12px_40px_-16px_rgba(16,24,64,0.18)]">
                  <span className="flex h-10 w-10 items-center justify-center rounded-[12px] bg-[#EEF2FF] text-accent-blue">
                    <p.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-[17px] font-bold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-[1.85] text-[#5B6475]">{p.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== データが判断に変わるまで ===== */}
      <section id="how" className="relative scroll-mt-20 overflow-hidden bg-[#060A14] py-20 text-white md:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(45,91,255,0.22),transparent_60%)]" />
        <div className={`${wrap} relative`}>
          <FadeIn>
            <Eyebrow dark>How it works</Eyebrow>
            <h2 className="mt-4 max-w-3xl font-display text-[1.8rem] font-bold leading-[1.4] tracking-tight sm:text-4xl">
              散らばった数字が、
              <br className="hidden sm:block" />
              判断に変わるまで。
            </h2>
            <p className="mt-5 max-w-2xl text-[15px] leading-[1.95] text-white/65">
              ダッシュボードを作って終わり、にはしません。数字を整理し、改善の打ち手を決め、成果を測るところまで一緒に進めます。
            </p>
          </FadeIn>

          <ol className="mt-14 grid gap-5 lg:grid-cols-3">
            {stages.map((s, i) => (
              <FadeIn key={s.no} delay={i * 140}>
                <li className="relative h-full rounded-[20px] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-md">
                  <div className="rounded-[14px] bg-[#0A1022] px-2 pt-2">
                    <StageVisual kind={s.kind} />
                  </div>
                  <p className="mt-6 font-inter text-xs font-semibold tracking-[0.2em] text-[#9DB4FF]">STEP {s.no}</p>
                  <h3 className="mt-2 text-xl font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-[1.85] text-white/65">{s.body}</p>
                  {i < stages.length - 1 && (
                    <span className="absolute -right-4 top-1/3 z-10 hidden h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-[#0B1226] text-accent-lime lg:flex">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  )}
                </li>
              </FadeIn>
            ))}
          </ol>
          <FadeIn>
            <p className="mt-8 flex items-center gap-3 text-sm text-white/60">
              <span className="h-px w-10 bg-accent-lime" />
              03のあとは01に戻り、次の改善へ。この一周を、社内で回せるようになるまで伴走します。
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ===== サービス ===== */}
      <section id="services" className="scroll-mt-20 py-20 md:py-28">
        <div className={wrap}>
          <FadeIn>
            <Eyebrow>Services</Eyebrow>
            <h2 className="mt-4 max-w-3xl font-display text-[1.8rem] font-bold leading-[1.4] tracking-tight sm:text-4xl">
              支援の中心は、データコンサルティング。
            </h2>
            <p className="mt-5 max-w-2xl text-[15px] leading-[1.95] text-[#5B6475]">
              課題に合わせて、AI導入支援と業務改善を組み合わせます。あてはまるものから、ご相談ください。
            </p>
          </FadeIn>

          <div className="mt-12 grid gap-5 lg:grid-cols-3 lg:grid-rows-2">
            {services.map((s, i) => {
              const main = i === 0;
              return (
                <FadeIn key={s.key} delay={i * 100} className={main ? "lg:col-span-2 lg:row-span-2" : ""}>
                  <div
                    className={`flex h-full flex-col rounded-[22px] p-7 sm:p-8 ${
                      main
                        ? "relative overflow-hidden bg-[#0B1226] text-white"
                        : "border border-[#E4E7EF] bg-white transition-shadow duration-300 hover:shadow-[0_12px_40px_-16px_rgba(16,24,64,0.18)]"
                    }`}
                  >
                    {main && <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent-blue/30 blur-3xl" />}
                    <div className="relative flex items-center gap-3">
                      <span className={`flex h-11 w-11 items-center justify-center rounded-[12px] ${main ? "bg-white/10 text-accent-lime" : "bg-[#EEF2FF] text-accent-blue"}`}>
                        <s.icon className="h-5 w-5" />
                      </span>
                      <p className={`text-sm font-semibold ${main ? "text-white/80" : "text-[#5B6475]"}`}>{s.name}</p>
                      {main && <span className="rounded-full bg-accent-lime px-2.5 py-0.5 text-[11px] font-bold text-[#0B1020]">メインの支援</span>}
                    </div>
                    <div className={`relative ${main ? "mt-6 grid flex-1 gap-6 md:grid-cols-[1fr_0.9fr] md:items-center" : "mt-5 flex flex-1 flex-col"}`}>
                      <div>
                        <h3 className={`font-display font-bold leading-snug ${main ? "text-2xl sm:text-[1.75rem]" : "text-lg"}`}>{s.headline}</h3>
                        <p className={`mt-3 text-sm leading-[1.85] ${main ? "text-white/65" : "text-[#5B6475]"}`}>{s.body}</p>
                        <p className={`mt-5 text-xs font-semibold ${main ? "text-white/50" : "text-[#8A93A6]"}`}>こんな方に</p>
                        <ul className="mt-2 space-y-1.5">
                          {s.fits.map((f) => (
                            <li key={f} className="flex items-start gap-2 text-sm">
                              <Check className={`mt-0.5 h-4 w-4 shrink-0 ${main ? "text-accent-lime" : "text-accent-blue"}`} />
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>
                      {main && (
                        <div className="rounded-[16px] border border-white/10 bg-[#0A1022] px-2 pt-2">
                          <StageVisual kind="structured" />
                        </div>
                      )}
                    </div>
                    <Link
                      href={`/contact?topic=${s.key}`}
                      data-track="service_select"
                      data-track-service={s.key}
                      className={`relative mt-7 inline-flex items-center gap-2 self-start text-sm font-bold ${
                        main ? "text-accent-lime" : "text-accent-blue"
                      } group`}
                    >
                      この内容で相談する
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== 実績 ===== */}
      <section id="results" className="scroll-mt-20 border-y border-[#E4E7EF] bg-white py-20 md:py-28">
        <div className={wrap}>
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <FadeIn>
              <Eyebrow>Results</Eyebrow>
              <h2 className="mt-4 font-display text-[1.8rem] font-bold leading-[1.4] tracking-tight sm:text-4xl">支援で、こう変わりました。</h2>
            </FadeIn>
            <Link href="/cases" data-track="case_view" data-track-location="results" className="group inline-flex items-center gap-2 text-sm font-bold text-accent-blue">
              支援実績・事例をすべて見る
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {cases.map((c, i) => (
              <FadeIn key={c.industry} delay={i * 100}>
                <article className="flex h-full flex-col rounded-[20px] border border-[#E4E7EF] bg-[#F9FAFD] p-7">
                  <p className="text-xs font-semibold text-[#5B6475]">{c.industry}</p>
                  <p className="mt-3 flex items-baseline gap-1.5">
                    <span className="bg-gradient-to-br from-accent-blue to-[#38BDF8] bg-clip-text font-inter text-5xl font-semibold tracking-tight text-transparent">
                      {c.metric}
                    </span>
                    <span className="text-sm font-bold text-accent-blue">{c.unit}</span>
                  </p>
                  <p className="mt-1 text-sm font-bold">{c.label}</p>
                  <dl className="mt-6 space-y-3 border-t border-[#E4E7EF] pt-5 text-sm leading-[1.8]">
                    <div>
                      <dt className="font-inter text-[11px] font-semibold uppercase tracking-widest text-[#8A93A6]">Before</dt>
                      <dd className="text-[#5B6475]">{c.before}</dd>
                    </div>
                    <div>
                      <dt className="font-inter text-[11px] font-semibold uppercase tracking-widest text-accent-blue">After</dt>
                      <dd className="font-medium">{c.after}</dd>
                    </div>
                  </dl>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 初回相談 ===== */}
      <section id="first-meeting" className="scroll-mt-20 py-20 md:py-28">
        <div className={`${wrap} grid items-start gap-12 lg:grid-cols-[1fr_1.05fr]`}>
          <FadeIn>
            <Eyebrow>First meeting</Eyebrow>
            <h2 className="mt-4 font-display text-[1.8rem] font-bold leading-[1.4] tracking-tight sm:text-4xl">
              まずは60分。
              <br />
              改善の「あたり」をつけます。
            </h2>
            <p className="mt-5 text-[15px] leading-[1.95] text-[#5B6475]">
              「どんなダッシュボードが欲しいですか？」からは始めません。事業のお話を伺いながら、改善すべきポイントを一緒に整理します。相談だけでも大丈夫です。
            </p>
            <p className="mt-8 text-xs font-semibold text-[#8A93A6]">相談のあとに、持ち帰れるもの</p>
            <ul className="mt-3 space-y-2.5">
              {takeaways.map((t) => (
                <li key={t} className="flex items-center gap-3 text-[15px] font-semibold">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent-lime text-[#0B1020]">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
            <CtaButton location="first_meeting" className="mt-10" />
          </FadeIn>

          <FadeIn delay={120}>
            <div className="rounded-[22px] border border-[#E4E7EF] bg-white p-6 shadow-[0_20px_60px_-30px_rgba(16,24,64,0.25)] sm:p-8">
              <p className="font-inter text-xs font-semibold tracking-[0.2em] text-[#8A93A6]">初回相談でお聞きすること</p>
              <ol className="mt-5 space-y-3">
                {questions.map((q, i) => (
                  <li key={q} className="flex items-start gap-4 rounded-[14px] bg-[#F5F7FB] px-4 py-3.5">
                    <span className="font-inter text-sm font-bold text-accent-blue">Q{i + 1}</span>
                    <span className="text-[15px] font-medium leading-relaxed">{q}</span>
                  </li>
                ))}
              </ol>
            </div>
          </FadeIn>
        </div>

        <div className={`${wrap} mt-16`}>
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {flow.map((f, i) => (
              <FadeIn key={f.no} delay={i * 80}>
                <li className="relative h-full rounded-[18px] border border-[#E4E7EF] bg-white p-6">
                  <span className="font-inter text-sm font-bold text-accent-blue">{f.no}</span>
                  <h3 className="mt-3 text-base font-bold">{f.title}</h3>
                  <p className="mt-1.5 text-sm leading-[1.8] text-[#5B6475]">{f.body}</p>
                </li>
              </FadeIn>
            ))}
          </ol>
        </div>
      </section>

      {/* ===== よくある質問 ===== */}
      <section id="faq" className="scroll-mt-20 border-t border-[#E4E7EF] bg-white py-20 md:py-28">
        <div className={`${wrap} grid gap-10 lg:grid-cols-[1fr_1.5fr]`}>
          <FadeIn>
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="mt-4 font-display text-[1.8rem] font-bold tracking-tight sm:text-4xl">よくある質問</h2>
            <Link href="/faq" className="group mt-6 inline-flex items-center gap-2 text-sm font-bold text-accent-blue">
              すべての質問を見る
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </FadeIn>
          <div className="divide-y divide-[#E4E7EF] rounded-[20px] border border-[#E4E7EF]">
            {topFaqs.map((f) => (
              <details key={f.q} className="group px-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-[15px] font-semibold [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <Plus className="h-5 w-5 shrink-0 text-accent-blue transition-transform duration-300 group-open:rotate-45" />
                </summary>
                <p className="pb-5 text-sm leading-[1.9] text-[#5B6475]">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 最後の相談 ===== */}
      <section className="relative overflow-hidden bg-[#060A14] py-24 text-white md:py-32">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_120%,rgba(196,229,56,0.18),transparent_55%),radial-gradient(ellipse_at_80%_0%,rgba(45,91,255,0.25),transparent_50%)]" />
        <div className="pointer-events-none absolute inset-0" style={gridBg} />
        <div className={`${wrap} relative text-center`}>
          <FadeIn>
            <h2 className="mx-auto max-w-3xl font-display text-[1.9rem] font-bold leading-[1.45] tracking-tight sm:text-[2.6rem]">
              まずは60分、
              <br />
              いまの改善の話を聞かせてください。
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-[15px] leading-[1.9] text-white/65">
              「何から相談すればいいか分からない」という段階でも大丈夫です。初回相談は無料、オンラインで対応します。
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <CtaButton location="final" />
              <Link href="/faq" className="inline-flex h-14 items-center rounded-full border border-white/20 px-7 text-[15px] font-semibold transition-colors hover:border-white/50 hover:bg-white/5">
                よくある質問を見る
              </Link>
            </div>
            <p className="mt-4 text-xs text-white/45">2営業日以内にご連絡します</p>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
