import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import {
  HeroIllustration,
  WorryIllustration,
  TalkIllustration,
} from "@/components/Illustrations";
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
  RotateCcw,
  Plus,
} from "lucide-react";

/* ===== 文言（Miro「ICP・事業方向性 整理」PART 1〜3 と営業コンサルのフレームから） ===== */

const worries = [
  "広告・営業・キャンペーン…施策は打っているのに、どれが効いたのか分からない",
  "結局、どこを改善すればいちばん成果が出るのかを決められない",
  "数字がExcelやスプレッドシートに散らばっていて、見たいときにすぐ見られない",
  "事業が大きくなって、感覚だけでは判断しきれなくなってきた",
  "ツールを入れてみたものの、更新する人がいなくて止まってしまった",
];

const cycle = [
  { step: "01", title: "いまの改善活動を知る", body: "広告・営業・店舗施策など、いま取り組んでいることと目標を伺います。" },
  { step: "02", title: "仮説を立てる", body: "事業の流れを分解して、何が成果を左右しているのかを考えます。" },
  { step: "03", title: "データで確かめる", body: "散らばった数字を整理し、見るべき指標をそろえて確かめます。" },
  { step: "04", title: "ボトルネックを見つける", body: "どこで成果が落ちているのか、いちばん効く改善ポイントを特定します。", highlight: true },
  { step: "05", title: "改善施策を実行する", body: "現場の行動に落とし込み、必要なら仕組みづくりや自動化まで手を動かします。" },
  { step: "06", title: "成果を測って、次へ", body: "施策が効いたのかを測り、次の改善につなげます。" },
];

const alternatives = [
  {
    icon: Users,
    title: "自分たちでやる",
    stall: "費用はかからない。でも本業の時間が削られ、担当の人がいないと止まってしまいがち。",
    setalink: "何の数字を取り、どう集計するか。設計の段階から一緒に入ります。",
  },
  {
    icon: MonitorSmartphone,
    title: "ツールを入れる・一部だけ外注する",
    stall: "形にはなる。でも「何を判断するための画面か」が決まっていないと、だんだん見なくなる。",
    setalink: "会社の方針から、見るべき指標と現場の行動まで逆算して組み立てます。",
  },
  {
    icon: UserPlus,
    title: "データ担当を採用する",
    stall: "ノウハウは社内に残る。でも採用は難しく、経営とデータの両方が分かる人はなかなかいない。",
    setalink: "その役割を初月から担い、社内に引き継げる形で進めます。",
  },
  {
    icon: Hourglass,
    title: "いまは様子を見る",
    stall: "いまのままでも回る。でも1年後も同じ「勘と経験」のまま、伸びしろを逃しているかもしれない。",
    setalink: "まずは60分の無料相談で、伸びしろがどこにありそうかを一緒に見てみましょう。",
  },
];

const areas = [
  {
    icon: Database,
    name: "データコンサルティング",
    headline: "判断に使える数字を、そろえる",
    body: "散らばった数字を整理して見るべき指標を決め、いつでも正しい数字が見られる状態をつくります。",
    tags: ["KPI設計", "データ整備", "Power BI・Looker Studio"],
    color: "bg-sky text-accent-blue",
  },
  {
    icon: Bot,
    name: "AI導入支援",
    headline: "手作業の時間を、改善の時間に変える",
    body: "生成AIを業務の流れに組み込み、集計・資料づくり・問い合わせ対応などの手間を減らします。現場で使い続けられるところまで伴走します。",
    tags: ["ChatGPT・Gemini", "業務への組み込み", "社内での定着"],
    color: "bg-mint text-emerald-700",
  },
  {
    icon: Workflow,
    name: "業務改善（BPR）",
    headline: "仕事の流れを整えて、定着させる",
    body: "業務の流れを見える形にしてボトルネックを特定し、GASやAPI連携での自動化も含めて、続けられる仕組みに落とし込みます。",
    tags: ["業務フローの整理", "自動化", "仕組み化"],
    color: "bg-peach text-orange-700",
  },
];

