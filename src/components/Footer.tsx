import Link from "next/link";
import { Mail, MapPin, ArrowRight } from "lucide-react";
import LogoMark from "@/components/LogoMark";

const navLinks = [
  { href: "/#support", label: "支援内容" },
  { href: "/cases", label: "支援事例" },
  { href: "/company", label: "会社概要" },
  { href: "/#faq", label: "よくある質問" },
  { href: "/contact", label: "お問い合わせ" },
  { href: "/notice", label: "電子公告" },
];

export default function Footer() {
  return (
    <footer className="relative bg-navy pb-24 text-white md:pb-0">
      <div className="relative mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="group inline-flex items-center gap-2 transition-opacity hover:opacity-80"
            >
              <LogoMark size={24} />
              <span className="font-maru text-xl font-bold tracking-tight">
                セタリンク
              </span>
            </Link>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/65">
              株式会社セタリンク ― 改善活動の精度を高める会社。どこを直せば一番効くのかを数字で判断できる状態をつくり、改善が回り続けるまで伴走します。
            </p>
            <div className="mt-6 flex flex-col gap-3 text-sm text-white/55">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>〒154-0023 東京都世田谷区世田谷1-15-23</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@setalinkapp.com" className="transition-colors duration-300 hover:text-white">
                  info@setalinkapp.com
                </a>
              </div>
            </div>
            <Link
              href="/contact"
              className="group mt-8 inline-flex h-11 items-center gap-2 rounded-full bg-accent-lime px-6 text-sm font-bold text-navy transition-transform duration-200 hover:-translate-y-0.5"
            >
              無料で相談する（60分）
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-inter text-xs font-semibold uppercase tracking-widest text-white/40">
              Navigation
            </p>
            <nav className="mt-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/65 transition-all duration-300 hover:text-white hover:translate-x-1"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="font-inter text-xs text-white/40">
            &copy; 2026 株式会社セタリンク All rights reserved.
          </p>
          <p className="font-inter text-xs text-white/40">
            setalinkapp.com
          </p>
        </div>
      </div>
    </footer>
  );
}
