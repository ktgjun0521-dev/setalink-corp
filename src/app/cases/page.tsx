import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";
import { SectionTitle, PageHero, CtaPanel } from "@/components/Section";
import { DataIllustration } from "@/components/Illustrations";
import { ArrowRight, ArrowDown, Database, Bot, Workflow, type LucideIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "支援実績・事例",
  description:
    "データコンサルティングを中心とした、株式会社セタリンクの支援実績と事例。業種・テーマ別の実績と、支援の前後で何が変わったかをご紹介します。",
  alternates: {
    canonical: "https://setalinkapp.com/cases",
  },
};

/* ===== 支援実績（社名は出さず業種で表記） ===== */

type AreaKey = "data" | "ai" | "bpr";

const areaMeta: Record<AreaKey, { name: string; icon: LucideIcon; color: string }> = {
  data: { name: "データコンサルティング", icon: Database, color: "bg-sky text-accent-blue" },
  ai: { name: "AI導入支援", icon: Bot, color: "bg-mint text-emerald-700" },
  bpr: { name: "業務改善（BPR）", icon: Workflow, color: "bg-peach text-orange-700" },
};

const track: { area: AreaKey; items: { industry: string; theme: string; tags: string[] }[] }[] = [
  {
    area: "data",
    items: [
      { industry: "パーソナルジム（多店舗）", theme: "店舗別の実績と売上がそろって見られる仕組みづくり", tags: ["KPI設計", "データ基盤", "Looker Studio"] },
      { industry: "パーソナルジム（多店舗）", theme: "物販・ECの販売実績を一か所で見られる仕組みと、人事データの分析", tags: ["物販・EC", "人事データ"] },
      { industry: "人材紹介", theme: "流入から入社までの流れを数字で見える形にし、改善ポイントを特定", tags: ["ファネル分析", "KPI設計"] },
      { industry: "大手メーカー", theme: "Power BIの活用についてのスポットコンサルティング", tags: ["Power BI"] },
      { industry: "小規模事業者", theme: "経営管理シートと収益性の分析、経営ミーティングへの同席", tags: ["経営管理", "収益性分析"] },
    ],
  },
  {
    area: "ai",
    items: [
      { industry: "公益財団（行政系）", theme: "区民向け生成AIチャットボットの導入と、職員向けの研修・6か月の伴走", tags: ["生成AI", "チャットボット"] },
      { industry: "老舗酒蔵（製造業）", theme: "Google Workspaceへの移行と、Geminiを使った業務フローづくり", tags: ["Gemini", "GAS"] },
    ],
  },
  {
    area: "bpr",
    items: [
      { industry: "人材サービス（看護師の転職支援）", theme: "スプレッドシートとSaaSをAPIでつなぎ、手作業を自動化", tags: ["API連携", "自動化"] },
      { industry: "農業協同組合", theme: "kintoneアプリの構築と、現場への定着支援", tags: ["kintone", "定着支援"] },
    ],
  },
];

const industries = [
  "フィットネス",
  "人材サービス",
  "飲食",
  "製造",
  "公益法人・行政系",
  "農業団体",
  "サービス業",
];

/* ===== 支援事例（支援の前後） ===== */

interface CaseItem {
  area: AreaKey;
  industry: string;
  company: string;
  title: string;
  before: string;
  after: string;
  results: { metric: string; label: string }[];
  point: string;
  tags: string[];
}