const cases = [
  {
    industry: "フィットネス（全国展開）",
    area: "データ",
    before: "店舗別・スタッフ別の売上を、毎月手作業で集計していた",
    after: "店舗別・スタッフ別の売上がすぐ見られるようになり、集計の手間が大きく減った",
    metric: 330,
    suffix: "時間",
    metricLabel: "月あたりの業務削減",
  },
  {
    industry: "サービス業（経営層・PR部門）",
    area: "AI",
    before: "PR文案づくりや情報探しに、多くの時間をとられていた",
    after: "GeminiとGoogleのツールを連携し、PR文案の作成は40%、情報検索は60%の時間を削減",
    metric: 60,
    suffix: "%",
    metricLabel: "情報検索の時間削減",
  },
  {
    industry: "公益法人",
    area: "AI",
    before: "区民からの問い合わせには、受付時間内でしか対応できなかった",
    after: "区民向けの生成AIチャットボットを導入し、問い合わせ対応を24時間化",
    metric: 24,
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

const beliefs = [
  {
    label: "WHY",
    title: "人々が本気ではたらく社会を共に創る",
    body: "改善の手応えが数字で分かると、仕事はもっとおもしろくなる。そんな職場を、一社ずつ増やしていきたいと考えています。",
  },
  {
    label: "HOW",
    title: "再現性ある技術を、個人と組織になじませる",
    body: "一部の人しか使えない仕組みでは、改善は続きません。現場で使い続けられる形に落とし込みます。",
  },
  {
    label: "WHAT",
    title: "データドリブン経営支援・AI導入支援",
    body: "数字で判断し、AIで手間を減らす。その両方から、お客様の改善活動を支えます。",
  },
];

const faqs = [
  {
    q: "費用はどのくらいかかりますか？",
    a: "月額制の伴走支援が中心です。ご相談の内容と、解決したい課題に合わせてお見積りします。初回相談（60分）は無料です。",
  },
  {
    q: "小さく始めることはできますか？",
    a: "はい。まずは一つの事業・一つのテーマに絞って始め、成果を確かめながら広げていく進め方もできます。",
  },
  {
    q: "社内にデータやITに詳しい人がいなくても大丈夫ですか？",
    a: "大丈夫です。何の数字を取り、どう集計するかの設計から一緒に行います。最終的には、社内で改善を回せる状態をゴールにしています。",
  },
  {
    q: "どのくらいの期間で成果が出ますか？",
    a: "テーマや、いまあるデータの状態によって変わります。初回相談で、進め方とおおよその期間の見通しをお伝えします。",
  },
  {
    q: "オンラインでも相談できますか？",
    a: "はい。初回相談も、その後の定例ミーティングも、オンラインで対応しています。",
  },
  {
    q: "どんなツールに対応していますか？",
    a: "Power BI・Looker StudioなどのBIツール、ChatGPT・Geminiなどの生成AI、Google Apps Scriptや各種API連携などに対応しています。いまお使いのツールを活かす形でご提案します。",
  },
];

/* ===== 共通パーツ ===== */

function SectionTitle({
  label,
  children,
  lead,
  center = false,
}: {
  label: string;
  children: React.ReactNode;
  lead?: React.ReactNode;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="font-inter text-xs font-bold uppercase tracking-[0.25em] text-accent-blue">
        {label}
      </p>
      <h2 className="mt-3 font-maru text-[1.6rem] font-bold leading-[1.45] tracking-tight sm:text-3xl md:text-4xl">
        {children}
      </h2>
      {lead && (
        <p className="mt-5 text-[15px] leading-[1.9] text-gray">{lead}</p>
      )}
    </div>
  );
}

function PrimaryCta({ children = "無料で相談する（60分）", className = "" }: { children?: React.ReactNode; className?: string }) {
  return (
    <Link
      href="/contact"
      className={`group inline-flex h-14 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-accent-blue px-8 text-[15px] font-bold text-white shadow-[0_5px_0_#1E3FC4] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_7px_0_#1E3FC4] active:translate-y-1 active:shadow-[0_1px_0_#1E3FC4] ${className}`}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </Link>
  );
}

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
          <div className="flex flex-col gap-3 rounded-3xl border border-border bg-white/80 p-5 sm:flex-row sm:items-center sm:gap-6 sm:px-8">
            <p className="shrink-0 text-xs font-bold text-gray">支援領域</p>
            <div className="flex flex-wrap gap-2">
              {areas.map((a) => (
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

          <div className="relative mt-14">
            <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-6">
              {cycle.map((c, i) => (
                <FadeIn key={c.step} delay={i * 90}>
                  <li
                    className={`relative flex h-full flex-col rounded-3xl border-2 p-6 ${
                      c.highlight
                        ? "border-foreground bg-lime-soft"
                        : "border-border bg-white"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`flex h-10 w-10 items-center justify-center rounded-full font-inter text-sm font-bold ${c.highlight ? "bg-foreground text-accent-lime" : "bg-sky text-accent-blue"}`}>
                        {c.step}
                      </span>
                      <h3 className="font-maru text-lg font-bold">{c.title}</h3>
                    </div>
                    <p className="mt-3 text-sm leading-[1.85] text-gray">{c.body}</p>
                    {c.highlight && (
                      <span className="absolute -top-3 right-5 rounded-full bg-foreground px-3 py-1 text-[11px] font-bold text-white">
                        いちばん大事なところ
                      </span>
                    )}
                  </li>
                </FadeIn>
              ))}
            </ol>
            <FadeIn>
              <div className="mt-6 flex items-center justify-center gap-2 rounded-full bg-sky px-5 py-3 text-sm font-bold text-accent-blue">
                <RotateCcw className="h-4 w-4" />
                01に戻って、改善をくり返す。この一周を、一緒に回します。
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ===== よくある選択肢との違い ===== */}
      <section id="compare" className="scroll-mt-20 bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionTitle
              label="Why us"
              lead="どの方法にも良さがあります。ただ、それぞれに止まりやすいところがあります。"
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
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-surface">
                      <a.icon className="h-5 w-5" />
                    </span>
                    <h3 className="font-maru text-lg font-bold">{a.title}</h3>
                  </div>
                  <p className="mt-4 text-sm leading-[1.85] text-gray">{a.stall}</p>
                  <div className="mt-5 flex flex-1 items-start gap-3 rounded-2xl bg-sky px-4 py-4">
                    <span className="shrink-0 rounded-full bg-accent-blue px-2.5 py-1 text-[11px] font-bold text-white">
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

      {/* ===== 3つの支援領域 ===== */}
      <section id="areas" className="scroll-mt-20 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionTitle
              label="Services"
              lead="入口はひとつでなくて大丈夫です。「数字」「手間」「仕事の流れ」のどこに課題があるかに合わせて、組み合わせてご提案します。"
            >
              課題に合わせて、
              <br className="hidden sm:block" />
              3つの領域を組み合わせます
            </SectionTitle>
          </FadeIn>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {areas.map((a, i) => (
              <FadeIn key={a.name} delay={i * 100}>
                <div className="card-hover flex h-full flex-col rounded-3xl border border-border bg-white p-7">
                  <span className={`flex h-14 w-14 items-center justify-center rounded-2xl ${a.color}`}>
                    <a.icon className="h-7 w-7" />
                  </span>
                  <p className="mt-6 text-xs font-bold text-gray">{a.name}</p>
                  <h3 className="mt-1.5 font-maru text-xl font-bold leading-snug">{a.headline}</h3>
                  <p className="mt-4 flex-1 text-sm leading-[1.85] text-gray">{a.body}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {a.tags.map((t) => (
                      <span key={t} className="rounded-full bg-surface px-3 py-1 text-xs font-medium text-foreground/80">
                        {t}
                      </span>
                    ))}
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
                支援事例をもっと見る
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

          <FadeIn>
            <div className="mt-8 flex flex-col gap-5 rounded-3xl bg-surface p-6 sm:flex-row sm:items-center sm:p-8">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white font-maru text-xl font-bold text-accent-blue">
                片口
              </div>
              <div>
                <p className="text-xs font-bold text-gray">代表取締役</p>
                <p className="mt-1 font-maru text-lg font-bold">片口 潤哉</p>
                <p className="mt-2 text-sm leading-[1.85] text-gray">
                  人材大手の経営企画部門で6年間、役員向けのレポートづくりから社内研修の講師まで、データの活用に携わる。経営とデータの両方が分かる人が足りない現場を数多く見てきた経験から、2026年4月に株式会社セタリンクを設立。
                </p>
              </div>
            </div>
          </FadeIn>
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
          <div className="mt-10 space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="group rounded-2xl bg-white px-5 py-1 open:pb-4 sm:px-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-[15px] font-bold [&::-webkit-details-marker]:hidden">
                  <span className="flex items-start gap-3">
                    <span className="font-inter text-accent-blue">Q.</span>
                    {f.q}
                  </span>
                  <Plus className="h-5 w-5 shrink-0 text-accent-blue transition-transform duration-300 group-open:rotate-45" />
                </summary>
                <p className="border-t border-border pt-4 text-sm leading-[1.9] text-gray">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 最後のCTA ===== */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="relative overflow-hidden rounded-[2rem] bg-navy px-6 py-14 text-center text-white sm:px-10 md:py-20">
              <div className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-accent-blue/40 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-20 -right-10 h-56 w-56 rounded-full bg-accent-lime/30 blur-3xl" />
              <p className="relative font-inter text-xs font-bold uppercase tracking-[0.25em] text-accent-lime">
                Contact
              </p>
              <h2 className="relative mt-4 font-maru text-[1.6rem] font-bold leading-[1.5] sm:text-3xl md:text-4xl">
                まずは60分、
                <br className="sm:hidden" />
                いまの改善の話を
                <br />
                聞かせてください。
              </h2>
              <p className="relative mx-auto mt-5 max-w-md text-sm leading-[1.9] text-white/70">
                「何から相談すればいいか分からない」という段階でも大丈夫です。初回相談は無料、オンラインで対応します。
              </p>
              <div className="relative mt-9 flex justify-center">
                <Link
                  href="/contact"
                  className="group inline-flex h-14 items-center justify-center gap-2 rounded-full bg-accent-lime px-9 text-[15px] font-bold text-navy shadow-[0_5px_0_#8FAE1C] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_7px_0_#8FAE1C] active:translate-y-1 active:shadow-[0_1px_0_#8FAE1C]"
                >
                  無料で相談する（60分）
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
              <p className="relative mt-4 text-xs text-white/50">2営業日以内にご連絡します</p>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
