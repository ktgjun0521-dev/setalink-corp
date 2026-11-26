// サイト全体で共通の値（URL・メタ情報の組み立て）
import type { Metadata } from "next";

export const SITE_URL = "https://setalinkapp.com";
export const SITE_NAME = "セタリンク";
export const COMPANY_NAME = "株式会社セタリンク";
export const LOGO_URL = `${SITE_URL}/images/logo.svg`;
export const DEFAULT_OG_IMAGE = "/images/hero-bg.jpg";

export const FEED_PATH = "/column/feed.xml";
export const FEED_TITLE = "セタリンク コラム・事例";

// <link rel="alternate" type="application/rss+xml"> で案内するフィード
export const feedAlternates = {
  "application/rss+xml": [{ url: FEED_PATH, title: FEED_TITLE }],
};

export const absoluteUrl = (path: string) => `${SITE_URL}${path === "/" ? "" : path}`;

// <script type="application/ld+json"> に入れる文字列（"<" を逃がして、途中でタグが閉じないようにする）
export const jsonLd = (data: unknown) => JSON.stringify(data).replace(/</g, "\\u003c");

/* ページごとのメタ情報。canonical・OGP・X のカードをそのページの内容でそろえる */
export function pageMetadata({
  title,
  description,
  path,
  article,
}: {
  title: string;
  description: string;
  path: string;
  article?: { publishedTime: string; modifiedTime: string };
}): Metadata {
  const url = absoluteUrl(path);
  const fullTitle = `${title} | ${SITE_NAME}`;
  const images = [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: fullTitle }];
  const shared = { title: fullTitle, description, url, siteName: SITE_NAME, locale: "ja_JP", images };

  return {
    title,
    description,
    alternates: { canonical: url, types: feedAlternates },
    openGraph: article ? { ...shared, type: "article", ...article } : { ...shared, type: "website" },
    twitter: { card: "summary_large_image", title: fullTitle, description, images: [DEFAULT_OG_IMAGE] },
  };
}
