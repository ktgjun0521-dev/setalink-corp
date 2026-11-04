import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

/* 各ページ共通のパーツ */

// 中央ぞろえの見出し＋短い線
export function SectionTitle({ children, lead }: { children: React.ReactNode; lead?: React.ReactNode }) {
  return (
    <div className="text-center">
      <h2 className="font-display text-[1.45rem] font-bold leading-[1.6] tracking-[0.1em] sm:text-[1.9rem]">{children}</h2>
      <span className="mx-auto mt-5 block h-[3px] w-10 bg-accent-blue" />
      {lead && <p className="mx-auto mt-7 max-w-3xl text-[15px] leading-[2] sm:text-base">{lead}</p>}
    </div>
  );
}

export function PrimaryCta({ children = "無料で相談する（60分）", className = "" }: { children?: React.ReactNode; className?: string }) {
  return (
    <Link
      href="/contact"
      className={`inline-flex h-[54px] items-center justify-center gap-2 whitespace-nowrap rounded-[2px] bg-accent-blue px-9 text-[15px] font-bold text-white transition-colors duration-200 hover:bg-navy ${className}`}
    >
      {children}
      <ChevronRight className="h-4 w-4" />
    </Link>
  );
}

export function SecondaryCta({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <Link
      href={href}
      className={`inline-flex h-[54px] items-center justify-center gap-2 whitespace-nowrap rounded-[2px] border border-accent-blue bg-white px-9 text-[15px] font-bold text-accent-blue transition-colors duration-200 hover:bg-light-blue ${className}`}
    >
      {children}
      <ChevronRight className="h-4 w-4" />
    </Link>
  );
}

export function TextLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="group inline-flex items-center gap-1.5 text-sm font-bold transition-colors hover:text-accent-blue">
      <ChevronRight className="h-4 w-4 text-accent-blue" />
      {children}
    </Link>
  );
}

/* 下層ページの見出し：写真の帯＋パンくず＋ページ名 */
export function PageHero({
  title,
  crumb,
  lead,
  image = "/images/cta-bg.jpg",
}: {
  title: string;
  crumb?: string;
  lead?: React.ReactNode;
  image?: string;
}) {
  return (
    <>
      <section className="relative h-[220px] overflow-hidden pt-[64px] text-white md:h-[300px]">
        <Image src={image} alt="" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-[#3B4F6E]/70" />
        <div className="relative mx-auto flex h-full max-w-6xl flex-col px-5 sm:px-6 lg:px-8">
          <p className="pt-4 text-xs">
            <Link href="/" className="hover:underline">ホーム</Link>
            <span className="mx-2">/</span>
            {crumb ?? title}
          </p>
          <h1 className="flex flex-1 items-center font-serif-jp text-[1.9rem] font-medium tracking-[0.1em] sm:text-[2.6rem]">{title}</h1>
        </div>
      </section>
      {lead && (
        <section className="bg-surface py-10 md:py-14">
          <p className="mx-auto max-w-3xl px-5 text-center text-[15px] leading-[2] sm:px-6 sm:text-base">{lead}</p>
        </section>
      )}
    </>
  );
}

/* ページ下部の相談の帯 */
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
    <section className="relative overflow-hidden text-white">
      <Image src="/images/contact-bg.jpg" alt="" fill sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-navy/85" />
      <div className="relative mx-auto max-w-4xl px-5 py-16 text-center sm:px-6 md:py-20">
        <h2 className="font-display text-[1.4rem] font-bold leading-[1.7] tracking-[0.08em] sm:text-[1.8rem]">{title}</h2>
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-[2] sm:text-[15px]">{lead}</p>
        <Link
          href="/contact"
          className="mt-8 inline-flex h-[58px] items-center justify-center gap-2 whitespace-nowrap rounded-[2px] bg-white px-12 text-base font-bold text-accent-blue transition-colors hover:bg-light-blue"
        >
          無料で相談する（60分）
          <ChevronRight className="h-4 w-4" />
        </Link>
        <p className="mt-3 text-xs">2営業日以内にご連絡します</p>
      </div>
    </section>
  );
}
