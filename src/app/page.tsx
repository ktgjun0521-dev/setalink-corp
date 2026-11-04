import Link from "next/link";
import Image from "next/image";
import FaqList from "@/components/FaqList";
import { SectionTitle, PrimaryCta, SecondaryCta, TextLink, CtaPanel } from "@/components/Section";
import { ImprovementCycle, StumbleScene, type StumbleKind } from "@/components/Diagrams";
import { topFaqs } from "@/lib/faq";
import { beliefs } from "@/lib/company";
import { Check, ChevronDown, ChevronRight } from "lucide-react";

/* ===== 文言（Miro「ICP・事業方向性 整理」PART 1〜3 と営業コンサルのフレームから） ===== */

const container = "mx-auto max-w-6xl px-5 sm:px-6 lg:px-8";

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
    noteClass: "border border-border bg-surface",
  },
  {
    step: "04",
    short: ["ボトルネック", "を見つける"],
    title: "ボトルネックを見つける",
    body: "どこで成果が落ちているのか、いちばん効く改善ポイントを特定します。",
    note: "ここからが本番",
    noteClass: "bg-accent-blue text-white",
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
    image: "/images/case-service.jpg",
    name: "AI導入支援",
    headline: "手作業の時間を、改善の時間に変える",
    body: "生成AIを業務の流れに組み込み、集計・資料づくり・問い合わせ対応などの手間を減らします。現場で使い続けられるところまで伴走します。",
  },
  {
    image: "/images/case-hr.jpg",
    name: "業務改善（BPR）",
    headline: "仕事の流れを整えて、定着させる",
    body: "業務の流れを見える形にしてボトルネックを特定し、GASやAPI連携での自動化も含めて、続けられる仕組みに落とし込みます。",
  },
];

