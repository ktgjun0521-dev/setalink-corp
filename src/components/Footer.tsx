import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
    <footer className="border-t border-paper/15 bg-ink pb-24 text-paper md:pb-0">
      <div className="mx-auto max-w-6xl px-6 pt-16 pb-10 lg:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-2 transition-opacity hover:opacity-80">
              <LogoMark size={24} />
              <span className="font-display text-xl font-black tracking-tight">セタリンク</span>
            </Link>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-paper/65">
              株式会社セタリンク ― データコンサルティングを中心に、改善活動の精度を高める会社。どこを直せば一番効くのかを数字で判断できる状態をつくり、改善が回り続けるまで伴走します。
            </p>
            <dl className="mt-6 space-y-1.5 text-sm text-paper/55">
              <div className="flex gap-3">
                <dt className="w-16 shrink-0">所在地</dt>
                <dd>〒154-0023 東京都世田谷区世田谷1-15-23</dd>
              </div>
              <div className="flex gap-3">
                <dt className="w-16 shrink-0">メール</dt>
                <dd>
                  <a href="mailto:info@setalinkapp.com" className="transition-colors hover:text-paper">
                    info@setalinkapp.com
                  </a>
                </dd>
              </div>
            </dl>
            <Link
              href="/contact"
              className="group mt-8 inline-flex h-12 items-center gap-3 border-2 border-accent-lime bg-accent-lime px-5 text-sm font-bold text-ink transition-colors hover:bg-paper"
            >
              無料で相談する（60分）
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          <nav className="border-t border-paper/20 md:border-t-0">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center justify-between border-b border-paper/20 py-3 text-sm text-paper/75 transition-colors hover:text-paper"
              >
                {link.label}
                <ArrowRight className="h-3.5 w-3.5 opacity-50" />
              </Link>
            ))}
          </nav>
        </div>

        <p className="mt-16 select-none font-inter text-[17vw] font-black leading-none tracking-tighter text-paper/[0.06] md:text-[11rem]">
          SETALINK
        </p>
        <div className="mt-6 flex flex-col items-center justify-between gap-3 border-t border-paper/15 pt-6 md:flex-row">
          <p className="font-inter text-xs text-paper/40">&copy; 2026 株式会社セタリンク All rights reserved.</p>
          <p className="font-inter text-xs text-paper/40">setalinkapp.com</p>
        </div>
      </div>
    </footer>
  );
}
