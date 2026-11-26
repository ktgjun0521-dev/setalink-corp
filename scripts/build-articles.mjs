#!/usr/bin/env node
// content/ の原稿（Markdown）を検証し、src/generated/articles.json を作る。
// 本文はここで HTML にしておき、実行時（Vercel のサーバー関数）ではファイルを読まない。
// 使い方: node scripts/build-articles.mjs   （npm run build / npm run dev の前に自動で動く）
//   SHOW_DRAFTS=1 を付けると draft: true の原稿も含める。
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import matter from "gray-matter";
import { Marked } from "marked";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const CONTENT_DIR = path.join(ROOT, "content");
const PUBLIC_DIR = path.join(ROOT, "public");
const OUT_FILE = path.join(ROOT, "src", "generated", "articles.json");
const SITE_HOST = "setalinkapp.com";
const SHOW_DRAFTS = process.env.SHOW_DRAFTS === "1";

const FOLDERS = [
  { dir: "column", type: "column" },
  { dir: "cases", type: "case" },
];
const PILLARS = ["A", "B", "C", "D"];
const KNOWN_KEYS = [
  "title",
  "description",
  "type",
  "pillar",
  "industry",
  "publishedAt",
  "updatedAt",
  "summary",
  "faq",
  "related",
  "sources",
  "draft",
];
const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
// 例: 2026-12-01T08:00:00+09:00（時刻とタイムゾーンまで書く）
const DATETIME_PATTERN = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}(?::\d{2}(?:\.\d+)?)?(?:Z|[+-]\d{2}:\d{2})$/;
const DESCRIPTION_MIN = 70;
const DESCRIPTION_MAX = 120;
const BODY_MIN_CHARS = 800;

