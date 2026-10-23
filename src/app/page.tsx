import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import FaqList from "@/components/FaqList";
import { SectionTitle, PrimaryCta, CtaPanel } from "@/components/Section";
import {
  HeroIllustration,
  WorryIllustration,
  TalkIllustration,
  DataIllustration,
} from "@/components/Illustrations";
import { ImprovementCycle, StumbleRoad } from "@/components/Diagrams";
import { topFaqs } from "@/lib/faq";
import { beliefs } from "@/lib/company";
import {
  ArrowRight,
  ArrowDown,
  Check,
  Database,
  Bot,
  Workflow,
  Users,
  MonitorSmartphone,
  UserPlus,
  Hourglass,
} from "lucide-react";

/* ===== 文言（Miro「ICP・事業方向性 整理」PART 1〜3 と営業コンサルのフレームから） ===== */

const worries = [
  "広告・営業・キャンペーン…施策は打っているのに、どれが効いたのか分からない",
  "結局、どこを改善すればいちばん成果が出るのかを決められない",
  "数字がExcelやスプレッドシートに散らばっていて、見たいときにすぐ見られない",
  "事業が大きくなって、感覚だけでは判断しきれなくなってきた",
  "ツールを入れてみたものの、更新する人がいなくて止まってしまった",
];

// 図の円に入れる短いラベル（short）と、横の一覧の説明（title・body）
const cycle: {
  step: string;
  short: [string, string];
  title: string;
  body: string;
  note?: string;
  noteClass?: string;
}[] = [
  { step: "01", short: ["いまの改善", "を知る"], title: "いまの改善活動を知る", body: "広告・営業・店舗施策など、いま取り組んでいることと目標を伺います。" },
  { step: "02", short: ["仮説を", "立てる"], title: "仮説を立てる", body: "事業の流れを分解して、何が成果を左右しているのかを考えます。" },
  {
    step: "03",
    short: ["数字を", "見える化"],
    title: "数字を見える化する",
    body: "散らばった数字を整理して見るべき指標をそろえ、いつでも見られる状態にします。",
    note: "多くの支援はここまで",
    noteClass: "bg-peach text-foreground",
  },
  {
    step: "04",
    short: ["ボトルネック", "を見つける"],
    title: "ボトルネックを見つける",
    body: "どこで成果が落ちているのか、いちばん効く改善ポイントを特定します。",
    note: "ここからが本番",
    noteClass: "bg-foreground text-accent-lime",
  },
  { step: "05", short: ["施策を", "実行する"], title: "改善施策を実行する", body: "現場の行動に落とし込み、必要なら仕組みづくりや自動化まで手を動かします。" },
  { step: "06", short: ["成果を", "測る"], title: "成果を測って、次へ", body: "施策が効いたのかを測り、次の改善（01）につなげます。" },
];

const alternatives: {
  icon: typeof Users;
  title: string;
  good: string;
  stumble: string;
  variant?: "stumble" | "stay";
  detail: string;
  setalink: string;
}[] = [
  {
    icon: Users,
    title: "自分たちでやる",
    good: "費用がかからない",
    stumble: "本業が忙しくて止まる",
    detail: "本業の時間が削られ、担当の人が異動・退職すると止まってしまいがち。",
    setalink: "何の数字を取り、どう集計するか。設計の段階から一緒に入ります。",
  },
  {
    icon: MonitorSmartphone,
    title: "ツールを入れる・一部だけ外注する",
    good: "すぐに形になる",
    stumble: "だんだん誰も見なくなる",
    detail: "「何を判断するための画面か」が決まっていないと、作っただけで使われなくなる。",
    setalink: "会社の方針から、見るべき指標と現場の行動まで逆算して組み立てます。",
  },
  {
    icon: UserPlus,
    title: "データ担当を採用する",
    good: "ノウハウが社内に残る",
    stumble: "そもそも採用できない",
    detail: "採用は難しく、経営とデータの両方が分かる人はなかなか見つからない。",
    setalink: "その役割を初月から担い、社内に引き継げる形で進めます。",
  },
  {
    icon: Hourglass,
    title: "いまは様子を見る",
    good: "手間がかからない",
    stumble: "1年後も同じ場所",
    variant: "stay",
    detail: "いまのままでも回る。でも1年後も同じ「勘と経験」のまま、伸びしろを逃しているかもしれない。",
    setalink: "まずは60分の無料相談で、伸びしろがどこにありそうかを一緒に見てみましょう。",
  },
];

