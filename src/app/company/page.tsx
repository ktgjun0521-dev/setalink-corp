import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";
import { MapPin, Globe, Building2, Calendar, User, Briefcase, Banknote } from "lucide-react";

export const metadata: Metadata = {
  title: "会社概要",
  description:
    "SETALINK株式会社の会社情報。データコンサルティング・AI導入支援・業務改善を提供。",
};

const companyInfo = [
  { icon: Building2, label: "会社名", value: "SETALINK株式会社（セタリンク）" },
  { icon: Globe, label: "英語名", value: "SETALINK Inc." },
  { icon: Calendar, label: "設立", value: "2026年4月" },
  { icon: User, label: "代表者", value: "片口 潤哉" },
  { icon: Banknote, label: "資本金", value: "100万円" },
  { icon: MapPin, label: "所在地", value: "〒154-0023 東京都世田谷区世田谷1-15-23" },
  {
    icon: Briefcase,
    label: "事業内容",
    value:
      "データ活用・AI活用によるDX支援及び関連するコンサルティングサービスの提供",
  },
  { icon: Globe, label: "URL", value: "https://setalinkapp.com", isLink: true },
];

export default function CompanyPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute -right-32 -top-32 h-[400px] w-[400px] rounded-full bg-accent-blue/5 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
          <FadeIn>
            <p className="font-inter text-xs font-semibold uppercase tracking-[0.25em] text-accent-blue">
              Company
            </p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">
              会社概要
            </h1>
            <div className="section-divider mt-8" />
          </FadeIn>
        </div>
      </section>

      {/* CEO Message */}
      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <FadeIn>
            <div className="grid gap-10 md:grid-cols-12 md:gap-16">
              {/* Photo area */}
              <div className="md:col-span-4">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-navy to-accent-blue aspect-[3/4]">
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                    <div className="h-24 w-24 rounded-full bg-white/10 flex items-center justify-center">
                      <User className="h-12 w-12 text-white/60" />
                    </div>
                    <p className="mt-4 text-sm font-medium text-white/60">代表取締役</p>
                    <p className="mt-1 text-xl font-bold">片口 潤哉</p>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="md:col-span-8">
                <p className="font-inter text-xs font-semibold uppercase tracking-[0.25em] text-accent-blue">
                  Message
                </p>
                <h2 className="mt-2 text-2xl font-bold leading-snug tracking-tight md:text-3xl">
                  人々が本気ではたらく社会を
                  <br />
                  共に創る。
                </h2>

                <div className="mt-8 space-y-4 text-sm leading-loose text-foreground/80">
                  <p>
                    「なりたい状態」を目指し、「やりたいこと」に向かって動けていると、
                    人は今を幸せに生きられる。ただし現実には、「やりたい」のそばに
                    「やりたくない」「めんどくさい」が必ずついてくる。
                  </p>
                  <p>
                    たとえば、営業が好きで入社したのに、事務作業に時間の4割を取られる。
                    本来コア業務に投下したい人と時間を、思い通りに使えない。
                    その結果、自分（自社）が本当にやりたいことを見失ってしまう。
                  </p>
                  <p>
                    だからこそ私たちは、本当にやりたいことを見出し、無駄を削減することで、
                    個人と組織が「本気ではたらく」環境をつくっていきます。
                  </p>
                </div>

                <div className="mt-8 border-t border-border pt-6">
                  <p className="text-xs text-gray">代表取締役</p>
                  <p className="mt-1 text-lg font-bold">片口 潤哉</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Golden Circle / Philosophy */}
      <section className="bg-navy py-20 md:py-28 text-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <FadeIn>
            <div className="text-center">
              <p className="font-inter text-xs font-semibold uppercase tracking-[0.25em] text-accent-blue">
                Philosophy
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
                セタリンクの考え方
              </h2>
              <div className="mx-auto mt-6 section-divider" />
            </div>
          </FadeIn>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <FadeIn delay={0}>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-500 text-white font-inter font-bold text-lg">
                  WHY
                </div>
                <h3 className="mt-6 text-lg font-bold">存在意義</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  人々が本気ではたらく社会を共に創る
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={120}>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-orange-400 text-orange-400 font-inter font-bold text-lg">
                  HOW
                </div>
                <h3 className="mt-6 text-lg font-bold">アプローチ</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  再現性ある技術を個人と組織になじませる
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={240}>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-orange-300 text-orange-300 font-inter font-bold text-lg">
                  WHAT
                </div>
                <h3 className="mt-6 text-lg font-bold">提供価値</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  データドリブン経営支援・AI導入支援
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Company Info Table */}
      <section className="py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <FadeIn>
            <div className="text-center">
              <p className="font-inter text-xs font-semibold uppercase tracking-[0.25em] text-accent-blue">
                Corporate Information
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
                会社情報
              </h2>
              <div className="mx-auto mt-6 section-divider" />
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="mx-auto mt-12 max-w-3xl">
              <dl className="divide-y divide-border rounded-2xl border border-border bg-white overflow-hidden">
                {companyInfo.map((item) => (
                  <div
                    key={item.label}
                    className="grid grid-cols-1 gap-1 px-6 py-5 sm:grid-cols-3 sm:gap-4 sm:py-6"
                  >
                    <dt className="flex items-center gap-2 text-sm font-medium text-gray">
                      <item.icon className="h-4 w-4 text-accent-blue" />
                      {item.label}
                    </dt>
                    <dd className="text-sm leading-relaxed text-foreground sm:col-span-2">
                      {item.isLink ? (
                        <a
                          href={item.value}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-inter text-accent-blue underline-offset-4 transition-colors hover:underline"
                        >
                          {item.value}
                        </a>
                      ) : (
                        item.value
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
