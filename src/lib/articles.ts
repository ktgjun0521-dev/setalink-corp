// コラム・事例の記事データ。
// 原稿は content/ にあり、scripts/build-articles.mjs が検証して src/generated/articles.json にまとめる。
// ここではファイルを読まず、その JSON だけを使う（サーバー関数で原稿が見つからない事故を避ける）。
import type { Metadata } from "next";
import generated from "@/generated/articles.json";
import { COMPANY_NAME, LOGO_URL, SITE_NAME, SITE_URL, absoluteUrl, pageMetadata } from "@/lib/site";

export type ArticleType = "column" | "case";
export type Pillar = "A" | "B" | "C" | "D";

export interface Article {
  slug: string;
  type: ArticleType;
  title: string;
  description: string;
  /** コラムは必須 */
  pillar?: Pillar;
  /** 事例は必須（業種） */
  industry?: string;
  /** ISO 8601（タイムゾーンつき）。この時刻を過ぎたら表示する */
  publishedAt: string;
  /** 中身を直したときだけ入る */
  updatedAt?: string;
  /** 記事冒頭の「結論」。ちょうど3行 */
  summary: string[];
  faq: { q: string; a: string }[];
  related: string[];
  sources: { title: string; url: string }[];
  draft: boolean;
  /** 本文（Markdown を HTML にしたもの） */
  html: string;
}

export const PILLAR_LABELS: Record<Pillar, string> = {
  A: "追う数字を決める",
  B: "集計の手間をなくす",
  C: "業種別の実例",
  D: "頼み方・体制",
};

const allArticles = generated as unknown as Article[];

const time = (iso: string) => new Date(iso).getTime();
const byNewest = (a: Article, b: Article) => time(b.publishedAt) - time(a.publishedAt) || a.slug.localeCompare(b.slug);

/** 公開判定：publishedAt <= 現在時刻 */
export function isPublished(article: Article, now: Date = new Date()): boolean {
  return time(article.publishedAt) <= now.getTime();
}

/** 公開済みの記事を新しい順で返す。type を省くとコラムと事例の両方 */
export function getPublishedArticles(type?: ArticleType | null, now: Date = new Date()): Article[] {
  return allArticles.filter((a) => (!type || a.type === type) && isPublished(a, now)).sort(byNewest);
}

/** 公開済みの記事を1本返す。無い・まだ公開時刻前なら null */
export function getArticle(type: ArticleType, slug: string, now: Date = new Date()): Article | null {
  const article = allArticles.find((a) => a.type === type && a.slug === slug);
  return article && isPublished(article, now) ? article : null;
}

/** 関連記事。related の指定があればその順、無ければ同じ柱（事例は事例どうし）の新しい記事 */
export function getRelatedArticles(article: Article, now: Date = new Date(), limit = 3): Article[] {
  const published = getPublishedArticles(null, now).filter((a) => a.slug !== article.slug);
  if (article.related.length > 0) {
    return article.related
      .map((slug) => published.find((a) => a.slug === slug))
      .filter((a): a is Article => Boolean(a))
      .slice(0, limit);
  }
  const sameGroup =
    article.type === "column"
      ? published.filter((a) => a.type === "column" && a.pillar === article.pillar)
      : published.filter((a) => a.type === "case");
  return sameGroup.slice(0, limit);
}

export const articlePath = (article: Pick<Article, "type" | "slug">) =>
  `/${article.type === "column" ? "column" : "cases"}/${article.slug}`;

/** 種別ラベル：コラムは柱の表示名、事例は業種 */
export const articleLabel = (article: Article) =>
  article.type === "column" ? (article.pillar ? PILLAR_LABELS[article.pillar] : "コラム") : (article.industry ?? "事例");

/** 最後に中身が変わった日時（updatedAt が無ければ公開日時） */
export const articleModifiedAt = (article: Article) => article.updatedAt ?? article.publishedAt;

const dateFormatter = new Intl.DateTimeFormat("ja-JP", {
  timeZone: "Asia/Tokyo",
  year: "numeric",
  month: "long",
  day: "numeric",
});

/** 「2026年12月1日」の形（日本時間） */
export const formatDate = (iso: string) => dateFormatter.format(new Date(iso));

/* ===== メタ情報・構造化データ ===== */

const sectionOf = (article: Article) =>
  article.type === "column" ? { name: "コラム", path: "/column" } : { name: "支援実績・事例", path: "/cases" };

/** パンくず（ホーム → 一覧 → 記事） */
export const articleBreadcrumbs = (article: Article) => [
  { name: "ホーム", path: "/" },
  sectionOf(article),
  { name: article.title, path: articlePath(article) },
];

/** title・description・canonical・OGP（type: article） */
export function articleMetadata(article: Article): Metadata {
  return pageMetadata({
    title: article.title,
    description: article.description,
    path: articlePath(article),
    article: { publishedTime: article.publishedAt, modifiedTime: articleModifiedAt(article) },
  });
}

/** 構造化データ（Article と BreadcrumbList）。FAQPage は入れない */
export function articleStructuredData(article: Article) {
  const url = absoluteUrl(articlePath(article));
  return [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: article.title,
      description: article.description,
      datePublished: article.publishedAt,
      dateModified: articleModifiedAt(article),
      inLanguage: "ja",
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
      publisher: {
        "@type": "Organization",
        name: COMPANY_NAME,
        url: SITE_URL,
        logo: { "@type": "ImageObject", url: LOGO_URL },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: articleBreadcrumbs(article).map((crumb, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: crumb.name,
        item: absoluteUrl(crumb.path),
      })),
    },
  ];
}
