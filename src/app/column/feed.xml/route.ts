import { articleLabel, articleModifiedAt, articlePath, getPublishedArticles } from "@/lib/articles";
import { FEED_PATH, FEED_TITLE, SITE_URL } from "@/lib/site";

// RSS 2.0（公開済みのコラムと事例、新しい順20件）。公開時刻を過ぎた記事が自動で載るよう5分ごとに作り直す
export const dynamic = "force-static";
export const revalidate = 300;

const FEED_LIMIT = 20;

const escapeXml = (value: string) =>
  value.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&apos;" })[c] as string);

export function GET() {
  const articles = getPublishedArticles().slice(0, FEED_LIMIT);
  const latest = articles.map(articleModifiedAt).sort((a, b) => Date.parse(b) - Date.parse(a))[0];

  const items = articles
    .map((article) => {
      const url = `${SITE_URL}${articlePath(article)}`;
      return `    <item>
      <title>${escapeXml(article.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${new Date(article.publishedAt).toUTCString()}</pubDate>
      <category>${escapeXml(articleLabel(article))}</category>
      <description>${escapeXml(article.description)}</description>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(FEED_TITLE)}</title>
    <link>${SITE_URL}/column</link>
    <description>株式会社セタリンクのコラム・事例。事業の数字をどう決め、どう追うかを、実際の支援で行った手順からまとめています。</description>
    <language>ja</language>
    <atom:link href="${SITE_URL}${FEED_PATH}" rel="self" type="application/rss+xml" />
${latest ? `    <lastBuildDate>${new Date(latest).toUTCString()}</lastBuildDate>\n` : ""}${items}${items ? "\n" : ""}  </channel>
</rss>
`;

  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
