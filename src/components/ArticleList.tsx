import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { type Article, articleLabel, articlePath, formatDate } from "@/lib/articles";

/* 記事の一覧（コラム一覧・事例ページで共通）。罫線で区切った読み物の目次 */
export default function ArticleList({
  articles,
  heading = "h2",
}: {
  articles: Article[];
  heading?: "h2" | "h3";
}) {
  const Heading = heading;
  return (
    <ul className="border-t-2 border-ink">
      {articles.map((article) => (
        <li key={article.slug} className="border-b border-ink">
          <Link href={articlePath(article)} className="group block py-7 sm:py-9">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <span className="border border-ink bg-paper px-3 py-1 text-xs font-bold">{articleLabel(article)}</span>
              <time dateTime={article.publishedAt} className="text-xs text-gray">
                {formatDate(article.publishedAt)}
              </time>
            </div>
            <Heading className="mt-4 font-display text-xl font-bold leading-[1.5] transition-colors group-hover:text-accent-blue sm:text-2xl">
              {article.title}
            </Heading>
            <p className="mt-3 max-w-3xl text-sm leading-[1.9] text-gray">{article.description}</p>
            <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold">
              続きを読む
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
