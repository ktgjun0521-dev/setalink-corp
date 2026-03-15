"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/services", label: "サービス" },
  { href: "/company", label: "会社概要" },
  { href: "/contact", label: "お問い合わせ" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
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
          className="font-inter text-xl font-bold tracking-tight text-foreground transition-opacity hover:opacity-70"
        >
          SETALink
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="link-underline text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative z-50 flex h-10 w-10 items-center justify-center md:hidden"
          aria-label={menuOpen ? "メニューを閉じる" : "メニューを開く"}
        >
          <div className="flex flex-col gap-1.5">
            <span
              className={`block h-0.5 w-6 bg-foreground transition-all duration-300 ${
                menuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-foreground transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-foreground transition-all duration-300 ${
                menuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-background transition-all duration-500 md:hidden ${
          menuOpen
            ? "visible opacity-100"
            : "invisible opacity-0"
        }`}
      >
        <nav className="flex h-full flex-col items-center justify-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-2xl font-bold text-foreground transition-colors hover:text-accent-blue"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
