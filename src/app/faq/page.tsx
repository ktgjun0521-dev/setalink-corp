import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";
import FaqList from "@/components/FaqList";
import { PageHero, CtaPanel } from "@/components/Section";
import { faqGroups, allFaqs } from "@/lib/faq";

export const metadata: Metadata = {
  title: "よくある質問",
  description:
    "株式会社セタリンクへのご相談の前によくいただく質問（初回相談の内容、データが整っていない場合、費用の考え方、進め方など）をまとめました。",
  alternates: {
    canonical: "https://setalinkapp.com/faq",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: allFaqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <PageHero
        label="FAQ"
        title="よくある質問"
        lead="ご相談の前によくいただく質問をまとめました。ここにない内容も、お気軽にお問い合わせください。"
      />

      <section className="bg-surface py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">
          {/* カテゴリへのジャンプ */}
          <nav className="flex flex-wrap gap-2" aria-label="質問のカテゴリ">
            {faqGroups.map((g, i) => (
              <a
                key={g.title}
                href={`#faq-${i + 1}`}
                className="border-2 border-ink bg-paper px-4 py-2 text-sm font-bold transition-colors hover:bg-foreground hover:text-white"
              >
                {g.title}
              </a>
            ))}
          </nav>

          <div className="mt-12 space-y-14">
            {faqGroups.map((g, i) => (
              <FadeIn key={g.title}>
                <div id={`faq-${i + 1}`} className="scroll-mt-24">
                  <h2 className="flex items-center gap-3 font-display text-xl font-bold sm:text-2xl">
                    <span className="flex h-9 w-9 items-center justify-center bg-accent-blue font-inter text-sm font-bold text-white">
                      {i + 1}
                    </span>
                    {g.title}
                  </h2>
                  <div className="mt-6">
                    <FaqList items={g.items} />
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CtaPanel
        title={
          <>
            ここにない質問も、
            <br />
            お気軽にどうぞ。
          </>
        }
        lead="初回相談（60分・オンライン）は無料です。「何から相談すればいいか分からない」という段階でも大丈夫です。"
      />
    </>
  );
}
