import Link from "next/link";
import { Mail, MapPin } from "lucide-react";

const navLinks = [
  { href: "/services", label: "サービス" },
  { href: "/cases", label: "支援事例" },
  { href: "/company", label: "会社概要" },
  { href: "/contact", label: "お問い合わせ" },
  { href: "/notice", label: "電子公告" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-border bg-navy text-white overflow-hidden">
      {/* Subtle dot pattern */}
      <div className="absolute inset-0 dot-pattern opacity-[0.02]" />

      <div className="relative mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="group flex items-center gap-2 transition-opacity hover:opacity-80"
            >
              <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="8" cy="20" r="5" stroke="#2D5BFF" strokeWidth="2.5" fill="none" />
                <circle cx="16" cy="12" r="4" stroke="#0EA5E9" strokeWidth="2.5" fill="none" />
                <circle cx="22" cy="6" r="3" stroke="#06B6D4" strokeWidth="2" fill="none" />
                <line x1="12" y1="17" x2="13" y2="15" stroke="#2D5BFF" strokeWidth="2" strokeLinecap="round" />
                <line x1="19" y1="10" x2="20" y2="8" stroke="#0EA5E9" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <span className="font-inter text-xl font-bold tracking-tight">
                SetaLink
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              SETALINK株式会社 ― データ基盤構築とAI活用の&quot;現場伴走&quot;を強みとするITコンサルティング会社。
            </p>
            <div className="mt-6 flex flex-col gap-3 text-sm text-white/50">
              <div className="group flex items-center gap-2">
                <MapPin className="h-4 w-4 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:text-accent-blue" />
                <span className="transition-colors duration-300 group-hover:text-white/70">東京都世田谷区世田谷1-15-23</span>
              </div>
              <div className="group flex items-center gap-2">
                <Mail className="h-4 w-4 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:text-accent-blue" />
                <a href="mailto:info@setalinkapp.com" className="transition-colors duration-300 hover:text-white">
                  info@setalinkapp.com
                </a>
              </div>
            </div>
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
                  className="text-sm text-white/60 transition-all duration-300 hover:text-white hover:translate-x-1"
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
            &copy; 2026 SETALINK Inc. All rights reserved.
          </p>
          <p className="font-inter text-xs text-white/40">
            setalinkapp.com
          </p>
        </div>
      </div>
    </footer>
  );
}
