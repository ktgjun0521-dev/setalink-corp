#!/usr/bin/env node
// IndexNow で、検索エンジン（Bing など）に「このURLが新しくなった」と知らせる。
// 送る前に、各URLが本番（https://setalinkapp.com）で実際に見られる（HTTP 200）ことを確かめ、
// まだ出ていないURLは送らない。
//
// 使い方:
//   node scripts/indexnow.mjs https://setalinkapp.com/column/xxx [https://…]
//   node scripts/indexnow.mjs /column/xxx /cases/yyy        （パスだけでも可）
//   node scripts/indexnow.mjs --recent 24                   （直近24時間に公開時刻を迎えた記事）
//   どれも --dry-run を付けると、IndexNow には送らずに、送る内容だけを表示する
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import matter from "gray-matter";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const HOST = "setalinkapp.com";
const ORIGIN = `https://${HOST}`;
const ENDPOINT = "https://api.indexnow.org/indexnow";
const FOLDERS = [
  { dir: "column", base: "/column" },
  { dir: "cases", base: "/cases" },
];

function fail(message) {
  console.error(`[indexnow] ${message}`);
  process.exit(1);
}

// キーは public/<キー>.txt（中身もキー）として置いてある。ファイル名と中身が一致するものを使う
function findKey() {
  const publicDir = path.join(ROOT, "public");
  for (const name of fs.readdirSync(publicDir)) {
    const m = name.match(/^([0-9a-f]{32})\.txt$/);
    if (m && fs.readFileSync(path.join(publicDir, name), "utf8").trim() === m[1]) return m[1];
  }
  return fail("キーのファイル（public/<32桁の16進>.txt）が見つかりません");
}

// 直近 hours 時間に公開時刻（publishedAt）を迎えた記事のURL。下書きは除く
function recentUrls(hours) {
  const now = Date.now();
  const since = now - hours * 60 * 60 * 1000;
  const urls = [];
  for (const { dir, base } of FOLDERS) {
    const folder = path.join(ROOT, "content", dir);
    if (!fs.existsSync(folder)) continue;
    for (const name of fs.readdirSync(folder).filter((n) => n.endsWith(".md")).sort()) {
      const { data } = matter(fs.readFileSync(path.join(folder, name), "utf8"));
      if (data.draft === true) continue;
      const publishedAt = Date.parse(String(data.publishedAt ?? ""));
      if (Number.isNaN(publishedAt) || publishedAt > now || publishedAt <= since) continue;
      urls.push(`${ORIGIN}${base}/${name.replace(/\.md$/, "")}`);
    }
  }
  return urls;
}

// 引数のURL（またはパス）を、このサイトのURLにそろえる。ほかのサイトのURLは送らない
function normalizeUrl(value) {
  let url;
  try {
    url = new URL(value, ORIGIN);
  } catch {
    return fail(`URLとして読めません: ${value}`);
  }
  if (url.protocol !== "https:" || url.hostname !== HOST) {
    return fail(`${HOST} 以外のURLは送れません: ${value}`);
  }
  return url.href;
}

const args = process.argv.slice(2);
const dryRun = args.includes("--dry-run");
const rest = args.filter((a) => a !== "--dry-run");

let urls;
const recentIndex = rest.indexOf("--recent");
if (recentIndex !== -1) {
  const hours = Number(rest[recentIndex + 1]);
  if (!Number.isFinite(hours) || hours <= 0) fail("--recent のあとに時間（例 24）を指定してください");
  urls = recentUrls(hours);
} else {
  urls = rest.map(normalizeUrl);
}
urls = [...new Set(urls)];

if (urls.length === 0) {
  console.log("[indexnow] 送るURLがありません（引数にURLを書くか、--recent <時間> を指定）");
  process.exit(0);
}

// 本番で実際に見られる（HTTP 200）URLだけを送る。まだ出ていないURLは知らせない。
// 1回目が 200 でなくても、ページの作り直しを待ってもう一度だけ確かめる
async function isLive(url) {
  for (let attempt = 0; attempt < 2; attempt++) {
    if (attempt > 0) await new Promise((resolve) => setTimeout(resolve, 5000));
    try {
      const res = await fetch(url, { redirect: "manual" });
      if (res.status === 200) return true;
    } catch {
      /* つながらないときは、見られない扱いにする */
    }
  }
  return false;
}

const live = [];
const notLive = [];
for (const url of urls) (await isLive(url) ? live : notLive).push(url);

if (notLive.length > 0) {
  console.log(`[indexnow] 本番でまだ見られないため送らないURL（${notLive.length}件）:`);
  for (const url of notLive) console.log(`  ${url}`);
}
if (live.length === 0) fail("送れるURLがありません（本番で表示されてからもう一度実行してください）");

const key = findKey();
const payload = { host: HOST, key, keyLocation: `${ORIGIN}/${key}.txt`, urlList: live };

console.log(`[indexnow] 送るURL（${live.length}件）:`);
for (const url of live) console.log(`  ${url}`);

if (dryRun) {
  console.log("[indexnow] --dry-run のため送信していません");
  process.exit(notLive.length > 0 ? 1 : 0);
}

const res = await fetch(ENDPOINT, {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify(payload),
});

// 200・202 が受け付け。403 はキーのファイルが本番で見えていない、422 はURLがこのサイトのものでない
if (!res.ok) fail(`送信に失敗しました（HTTP ${res.status} ${res.statusText}）`);
console.log(`[indexnow] 送信しました（HTTP ${res.status}）`);
// 送らなかったURLがあるときは、気づけるように終了コードを 1 にする
process.exit(notLive.length > 0 ? 1 : 0);
