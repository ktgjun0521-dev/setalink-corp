import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import FaqList from "@/components/FaqList";
import { SectionTitle, PrimaryCta, TextLink, CtaPanel } from "@/components/Section";
import {
  HeroIllustration,
  WorryIllustration,
  TalkIllustration,
  DataIllustration,
} from "@/components/Illustrations";
import { ImprovementCycle, StumbleScene, type StumbleKind } from "@/components/Diagrams";
import { topFaqs } from "@/lib/faq";
import { beliefs } from "@/lib/company";
import { ArrowDown, Check, Database, Bot, Workflow } from "lucide-react";

/* ===== 文言（Miro「ICP・事業方向性 整理」PART 1〜3 と営業コンサルのフレームから） ===== */

const container = "mx-auto max-w-6xl px-5 sm:px-6 lg:px-8";

// 実績の数字（/cases の事例と同じもの）
const proofs = [
  { value: "330", unit: "時間/月", label: "集計作業の削減", who: "フィットネス（全国展開）" },
  { value: "+15", unit: "%", label: "利益率の改善", who: "飲食" },
  { value: "+10", unit: "%", label: "営業の目標達成率", who: "人材" },
  { value: "24", unit: "時間", label: "問い合わせに対応", who: "公益法人" },
];

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
    noteClass: "bg-peach",
  },
  {
    step: "04",
    short: ["ボトルネック", "を見つける"],
    title: "ボトルネックを見つける",
    body: "どこで成果が落ちているのか、いちばん効く改善ポイントを特定します。",
    note: "ここからが本番",
    noteClass: "bg-accent-lime",
  },
  { step: "05", short: ["施策を", "実行する"], title: "改善施策を実行する", body: "現場の行動に落とし込み、必要なら仕組みづくりや自動化まで手を動かします。" },
  { step: "06", short: ["成果を", "測る"], title: "成果を測って、次へ", body: "施策が効いたのかを測り、次の改善（01）につなげます。" },
];

const alternatives: {
  kind: StumbleKind;
  title: string;
  good: string;
  stumble: string;
  detail: string;
  setalink: string;
}[] = [
  {
    kind: "self",
    title: "自分たちでやる",
    good: "費用がかからない",
    stumble: "本業が忙しくて、後回しになる",
    detail: "本業の時間が削られ、担当の人が異動・退職すると止まってしまいがち。",
    setalink: "何の数字を取り、どう集計するか。設計の段階から一緒に入ります。",
  },
  {
    kind: "tool",
    title: "ツールを入れる・一部だけ外注する",
    good: "すぐに形になる",
    stumble: "作った画面を、だんだん誰も見なくなる",
    detail: "「何を判断するための画面か」が決まっていないと、作っただけで使われなくなる。",
    setalink: "会社の方針から、見るべき指標と現場の行動まで逆算して組み立てます。",
  },
  {
    kind: "hire",
    title: "データ担当を採用する",
    good: "ノウハウが社内に残る",
    stumble: "募集しても、そもそも人が来ない",
    detail: "経営とデータの両方が分かる人は、なかなか見つからない。",
    setalink: "その役割を初月から担い、社内に引き継げる形で進めます。",
  },
  {
    kind: "wait",
    title: "いまは様子を見る",
    good: "手間がかからない",
    stumble: "1年後も、同じ場所にいる",
    detail: "いまのままでも回る。でも1年後も同じ「勘と経験」のまま、伸びしろを逃しているかもしれない。",
    setalink: "まずは60分の無料相談で、伸びしろがどこにありそうかを一緒に見てみましょう。",
  },
];

// 支援の中心はデータコンサルティング。AI・BPRはあわせて提供する
const mainArea = {
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
  },
  {
    icon: Workflow,
    name: "業務改善（BPR）",
    headline: "仕事の流れを整えて、定着させる",
    body: "業務の流れを見える形にしてボトルネックを特定し、GASやAPI連携での自動化も含めて、続けられる仕組みに落とし込みます。",
  },
];

