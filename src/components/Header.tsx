"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import LogoMark from "@/components/LogoMark";

const navLinks = [
  { href: "/#support", label: "支援内容" },
  { href: "/cases", label: "支援事例" },
  { href: "/company", label: "会社概要" },
  { href: "/#faq", label: "よくある質問" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md shadow-[0_1px_0_var(--border)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 transition-opacity hover:opacity-70"
        >
          <LogoMark />
          <span className="font-maru text-xl font-bold tracking-tight text-foreground">
            セタリンク
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`link-underline text-sm font-medium transition-colors ${
                pathname === link.href
                  ? "text-accent-blue"
                  : "text-foreground/75 hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="group inline-flex h-10 items-center justify-center gap-1.5 rounded-full bg-accent-blue px-5 text-sm font-bold text-white shadow-[0_4px_0_#1E3FC4] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_6px_0_#1E3FC4] active:translate-y-0.5 active:shadow-[0_1px_0_#1E3FC4]"
          >
            無料相談
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
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

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-background transition-all duration-500 md:hidden ${
          menuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <nav className="flex h-full flex-col items-center justify-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-maru text-2xl font-bold text-foreground transition-colors hover:text-accent-blue"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-4 inline-flex h-14 items-center justify-center gap-2 rounded-full bg-accent-blue px-10 text-base font-bold text-white shadow-[0_4px_0_#1E3FC4]"
          >
            無料で相談する（60分）
            <ArrowRight className="h-4 w-4" />
          </Link>
        </nav>
      </div>
    </header>
  );
}
