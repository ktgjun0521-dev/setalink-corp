import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "電子公告",
  description: "株式会社セタリンク（SETALink Inc.）の電子公告ページ。",
};

export default function NoticePage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <FadeIn>
            <p className="font-inter text-xs font-semibold uppercase tracking-[0.25em] text-gray">
              Public Notice
            </p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">
              電子公告
            </h1>
            <div className="section-divider mt-8" />
          </FadeIn>
        </div>
      </section>

      {/* Notice Content */}
      <section className="pb-20 md:pb-28 lg:pb-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-3xl">
              <div className="rounded-lg border border-border bg-white p-8 md:p-12">
                <p className="text-sm leading-loose text-gray">
                  現在、掲載中の公告はありません。
                </p>
                <p className="mt-6 text-sm leading-loose text-gray">
                  会社法その他の法令に基づく公告は、このページに掲載いたします。
                </p>
              </div>

              <div className="mt-12 border-t border-border pt-8">
                <dl className="space-y-4 text-sm">
                  <div className="row-highlight grid grid-cols-1 gap-1 sm:grid-cols-3 sm:gap-4 py-2 px-2 rounded-lg">
                    <dt className="font-medium text-gray">公告方法</dt>
                    <dd className="text-foreground sm:col-span-2">
                      電子公告（本ウェブサイトに掲載）
                    </dd>
                  </div>
                  <div className="row-highlight grid grid-cols-1 gap-1 sm:grid-cols-3 sm:gap-4 py-2 px-2 rounded-lg">
                    <dt className="font-medium text-gray">公告URL</dt>
                    <dd className="sm:col-span-2">
                      <a
                        href="https://setalinkapp.com/notice"
                        className="font-inter text-accent-blue underline-offset-4 transition-colors hover:underline"
                      >
                        https://setalinkapp.com/notice
                      </a>
                    </dd>
                  </div>
                  <div className="row-highlight grid grid-cols-1 gap-1 sm:grid-cols-3 sm:gap-4 py-2 px-2 rounded-lg">
                    <dt className="font-medium text-gray">会社名</dt>
                    <dd className="text-foreground sm:col-span-2">
                      株式会社セタリンク
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
