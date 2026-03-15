import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import { ArrowRight, Clock, TrendingUp, DollarSign, Target } from "lucide-react";

export const metadata: Metadata = {
  title: "導入事例",
  description:
    "データコンサルティング・AI導入支援の導入事例。SETALINK株式会社の支援実績をご紹介。",
};

const cases = [
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
    point: "店舗別・キャスト別の売上を可視化。経営会議や店長ミーティングでの意思決定がスムーズに。",
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
    point: "商品別利益率分析でセット組み換え、感覚の見直しやスタッフ配置の最適化につながりました。",
    tags: ["データ分析", "利益率分析", "可視化"],
  },
  {
    id: 3,
    industry: "人材",
    company: "人材会社 C社",
    subtitle: "営業データ基盤の再設計により目標達成率+10%を実現",
    challenge:
      "営業日報のExcelが肥大化し、管理の外注コストとして月80万円が発生。さらに指標の増加によるタブや集計数が肥大し、定期ミーティングなどでの売上数字の確認にも時間を要する状態でした。",
    solution:
      "営業日報Excelを完全移管し、データ集計→創発の仕組みまでを自動化。営業指標の重要度を整理し、慣見型に基づいたダッシュボードUIを設計。",
    results: [
      { icon: TrendingUp, metric: "+10%", label: "目標達成率UP" },
      { icon: DollarSign, metric: "80万円/月", label: "外注コスト削減" },
      { icon: Target, metric: "10%UP", label: "営業交渉達成率" },
    ],
    point: "営業の目標達成率が約10%向上。毎日確認すべき指標が入った日別ダッシュボードで日次の判断が可能に。",
    tags: ["営業データ基盤", "ダッシュボード", "KPI設計"],
  },
];

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
              導入事例
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray">
              データ活用支援・AI導入支援の実績をご紹介します。
              業界・課題に合わせた最適なソリューションで、成果を出しています。
            </p>
            <div className="section-divider mt-8" />
          </FadeIn>
        </div>
      </section>

      {/* Case Studies */}
      {cases.map((c, i) => (
        <section
          key={c.id}
          className={`py-16 md:py-24 ${i % 2 === 1 ? "bg-light-blue" : ""}`}
        >
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <FadeIn>
              {/* Case header */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex rounded-full bg-accent-blue/10 px-4 py-1.5 text-xs font-semibold text-accent-blue">
                  {c.industry}
                </span>
                <span className="font-inter text-xs text-gray">CASE {String(c.id).padStart(2, "0")}</span>
              </div>
              <h2 className="mt-4 text-2xl font-bold tracking-tight md:text-3xl">
                {c.company}
              </h2>
              <p className="mt-2 text-base font-medium text-accent-blue">
                {c.subtitle}
              </p>
            </FadeIn>

            <div className="mt-10 grid gap-10 md:grid-cols-12 md:gap-16">
              {/* Left: Challenge & Solution */}
              <div className="md:col-span-7">
                <FadeIn delay={100}>
                  {/* Challenge */}
                  <div className="rounded-2xl border border-red-100 bg-red-50/50 p-6">
                    <p className="flex items-center gap-2 font-inter text-xs font-semibold uppercase tracking-widest text-red-500">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-100 text-red-500 text-[10px] font-bold">!</span>
                      導入前の課題
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-foreground/80">
                      {c.challenge}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="flex justify-center py-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent-blue text-white">
                      <ArrowRight className="h-4 w-4 rotate-90" />
                    </div>
                  </div>

                  {/* Solution */}
                  <div className="rounded-2xl border border-blue-100 bg-blue-50/50 p-6">
                    <p className="flex items-center gap-2 font-inter text-xs font-semibold uppercase tracking-widest text-accent-blue">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 text-accent-blue text-[10px] font-bold">✓</span>
                      導入による解決
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-foreground/80">
                      {c.solution}
                    </p>
                  </div>

                  {/* Point */}
                  <div className="mt-6 rounded-xl bg-accent-lime/10 p-4">
                    <p className="text-sm font-medium leading-relaxed text-foreground/80">
                      <span className="font-bold text-foreground">Point：</span>
                      {c.point}
                    </p>
                  </div>
                </FadeIn>
              </div>

              {/* Right: Results */}
              <div className="md:col-span-5">
                <FadeIn delay={200}>
                  <div className="rounded-2xl bg-navy p-8 text-white">
                    <p className="font-inter text-xs font-semibold uppercase tracking-widest text-accent-blue">
                      Results
                    </p>
                    <h3 className="mt-2 text-lg font-bold">成果</h3>
                    <div className="mt-6 space-y-6">
                      {c.results.map((result) => (
                        <div key={result.label} className="flex items-center gap-4">
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10">
                            <result.icon className="h-6 w-6 text-accent-blue" />
                          </div>
                          <div>
                            <p className="font-inter text-2xl font-bold">{result.metric}</p>
                            <p className="text-xs text-white/60">{result.label}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tags */}
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