// 支援の中心はデータコンサルティング。AI・BPRはあわせて提供する
const mainArea = {
  icon: Database,
  name: "データコンサルティング",
  headline: "判断に使える数字を、そろえる",
  body: "散らばった数字を整理して見るべき指標を決め、いつでも正しい数字が見られる状態をつくります。そのうえで、数字を見ながら改善を回すところまで伴走します。",
  steps: [
    "見るべき指標（KPI）を、事業の流れから決める",
    "Excel・スプレッドシート・各種システムに散らばったデータを整理する",
    "Power BI・Looker Studioなどで、いつでも見られる状態にする",
    "定例ミーティングで、数字を見ながら改善を回す",
  ],
};

const subAreas = [
  {
    icon: Bot,
    name: "AI導入支援",
    headline: "手作業の時間を、改善の時間に変える",
    body: "生成AIを業務の流れに組み込み、集計・資料づくり・問い合わせ対応などの手間を減らします。現場で使い続けられるところまで伴走します。",
    color: "bg-mint text-emerald-700",
  },
  {
    icon: Workflow,
    name: "業務改善（BPR）",
    headline: "仕事の流れを整えて、定着させる",
    body: "業務の流れを見える形にしてボトルネックを特定し、GASやAPI連携での自動化も含めて、続けられる仕組みに落とし込みます。",
    color: "bg-peach text-orange-700",
  },
];