const isText = (v) => typeof v === "string" && v.trim() !== "";
const count = (s) => [...s].length;
const escapeAttr = (s) =>
  String(s).replace(/&(?!#?\w+;)/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const stripTags = (html) => html.replace(/<[^>]+>/g, "");

/* ---------- 原稿を読む ---------- */

function readEntries() {
  const entries = [];
  for (const { dir, type } of FOLDERS) {
    const folder = path.join(CONTENT_DIR, dir);
    if (!fs.existsSync(folder)) continue;
    const files = fs
      .readdirSync(folder)
      .filter((name) => name.toLowerCase().endsWith(".md"))
      .sort();
    for (const name of files) {
      const file = `content/${dir}/${name}`;
      const entry = {
        file,
        folderType: type,
        slug: name.replace(/\.md$/i, ""),
        data: {},
        body: "",
        errors: [],
        warnings: [],
        draft: false,
      };
      try {
        const parsed = matter(fs.readFileSync(path.join(folder, name), "utf8"));
        entry.data = parsed.data ?? {};
        entry.body = parsed.content ?? "";
      } catch (e) {
        entry.errors.push(`フロントマター（YAML）を読めません: ${String(e?.message ?? e).split("\n")[0]}`);
      }
      entries.push(entry);
    }
  }
  return entries;
}

/* ---------- フロントマターの検証 ---------- */

function checkDatetime(entry, key, required) {
  const value = entry.data[key];
  if (value === undefined || value === null || value === "") {
    if (required) entry.errors.push(`${key} がありません（必須）`);
    return null;
  }
  if (value instanceof Date) {
    entry.errors.push(`${key} は引用符で囲んで書いてください（例 "2026-12-01T08:00:00+09:00"）`);
    return null;
  }
  if (typeof value !== "string" || !DATETIME_PATTERN.test(value.trim()) || Number.isNaN(Date.parse(value.trim()))) {
    entry.errors.push(
      `${key} の日時を読めません: ${JSON.stringify(value)}（例 "2026-12-01T08:00:00+09:00"。時刻とタイムゾーンまで書く）`
    );
    return null;
  }
  return value.trim();
}

function validateFrontmatter(entry) {
  const { data, errors, warnings } = entry;

  if (!SLUG_PATTERN.test(entry.slug)) {
    errors.push(`ファイル名（slug）に使えない文字があります: "${entry.slug}"（英小文字・数字・ハイフンのみ）`);
  }

  for (const key of Object.keys(data)) {
    if (!KNOWN_KEYS.includes(key)) warnings.push(`知らない項目があります: ${key}（書き間違いではありませんか）`);
  }

  if (data.draft !== undefined && typeof data.draft !== "boolean") {
    errors.push(`draft は true か false で書いてください（今の値: ${JSON.stringify(data.draft)}）`);
  }
  entry.draft = data.draft === true;

  for (const key of ["title", "description"]) {
    if (!isText(data[key])) errors.push(`${key} がありません（必須）`);
  }
  if (isText(data.description)) {
    const n = count(data.description.trim());
    if (n < DESCRIPTION_MIN || n > DESCRIPTION_MAX) {
      warnings.push(`description が ${n}字です（めやす ${DESCRIPTION_MIN}〜${DESCRIPTION_MAX}字）`);
    }
  }

  if (data.type !== "column" && data.type !== "case") {
    errors.push(`type は column か case で書いてください（今の値: ${JSON.stringify(data.type ?? null)}）`);
  } else if (data.type !== entry.folderType) {
    errors.push(`type（${data.type}）と置き場所のフォルダが合いません（column は content/column/、case は content/cases/）`);
  }

  if (entry.folderType === "column") {
    if (!PILLARS.includes(data.pillar)) {
      errors.push(`pillar は A / B / C / D のどれかで書いてください（コラムは必須。今の値: ${JSON.stringify(data.pillar ?? null)}）`);
    }
  } else {
    if (!isText(data.industry)) errors.push("industry（業種）がありません（事例は必須）");
    if (data.pillar !== undefined && !PILLARS.includes(data.pillar)) {
      errors.push(`pillar は A / B / C / D のどれかで書いてください（今の値: ${JSON.stringify(data.pillar)}）`);
    }
  }

  entry.publishedAt = checkDatetime(entry, "publishedAt", true);
  entry.updatedAt = checkDatetime(entry, "updatedAt", false);
  if (entry.publishedAt && entry.updatedAt && Date.parse(entry.updatedAt) < Date.parse(entry.publishedAt)) {
    warnings.push("updatedAt が publishedAt より前になっています");
  }

  if (!Array.isArray(data.summary) || data.summary.length !== 3 || !data.summary.every(isText)) {
    const n = Array.isArray(data.summary) ? data.summary.length : 0;
    errors.push(`summary はちょうど3行で書いてください（今は ${n}行。空の行は不可）`);
  }

  if (!Array.isArray(data.faq) || data.faq.length < 3 || data.faq.length > 5) {
    const n = Array.isArray(data.faq) ? data.faq.length : 0;
    errors.push(`faq は3〜5問で書いてください（今は ${n}問）`);
  } else if (!data.faq.every((f) => f && isText(f.q) && isText(f.a))) {
    errors.push("faq の各項目には q（質問）と a（答え）の両方が必要です");
  }

  if (data.related !== undefined && data.related !== null) {
    if (!Array.isArray(data.related) || !data.related.every(isText)) {
      errors.push('related は slug の並びで書いてください（例 ["slug-a", "slug-b"]）');
    }
  }

  if (data.sources !== undefined && data.sources !== null) {
    if (!Array.isArray(data.sources) || !data.sources.every((s) => s && isText(s.title) && isText(s.url))) {
      errors.push("sources の各項目には title と url の両方が必要です");
    } else {
      for (const s of data.sources) {
        if (!/^https?:\/\/\S+$/.test(s.url.trim())) errors.push(`sources の url は http(s):// で始めてください: ${s.url}`);
      }
    }
  }
}

/* ---------- 本文を HTML にする ---------- */

// サイト内のパスに直す（https://setalinkapp.com/… も同じ扱い）。サイト外なら null
function toInternalPath(href) {
  if (href.startsWith("/") && !href.startsWith("//")) return href;
  try {
    const url = new URL(href);
    if (url.hostname === SITE_HOST || url.hostname === `www.${SITE_HOST}`) return url.pathname + url.search + url.hash;
  } catch {
    /* 相対リンクなどはサイト外扱いにしない（下で形式を確かめる） */
  }
  return null;
}

function renderBody(entry) {
  const usedIds = new Map();
  const links = [];
  const images = [];
  let hasH1 = false;

  const headingId = (html) => {
    const base =
      stripTags(html)
        .trim()
        .toLowerCase()
        .replace(/[^\p{L}\p{N}\s-]/gu, "")
        .replace(/\s+/g, "-") || "section";
    const n = (usedIds.get(base) ?? 0) + 1;
    usedIds.set(base, n);
    return n === 1 ? base : `${base}-${n}`;
  };

  const marked = new Marked({ gfm: true });
  marked.use({
    renderer: {
      heading({ tokens, depth }) {
        const inner = this.parser.parseInline(tokens);
        if (depth === 1) hasH1 = true;
        if (depth === 2 || depth === 3) return `<h${depth} id="${escapeAttr(headingId(inner))}">${inner}</h${depth}>\n`;
        return `<h${depth}>${inner}</h${depth}>\n`;
      },
      link({ href, title, tokens }) {
        const inner = this.parser.parseInline(tokens);
        const titleAttr = title ? ` title="${escapeAttr(title)}"` : "";
        const internal = toInternalPath(href);
        if (internal !== null) {
          links.push(internal);
          return `<a href="${escapeAttr(internal)}"${titleAttr}>${inner}</a>`;
        }
        if (/^https?:\/\//i.test(href)) {
          return `<a href="${escapeAttr(href)}"${titleAttr} target="_blank" rel="noopener noreferrer">${inner}</a>`;
        }
        if (/^(mailto:|tel:|#)/i.test(href)) return `<a href="${escapeAttr(href)}"${titleAttr}>${inner}</a>`;
        entry.errors.push(`本文のリンク先の書き方が不正です: ${href}（/ から始めるか、https:// から書く）`);
        return inner;
      },
      image({ href, title, text }) {
        images.push(href);
        const titleAttr = title ? ` title="${escapeAttr(title)}"` : "";
        return `<img src="${escapeAttr(href)}" alt="${escapeAttr(text ?? "")}"${titleAttr} loading="lazy" decoding="async">`;
      },
    },
  });

  let html = marked.parse(entry.body);
  if (hasH1 || /<h1[\s>]/i.test(html)) {
    entry.errors.push("本文に h1（# 見出し）があります。h1 は title から自動で出るので、本文は ## から始めてください");
  }

  // 表はスマホで横スクロールできるように包む。チェックリストは行頭の印を消すための目印を付ける
  html = html
    .replace(/<table(\s[^>]*)?>/g, '<div class="table-scroll" role="region" aria-label="表" tabindex="0"><table$1>')
    .replace(/<\/table>/g, "</table></div>")
    .replace(/<li>(<p>)?<input /g, '<li class="task">$1<input ');

  const text = stripTags(html).replace(/\s+/g, "");
  if (count(text) < BODY_MIN_CHARS) {
    entry.warnings.push(`本文が ${count(text)}字です（めやす ${BODY_MIN_CHARS}字以上）`);
  }
  if (!/<(table|ul|ol)[\s>]/i.test(html)) {
    entry.warnings.push("本文に表・リストが1つもありません（要点は表や箇条書きにすると読みやすくなります）");
  }

  for (const src of images) {
    if (src.startsWith("/") && !src.startsWith("//")) {
      const file = path.join(PUBLIC_DIR, decodeURIComponent(src.split(/[?#]/)[0]));
      if (!fs.existsSync(file)) entry.errors.push(`本文の画像が見つかりません: ${src}（public${src} に置く）`);
      else if (!src.startsWith(`/articles/${entry.slug}/`)) {
        entry.warnings.push(`画像は public/articles/${entry.slug}/ に置くのが決まりです: ${src}`);
      }
    } else {
      entry.warnings.push(`外部の画像を読み込んでいます: ${src}（public/articles/${entry.slug}/ に置くのが決まりです）`);
    }
  }

  entry.html = html;
  entry.links = links;
}

/* ---------- 記事どうしのつながりの検証 ---------- */

function validateReferences(entries) {
  const bySlug = new Map();
  for (const entry of entries) {
    const other = bySlug.get(entry.slug);
    if (other) {
      entry.errors.push(`slug "${entry.slug}" が重複しています（${other.file} と同じ。コラムと事例のあいだでも重複不可）`);
    } else {
      bySlug.set(entry.slug, entry);
    }
  }
  const byPath = new Map(entries.map((e) => [`/${e.folderType === "column" ? "column" : "cases"}/${e.slug}`, e]));
  const excluded = (e) => e.draft && !SHOW_DRAFTS;
  const laterThan = (target, entry) =>
    target.publishedAt && entry.publishedAt && Date.parse(target.publishedAt) > Date.parse(entry.publishedAt);

  for (const entry of entries) {
    const related = Array.isArray(entry.data.related) ? entry.data.related.filter(isText).map((s) => s.trim()) : [];
    entry.related = [];
    for (const slug of related) {
      const target = bySlug.get(slug);
      if (!target) {
        entry.errors.push(`related の "${slug}" という記事がありません`);
      } else if (target === entry) {
        entry.warnings.push(`related に自分自身（${slug}）が入っています（外して出力します）`);
      } else {
        if (excluded(target) && !excluded(entry)) {
          entry.warnings.push(`related の "${slug}" は下書きです（公開されるまで関連記事に出ません）`);
        }
        entry.related.push(slug);
      }
    }

    for (const link of entry.links ?? []) {
      const pathname = link.split(/[?#]/)[0].replace(/\/+$/, "");
      const m = pathname.match(/^\/(column|cases)\/(.+)$/);
      if (!m) continue; // 一覧（/column・/cases）やその他のページは対象外
      if (pathname === "/column/feed.xml") continue;
      const target = byPath.get(pathname);
      if (!target) {
        entry.errors.push(`本文のサイト内リンクの行き先がありません: ${link}`);
      } else if (excluded(target) && !excluded(entry)) {
        entry.warnings.push(`本文のリンク先 ${link} は下書きです（公開されるまでリンク切れになります）`);
      } else if (laterThan(target, entry)) {
        entry.warnings.push(`本文のリンク先 ${link} のほうが公開が遅いです（それまでリンク切れになります）`);
      }
    }
  }
}

/* ---------- 実行 ---------- */

const entries = readEntries();
for (const entry of entries) {
  if (entry.errors.length === 0) validateFrontmatter(entry);
  renderBody(entry);
}
validateReferences(entries);

let errorCount = 0;
let warningCount = 0;
for (const entry of entries) {
  // 出力に含めない下書きは、不備があってもビルドを止めない（警告として知らせる）
  const skipped = entry.draft && !SHOW_DRAFTS;
  const errors = skipped ? [] : entry.errors;
  const warnings = skipped ? [...entry.errors.map((m) => `（下書き）${m}`), ...entry.warnings] : entry.warnings;
  if (errors.length === 0 && warnings.length === 0) continue;
  console.log(`\n${entry.file}`);
  for (const m of errors) console.log(`  エラー: ${m}`);
  for (const m of warnings) console.log(`  警告: ${m}`);
  errorCount += errors.length;
  warningCount += warnings.length;
}

if (errorCount > 0) {
  console.error(`\n[articles] エラーが ${errorCount}件あります。直してからもう一度実行してください。`);
  process.exit(1);
}

const articles = entries
  .filter((entry) => SHOW_DRAFTS || !entry.draft)
  .map((entry) => {
    const { data } = entry;
    const article = {
      slug: entry.slug,
      type: entry.folderType,
      title: data.title.trim(),
      description: data.description.trim(),
    };
    if (PILLARS.includes(data.pillar)) article.pillar = data.pillar;
    if (isText(data.industry)) article.industry = data.industry.trim();
    article.publishedAt = entry.publishedAt;
    if (entry.updatedAt) article.updatedAt = entry.updatedAt;
    article.summary = data.summary.map((s) => s.trim());
    article.faq = data.faq.map((f) => ({ q: f.q.trim(), a: f.a.trim() }));
    article.related = entry.related;
    article.sources = (data.sources ?? []).map((s) => ({ title: s.title.trim(), url: s.url.trim() }));
    article.draft = entry.draft;
    article.html = entry.html;
    return article;
  })
  .sort((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt) || a.slug.localeCompare(b.slug));

fs.mkdirSync(path.dirname(OUT_FILE), { recursive: true });
fs.writeFileSync(OUT_FILE, `${JSON.stringify(articles, null, 2)}\n`);

const now = Date.now();
const columns = articles.filter((a) => a.type === "column").length;
const scheduled = articles.filter((a) => Date.parse(a.publishedAt) > now).length;
const skippedDrafts = entries.filter((e) => e.draft && !SHOW_DRAFTS).length;
console.log(
  `${errorCount + warningCount > 0 ? "\n" : ""}[articles] ${articles.length}本を書き出しました` +
    `（コラム ${columns} / 事例 ${articles.length - columns}、うち公開時刻前 ${scheduled}）` +
    `${SHOW_DRAFTS ? "・下書きを含む" : `・下書き ${skippedDrafts}本は除外`}` +
    `${warningCount > 0 ? `・警告 ${warningCount}件` : ""} → src/generated/articles.json`
);
