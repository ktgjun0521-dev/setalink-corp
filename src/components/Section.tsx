import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FadeIn from "@/components/FadeIn";

/* 各ページ共通のパーツ（雑誌風：罫線・通し番号・太い角ゴシック） */

export function SectionTitle({
  no,
  label,
  children,
  lead,
  center = false,
}: {
  no?: string;
  label: string;
  children: React.ReactNode;
  lead?: React.ReactNode;
  center?: boolean;
}) {
  return (
    <div>
      <div className="flex items-baseline gap-4 border-t-2 border-ink pt-3">
        {no && <span className="font-inter text-sm font-bold tabular-nums">{no}</span>}
        <span className="font-inter text-[11px] font-bold uppercase tracking-[0.3em] text-gray">{label}</span>
      </div>
      <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
        <h2 className="mt-8 font-display text-[1.7rem] font-black leading-[1.4] tracking-tight sm:text-[2.2rem] md:text-[2.6rem]">
          {children}
        </h2>
        {lead && (
          <p className={`mt-5 text-[15px] leading-[1.95] text-gray ${center ? "mx-auto max-w-2xl" : "max-w-2xl"}`}>{lead}</p>
        )}
      </div>
    </div>
  );
}

export function PrimaryCta({ children = "無料で相談する（60分）", className = "" }: { children?: React.ReactNode; className?: string }) {
  return (
    <Link
      href="/contact"
      className={`group inline-flex h-14 items-center justify-between gap-5 whitespace-nowrap border-2 border-ink bg-accent-blue pl-6 pr-2 text-[15px] font-bold text-white transition-colors duration-200 hover:bg-ink ${className}`}
    >
      {children}
      <span className="flex h-10 w-10 items-center justify-center bg-white/15 transition-transform group-hover:translate-x-0.5">
        <ArrowRight className="h-4 w-4" />
      </span>
    </Link>
  );
}

export function TextLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-2 border-b-2 border-ink pb-0.5 text-sm font-bold transition-colors hover:border-accent-blue hover:text-accent-blue"
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </Link>
  );
}

/* 下層ページの見出し（雑誌の扉のように） */
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
    <section className="border-b-2 border-ink pt-24 pb-12 sm:pt-28 md:pt-32 md:pb-16">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 border-b border-ink pb-3">
          <span className="font-inter text-[11px] font-bold uppercase tracking-[0.3em]">{label}</span>
          <span className="h-px flex-1 bg-ink/20" />
          <span className="font-inter text-[11px] font-bold uppercase tracking-[0.3em] text-gray">SETALINK</span>
        </div>
        <div className="mt-10 grid items-end gap-8 md:grid-cols-[1fr_auto]">
          <div className="fade-in-up">
            <h1 className="font-display text-[2.4rem] font-black leading-[1.2] tracking-tight sm:text-5xl md:text-6xl">
              {title}
            </h1>
            {lead && (
              <p className="mt-6 max-w-2xl text-[15px] leading-[1.95] text-gray sm:text-base">
                {lead}
              </p>
            )}
          </div>
          {illustration && <div className="hidden md:block">{illustration}</div>}
        </div>
      </div>
    </section>
  );
}

/* ページ下部の相談（墨色の帯） */
export function CtaPanel({
  title = (
    <>
      まずは60分、
      <br />
      いまの改善の話を聞かせてください。
    </>
  ),
  lead = "「何から相談すればいいか分からない」という段階でも大丈夫です。初回相談は無料、オンラインで対応します。",
}: {
  title?: React.ReactNode;
  lead?: React.ReactNode;
}) {
  return (
    <section className="bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-6 md:py-28 lg:px-8">
        <FadeIn>
          <div className="flex items-baseline gap-4 border-t-2 border-paper pt-3">
            <span className="font-inter text-[11px] font-bold uppercase tracking-[0.3em] text-accent-lime">Contact</span>
          </div>
          <div className="mt-8 grid items-end gap-10 lg:grid-cols-[1fr_auto]">
            <div>
              <h2 className="font-display text-[1.7rem] font-black leading-[1.45] sm:text-4xl md:text-[2.6rem]">{title}</h2>
              <p className="mt-5 max-w-xl text-sm leading-[1.95] text-paper/70">{lead}</p>
            </div>
            <div>
              <Link
                href="/contact"
                className="group inline-flex h-16 w-full items-center justify-between gap-6 whitespace-nowrap border-2 border-accent-lime bg-accent-lime pl-7 pr-2 text-base font-bold text-ink transition-colors hover:bg-paper sm:w-auto"
              >
                無料で相談する（60分）
                <span className="flex h-12 w-12 items-center justify-center bg-ink text-accent-lime transition-transform group-hover:translate-x-0.5">
                  <ArrowRight className="h-5 w-5" />
                </span>
              </Link>
              <p className="mt-3 text-xs text-paper/50">2営業日以内にご連絡します</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
