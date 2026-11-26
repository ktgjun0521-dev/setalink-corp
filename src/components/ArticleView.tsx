import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import { SectionTitle, CtaPanel } from "@/components/Section";
import {
  type Article,
  articleBreadcrumbs,
  articleLabel,
  articlePath,
  articleStructuredData,
  formatDate,
} from "@/lib/articles";
import { jsonLd } from "@/lib/site";

/* 記事ページ（コラム・事例で共通）。
   パンくず → 種別ラベル → 題名 → 日付 → 書き手 → 結論 → 本文 → よくある質問 → 出どころ → 関連記事 → 相談の案内 */

const inlineLink = "underline underline-offset-4 transition-colors hover:text-accent-blue";
const blockHeading = "font-display text-xl font-bold sm:text-2xl";

export default function ArticleView({ article, related }: { article: Article; related: Article[] }) {
  const breadcrumbs = articleBreadcrumbs(article);
  const published = formatDate(article.publishedAt);
  const updated = article.updatedAt ? formatDate(article.updatedAt) : null;
  const showUpdated = updated !== null && updated !== published;

  return (
    <>
      {articleStructuredData(article).map((data) => (
        <script key={data["@type"]} type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(data) }} />
      ))}

      <article>
        <header className="border-b-2 border-ink pt-24 pb-10 sm:pt-28 md:pt-32 md:pb-14">
          <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">
            <nav aria-label="パンくずリスト" className="border-b border-ink pb-3">
              <ol className="flex items-center gap-x-2 text-xs text-gray">
                {breadcrumbs.map((crumb, i) => {
                  const isLast = i === breadcrumbs.length - 1;
                  return (
                    <li key={crumb.path} className={`flex items-center gap-2 ${isLast ? "min-w-0" : "shrink-0"}`}>
                      {i > 0 && <span aria-hidden="true">/</span>}
                      {isLast ? (
                        // 題名が長いときは1行に収め、末尾を省略する
                        <span aria-current="page" className="truncate text-foreground">
                          {crumb.name}
                        </span>
                      ) : (
                        <Link href={crumb.path} className="whitespace-nowrap transition-colors hover:text-accent-blue">
                          {crumb.name}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ol>
            </nav>

            <p className="mt-8 flex flex-wrap items-center gap-3">
              <span className="font-inter text-[11px] font-bold uppercase tracking-[0.3em] text-gray">
                {article.type === "column" ? "Column" : "Case"}
              </span>
              <span className="border border-ink bg-paper px-3 py-1 text-xs font-bold">{articleLabel(article)}</span>
            </p>

            <h1 className="mt-5 font-display text-[1.7rem] font-black leading-[1.45] tracking-tight sm:text-4xl sm:leading-[1.4] md:text-[2.5rem]">
              {article.title}
            </h1>

            <dl className="mt-6 flex flex-wrap gap-x-6 gap-y-1 text-sm text-gray">
              <div className="flex gap-2">
                <dt>公開日</dt>
                <dd>
                  <time dateTime={article.publishedAt}>{published}</time>
                </dd>
              </div>
              {showUpdated && article.updatedAt && (
                <div className="flex gap-2">
                  <dt>更新日</dt>
                  <dd>
                    <time dateTime={article.updatedAt}>{updated}</time>
                  </dd>
                </div>
              )}
            </dl>

            <p className="mt-2 text-xs leading-[1.9] text-gray">
              執筆：セタリンク編集部 ／ 監修：
              <Link href="/company" className={inlineLink}>
                片口 潤哉
              </Link>
              （代表）
              <span className="mx-2" aria-hidden="true">
                ｜
              </span>
              <Link href="/editorial-policy" className={inlineLink}>
                編集方針
              </Link>
            </p>
          </div>
        </header>

        <div className="mx-auto max-w-3xl px-5 pt-12 pb-16 sm:px-6 md:pt-16 md:pb-24 lg:px-8">
          {/* 結論（summary 3行） */}
          <section aria-labelledby="article-summary" className="border-2 border-ink bg-paper p-6 sm:p-8">
            <h2 id="article-summary" className="inline-flex bg-ink px-3 py-1 text-xs font-bold tracking-widest text-accent-lime">
              結論
            </h2>
            <ol className="mt-5 space-y-3">
              {article.summary.map((line, i) => (
                <li key={line} className="flex gap-4 text-[15px] font-medium leading-[1.85]">
                  <span className="font-inter text-sm font-bold leading-[1.95] tabular-nums text-accent-blue" aria-hidden="true">
                    {i + 1}
                  </span>
                  <span>{line}</span>
                </li>
              ))}
            </ol>
          </section>

          {/* 本文（scripts/build-articles.mjs が Markdown から作った HTML） */}
          <div className="article-body mt-12 md:mt-14" dangerouslySetInnerHTML={{ __html: article.html }} />

          {/* よくある質問（開いた状態で全文を出す） */}
          <section aria-labelledby="article-faq" className="mt-16 md:mt-20">
            <h2 id="article-faq" className={blockHeading}>
              よくある質問
            </h2>
            <div className="mt-6 border-t-2 border-ink">
              {article.faq.map((item) => (
                <div key={item.q} className="border-b border-ink py-6">
                  <h3 className="flex items-start gap-3 text-[15px] font-bold leading-[1.75]">
                    <span className="font-inter text-accent-blue" aria-hidden="true">
                      Q
                    </span>
                    {item.q}
                  </h3>
                  <p className="mt-3 pl-7 text-sm leading-[1.95] text-gray">{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          {article.sources.length > 0 && (
            <section aria-labelledby="article-sources" className="mt-16 md:mt-20">
              <h2 id="article-sources" className={blockHeading}>
                出どころ
              </h2>
              <ol className="mt-6 space-y-3 border-t-2 border-ink pt-6 text-sm leading-[1.85]">
                {article.sources.map((source, i) => (
                  <li key={source.url} className="flex gap-3">
                    <span className="font-inter tabular-nums text-gray" aria-hidden="true">
                      {i + 1}.
                    </span>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="break-words text-accent-blue underline underline-offset-4 transition-colors hover:text-ink"
                    >
                      {source.title}
                    </a>
                  </li>
                ))}
              </ol>
            </section>
          )}
        </div>
      </article>

      {related.length > 0 && (
        <section className="bg-surface py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
            <FadeIn>
              <SectionTitle label="Related">関連記事</SectionTitle>
            </FadeIn>
            <FadeIn>
              <ul className="mt-10 grid gap-4 md:grid-cols-3">
                {related.map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={articlePath(item)}
                      className="group flex h-full flex-col border border-ink bg-paper p-6 transition-colors hover:border-accent-blue"
                    >
                      <span className="text-xs font-bold text-gray">{articleLabel(item)}</span>
                      <h3 className="mt-2 text-[15px] font-bold leading-[1.7] transition-colors group-hover:text-accent-blue">
                        {item.title}
                      </h3>
                      <time dateTime={item.publishedAt} className="mt-auto pt-4 text-xs text-gray">
                        {formatDate(item.publishedAt)}
                      </time>
                    </Link>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </section>
      )}

      <CtaPanel />
    </>
  );
}
