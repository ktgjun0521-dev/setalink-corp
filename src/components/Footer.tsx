import Link from "next/link";
import LogoMark from "@/components/LogoMark";

const navLinks = [
  { href: "/#support", label: "支援内容" },
  { href: "/cases", label: "支援実績・事例" },
  { href: "/company", label: "会社概要" },
  { href: "/faq", label: "よくある質問" },
  { href: "/contact", label: "お問い合わせ" },
  { href: "/notice", label: "電子公告" },
];

export default function Footer() {
  return (
    <footer className="bg-[#2B2E33] pb-20 text-white md:pb-0">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-6 lg:px-8">
        <nav className="flex flex-wrap gap-x-8 gap-y-3 border-b border-white/15 pb-8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-[13px] font-medium text-white/85 transition-colors hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Link href="/" className="inline-flex items-center gap-2 transition-opacity hover:opacity-80">
              <LogoMark size={22} />
              <span className="text-base font-bold tracking-[0.08em]">株式会社セタリンク</span>
            </Link>
            <p className="mt-3 text-xs leading-[2] text-white/70">
              〒154-0023 東京都世田谷区世田谷1-15-23
              <br />
              <a href="mailto:info@setalinkapp.com" className="transition-colors hover:text-white">
                info@setalinkapp.com
              </a>
            </p>
          </div>
          <p className="text-xs text-white/60">&copy; 2026 株式会社セタリンク All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
