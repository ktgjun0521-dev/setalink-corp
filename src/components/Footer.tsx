import Link from "next/link";

const navLinks = [
  { href: "/services", label: "サービス" },
  { href: "/company", label: "会社概要" },
  { href: "/contact", label: "お問い合わせ" },
  { href: "/notice", label: "電子公告" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="font-inter text-xl font-bold tracking-tight text-foreground"
            >
              SETALink
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-gray">
              株式会社セタリンク
              <br />
              データコンサルティング・AI導入支援・業務改善
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-inter text-xs font-semibold uppercase tracking-widest text-gray">
              Navigation
            </p>
            <nav className="mt-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-foreground/70 transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="font-inter text-xs text-gray">
            &copy; 2026 SETALink Inc. All rights reserved.
          </p>
          <p className="font-inter text-xs text-gray">
            setalinkapp.com
          </p>
        </div>
      </div>
    </footer>
  );
}
