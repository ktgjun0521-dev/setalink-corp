import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ArticleView from "@/components/ArticleView";
import { articleMetadata, getArticle, getPublishedArticles, getRelatedArticles } from "@/lib/articles";

// 公開時刻（publishedAt）を過ぎた記事を、再デプロイなしで出すために5分ごとに作り直す
export const revalidate = 300;
// ビルドのあとに公開時刻を迎えた記事は、最初のアクセスで作る
export const dynamicParams = true;

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getPublishedArticles("column").map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle("column", slug);
  return article ? articleMetadata(article) : {};
}

export default async function ColumnArticlePage({ params }: Props) {
  const { slug } = await params;
  const now = new Date();
  const article = getArticle("column", slug, now);
  // 無い slug と、まだ公開時刻前の記事は 404
  if (!article) notFound();

  return <ArticleView article={article} related={getRelatedArticles(article, now)} />;
}
