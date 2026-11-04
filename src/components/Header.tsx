"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import LogoMark from "@/components/LogoMark";

const navLinks = [
  { href: "/#support", label: "支援内容" },
  { href: "/cases", label: "支援実績・事例" },
  { href: "/company", label: "会社概要" },
  { href: "/faq", label: "よくある質問" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-[0_1px_0_var(--border)]">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-70">
          <LogoMark />
          <span className="text-xl font-bold tracking-[0.08em]">セタリンク</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-accent-blue ${pathname === link.href ? "text-accent-blue" : ""}`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="inline-flex h-9 items-center justify-center rounded-[2px] bg-accent-blue px-5 text-[13px] font-bold text-white transition-colors hover:bg-navy"
          >
            無料相談
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative z-50 flex h-10 w-10 items-center justify-center md:hidden"
          aria-label={menuOpen ? "メニューを閉じる" : "メニューを開く"}
        >
          <div className="flex flex-col gap-1.5">
            <span className={`block h-0.5 w-6 bg-foreground transition-all duration-300 ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-6 bg-foreground transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 bg-foreground transition-all duration-300 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-x-0 bottom-0 top-16 z-40 bg-white transition-all duration-200 md:hidden ${
          menuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <nav className="flex flex-col px-5 pt-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-between border-b border-border py-4 text-base font-medium"
            >
              {link.label}
              <ChevronRight className="h-4 w-4 text-accent-blue" />
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-8 inline-flex h-[54px] items-center justify-center rounded-[2px] bg-accent-blue text-[15px] font-bold text-white"
          >
            無料で相談する（60分）
          </Link>
        </nav>
      </div>
    </header>
  );
}