const cases: CaseItem[] = [
  {
    area: "data",
    industry: "フィットネス",
    company: "全国展開のフィットネスクラブ A社",
    title: "全国37店舗・約200名の状況を、ひと目で把握できるように",
    before:
      "各店舗の売上データはPOSで取得していたものの、集計が手作業で、帳簿のズレや費用の分類ミスが常態化。売上をタイムリーに正確に把握できない状態でした。",
    after:
      "基幹システムとPOSレジのデータを連携し、正しいデータを毎日自動で集計。業績管理のための入力作業がほぼゼロになりました。",
    results: [
      { metric: "330h/月", label: "業務時間の削減" },
      { metric: "約60万円/月", label: "人件費の削減" },
      { metric: "リアルタイム", label: "経営判断のスピード" },
    ],
    point: "店舗別・キャスト別の売上が見えるようになり、経営会議や店長ミーティングでの意思決定がスムーズに。",
    tags: ["Power BI", "データ基盤構築", "業務自動化"],
  },
  {
    area: "data",
    industry: "飲食",
    company: "飲食店 B社",
    title: "商品別の利益率を見て、セットを組み替え。利益率が改善",
    before:
      "月次の売上報告や店舗別の集計をExcelで行っていて、更新にも確認にも時間がかかる状態。現場のオペレーション改善に手をつけられていませんでした。",
    after:
      "データが自動で集計されるようになり、各店舗の売上と人件費のバランスがすぐ確認できるように。改善点に部長がその場で対応できるようになりました。",
    results: [
      { metric: "+15%", label: "利益率の改善" },
      { metric: "大幅削減", label: "報告づくりの時間" },
      { metric: "すぐ把握", label: "店舗別の状況" },
    ],
    point: "商品別の利益率をもとにセットを組み替え、感覚に頼っていた判断やスタッフ配置の見直しにつながりました。",
    tags: ["利益率分析", "データ整備"],
  },
  {
    area: "data",
    industry: "人材",
    company: "人材会社 C社",
    title: "営業データの仕組みを作り直し、目標達成率が約10%向上",
    before:
      "営業日報のExcelが肥大化し、管理の外注費が月80万円。指標が増えるたびにタブや集計が増え、売上の数字を確認するだけでも時間がかかっていました。",
    after:
      "営業日報のExcelを移行し、集計から活用までを自動化。営業指標の重要度を整理し、現場で使いやすい画面を設計しました。",
    results: [
      { metric: "+10%", label: "目標達成率" },
      { metric: "80万円/月", label: "外注費の削減" },
      { metric: "毎日", label: "見るべき指標を確認" },
    ],
    point: "毎日確認すべき指標をまとめた日別の画面で、日々の判断ができるように。",
    tags: ["KPI設計", "営業データ基盤"],
  },
  {
    area: "ai",
    industry: "サービス業",
    company: "経営層・PR部門 D社",
    title: "Gemini × Googleのツールで、経営層・PR部門の手間を大きく削減",
    before:
      "経営層・PR部門の業務時間の多くが、情報探し・資料づくり・日程調整などの間接業務に費やされ、本来注力すべき経営判断やコア業務に集中できない状態でした。",
    after:
      "Google WorkspaceとGeminiを連携した伴走支援で、秘書業務の自動化、PR文案づくりのAI活用、情報検索の効率化を実現。週1回の定例とチャット相談で継続的にサポートしました。",
    results: [
      { metric: "60%削減", label: "情報検索・ファイル探し" },
      { metric: "40%削減", label: "PR文案・資料づくり" },
      { metric: "90%削減", label: "会議調整・日程管理" },
    ],
    point: "日程調整・会食手配・メール文書づくりをAIで効率化。経営判断や戦略づくりに集中できる環境に。",
    tags: ["Gemini", "Google Workspace", "伴走支援"],
  },
  {
    area: "ai",
    industry: "公益法人",
    company: "公益財団法人 E団体",
    title: "区民向け生成AIチャットボットで、使いやすさと負担軽減を両立",
    before:
      "区民からの問い合わせが電話・窓口に集中し、職員の対応負荷が高い状態。施設予約や手続き案内などの定型的な質問が多く、本来の業務に時間を割けていませんでした。",
    after:
      "公式サイトに生成AIチャットボットを導入。高齢の方にも配慮した「大きな文字」「やさしい言葉」の画面設計と、回答のガードレールなどのセキュリティ対策を徹底し、6か月かけて段階的に定着させました。",
    results: [
      { metric: "40%削減", label: "電話・窓口の問い合わせ" },
      { metric: "24時間", label: "対応できる時間" },
      { metric: "即時回答", label: "定型の質問への応答" },
    ],
    point: "行政水準のセキュリティを守りながら、利用者アンケートで高い満足度。段階的に進めたことで、職員の理解も得られました。",
    tags: ["生成AI", "チャットボット", "セキュリティ設計"],
  },
];

function CaseCard({ c, index }: { c: CaseItem; index: number }) {
  const meta = areaMeta[c.area];
  return (
    <FadeIn>
      <article className="bg-paper p-6 border border-ink sm:p-8 lg:p-10">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-inter text-xs font-bold tracking-widest text-accent-blue">
            CASE {String(index + 1).padStart(2, "0")}
          </span>
          <span className="bg-surface px-3 py-1 text-xs font-bold">{c.industry}</span>
          <span className={`px-3 py-1 text-xs font-bold ${meta.color}`}>{meta.name}</span>
        </div>
        <h3 className="mt-4 font-display text-xl font-bold leading-snug sm:text-2xl">{c.title}</h3>
        <p className="mt-1.5 text-xs text-gray">{c.company}</p>

        <div className="mt-7 grid items-stretch gap-3 lg:grid-cols-[1fr_auto_1fr] lg:gap-4">
          <div className="rounded-2xl border border-dashed border-ink/40 p-5">
            <p className="font-inter text-[11px] font-bold uppercase tracking-widest text-gray">Before</p>
            <p className="mt-2 text-sm leading-[1.85] text-gray">{c.before}</p>
          </div>
          <div className="flex items-center justify-center">
            <ArrowRight className="hidden h-6 w-6 text-accent-blue lg:block" />
            <ArrowDown className="h-6 w-6 text-accent-blue lg:hidden" />
          </div>
          <div className="rounded-2xl bg-lime-soft p-5">
            <p className="font-inter text-[11px] font-bold uppercase tracking-widest">After</p>
            <p className="mt-2 text-sm font-medium leading-[1.85]">{c.after}</p>
          </div>
        </div>

        <div className="mt-5 grid gap-2 sm:grid-cols-3 sm:gap-3">
          {c.results.map((r) => (
            <div key={r.label} className="flex items-baseline justify-between gap-3 rounded-2xl bg-sky px-5 py-3 sm:block sm:py-4">
              <p className="font-inter text-xl font-bold text-accent-blue sm:text-2xl">{r.metric}</p>
              <p className="text-right text-xs font-medium text-foreground/75 sm:mt-1 sm:text-left">{r.label}</p>
            </div>
          ))}
        </div>

        <p className="mt-5 text-sm leading-[1.85]">
          <span className="mr-2 bg-foreground px-2.5 py-0.5 text-[11px] font-bold text-accent-lime">ポイント</span>
          {c.point}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {c.tags.map((t) => (
            <span key={t} className="bg-surface px-3 py-1 text-xs font-medium text-foreground/80">
              {t}
            </span>
          ))}
        </div>
      </article>
    </FadeIn>
  );
}