const cases = [
  {
    image: "/images/case-fitness.jpg",
    industry: "フィットネス（全国展開）",
    area: "データコンサルティング",
    before: "店舗別・スタッフ別の売上を、毎月手作業で集計していた",
    after: "店舗別・スタッフ別の売上がすぐ見られるようになり、集計の手間が大きく減った",
    metric: "330",
    suffix: "時間/月",
    metricLabel: "業務の削減",
  },
  {
    image: "/images/case-food.jpg",
    industry: "飲食",
    area: "データコンサルティング",
    before: "店舗別の売上報告をExcelでまとめていて、更新と確認に時間がかかっていた",
    after: "店舗別の売上と人件費のバランスがすぐ見られるようになり、商品別の利益率をもとにセットを組み替えた",
    metric: "+15",
    suffix: "%",
    metricLabel: "利益率の改善",
  },
  {
    image: "/images/company-bg.jpg",
    industry: "公益法人",
    area: "AI導入支援",
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
      <section className="relative overflow-hidden pt-16 text-white">
        <Image src="/images/contact-bg.jpg" alt="" fill priority sizes="100vw" className="object-cover object-[70%_40%]" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/25" />
        <div className={`${container} relative py-16 md:py-24 lg:py-28`}>
          <p className="text-[13px] font-medium sm:text-sm">データコンサルティング ／ 改善活動の精度を高める会社</p>
          <h1 className="mt-5 font-serif-jp text-[1.75rem] font-medium leading-[1.55] tracking-[0.06em] sm:text-[2.5rem] lg:text-[2.9rem]">
            <span className="inline-block">がんばっている改善を、</span>
            <br />
            <span className="inline-block">ちゃんと成果につなげる。</span>
          </h1>
          <p className="mt-6 max-w-xl text-[15px] leading-[2] sm:text-base">
            どこを直せば、いちばん効くのか。その施策は、本当に効いたのか。
            データコンサルティングで、数字で判断できる状態をつくり、改善が回り続けるまで一緒に走ります。
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <PrimaryCta />
            <Link
              href="#first-meeting"
              className="inline-flex h-[54px] items-center justify-center gap-2 whitespace-nowrap rounded-[2px] border border-white bg-transparent px-9 text-[15px] font-bold text-white transition-colors hover:bg-white/10"
            >
              相談でやることを見る
              <ChevronDown className="h-4 w-4" />
            </Link>
          </div>
          <p className="mt-4 text-xs">初回相談は無料・オンライン ／ 2営業日以内にご連絡します</p>
        </div>
      </section>

      {/* ===== こんなこと、ありませんか ===== */}
      <section id="worries" className="scroll-mt-16 bg-surface py-16 md:py-24">
        <div className={container}>
          <SectionTitle>こんなこと、ありませんか？</SectionTitle>
          <ul className="mt-12 grid gap-x-10 gap-y-8 md:grid-cols-6">
            {worries.map((w, i) => (
              <li key={w} className={i < 3 ? "md:col-span-2" : "md:col-span-3"}>
                <p className="flex items-center gap-2.5 font-bold">
                  <span className="h-3 w-3 bg-accent-blue" />
                  課題 <span className="text-lg text-accent-blue">{i + 1}</span>
                </p>
                <p className="mt-2 text-[15px] font-medium leading-[1.9]">{w}</p>
              </li>
            ))}
          </ul>
          <div className="mt-14 border-t border-border pt-10 text-center">
            <p className="text-lg font-bold leading-[1.8] sm:text-xl">
              「いまのやり方でも、一応は回っている。
              <br className="hidden sm:block" />
              でも、もっと伸ばせるはず。」
            </p>
            <p className="mt-3 text-[15px]">そう感じているなら、私たちがお役に立てます。</p>
          </div>
        </div>
      </section>

      {/* ===== セタリンクがやること ===== */}
      <section id="support" className="scroll-mt-16 py-16 md:py-24">
        <div className={container}>
          <SectionTitle lead="私たちは、ダッシュボードを作って終わりにする会社ではありません。お客様がすでに取り組んでいる改善活動を、データでもっと効果的にする会社です。">
            見える化して終わり、
            <br className="sm:hidden" />
            にしない。
          </SectionTitle>

          <div className="mt-12 grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <ImprovementCycle steps={cycle} className="mx-auto w-full max-w-[460px]" />
            <ol className="border-t border-border">
              {cycle.map((c, i) => (
                <li key={c.step} className={`flex gap-4 border-b border-border py-4 ${i >= 3 ? "bg-light-blue px-3 -mx-3" : ""}`}>
                  <span className="w-7 shrink-0 font-bold text-accent-blue">{c.step}</span>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-bold">{c.title}</h3>
                      {c.note && <span className={`whitespace-nowrap px-2 py-0.5 text-[11px] font-bold ${c.noteClass}`}>{c.note}</span>}
                    </div>
                    <p className="mt-1 text-sm leading-[1.9]">{c.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ===== よくある選択肢との違い ===== */}
      <section id="compare" className="scroll-mt-16 bg-surface py-16 md:py-24">
        <div className={container}>
          <SectionTitle lead="どの方法にも良さがあります。ただ、成果にたどり着く前に、つまずきやすいところがあります。">
            よくある4つの選択肢と、
            <br className="hidden sm:block" />
            つまずきやすいところ
          </SectionTitle>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {alternatives.map((a) => (
              <div key={a.title} className="flex flex-col border border-border bg-white p-6 md:p-7">
                <h3 className="text-lg font-bold leading-snug">{a.title}</h3>
                <p className="mt-1 text-[13px] text-gray">よいところ：{a.good}</p>
                <div className="mt-4 bg-surface">
                  <StumbleScene kind={a.kind} label={a.stumble} className="w-full" />
                </div>
                <p className="mt-4 font-bold text-[#B3392F]">つまずき：{a.stumble}</p>
                <p className="mt-1 text-sm leading-[1.9]">{a.detail}</p>
                <div className="mt-auto pt-4">
                  <div className="bg-light-blue px-4 py-3">
                    <p className="text-[13px] font-bold text-accent-blue">セタリンクなら</p>
                    <p className="mt-1 text-sm font-medium leading-[1.8]">{a.setalink}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 支援領域（データコンサルが中心） ===== */}
      <section id="areas" className="scroll-mt-16 py-16 md:py-24">
        <div className={container}>
          <SectionTitle lead="数字で判断できる状態をつくることが、私たちの支援の中心です。そのうえで必要に応じて、手間を減らすAI導入や、仕事の流れを整える業務改善を組み合わせます。">
            支援の中心は、
            <br className="sm:hidden" />
            データコンサルティング
          </SectionTitle>

          <div className="mt-12 grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="relative aspect-[3/2]">
              <Image src="/images/case-data.jpg" alt="ノートパソコンに表示された数値のグラフ" fill sizes="(max-width: 1024px) 100vw, 540px" className="object-cover" />
            </div>
            <div>
              <p className="flex items-center gap-2.5 font-bold">
                <span className="h-3 w-3 bg-accent-blue" />
                {mainArea.name}
                <span className="ml-1 bg-accent-blue px-2 py-0.5 text-[11px] font-bold text-white">メインの支援</span>
              </p>
              <h3 className="mt-3 text-xl font-bold leading-snug sm:text-2xl">{mainArea.headline}</h3>
              <p className="mt-3 text-[15px] leading-[1.9]">{mainArea.body}</p>
              <ol className="mt-5 border-t border-border">
                {mainArea.steps.map((step, i) => (
                  <li key={step} className="flex items-start gap-3 border-b border-border py-2.5">
                    <span className="w-5 shrink-0 font-bold text-accent-blue">{i + 1}</span>
                    <span className="text-sm font-medium leading-[1.8]">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <p className="mt-16 text-center text-lg font-bold">あわせて、こんな支援もできます</p>
          <div className="mt-6 grid gap-8 md:grid-cols-2">
            {subAreas.map((a) => (
              <div key={a.name}>
                <div className="relative aspect-[16/9]">
                  <Image src={a.image} alt="" fill sizes="(max-width: 768px) 100vw, 540px" className="object-cover" />
                </div>
                <p className="mt-4 text-[13px] font-bold text-accent-blue">{a.name}</p>
                <h3 className="mt-1 text-lg font-bold leading-snug">{a.headline}</h3>
                <p className="mt-2 text-sm leading-[1.9]">{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Before → After ===== */}
      <section id="cases" className="scroll-mt-16 bg-surface py-16 md:py-24">
        <div className={container}>
          <SectionTitle>支援で、こう変わりました</SectionTitle>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {cases.map((c) => (
              <article key={c.industry} className="flex flex-col bg-white">
                <div className="relative aspect-[16/10]">
                  <Image src={c.image} alt="" fill sizes="(max-width: 768px) 100vw, 360px" className="object-cover" />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-[13px] text-gray">{c.area}</p>
                  <h3 className="mt-0.5 font-bold">{c.industry}</h3>
                  <p className="mt-3 text-[13px] font-bold text-gray">Before</p>
                  <p className="text-sm leading-[1.8]">{c.before}</p>
                  <p className="mt-3 text-[13px] font-bold text-accent-blue">After</p>
                  <p className="text-sm font-medium leading-[1.8]">{c.after}</p>
                  <p className="mt-auto pt-4 text-sm font-bold">
                    <span className="text-2xl text-accent-blue">{c.metric}</span>
                    <span className="ml-0.5 text-accent-blue">{c.suffix}</span>
                    <span className="ml-2 text-[13px] font-medium text-gray">{c.metricLabel}</span>
                  </p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center">
            <SecondaryCta href="/cases">支援実績・事例をもっと見る</SecondaryCta>
          </div>
        </div>
      </section>

      {/* ===== 初回相談でやること ===== */}
      <section id="first-meeting" className="scroll-mt-16 py-16 md:py-24">
        <div className={container}>
          <SectionTitle lead="「どんなダッシュボードが欲しいですか？」からは始めません。事業のお話を伺いながら、改善すべきポイントを一緒に整理します。">
            最初の60分で、
            <br className="sm:hidden" />
            改善の「あたり」をつけます
          </SectionTitle>

          <div className="mt-12 grid items-start gap-10 lg:grid-cols-2 lg:gap-12">
            <div>
              <div className="relative aspect-[3/2]">
                <Image src="/images/case-hr.jpg" alt="テーブルを囲んで打ち合わせをする人たち" fill sizes="(max-width: 1024px) 100vw, 540px" className="object-cover object-[50%_60%]" />
              </div>
            </div>
            <div>
              <ol className="border-t border-border">
                {questions.map((q, i) => (
                  <li key={q} className="flex items-start gap-3 border-b border-border py-3">
                    <span className="shrink-0 font-bold text-accent-blue">Q{i + 1}</span>
                    <span className="text-[15px] font-medium leading-[1.8]">{q}</span>
                  </li>
                ))}
              </ol>
              <p className="mt-7 font-bold">相談のあとに、持ち帰れるもの</p>
              <ul className="mt-3 space-y-1.5">
                {takeaways.map((t) => (
                  <li key={t} className="flex items-center gap-2.5 text-[15px] font-medium">
                    <Check className="h-4 w-4 text-accent-blue" strokeWidth={3} />
                    {t}
                  </li>
                ))}
              </ul>
              <div className="mt-7">
                <PrimaryCta className="w-full sm:w-auto" />
                <p className="mt-2 text-xs text-gray">費用はかかりません・オンラインで対応します</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ご相談の流れ ===== */}
      <section id="flow" className="scroll-mt-16 bg-surface py-16 md:py-24">
        <div className={container}>
          <SectionTitle>ご相談から、支援開始までの流れ</SectionTitle>
          <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
            {flow.map((f, i) => (
              <li key={f.step} className="relative border border-border bg-white p-5">
                <span className="font-bold text-accent-blue">{f.step}</span>
                <h3 className="mt-1 font-bold">{f.title}</h3>
                <p className="mt-2 text-sm leading-[1.8]">{f.body}</p>
                {i < flow.length - 1 && (
                  <ChevronRight className="absolute -right-[22px] top-1/2 hidden h-5 w-5 -translate-y-1/2 text-accent-blue lg:block" />
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ===== 向いている会社 ===== */}
      <section id="fit" className="scroll-mt-16 py-16 md:py-24">
        <div className={container}>
          <SectionTitle lead="たとえば人材サービス、多店舗展開のサービス業、フィットネスなど、集客から契約・継続までの流れが長い事業で、特にお役に立てます。">
            こんな会社と、
            <br className="sm:hidden" />
            一緒に取り組みたいと考えています
          </SectionTitle>
          <ul className="mx-auto mt-10 grid max-w-4xl gap-x-10 gap-y-3 md:grid-cols-2">
            {fits.map((f) => (
              <li key={f} className="flex items-start gap-3 border-b border-border pb-3">
                <Check className="mt-1 h-4 w-4 shrink-0 text-accent-blue" strokeWidth={3} />
                <span className="text-[15px] font-medium leading-[1.8]">{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== 私たちの想い ===== */}
      <section id="philosophy" className="scroll-mt-16 bg-surface py-16 md:py-24">
        <div className={container}>
          <SectionTitle lead="最後は、お客様が自分たちで改善を回せる状態をゴールにしています。">
            人々が本気ではたらく社会を、
            <br />
            共に創る。
          </SectionTitle>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {beliefs.map((b) => (
              <div key={b.label} className="border-t-[3px] border-accent-blue bg-white p-6">
                <p className="text-sm font-bold text-accent-blue">{b.label}</p>
                <h3 className="mt-2 font-bold leading-snug">{b.title}</h3>
                <p className="mt-3 text-sm leading-[1.9]">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== よくある質問 ===== */}
      <section id="faq" className="scroll-mt-16 py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">
          <SectionTitle>よくある質問</SectionTitle>
          <div className="mt-10">
            <FaqList items={topFaqs} />
          </div>
          <div className="mt-6 text-right">
            <TextLink href="/faq">よくある質問をすべて見る</TextLink>
          </div>
        </div>
      </section>

      {/* ===== 最後のCTA ===== */}
      <CtaPanel />
    </>
  );
}
