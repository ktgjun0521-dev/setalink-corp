import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import {
  ArrowRight,
  Clock,
  TrendingUp,
  DollarSign,
  Target,
  Database,
  Bot,
  Users,
  Search,
  FileText,
  Zap,
  type LucideIcon,
} from "lucide-react";

export const metadata: Metadata = {
  title: "支援事例",
  description:
    "データ活用支援・AI導入支援の支援事例。SETALINK株式会社の支援実績をご紹介。",
};

interface CaseResult {
  icon: LucideIcon;
  metric: string;
  label: string;
}

interface CaseItem {
  id: number;
  industry: string;
  company: string;
  subtitle: string;
  challenge: string;
  solution: string;
  results: CaseResult[];
  point: string;
  tags: string[];
}

const dataCases: CaseItem[] = [
  {
    id: 1,
    industry: "フィットネス",
    company: "全国展開 フィットネスクラブ A社",
    subtitle: "全国37店舗・約200名の状況をPower BIで一目で把握",
    challenge:
      "各店舗の売上データはPOSで取得していたものの、集計が手作業で帳簿のズレや費用の分類ミスが常態化。タイムリーに売上を正確に把握することができない状態でした。",
    solution:
      "完全自動で正しいデータを毎日工数0でプログラムにて集計。基幹システム、POSレジデータを連携し、業績利用の入力工数がほぼ0に。",
    results: [
      { icon: Clock, metric: "330h/月", label: "業務時間削減" },
      { icon: DollarSign, metric: "約60万円/月", label: "人件費削減" },
      { icon: TrendingUp, metric: "リアルタイム", label: "経営判断スピード" },
    ],
    point:
      "店舗別・キャスト別の売上を可視化。経営会議や店長ミーティングでの意思決定がスムーズに。",
    tags: ["Power BI", "データ基盤構築", "業務自動化", "ダッシュボード"],
  },
  {
    id: 2,
    industry: "飲食",
    company: "飲食店 B社",
    subtitle: "商品別利益率分析でセット組み換え、利益率UP",
    challenge:
      "月次の売上報告や店舗別の簡易集計をExcelで行っていたが、更新に時間がかかり、数字の確認も手間がかかる状態。現場のオペレーション改善に手をつけられていませんでした。",
    solution:
      "データが自動で集計・可視化されることにより、各店舗の売上×人件費バランスがすぐ確認でき、改善点を部長判断で即対応可能に。",
    results: [
      { icon: TrendingUp, metric: "+15%", label: "利益率改善" },
      { icon: Clock, metric: "大幅削減", label: "報告作成時間" },
      { icon: Target, metric: "即座に把握", label: "店舗別パフォーマンス" },
    ],
    point:
      "商品別利益率分析でセット組み換え、感覚の見直しやスタッフ配置の最適化につながりました。",
    tags: ["データ分析", "利益率分析", "可視化"],
  },
  {
    id: 3,
    industry: "人材",
    company: "人材会社 C社",
    subtitle: "営業データ基盤の再設計により目標達成率+10%を実現",
    challenge:
      "営業日報のExcelが肥大化し、管理の外注コストとして月80万円が発生。さらに指標の増加によるタブや集計数が肥大し、売上数字の確認にも時間を要する状態でした。",
    solution:
      "営業日報Excelを完全移管し、データ集計→活用の仕組みまでを自動化。営業指標の重要度を整理し、現場に基づいたダッシュボードUIを設計。",
    results: [
      { icon: TrendingUp, metric: "+10%", label: "目標達成率UP" },
      { icon: DollarSign, metric: "80万円/月", label: "外注コスト削減" },
      { icon: Target, metric: "10%UP", label: "営業交渉達成率" },
    ],
    point:
      "毎日確認すべき指標が入った日別ダッシュボードで日次の判断が可能に。営業の目標達成率が約10%向上。",
    tags: ["営業データ基盤", "ダッシュボード", "KPI設計"],
  },
];

const aiCases: CaseItem[] = [
  {
    id: 4,
    industry: "サービス業",
    company: "経営層・PR部門向け D社",
    subtitle: "Gemini × Google連携でPR・経営部門の業務を大幅効率化",
    challenge:
      "経営層・PR部門の業務時間の多くが情報検索・資料作成・スケジュール調整などの間接業務に費やされ、本来注力すべき経営判断やコア業務に集中できない状態でした。",
    solution:
      "Google Workspace × Geminiを連携したAI伴走支援プログラムを導入。秘書業務の自動化、PR文案のAI支援、情報検索の効率化を実現。週1回の定例MTGとチャット相談で継続的にサポート。",
    results: [
      { icon: Search, metric: "60%削減", label: "情報検索・ファイル探し時間" },
      { icon: FileText, metric: "40%削減", label: "PR文案・資料作成時間" },
      { icon: Clock, metric: "90%削減", label: "会議調整・スケジュール管理" },
    ],
    point:
      "AI秘書によるスケジュール調整・会食手配・メール文書作成を自動化。経営層が本来注力すべき「経営判断」「戦略策定」に集中できる環境を実現。",
    tags: [
      "Gemini",
      "Google Workspace",
      "AI伴走支援",
      "秘書業務効率化",
      "PR支援",
    ],
  },
  {
    id: 5,
    industry: "公益法人",
    company: "公益財団法人 E団体",
    subtitle: "区民向け生成AIチャットボットで利便性向上とコスト削減を両立",
    challenge:
      "区民からの問い合わせが電話・窓口に集中し、職員の対応負荷が高い状態。特に定型的な質問（施設予約、手続き案内など）が多く、本来の業務に時間を割けない課題がありました。",
    solution:
      "公式サイトに生成AIチャットボットを導入。高齢者にも配慮した「大きな文字」「やさしい言葉」のUI設計。NGワードブロック・回答ガードレールなどセキュリティ対策を徹底し、6ヶ月の段階的導入（PoC → 限定公開 → 全体運用）で定着。",
    results: [
      { icon: Users, metric: "40%削減", label: "電話・窓口の問い合わせ" },
      { icon: Clock, metric: "24時間", label: "対応可能時間" },
      { icon: Zap, metric: "即時回答", label: "定型質問への応答" },
    ],
    point:
      "行政水準のセキュリティ（個人情報フィルタリング・監査ログ・定期レビュー）を担保しつつ、利用者アンケートで高い満足度を獲得。段階的な導入で職員の理解と信頼も獲得。",
    tags: [
      "生成AIチャットボット",
      "LLM",
      "RAG",
      "セキュリティ設計",
      "行政DX",
    ],
  },
];

