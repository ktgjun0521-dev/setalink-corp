import type { Metadata } from "next";
import ArticleList from "@/components/ArticleList";
import { PageHero, CtaPanel } from "@/components/Section";
import { getPublishedArticles } from "@/lib/articles";
import { pageMetadata } from "@/lib/site";

// 公開時刻（publishedAt）を過ぎた記事を、再デプロイなしで出すために5分ごとに作り直す
export const revalidate = 300;

export const metadata: Metadata = pageMetadata({
  title: "コラム",
  description:
    "事業の数字をどう決め、どう追うか。株式会社セタリンクが、実際の支援で行った手順と、そこで分かったことをまとめたコラムです。追う数字の決め方、集計の手間のなくし方、業種別の実例、頼み方・体制を扱います。",
  path: "/column",
});

export default function ColumnPage() {
  const articles = getPublishedArticles("column");

  return (
    <>
      <PageHero
        label="Column"
        title="コラム"
        lead="事業の数字をどう決め、どう追うか。実際の支援で行った手順と、そこで分かったことをまとめています。"
      />

      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          {articles.length > 0 ? (
            // 一覧は FadeIn で包まない（長い一覧を1つにまとめて包むと、表示のきっかけが来ないことがあるため）
            <ArticleList articles={articles} />
          ) : (
            <div className="border border-ink bg-paper px-6 py-12 text-center sm:py-16">
              <p className="text-sm leading-[1.95] text-gray">コラムは準備中です。公開までしばらくお待ちください。</p>
            </div>
          )}
        </div>
      </section>

      <CtaPanel />
    </>
  );
}
