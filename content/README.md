# content/ ― コラム・事例の原稿

HP（setalinkapp.com）のコラムと事例記事の原稿を置く場所です。
ここに Markdown を1本置いて本番ブランチに入れると、`publishedAt` の時刻を過ぎてから自動で表示されます。

**公開リポジトリです。お客様の実名・料金・秘密の値（APIキーなど）は書かないでください。**

## 置き場所

| 種類 | 置き場所 | 表示されるURL |
|---|---|---|
| コラム | `content/column/<slug>.md` | `/column/<slug>` |
| 事例 | `content/cases/<slug>.md` | `/cases/<slug>` |
| 画像 | `public/articles/<slug>/` | 本文からは `![説明](/articles/<slug>/ファイル名.png)` |

- `<slug>` はファイル名です。英小文字・数字・ハイフンだけ（例 `kpi-how-to-choose`）。コラムと事例のあいだでも同じ slug は使えません。
- 公開後に slug を変えるとURLが変わります。変えないでください。

## フロントマター（ファイルの先頭）

```yaml
---
title: "…"                 # 必須
description: "…"           # 必須（70〜120字めやす。メタ説明と一覧に使う）
type: column               # 必須 column | case（フォルダと一致）
pillar: A                  # column は必須 A|B|C|D
industry: "人材紹介"        # case は必須（業種）
publishedAt: "2026-12-01T08:00:00+09:00"  # 必須。この時刻を過ぎたら表示
updatedAt: "2026-12-10T08:00:00+09:00"    # 任意。中身を直したときだけ
summary:                   # 必須。ちょうど3行。記事冒頭の「結論」に出す
  - "…"
  - "…"
  - "…"
faq:                       # 必須。3〜5問
  - q: "…"
    a: "…"
related: ["slug-a", "slug-b"]   # 任意
sources:                   # 任意。末尾に「出どころ」として一覧表示
  - title: "…"
    url: "https://…"
draft: false               # true の間は本番ビルドに出さない
---
```

- 柱（pillar）：A「追う数字を決める」／B「集計の手間をなくす」／C「業種別の実例」／D「頼み方・体制」
- 日時は引用符で囲み、時刻とタイムゾーン（`+09:00`）まで書きます。
- `related` を書かないと、同じ柱（事例は事例どうし）の新しい記事が最大3本出ます。
- `summary` `faq` `title` `description` は文字のまま出ます（Markdown の記法は使えません）。

## 本文の書き方

- `h1`（`# `）は書きません。題名は `title` から出ます。本文は `## ` と `### ` で組みます。
- 表・番号つきリスト・チェックリスト（`- [ ]`）・引用（`> `）・太字が使えます。表はスマホで横スクロールになります。
- サイト内リンクは `/column/<slug>` `/cases/<slug>` のように `/` から書きます。外部リンクは自動で別タブになります。
- 本文の HTML はそのまま出力されます（消毒はしません）。原稿に入れるのは自分で書いた内容だけにしてください。

## 検査（`npm run articles`）

`npm run build` と `npm run dev` の前にも自動で動きます。原稿だけ確かめたいときは `npm run articles`。

**エラー（ビルドが止まる）**

- 必須項目の欠け／`summary` が3行でない／`faq` が3〜5問でない
- slug の重複・使えない文字／`type` とフォルダの不一致
- 日時が読めない（タイムゾーンなし・引用符なしも不可）
- `related` の指す記事が無い／本文のサイト内リンク（`/column/…` `/cases/…`）の行き先が無い
- 本文に `h1` がある／本文の画像ファイルが `public/` に無い
- `sources` の `title`・`url` の欠け

**警告（ビルドは通る）**

- `description` が70〜120字から外れている／本文が800字未満／表・リストが1つも無い
- リンク先・`related` の先が下書き、またはリンク先のほうが公開が遅い
- 知らない項目名（書き間違いの疑い）

`draft: true` の原稿は、不備があってもビルドを止めません（警告として表示）。

## 下書きの表示確認

`draft: true` の原稿は、環境変数 `SHOW_DRAFTS=1` のときだけ含まれます。

```bash
# bash
SHOW_DRAFTS=1 npm run dev
# PowerShell
$env:SHOW_DRAFTS = "1"; npm run dev
```

## 公開のタイミング

- 一覧・記事・サイトマップ・フィード（`/column/feed.xml`）は5分ごとに作り直されます。`publishedAt` を過ぎたあと、数分以内のアクセスから表示されます。
- 公開したあとに検索エンジンへ知らせるときは `node scripts/indexnow.mjs --recent 24`（直近24時間に公開時刻を迎えた記事が対象。本番でまだ見られないURLは送りません。`--dry-run` で送る内容だけ確認できます）。