const cases = [
  {
    industry: "フィットネス（全国展開）",
    area: "データ",
    before: "店舗別・スタッフ別の売上を、毎月手作業で集計していた",
    after: "店舗別・スタッフ別の売上がすぐ見られるようになり、集計の手間が大きく減った",
    metric: "330",
    suffix: "時間",
    metricLabel: "月あたりの業務削減",
  },
  {
    industry: "飲食",
    area: "データ",
    before: "店舗別の売上報告をExcelでまとめていて、更新と確認に時間がかかっていた",
    after: "店舗別の売上と人件費のバランスがすぐ見られるようになり、商品別の利益率をもとにセットを組み替えた",
    metric: "+15",
    suffix: "%",
    metricLabel: "利益率の改善",
  },
  {
    industry: "公益法人",
    area: "AI",
    before: "区民からの問い合わせには、受付時間内でしか対応できなかった",
    after: "区民向けの生成AIチャットボットを導入し、問い合わせ対応を24時間化",
    metric: "24",
    suffix: "時間",
    metricLabel: "問い合わせに対応できる時間",
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
  { step: "01", title: "お問い合わせ", body: "フォームから1分ほどで送れます。2営業日以内にご連絡します。" },
  { step: "02", title: "初回相談（60分・無料）", body: "オンラインで、いまの改善活動と課題を伺います。" },
  { step: "03", title: "ご提案", body: "課題・進め方・期間・費用をまとめてご提示します。" },
  { step: "04", title: "伴走スタート", body: "定例ミーティングで、改善を一緒に回していきます。" },
];

const fits = [
  "事業をもっと伸ばしたい・改善したいという気持ちがある",
  "すでに何かしらの改善活動に取り組んでいる",
  "数字はあるけれど、改善の判断にうまく使えていない",
  "改善のためなら、いまのやり方を変えることにも時間を使える",
];


/* ===== ページ ===== */

export default function Home() {
  return (
    <>
      {/* ===== ファーストビュー ===== */}
      <section className="relative overflow-hidden pt-28 pb-16 sm:pt-32 md:pt-36 lg:pb-24">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-sky/70 blur-3xl" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10 lg:px-8">
          <div>
            <div className="fade-in-up">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-1.5 text-xs font-bold text-foreground">
                <span className="h-2 w-2 rounded-full bg-accent-lime" />
                改善活動の精度を高める会社
              </span>
            </div>
            <h1
              className="fade-in-up mt-6 font-maru text-[1.75rem] font-bold leading-[1.45] tracking-tight sm:text-[2.6rem] lg:text-[2.5rem] xl:text-[2.9rem]"
              style={{ animationDelay: "120ms", animationFillMode: "both" }}
            >
              <span className="inline-block">がんばっている改善を、</span>
              <br />
              <span className="inline-block">
                <span className="marker">ちゃんと成果に</span>つなげる。
              </span>
            </h1>
            <p
              className="fade-in-up mt-6 max-w-xl text-[15px] leading-[1.95] text-gray sm:text-base"
              style={{ animationDelay: "240ms", animationFillMode: "both" }}
            >
              どこを直せば、いちばん効くのか。その施策は、本当に効いたのか。
              数字で判断できる状態をつくり、改善が回り続けるまで一緒に走ります。
            </p>
            <div
              className="fade-in-up mt-9 flex flex-col gap-4 sm:flex-row sm:items-center"
              style={{ animationDelay: "360ms", animationFillMode: "both" }}
            >
              <PrimaryCta />
              <Link
                href="#first-meeting"
                className="group inline-flex h-14 items-center justify-center gap-1.5 whitespace-nowrap rounded-full border-2 border-foreground/80 bg-white px-7 text-[15px] font-bold text-foreground transition-colors hover:bg-foreground hover:text-white"
              >
                相談でやることを見る
                <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              </Link>
            </div>
            <p
              className="fade-in-up mt-4 text-xs text-gray"
              style={{ animationDelay: "420ms", animationFillMode: "both" }}
            >
              初回相談は無料・オンライン ／ 2営業日以内にご連絡します
            </p>
          </div>

          <div className="fade-in" style={{ animationDelay: "300ms", animationFillMode: "both" }}>
            <HeroIllustration className="mx-auto w-full max-w-[520px]" />
          </div>
        </div>

        {/* 支援領域 */}
        <div className="relative mx-auto mt-12 max-w-6xl px-5 sm:px-6 lg:mt-16 lg:px-8">
          <div className="flex flex-col gap-4 rounded-3xl border border-border bg-white/80 p-5 md:flex-row md:items-center md:gap-8 md:px-8">
            <a href="#areas" className="group flex items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-sky text-accent-blue">
                <Database className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-[11px] font-bold text-gray">支援の中心</span>
                <span className="block font-maru text-lg font-bold group-hover:text-accent-blue">データコンサルティング</span>
              </span>
            </a>
            <div className="hidden h-10 w-px bg-border md:block" />
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-gray">あわせて</span>
              {subAreas.map((a) => (
                <a
                  key={a.name}
                  href="#areas"
                  className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-bold transition-transform hover:-translate-y-0.5 ${a.color}`}
                >
                  <a.icon className="h-4 w-4" />
                  {a.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== こんなこと、ありませんか ===== */}
      <section id="worries" className="scroll-mt-20 bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionTitle label="Check">こんなこと、ありませんか？</SectionTitle>
          </FadeIn>
          <div className="mt-12 grid items-center gap-10 md:grid-cols-[1fr_300px] lg:grid-cols-[1fr_360px]">
            <ul className="space-y-3">
              {worries.map((w, i) => (
                <FadeIn key={w} delay={i * 80}>
                  <li className="flex items-start gap-4 rounded-2xl bg-white px-5 py-4 shadow-[0_2px_0_var(--border)]">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md border-2 border-foreground bg-accent-lime">
                      <Check className="h-4 w-4" strokeWidth={3} />
                    </span>
                    <span className="text-[15px] font-medium leading-relaxed">{w}</span>
                  </li>
                </FadeIn>
              ))}
            </ul>
            <FadeIn direction="scale">
              <WorryIllustration className="mx-auto w-full max-w-[320px]" />
            </FadeIn>
          </div>
          <FadeIn>
            <div className="mt-12 rounded-3xl border-2 border-dashed border-foreground/25 bg-white/60 px-6 py-8 text-center md:px-10">
              <p className="font-maru text-lg font-bold leading-relaxed sm:text-xl">
                「いまのやり方でも、一応は回っている。
                <br className="hidden sm:block" />
                でも、もっと伸ばせるはず。」
              </p>
              <p className="mt-3 text-sm leading-relaxed text-gray">
                そう感じているなら、私たちがお役に立てます。
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ===== セタリンクがやること ===== */}
      <section id="support" className="scroll-mt-20 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionTitle
              label="What we do"
              lead={
                <>
                  私たちは、ダッシュボードを作って終わりにする会社ではありません。
                  お客様がすでに取り組んでいる改善活動を、データでもっと効果的にする会社です。
                </>
              }
            >
              <span className="marker">見える化して終わり</span>、
              <br className="sm:hidden" />
              にしない。
            </SectionTitle>
          </FadeIn>

          <div className="mt-12 grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <FadeIn direction="scale">
              <ImprovementCycle steps={cycle} className="mx-auto w-full max-w-[480px]" />
            </FadeIn>
            <ol className="space-y-2.5">
              {cycle.map((c, i) => (
                <FadeIn key={c.step} delay={i * 70}>
                  <li
                    className={`flex gap-4 rounded-2xl px-5 py-4 ${
                      i === 3
                        ? "border-2 border-foreground bg-lime-soft"
                        : i > 3
                          ? "border border-transparent bg-lime-soft/60"
                          : "border border-border bg-white"
                    }`}
                  >
                    <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-inter text-sm font-bold ${i === 3 ? "bg-foreground text-accent-lime" : "bg-sky text-accent-blue"}`}>
                      {c.step}
                    </span>
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-maru text-base font-bold sm:text-lg">{c.title}</h3>
                        {c.note && (
                          <span className={`whitespace-nowrap rounded-full px-2.5 py-0.5 text-[11px] font-bold ${c.noteClass}`}>
                            {c.note}
                          </span>
                        )}
                      </div>
                      <p className="mt-1 text-sm leading-[1.8] text-gray">{c.body}</p>
                    </div>
                  </li>
                </FadeIn>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ===== よくある選択肢との違い ===== */}
      <section id="compare" className="scroll-mt-20 bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionTitle
              label="Why us"
              lead="どの方法にも良さがあります。ただ、成果にたどり着く前に、つまずきやすいところがあります。"
            >
              よくある4つの選択肢と、
              <br className="hidden sm:block" />
              つまずきやすいところ
            </SectionTitle>
          </FadeIn>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {alternatives.map((a, i) => (
              <FadeIn key={a.title} delay={i * 90}>
                <div className="flex h-full flex-col rounded-3xl bg-white p-6 shadow-[0_3px_0_var(--border)] md:p-7">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-surface">
                      <a.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-maru text-lg font-bold leading-snug">{a.title}</h3>
                      <p className="mt-0.5 text-xs font-bold text-emerald-700">よいところ：{a.good}</p>
                    </div>
                  </div>
                  <div className="mt-4 rounded-2xl bg-surface px-2 pt-1">
                    <StumbleRoad label={a.stumble} variant={a.variant} className="w-full" />
                  </div>
                  <p className="mt-4 text-sm leading-[1.85] text-gray">{a.detail}</p>
                  <div className="mt-4 flex flex-1 items-start gap-3 rounded-2xl bg-sky px-4 py-4">
                    <span className="shrink-0 whitespace-nowrap rounded-full bg-accent-blue px-2.5 py-1 text-[11px] font-bold text-white">
                      セタリンクなら
                    </span>
                    <p className="text-sm font-medium leading-[1.8] text-foreground">{a.setalink}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 支援領域（データコンサルが中心） ===== */}
      <section id="areas" className="scroll-mt-20 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionTitle
              label="Services"
              lead="数字で判断できる状態をつくることが、私たちの支援の中心です。そのうえで必要に応じて、手間を減らすAI導入や、仕事の流れを整える業務改善を組み合わせます。"
            >
              支援の中心は、
              <br className="hidden sm:block" />
              データコンサルティング
            </SectionTitle>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="mt-12 grid items-center gap-8 rounded-[2rem] border-2 border-foreground bg-white p-6 sm:p-8 lg:grid-cols-[1.15fr_1fr] lg:p-10">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky text-accent-blue">
                    <mainArea.icon className="h-7 w-7" />
                  </span>
                  <div>
                    <span className="inline-flex whitespace-nowrap rounded-full bg-foreground px-3 py-1 text-[11px] font-bold text-accent-lime">メインの支援</span>
                    <p className="mt-1 text-sm font-bold">{mainArea.name}</p>
                  </div>
                </div>
                <h3 className="mt-6 font-maru text-2xl font-bold leading-snug sm:text-[1.7rem]">{mainArea.headline}</h3>
                <p className="mt-4 text-[15px] leading-[1.9] text-gray">{mainArea.body}</p>
                <ol className="mt-6 space-y-2.5">
                  {mainArea.steps.map((step, i) => (
                    <li key={step} className="flex items-start gap-3 rounded-2xl bg-surface px-4 py-3">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-blue font-inter text-xs font-bold text-white">
                        {i + 1}
                      </span>
                      <span className="text-sm font-medium leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
              <DataIllustration className="mx-auto w-full max-w-[440px]" />
            </div>
          </FadeIn>

          <FadeIn>
            <p className="mt-14 font-maru text-lg font-bold">あわせて、こんな支援もできます</p>
          </FadeIn>
          <div className="mt-5 grid gap-5 md:grid-cols-2">
            {subAreas.map((a, i) => (
              <FadeIn key={a.name} delay={i * 100}>
                <div className="flex h-full gap-5 rounded-3xl border border-border bg-white p-6 sm:p-7">
                  <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${a.color}`}>
                    <a.icon className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="text-xs font-bold text-gray">{a.name}</p>
                    <h3 className="mt-1 font-maru text-lg font-bold leading-snug">{a.headline}</h3>
                    <p className="mt-3 text-sm leading-[1.85] text-gray">{a.body}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Before → After ===== */}
      <section id="cases" className="scroll-mt-20 bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <SectionTitle label="Before → After">支援で、こう変わりました</SectionTitle>
              <Link
                href="/cases"
                className="group inline-flex items-center gap-1 text-sm font-bold text-foreground/75 transition-colors hover:text-accent-blue"
              >
                支援実績・事例をもっと見る
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </FadeIn>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {cases.map((c, i) => (
              <FadeIn key={c.industry} delay={i * 100}>
                <div className="flex h-full flex-col rounded-3xl bg-white p-6 shadow-[0_3px_0_var(--border)]">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-surface px-3 py-1 text-xs font-bold">{c.industry}</span>
                    <span className={`rounded-full px-3 py-1 text-xs font-bold ${c.area === "AI" ? "bg-mint text-emerald-700" : "bg-sky text-accent-blue"}`}>
                      {c.area === "AI" ? "AI導入支援" : "データコンサルティング"}
                    </span>
                  </div>
                  <div className="mt-5 rounded-2xl border border-dashed border-foreground/25 px-4 py-4">
                    <p className="font-inter text-[11px] font-bold uppercase tracking-widest text-gray">Before</p>
                    <p className="mt-1.5 text-sm leading-[1.8] text-gray">{c.before}</p>
                  </div>
                  <div className="flex justify-center py-2">
                    <ArrowDown className="h-5 w-5 text-accent-blue" />
                  </div>
                  <div className="flex-1 rounded-2xl bg-lime-soft px-4 py-4">
                    <p className="font-inter text-[11px] font-bold uppercase tracking-widest text-foreground">After</p>
                    <p className="mt-1.5 text-sm font-medium leading-[1.8]">{c.after}</p>
                  </div>
                  <div className="mt-5 flex items-baseline gap-2 border-t border-border pt-4">
                    <span className="font-inter text-3xl font-bold text-accent-blue">
                      {c.metric}
                    </span>
                    <span className="text-sm font-bold text-accent-blue">{c.suffix}</span>
                    <span className="ml-auto text-xs text-gray">{c.metricLabel}</span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 初回相談でやること ===== */}
      <section id="first-meeting" className="scroll-mt-20 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] bg-sky px-5 py-12 sm:px-10 md:py-16 lg:px-14">
            <FadeIn>
              <SectionTitle
                label="First meeting"
                lead="「どんなダッシュボードが欲しいですか？」からは始めません。事業のお話を伺いながら、改善すべきポイントを一緒に整理します。"
              >
                最初の60分で、
                <br className="hidden sm:block" />
                改善の「あたり」をつけます
              </SectionTitle>
            </FadeIn>

            <div className="mt-10 grid items-start gap-10 lg:grid-cols-[1.1fr_1fr]">
              <ol className="space-y-3">
                {questions.map((q, i) => (
                  <FadeIn key={q} delay={i * 80}>
                    <li className="flex items-center gap-4 rounded-2xl bg-white px-5 py-4">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-blue font-inter text-sm font-bold text-white">
                        Q{i + 1}
                      </span>
                      <span className="text-[15px] font-bold leading-relaxed">{q}</span>
                    </li>
                  </FadeIn>
                ))}
              </ol>

              <FadeIn delay={150}>
                <div className="rounded-3xl bg-white p-6 sm:p-8">
                  <TalkIllustration className="mx-auto w-full max-w-[320px]" />
                  <p className="mt-6 font-maru text-lg font-bold">相談のあとに、持ち帰れるもの</p>
                  <ul className="mt-4 space-y-2.5">
                    {takeaways.map((t) => (
                      <li key={t} className="flex items-center gap-3 text-[15px] font-medium">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent-lime">
                          <Check className="h-3.5 w-3.5" strokeWidth={3} />
                        </span>
                        {t}
                      </li>
                    ))}
                  </ul>
                  <PrimaryCta className="mt-8 w-full" />
                  <p className="mt-3 text-center text-xs text-gray">費用はかかりません・オンラインで対応します</p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ご相談の流れ ===== */}
      <section id="flow" className="scroll-mt-20 pb-20 md:pb-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionTitle label="Flow">ご相談から、支援開始までの流れ</SectionTitle>
          </FadeIn>
          <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {flow.map((f, i) => (
              <FadeIn key={f.step} delay={i * 90}>
                <li className="relative h-full rounded-3xl border border-border bg-white p-6">
                  <span className="font-inter text-4xl font-bold text-accent-blue/20">{f.step}</span>
                  <h3 className="mt-2 font-maru text-lg font-bold">{f.title}</h3>
                  <p className="mt-2 text-sm leading-[1.85] text-gray">{f.body}</p>
                  {i < flow.length - 1 && (
                    <ArrowRight className="absolute -right-3.5 top-1/2 hidden h-5 w-5 -translate-y-1/2 rounded-full bg-background text-accent-blue lg:block" />
                  )}
                </li>
              </FadeIn>
            ))}
          </ol>
        </div>
      </section>

      {/* ===== 向いている会社 ===== */}
      <section id="fit" className="scroll-mt-20 bg-surface py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 sm:px-6 lg:grid-cols-2 lg:px-8">
          <FadeIn>
            <SectionTitle
              label="For you"
              lead="たとえば人材サービス、多店舗展開のサービス業、フィットネスなど、集客から契約・継続までの流れが長い事業で、特にお役に立てます。"
            >
              こんな会社と、
              <br className="hidden sm:block" />
              一緒に取り組みたいと考えています
            </SectionTitle>
          </FadeIn>
          <ul className="space-y-3">
            {fits.map((f, i) => (
              <FadeIn key={f} delay={i * 80}>
                <li className="flex items-start gap-4 rounded-2xl bg-white px-5 py-4">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-blue text-white">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  <span className="text-[15px] font-medium leading-relaxed">{f}</span>
                </li>
              </FadeIn>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== 私たちの想い ===== */}
      <section id="philosophy" className="scroll-mt-20 py-20 md:py-28">
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
                <div className="h-full rounded-3xl border border-border bg-white p-7">
                  <span className="inline-flex rounded-full bg-foreground px-3 py-1 font-inter text-xs font-bold tracking-widest text-accent-lime">
                    {b.label}
                  </span>
                  <h3 className="mt-4 font-maru text-lg font-bold leading-snug">{b.title}</h3>
                  <p className="mt-3 text-sm leading-[1.85] text-gray">{b.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>

        </div>
      </section>

      {/* ===== よくある質問 ===== */}
      <section id="faq" className="scroll-mt-20 bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionTitle label="FAQ" center>
              よくある質問
            </SectionTitle>
          </FadeIn>
          <div className="mt-10">
            <FaqList items={topFaqs} />
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/faq"
              className="group inline-flex items-center gap-1 text-sm font-bold text-foreground/75 transition-colors hover:text-accent-blue"
            >
              よくある質問をすべて見る
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== 最後のCTA ===== */}
      <CtaPanel />
    </>
  );
}
