import type { Metadata } from "next";
import { Noto_Sans_JP, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "株式会社セタリンク | SETALink Inc.",
    template: "%s | 株式会社セタリンク",
  },
  description:
    "データコンサルティング・AI導入支援・業務改善を一気通貫で支援。株式会社セタリンクは、企業のデータ活用とDX推進をサポートします。",
  metadataBase: new URL("https://setalinkapp.com"),
  openGraph: {
    title: "株式会社セタリンク | SETALink Inc.",
    description:
      "データコンサルティング・AI導入支援・業務改善を一気通貫で支援。",
    url: "https://setalinkapp.com",
    siteName: "株式会社セタリンク",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "株式会社セタリンク | SETALink Inc.",
    description:
      "データコンサルティング・AI導入支援・業務改善を一気通貫で支援。",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${notoSansJP.variable} ${inter.variable} font-sans antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