// お客様の声（2026-10-14のインタビューより。話し言葉を読みやすく整えている）
// ※ 本番公開の前に、先方（フィットネス多店舗のご担当者）の掲載了承を取ること
const voices = [
  { quote: "言われたときに「これです」と渡せるものができた。", who: "フィットネス多店舗 データ担当の方" },
  { quote: "ノウハウとしては、1年前と比べたら全然ついた。", who: "フィットネス多店舗 データ担当の方" },
  { quote: "安定した土台を作っていきたいのであれば、お勧めしたい。", who: "フィットネス多店舗 データ担当の方" },
];

const cases = [
  {
    industry: "フィットネス（全国展開）",
    area: "データ",
    before: "店舗別・スタッフ別の売上を、毎月手作業で集計していた",
    after: "店舗別・スタッフ別の売上がすぐ見られるようになり、集計の手間が大きく減った",
    metric: "330",
    suffix: "時間/月",
    metricLabel: "業務の削減",
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
    metricLabel: "問い合わせに対応",
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
      <section className="pt-24 sm:pt-28 md:pt-32">
        <div className={container}>
          <div className="fade-in flex items-center gap-4 border-b border-ink pb-3">
            <span className="font-inter text-[11px] font-bold uppercase tracking-[0.3em]">Data Consulting</span>
            <span className="h-px flex-1 bg-ink/20" />
            <span className="text-xs font-bold">改善活動の精度を高める会社</span>
          </div>

          <div className="grid items-center gap-8 py-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-6 lg:py-14">
            <div>
              <h1
                className="fade-in-up font-display text-[2.15rem] font-black leading-[1.3] tracking-tight sm:text-[3.2rem] lg:text-[3rem] xl:text-[3.3rem]"
                style={{ animationDelay: "100ms", animationFillMode: "both" }}
              >
                <span className="inline-block">がんばっている改善を、</span>
                <br />
                <span className="inline-block">
                  <span className="marker">ちゃんと成果に</span>つなげる。
                </span>
              </h1>
              <p
                className="fade-in-up mt-7 max-w-xl text-[15px] leading-[2] text-gray sm:text-base"
                style={{ animationDelay: "220ms", animationFillMode: "both" }}
              >
                どこを直せば、いちばん効くのか。その施策は、本当に効いたのか。
                データコンサルティングで、数字で判断できる状態をつくり、改善が回り続けるまで一緒に走ります。
              </p>
              <div
                className="fade-in-up mt-9 flex flex-col gap-5 sm:flex-row sm:items-center"
                style={{ animationDelay: "320ms", animationFillMode: "both" }}
              >
                <PrimaryCta />
                <Link
                  href="#first-meeting"
                  className="group inline-flex items-center gap-2 self-start border-b-2 border-ink pb-0.5 text-sm font-bold transition-colors hover:border-accent-blue hover:text-accent-blue sm:self-auto"
                >
                  相談でやることを見る
                  <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                </Link>
              </div>
              <p className="mt-4 text-xs text-gray">初回相談は無料・オンライン ／ 2営業日以内にご連絡します</p>
            </div>

            <div className="fade-in" style={{ animationDelay: "250ms", animationFillMode: "both" }}>
              <HeroIllustration className="mx-auto w-full max-w-[500px]" />
            </div>
          </div>
        </div>

        {/* 実績の数字 */}
        <div className="border-y-2 border-ink bg-paper">
          <div className={container}>
            <div className="grid grid-cols-2 lg:grid-cols-4">
              {proofs.map((p, i) => (
                <div
                  key={p.label}
                  className={`py-6 pr-4 ${i % 2 === 1 ? "border-l border-ink pl-4 sm:pl-6" : ""} ${i >= 2 ? "border-t border-ink lg:border-t-0" : ""} ${i === 2 ? "lg:border-l lg:pl-6" : ""} ${i > 0 && i !== 2 ? "lg:pl-6" : ""}`}
                >
                  <p className="text-[11px] font-bold text-gray">{p.who}</p>
                  <p className="mt-1 font-mincho text-[2.4rem] leading-none sm:text-5xl">
                    {p.value}
                    <span className="ml-1 font-display text-sm font-bold">{p.unit}</span>
                  </p>
                  <p className="mt-2 text-sm font-bold">{p.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={`${container} flex justify-end py-4`}>
          <TextLink href="/cases">支援実績・事例を見る</TextLink>
        </div>
      </section>

      {/* ===== 01 こんなこと、ありませんか ===== */}
      <section id="worries" className="scroll-mt-20 py-20 md:py-28">
        <div className={container}>
          <FadeIn>
            <SectionTitle no="01" label="Check">こんなこと、ありませんか？</SectionTitle>
          </FadeIn>
          <div className="mt-10 grid items-center gap-10 md:grid-cols-[1fr_320px] lg:grid-cols-[1fr_360px]">
            <ul className="border-t border-ink">
              {worries.map((w, i) => (
                <FadeIn key={w} delay={i * 70}>
                  <li className="flex items-start gap-4 border-b border-ink py-4">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center border-2 border-ink bg-accent-lime">
                      <Check className="h-4 w-4" strokeWidth={3} />
                    </span>
                    <span className="text-[15px] font-bold leading-relaxed">{w}</span>
                  </li>
                </FadeIn>
              ))}
            </ul>
            <FadeIn direction="scale">
              <WorryIllustration className="mx-auto w-full max-w-[360px]" />
            </FadeIn>
          </div>
          <FadeIn>
            <blockquote className="mt-14 border-l-4 border-accent-lime pl-6">
              <p className="font-mincho text-xl leading-[1.7] sm:text-2xl">
                「いまのやり方でも、一応は回っている。でも、もっと伸ばせるはず。」
              </p>
              <p className="mt-3 text-sm text-gray">そう感じているなら、私たちがお役に立てます。</p>
            </blockquote>
          </FadeIn>
        </div>
      </section>

      {/* ===== 02 セタリンクがやること ===== */}
      <section id="support" className="scroll-mt-20 border-t border-ink bg-paper py-20 md:py-28">
        <div className={container}>
          <FadeIn>
            <SectionTitle
              no="02"
              label="What we do"
              lead="私たちは、ダッシュボードを作って終わりにする会社ではありません。お客様がすでに取り組んでいる改善活動を、データでもっと効果的にする会社です。"
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
            <ol className="border-t border-ink">
              {cycle.map((c, i) => (
                <FadeIn key={c.step} delay={i * 60}>
                  <li className={`flex gap-4 border-b border-ink py-4 ${i >= 3 ? "bg-lime-soft/70 px-3 -mx-3" : ""}`}>
                    <span className="w-8 shrink-0 font-inter text-sm font-bold text-accent-blue">{c.step}</span>
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-base font-black sm:text-lg">{c.title}</h3>
                        {c.note && (
                          <span className={`whitespace-nowrap border border-ink px-2 py-0.5 text-[11px] font-bold ${c.noteClass}`}>
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

      {/* ===== 03 よくある選択肢との違い ===== */}
      <section id="compare" className="scroll-mt-20 border-t border-ink py-20 md:py-28">
        <div className={container}>
          <FadeIn>
            <SectionTitle
              no="03"
              label="Why us"
              lead="どの方法にも良さがあります。ただ、成果にたどり着く前に、つまずきやすいところがあります。"
            >
              よくある4つの選択肢と、
              <br className="hidden sm:block" />
              つまずきやすいところ
            </SectionTitle>
          </FadeIn>
          <div className="mt-12 grid border-l border-t border-ink md:grid-cols-2">
            {alternatives.map((a, i) => (
              <FadeIn key={a.title} delay={i * 80}>
                <div className="flex h-full flex-col border-b border-r border-ink bg-paper p-6 md:p-8">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="text-lg font-black leading-snug sm:text-xl">{a.title}</h3>
                    <span className="font-inter text-xs font-bold text-gray">0{i + 1}</span>
                  </div>
                  <p className="mt-1 text-xs font-bold text-emerald-700">よいところ：{a.good}</p>
                  <div className="mt-5 border border-ink bg-background">
                    <StumbleScene kind={a.kind} label={a.stumble} className="w-full" />
                  </div>
                  <p className="mt-5 font-hand text-lg leading-snug text-[#E8590C]">つまずき：{a.stumble}</p>
                  <p className="mt-2 text-sm leading-[1.85] text-gray">{a.detail}</p>
                  <div className="mt-auto pt-5">
                    <div className="flex items-start gap-3 border-t-2 border-ink pt-4">
                      <span className="shrink-0 whitespace-nowrap bg-accent-blue px-2 py-1 text-[11px] font-bold text-white">
                        セタリンクなら
                      </span>
                      <p className="text-sm font-bold leading-[1.8]">{a.setalink}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 04 支援領域（データコンサルが中心） ===== */}
      <section id="areas" className="scroll-mt-20 border-t border-ink bg-paper py-20 md:py-28">
        <div className={container}>
          <FadeIn>
            <SectionTitle
              no="04"
              label="Services"
              lead="数字で判断できる状態をつくることが、私たちの支援の中心です。そのうえで必要に応じて、手間を減らすAI導入や、仕事の流れを整える業務改善を組み合わせます。"
            >
              支援の中心は、
              <br className="hidden sm:block" />
              データコンサルティング
            </SectionTitle>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="mt-12 grid items-center gap-8 border-2 border-ink bg-background p-6 sm:p-8 lg:grid-cols-[1.15fr_1fr] lg:p-10">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center border-2 border-ink bg-sky text-accent-blue">
                    <Database className="h-6 w-6" />
                  </span>
                  <div>
                    <span className="inline-flex whitespace-nowrap bg-ink px-2 py-0.5 text-[11px] font-bold text-accent-lime">メインの支援</span>
                    <p className="mt-1 text-sm font-bold">{mainArea.name}</p>
                  </div>
                </div>
                <h3 className="mt-6 text-2xl font-black leading-snug sm:text-[1.8rem]">{mainArea.headline}</h3>
                <p className="mt-4 text-[15px] leading-[1.9] text-gray">{mainArea.body}</p>
                <ol className="mt-6 border-t border-ink">
                  {mainArea.steps.map((step, i) => (
                    <li key={step} className="flex items-start gap-3 border-b border-ink py-3">
                      <span className="w-6 shrink-0 font-inter text-sm font-bold text-accent-blue">{i + 1}</span>
                      <span className="text-sm font-bold leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
              <DataIllustration className="mx-auto w-full max-w-[440px]" />
            </div>
          </FadeIn>

          <FadeIn>
            <p className="mt-14 text-lg font-black">あわせて、こんな支援もできます</p>
          </FadeIn>
          <div className="mt-5 grid gap-px border border-ink bg-ink md:grid-cols-2">
            {subAreas.map((a, i) => (
              <FadeIn key={a.name} delay={i * 100}>
                <div className="flex h-full gap-5 bg-background p-6 sm:p-7">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center border-2 border-ink bg-paper">
                    <a.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-bold text-gray">{a.name}</p>
                    <h3 className="mt-1 text-lg font-black leading-snug">{a.headline}</h3>
                    <p className="mt-3 text-sm leading-[1.85] text-gray">{a.body}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 05 お客様の声 ===== */}
      <section id="voice" className="scroll-mt-20 border-t border-ink py-20 md:py-28">
        <div className={container}>
          <FadeIn>
            <SectionTitle no="05" label="Voice">お客様の声</SectionTitle>
          </FadeIn>
          <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
            {voices.map((v, i) => (
              <FadeIn key={v.quote} delay={i * 100}>
                <figure className="h-full border-t-2 border-ink pt-6">
                  <span className="font-mincho text-6xl leading-none text-accent-blue">“</span>
                  <blockquote className="mt-2 font-mincho text-xl leading-[1.75] sm:text-[1.4rem]">{v.quote}</blockquote>
                  <figcaption className="mt-5 text-xs font-bold text-gray">― {v.who}</figcaption>
                </figure>
              </FadeIn>
            ))}
          </div>
          <p className="mt-8 text-xs text-gray">※ インタビューでのお話を、読みやすいように一部整えています。</p>
        </div>
      </section>

      {/* ===== 06 Before → After ===== */}
      <section id="cases" className="scroll-mt-20 border-t border-ink bg-paper py-20 md:py-28">
        <div className={container}>
          <FadeIn>
            <SectionTitle no="06" label="Before → After">支援で、こう変わりました</SectionTitle>
          </FadeIn>
          <div className="mt-12 border-t-2 border-ink">
            {cases.map((c, i) => (
              <FadeIn key={c.industry} delay={i * 80}>
                <div className="grid gap-5 border-b border-ink py-7 md:grid-cols-[180px_1fr_1fr_170px] md:gap-8">
                  <div>
                    <p className="text-sm font-black">{c.industry}</p>
                    <p className="mt-1 text-xs font-bold text-gray">{c.area === "AI" ? "AI導入支援" : "データコンサルティング"}</p>
                  </div>
                  <div>
                    <p className="font-inter text-[11px] font-bold uppercase tracking-widest text-gray">Before</p>
                    <p className="mt-1.5 text-sm leading-[1.85] text-gray">{c.before}</p>
                  </div>
                  <div>
                    <p className="font-inter text-[11px] font-bold uppercase tracking-widest">After</p>
                    <p className="mt-1.5 text-sm font-bold leading-[1.85]">{c.after}</p>
                  </div>
                  <div className="md:text-right">
                    <p className="font-mincho text-4xl leading-none">
                      {c.metric}
                      <span className="ml-1 font-display text-sm font-bold">{c.suffix}</span>
                    </p>
                    <p className="mt-2 text-xs font-bold text-gray">{c.metricLabel}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          <div className="mt-6 flex justify-end">
            <TextLink href="/cases">支援実績・事例をもっと見る</TextLink>
          </div>
        </div>
      </section>

      {/* ===== 07 初回相談でやること ===== */}
      <section id="first-meeting" className="scroll-mt-20 border-t border-ink py-20 md:py-28">
        <div className={container}>
          <FadeIn>
            <SectionTitle
              no="07"
              label="First meeting"
              lead="「どんなダッシュボードが欲しいですか？」からは始めません。事業のお話を伺いながら、改善すべきポイントを一緒に整理します。"
            >
              最初の60分で、
              <br className="hidden sm:block" />
              改善の「あたり」をつけます
            </SectionTitle>
          </FadeIn>

          <div className="mt-12 grid items-start gap-10 lg:grid-cols-[1.1fr_1fr]">
            <ol className="border-t border-ink">
              {questions.map((q, i) => (
                <FadeIn key={q} delay={i * 70}>
                  <li className="flex items-center gap-5 border-b border-ink py-5">
                    <span className="font-mincho text-3xl leading-none text-accent-blue">Q{i + 1}</span>
                    <span className="text-[15px] font-bold leading-relaxed sm:text-base">{q}</span>
                  </li>
                </FadeIn>
              ))}
            </ol>

            <FadeIn delay={150}>
              <div className="border-2 border-ink bg-paper p-6 sm:p-8">
                <TalkIllustration className="mx-auto w-full max-w-[320px]" />
                <p className="mt-6 text-lg font-black">相談のあとに、持ち帰れるもの</p>
                <ul className="mt-4 border-t border-ink">
                  {takeaways.map((t) => (
                    <li key={t} className="flex items-center gap-3 border-b border-ink py-3 text-[15px] font-bold">
                      <span className="flex h-6 w-6 items-center justify-center border-2 border-ink bg-accent-lime">
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
      </section>

      {/* ===== 08 ご相談の流れ ===== */}
      <section id="flow" className="scroll-mt-20 border-t border-ink bg-paper py-20 md:py-28">
        <div className={container}>
          <FadeIn>
            <SectionTitle no="08" label="Flow">ご相談から、支援開始までの流れ</SectionTitle>
          </FadeIn>
          <ol className="mt-12 grid border-t-2 border-ink sm:grid-cols-2 lg:grid-cols-4">
            {flow.map((f, i) => (
              <FadeIn key={f.step} delay={i * 80}>
                <li className={`h-full border-b border-ink py-6 sm:pr-6 lg:border-b-0 ${i > 0 ? "lg:border-l lg:pl-6" : ""} ${i % 2 === 1 ? "sm:border-l sm:pl-6 lg:pl-6" : ""}`}>
                  <span className="font-mincho text-4xl leading-none text-accent-blue">{f.step}</span>
                  <h3 className="mt-4 text-lg font-black">{f.title}</h3>
                  <p className="mt-2 text-sm leading-[1.85] text-gray">{f.body}</p>
                </li>
              </FadeIn>
            ))}
          </ol>
        </div>
      </section>

      {/* ===== 09 向いている会社 ===== */}
      <section id="fit" className="scroll-mt-20 border-t border-ink py-20 md:py-28">
        <div className={`${container} grid items-start gap-10 lg:grid-cols-2`}>
          <FadeIn>
            <SectionTitle
              no="09"
              label="For you"
              lead="たとえば人材サービス、多店舗展開のサービス業、フィットネスなど、集客から契約・継続までの流れが長い事業で、特にお役に立てます。"
            >
              こんな会社と、
              <br className="hidden sm:block" />
              一緒に取り組みたいと考えています
            </SectionTitle>
          </FadeIn>
          <ul className="border-t-2 border-ink lg:mt-[3.25rem]">
            {fits.map((f, i) => (
              <FadeIn key={f} delay={i * 70}>
                <li className="flex items-start gap-4 border-b border-ink py-4">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center bg-accent-blue text-white">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  <span className="text-[15px] font-bold leading-relaxed">{f}</span>
                </li>
              </FadeIn>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== 10 私たちの想い ===== */}
      <section id="philosophy" className="scroll-mt-20 border-t border-ink bg-paper py-20 md:py-28">
        <div className={container}>
          <FadeIn>
            <SectionTitle
              no="10"
              label="Our belief"
              lead="最後は、お客様が自分たちで改善を回せる状態をゴールにしています。"
            >
              人々が本気ではたらく社会を、
              <br />
              共に創る。
            </SectionTitle>
          </FadeIn>
          <div className="mt-12 grid border-t-2 border-ink md:grid-cols-3">
            {beliefs.map((b, i) => (
              <FadeIn key={b.label} delay={i * 100}>
                <div className={`h-full border-b border-ink py-7 md:border-b-0 md:pr-6 ${i > 0 ? "md:border-l md:pl-6" : ""}`}>
                  <span className="font-inter text-xs font-bold tracking-[0.3em] text-accent-blue">{b.label}</span>
                  <h3 className="mt-3 text-lg font-black leading-snug">{b.title}</h3>
                  <p className="mt-3 text-sm leading-[1.85] text-gray">{b.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 11 よくある質問 ===== */}
      <section id="faq" className="scroll-mt-20 border-t border-ink py-20 md:py-28">
        <div className={`${container} grid gap-10 lg:grid-cols-[1fr_1.4fr]`}>
          <FadeIn>
            <SectionTitle no="11" label="FAQ">よくある質問</SectionTitle>
            <div className="mt-8">
              <TextLink href="/faq">よくある質問をすべて見る</TextLink>
            </div>
          </FadeIn>
          <div className="lg:mt-[3.25rem]">
            <FaqList items={topFaqs} />
          </div>
        </div>
      </section>

      {/* ===== 最後のCTA ===== */}
      <CtaPanel />
    </>
  );
}
