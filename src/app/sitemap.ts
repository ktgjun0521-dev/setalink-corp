import type { MetadataRoute } from "next";
import { articleModifiedAt, articlePath, getPublishedArticles } from "@/lib/articles";
import { SITE_URL } from "@/lib/site";

// 公開時刻（publishedAt）を過ぎた記事が自動で載るよう、5分ごとに作り直す
export const revalidate = 300;

export default function sitemap(): MetadataRoute.Sitemap {
  const articles = getPublishedArticles();
  // 一覧ページの更新日は、いちばん新しいコラムの日時（記事が無ければ付けない）
  const latestColumn = articles
    .filter((article) => article.type === "column")
    .map(articleModifiedAt)
    .sort((a, b) => Date.parse(b) - Date.parse(a))[0];

  // 固定ページには更新日を付けない（ビルドのたびに「今」が入ると、更新日として意味を持たないため）
  return [
    { url: SITE_URL, changeFrequency: "monthly", priority: 1.0 },
    { url: `${SITE_URL}/cases`, changeFrequency: "monthly", priority: 0.8 },
    {
      url: `${SITE_URL}/column`,
      ...(latestColumn ? { lastModified: latestColumn } : {}),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    { url: `${SITE_URL}/company`, changeFrequency: "yearly", priority: 0.7 },
    { url: `${SITE_URL}/faq`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/contact`, changeFrequency: "yearly", priority: 0.6 },
    { url: `${SITE_URL}/editorial-policy`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/privacy`, changeFrequency: "yearly", priority: 0.3 },
    ...articles.map((article) => ({
      url: `${SITE_URL}${articlePath(article)}`,
      lastModified: articleModifiedAt(article),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