function CaseCard({ c, index, bgAlt }: { c: CaseItem; index: number; bgAlt: boolean }) {
  return (
    <section className={`py-16 md:py-24 ${bgAlt ? "bg-light-blue" : ""}`}>
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <FadeIn>
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex rounded-full bg-accent-blue/10 px-4 py-1.5 text-xs font-semibold text-accent-blue">
              {c.industry}
            </span>
            <span className="font-inter text-xs text-gray">
              CASE {String(index + 1).padStart(2, "0")}
            </span>
          </div>
          <h3 className="mt-4 text-2xl font-bold tracking-tight md:text-3xl">
            {c.company}
          </h3>
          <p className="mt-2 text-base font-medium text-accent-blue">
            {c.subtitle}
          </p>
        </FadeIn>

        <div className="mt-10 grid gap-10 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-7">
            <FadeIn delay={100}>
              <div className="rounded-2xl border border-red-100 bg-red-50/50 p-6">
                <p className="flex items-center gap-2 font-inter text-xs font-semibold uppercase tracking-widest text-red-500">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-100 text-red-500 text-[10px] font-bold">
                    !
                  </span>
                  支援前の課題
                </p>
                <p className="mt-3 text-sm leading-relaxed text-foreground/80">
                  {c.challenge}
                </p>
              </div>

              <div className="flex justify-center py-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent-blue text-white">
                  <ArrowRight className="h-4 w-4 rotate-90" />
                </div>
              </div>

              <div className="rounded-2xl border border-blue-100 bg-blue-50/50 p-6">
                <p className="flex items-center gap-2 font-inter text-xs font-semibold uppercase tracking-widest text-accent-blue">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 text-accent-blue text-[10px] font-bold">
                    ✓
                  </span>
                  支援による解決
                </p>
                <p className="mt-3 text-sm leading-relaxed text-foreground/80">
                  {c.solution}
                </p>
              </div>

              <div className="mt-6 rounded-xl bg-accent-lime/10 p-4">
                <p className="text-sm font-medium leading-relaxed text-foreground/80">
                  <span className="font-bold text-foreground">Point：</span>
                  {c.point}
                </p>
              </div>
            </FadeIn>
          </div>

          <div className="md:col-span-5">
            <FadeIn delay={200}>
              <div className="rounded-2xl bg-navy p-8 text-white">
                <p className="font-inter text-xs font-semibold uppercase tracking-widest text-accent-blue">
                  Results
                </p>
                <h4 className="mt-2 text-lg font-bold">成果</h4>
                <div className="mt-6 space-y-6">
                  {c.results.map((result) => (
                    <div key={result.label} className="flex items-center gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10">
                        <result.icon className="h-6 w-6 text-accent-blue" />
                      </div>
                      <div>
                        <p className="font-inter text-2xl font-bold">
                          {result.metric}
                        </p>
                        <p className="text-xs text-white/60">{result.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {c.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border bg-white px-3 py-1 text-xs text-gray"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function CasesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute -right-32 -top-32 h-[400px] w-[400px] rounded-full bg-accent-blue/5 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
          <FadeIn>
            <p className="font-inter text-xs font-semibold uppercase tracking-[0.25em] text-accent-blue">
              Case Studies
            </p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">
              支援事例
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray">
              データ活用支援・AI導入支援の実績をご紹介します。
              業界・課題に合わせた最適なソリューションで、成果を出しています。
            </p>
            <div className="section-divider mt-8" />
          </FadeIn>
        </div>
      </section>

      {/* ===== Data Cases Section ===== */}
      <section className="py-8">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <FadeIn>
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-accent-blue">
                <Database className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                  データ活用支援事例
                </h2>
                <p className="mt-1 text-sm text-gray">
                  Data Consulting Case Studies
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {dataCases.map((c, i) => (
        <CaseCard key={c.id} c={c} index={i} bgAlt={i % 2 === 1} />
      ))}

      {/* ===== AI Cases Section ===== */}
      <section className="py-8 mt-8 border-t-4 border-accent-blue/10">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <FadeIn>
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                <Bot className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                  AI活用支援事例
                </h2>
                <p className="mt-1 text-sm text-gray">
                  AI Implementation Case Studies
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {aiCases.map((c, i) => (
        <CaseCard key={c.id} c={c} index={dataCases.length + i} bgAlt={i % 2 === 1} />
      ))}

      {/* CTA */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-2xl rounded-3xl bg-navy p-10 text-center text-white md:p-16">
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                同じような課題をお持ちですか？
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-white/60">
                まずは無料でヒアリングいたします。貴社の状況に合わせた最適なご提案をお約束します。
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-accent-blue px-8 text-sm font-medium text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                >
                  無料相談はこちら
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