export default function CasesPage() {
  const dataCases = cases.filter((c) => c.area === "data");
  const aiCases = cases.filter((c) => c.area !== "data");

  return (
    <>
      <PageHero
        label="Results & Cases"
        title="支援実績・事例"
        lead="データコンサルティングを中心に、業種もテーマもさまざまな会社の改善活動をご一緒してきました。社名は伏せ、業種でご紹介しています。"
        illustration={<DataIllustration className="w-[360px]" />}
      />

      {/* ===== 支援実績 ===== */}
      <section id="results" className="scroll-mt-20 bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionTitle label="Results" lead="これまでにご一緒した主な業種と、支援のテーマです。">
              支援実績
            </SectionTitle>
          </FadeIn>

          <FadeIn>
            <div className="mt-10 flex flex-wrap gap-2">
              {industries.map((name) => (
                <span key={name} className="border-2 border-ink bg-paper px-4 py-2 text-sm font-bold">
                  {name}
                </span>
              ))}
            </div>
          </FadeIn>

          <div className="mt-12 space-y-10">
            {track.map((group) => {
              const meta = areaMeta[group.area];
              return (
                <FadeIn key={group.area}>
                  <div>
                    <div className="flex items-center gap-3">
                      <span className={`flex h-10 w-10 items-center justify-center rounded-xl ${meta.color}`}>
                        <meta.icon className="h-5 w-5" />
                      </span>
                      <h3 className="font-display text-lg font-bold">{meta.name}</h3>
                      {group.area === "data" && (
                        <span className="shrink-0 whitespace-nowrap bg-foreground px-2.5 py-0.5 text-[11px] font-bold text-accent-lime">メインの支援</span>
                      )}
                    </div>
                    <ul className="mt-4 grid gap-3 md:grid-cols-2">
                      {group.items.map((item) => (
                        <li key={item.theme} className="flex h-full flex-col border border-ink bg-paper p-5">
                          <p className="text-xs font-bold text-gray">{item.industry}</p>
                          <p className="mt-1.5 text-[15px] font-bold leading-relaxed">{item.theme}</p>
                          <div className="mt-3 flex flex-wrap gap-1.5">
                            {item.tags.map((t) => (
                              <span key={t} className="bg-surface px-2.5 py-0.5 text-[11px] font-medium text-foreground/75">
                                {t}
                              </span>
                            ))}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== 支援事例 ===== */}
      <section id="cases" className="scroll-mt-20 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionTitle label="Before → After" lead="支援の前に困っていたことと、支援のあとに変わったことです。">
              支援事例
            </SectionTitle>
          </FadeIn>

          <FadeIn>
            <h3 className="mt-14 flex items-center gap-3 font-display text-xl font-bold">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky text-accent-blue">
                <Database className="h-5 w-5" />
              </span>
              データコンサルティングの事例
            </h3>
          </FadeIn>
          <div className="mt-6 space-y-6">
            {dataCases.map((c, i) => (
              <CaseCard key={c.title} c={c} index={i} />
            ))}
          </div>

          <FadeIn>
            <h3 className="mt-16 flex items-center gap-3 font-display text-xl font-bold">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-mint text-emerald-700">
                <Bot className="h-5 w-5" />
              </span>
              AI導入支援の事例
            </h3>
          </FadeIn>
          <div className="mt-6 space-y-6">
            {aiCases.map((c, i) => (
              <CaseCard key={c.title} c={c} index={dataCases.length + i} />
            ))}
          </div>
        </div>
      </section>

      <CtaPanel
        title={
          <>
            同じような課題を、
            <br />
            お持ちではありませんか？
          </>
        }
        lead="まずは60分の無料相談で、いまの改善活動と困っていることを伺います。オンラインで対応します。"
      />
    </>
  );
}
