"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronDown, Sparkles, TrendingUp } from "lucide-react";

const serviceSubLinks = [
  { href: "/services", label: "サービス概要", labelEn: "Overview" },
  { href: "/services/imasugu-ai", label: "今すぐAI", labelEn: "AI活用・定着支援", icon: Sparkles, color: "text-emerald-500" },
  { href: "/services/imasugu-insight", label: "今すぐインサイト", labelEn: "データ戦略", icon: TrendingUp, color: "text-accent-blue" },
];

const navLinks = [
  { href: "/cases", label: "支援事例" },
  { href: "/company", label: "会社概要" },
  { href: "/contact", label: "お問い合わせ" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [serviceDropdownOpen, setServiceDropdownOpen] = useState(false);
  const [mobileServiceOpen, setMobileServiceOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServiceDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isHomePage = pathname === "/";
  const isServicePage = pathname.startsWith("/services");

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md shadow-[0_1px_0_var(--border)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 transition-opacity hover:opacity-70"
        >
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="8" cy="20" r="5" stroke="#2D5BFF" strokeWidth="2.5" fill="none" />
            <circle cx="16" cy="12" r="4" stroke="#0EA5E9" strokeWidth="2.5" fill="none" />
            <circle cx="22" cy="6" r="3" stroke="#06B6D4" strokeWidth="2" fill="none" />
            <line x1="12" y1="17" x2="13" y2="15" stroke="#2D5BFF" strokeWidth="2" strokeLinecap="round" />
            <line x1="19" y1="10" x2="20" y2="8" stroke="#0EA5E9" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <span className={`font-inter text-xl font-bold tracking-tight transition-colors duration-300 ${
            !scrolled && isHomePage ? "text-white" : "text-foreground"
          }`}>
            SetaLink
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {/* Services Dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setServiceDropdownOpen(!serviceDropdownOpen)}
              onMouseEnter={() => setServiceDropdownOpen(true)}
              className={`link-underline flex items-center gap-1 text-sm font-medium transition-colors ${
                isServicePage
                  ? "text-accent-blue"
                  : !scrolled && isHomePage
                    ? "text-white/80 hover:text-white"
                    : "text-foreground/80 hover:text-foreground"
              }`}
            >
              サービス
              <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${serviceDropdownOpen ? "rotate-180" : ""}`} />
            </button>

            {/* Dropdown Menu */}
            <div
              onMouseLeave={() => setServiceDropdownOpen(false)}
              className={`absolute left-1/2 top-full mt-3 -translate-x-1/2 transition-all duration-200 ${
                serviceDropdownOpen
                  ? "visible opacity-100 translate-y-0"
                  : "invisible opacity-0 -translate-y-2"
              }`}
            >
              <div className="w-72 rounded-2xl border border-border bg-white p-2 shadow-xl shadow-black/10">
                {serviceSubLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setServiceDropdownOpen(false)}
                    className={`group flex items-center gap-3 rounded-xl px-4 py-3 transition-colors hover:bg-surface ${
                      pathname === link.href ? "bg-light-blue" : ""
                    }`}
                  >
                    {link.icon ? (
                      <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-surface ${link.color}`}>
                        <link.icon className="h-4 w-4" />
                      </div>
                    ) : (
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-surface text-gray">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                      </div>
                    )}
                    <div>
                      <p className="text-sm font-medium text-foreground">{link.label}</p>
                      <p className="text-[11px] text-gray">{link.labelEn}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Other Nav Links */}
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`link-underline text-sm font-medium transition-colors ${
                pathname === link.href
                  ? "text-accent-blue"
                  : !scrolled && isHomePage
                    ? "text-white/80 hover:text-white"
                    : "text-foreground/80 hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="btn-shimmer inline-flex h-9 items-center justify-center rounded-full bg-gradient-to-r from-accent-blue to-blue-600 px-5 text-xs font-medium text-white transition-all duration-300 hover:shadow-lg hover:shadow-accent-blue/25 hover:scale-[1.05] active:scale-[0.97]"
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
            <span
              className={`block h-0.5 w-6 transition-all duration-300 ${
                menuOpen
                  ? "translate-y-2 rotate-45 bg-foreground"
                  : !scrolled && isHomePage ? "bg-white" : "bg-foreground"
              }`}
            />
            <span
              className={`block h-0.5 w-6 transition-all duration-300 ${
                menuOpen
                  ? "opacity-0 bg-foreground"
                  : !scrolled && isHomePage ? "bg-white" : "bg-foreground"
              }`}
            />
            <span
              className={`block h-0.5 w-6 transition-all duration-300 ${
                menuOpen
                  ? "-translate-y-2 -rotate-45 bg-foreground"
                  : !scrolled && isHomePage ? "bg-white" : "bg-foreground"
              }`}
            />
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
          {/* Mobile Services Accordion */}
          <div className="flex flex-col items-center">
            <button
              onClick={() => setMobileServiceOpen(!mobileServiceOpen)}
              className={`flex items-center gap-2 text-2xl font-bold transition-colors hover:text-accent-blue ${
                isServicePage ? "text-accent-blue" : "text-foreground"
              }`}
            >
              サービス
              <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${mobileServiceOpen ? "rotate-180" : ""}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${mobileServiceOpen ? "mt-4 max-h-60 opacity-100" : "max-h-0 opacity-0"}`}>
              <div className="flex flex-col items-center gap-3">
                {serviceSubLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => { setMenuOpen(false); setMobileServiceOpen(false); }}
                    className={`text-base font-medium transition-colors hover:text-accent-blue ${
                      pathname === link.href ? "text-accent-blue" : "text-foreground/70"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Other Links */}
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`text-2xl font-bold transition-colors hover:text-accent-blue ${
                pathname === link.href ? "text-accent-blue" : "text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="btn-shimmer mt-4 inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-accent-blue to-blue-600 px-8 text-sm font-medium text-white transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
          >
            無料相談はこちら
          </Link>
        </nav>
      </div>
    </header>
  );
}
