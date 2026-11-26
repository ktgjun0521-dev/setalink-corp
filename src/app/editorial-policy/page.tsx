import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/Section";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "編集方針",
  description:
    "株式会社セタリンクのコラム・事例の編集方針。書いていること・書かないこと、事実の確かめ方、生成AIの利用、訂正と更新の扱い、書き手について記載しています。",
  path: "/editorial-policy",
});

export default function EditorialPolicyPage() {
  return (
    <>
      <PageHero
        label="Editorial policy"
        title="編集方針"
        lead="セタリンクのコラム・事例は、事業の責任者の方が『現場に何を追わせるか』を数字で決めるときの材料になることを目的に書いています。"
      />

      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">
          <div className="article-body">
            <h2>書いていること</h2>
            <ul>
              <li>実際の支援で行った手順と、そこで分かったこと</li>
              <li>支援の前後で何が変わったか（事例）</li>
              <li>判断の材料になる公的な統計・調査（出どころを記載します）</li>
            </ul>

            <h2>書かないこと</h2>
            <ul>
              <li>確かめられない数字や、作り話の事例</li>
              <li>成果を約束する表現</li>
              <li>お客様の社名・個人名（事例は業種で表記します）</li>
            </ul>

            <h2>事実の確かめ方</h2>
            <ul>
              <li>自社の事例・数字は、代表が公開を了承した記録にあるものだけを使います</li>
              <li>外部の数字には、出どころ（発行元と資料名）を記載します</li>
              <li>事例の数字に試算が含まれる場合は、その前提を記載します</li>
            </ul>

            <h2>生成AIの利用について</h2>
            <p>
              記事の下書きと公開前の点検に、生成AIを使っています。題材・事実・数字は、上の基準で社内の記録と照らし合わせ、基準を満たさないものは公開しません。
            </p>

            <h2>訂正と更新</h2>
            <p>
              内容に誤りが見つかったときは、すみやかに直し、直した日を記事に記載します。更新日は、中身を実際に直したときだけ変更します。お気づきの点は、
              <Link href="/contact">お問い合わせフォーム</Link>
              からお知らせください。
            </p>

            <h2>書き手</h2>
            <ul>
              <li>執筆：セタリンク編集部</li>
              <li>監修：片口 潤哉（代表）</li>
              <li>
                運営：<Link href="/company">株式会社セタリンク</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
