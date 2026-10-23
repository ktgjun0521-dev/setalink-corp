import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FadeIn from "@/components/FadeIn";

/* 各ページ共通のパーツ（トップのデザインにそろえる） */

export function SectionTitle({
  label,
  children,
  lead,
  center = false,
}: {
  label: string;
  children: React.ReactNode;
  lead?: React.ReactNode;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="font-inter text-xs font-bold uppercase tracking-[0.25em] text-accent-blue">
        {label}
      </p>
      <h2 className="mt-3 font-maru text-[1.6rem] font-bold leading-[1.45] tracking-tight sm:text-3xl md:text-4xl">
        {children}
      </h2>
      {lead && (
        <p className="mt-5 text-[15px] leading-[1.9] text-gray">{lead}</p>
      )}
    </div>
  );
}

export function PrimaryCta({ children = "無料で相談する（60分）", className = "" }: { children?: React.ReactNode; className?: string }) {
  return (
    <Link
      href="/contact"
      className={`group inline-flex h-14 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-accent-blue px-8 text-[15px] font-bold text-white shadow-[0_5px_0_#1E3FC4] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_7px_0_#1E3FC4] active:translate-y-1 active:shadow-[0_1px_0_#1E3FC4] ${className}`}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </Link>
  );
}

/* 下層ページの見出し */
export function PageHero({
  label,
  title,
  lead,
  illustration,
}: {
  label: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  illustration?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pt-28 pb-14 sm:pt-32 md:pt-36 md:pb-20">
      <div className="pointer-events-none absolute -right-40 -top-40 h-[460px] w-[460px] rounded-full bg-sky/70 blur-3xl" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-8 px-5 sm:px-6 md:grid-cols-[1fr_auto] lg:px-8">
        <div className="fade-in-up">
          <p className="font-inter text-xs font-bold uppercase tracking-[0.25em] text-accent-blue">
            {label}
          </p>
          <h1 className="mt-3 font-maru text-[2rem] font-bold leading-[1.4] tracking-tight sm:text-4xl md:text-5xl">
            {title}
          </h1>
          {lead && (
            <p className="mt-5 max-w-2xl text-[15px] leading-[1.9] text-gray sm:text-base">
              {lead}
            </p>
          )}
        </div>
        {illustration && (
          <div className="fade-in hidden md:block" style={{ animationDelay: "200ms", animationFillMode: "both" }}>
            {illustration}
          </div>
        )}
      </div>
    </section>
  );
}

/* ページ下部の相談パネル */
export function CtaPanel({
  title = (
    <>
      まずは60分、
      <br className="sm:hidden" />
      いまの改善の話を
      <br />
      聞かせてください。
    </>
  ),
  lead = "「何から相談すればいいか分からない」という段階でも大丈夫です。初回相談は無料、オンラインで対応します。",
}: {
  title?: React.ReactNode;
  lead?: React.ReactNode;
}) {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="relative overflow-hidden rounded-[2rem] bg-navy px-6 py-14 text-center text-white sm:px-10 md:py-20">
            <div className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-accent-blue/40 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -right-10 h-56 w-56 rounded-full bg-accent-lime/30 blur-3xl" />
            <p className="relative font-inter text-xs font-bold uppercase tracking-[0.25em] text-accent-lime">
              Contact
            </p>
            <h2 className="relative mt-4 font-maru text-[1.6rem] font-bold leading-[1.5] sm:text-3xl md:text-4xl">
              {title}
            </h2>
            <p className="relative mx-auto mt-5 max-w-md text-sm leading-[1.9] text-white/70">{lead}</p>
            <div className="relative mt-9 flex justify-center">
              <Link
                href="/contact"
                className="group inline-flex h-14 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-accent-lime px-9 text-[15px] font-bold text-navy shadow-[0_5px_0_#8FAE1C] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_7px_0_#8FAE1C] active:translate-y-1 active:shadow-[0_1px_0_#8FAE1C]"
              >
                無料で相談する（60分）
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <p className="relative mt-4 text-xs text-white/50">2営業日以内にご連絡します</p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
