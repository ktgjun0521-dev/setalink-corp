import type { Metadata } from "next";
import { Noto_Sans_JP, Inter, Zen_Old_Mincho, Klee_One } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCta from "@/components/MobileCta";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
});

// お客様の声・大きな数字に使う明朝
const zenOldMincho = Zen_Old_Mincho({
  variable: "--font-zen-old-mincho",
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

// イラストの書き込み（会議メモ風）に使う手書き風
const kleeOne = Klee_One({
  variable: "--font-klee-one",
  subsets: ["latin"],
  weight: ["600"],
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
    default: "セタリンク | がんばっている改善を、ちゃんと成果につなげる",
    template: "%s | セタリンク",
  },
  description:
    "どこを直せば一番効くのか、その施策は効いたのか。セタリンクは、数字で判断できる状態をつくり、改善が回り続けるまで伴走する会社です。データコンサルティングを中心に、AI導入支援・業務改善（BPR）も提供。初回相談は無料（60分）。",
  metadataBase: new URL("https://setalinkapp.com"),
  alternates: {
    canonical: "https://setalinkapp.com",
  },
  openGraph: {
    title: "セタリンク | がんばっている改善を、ちゃんと成果につなげる",
    description:
      "改善活動はしているのに、どこを直せば一番効くのか分からない。そんな会社の改善を、数字で判断できる状態にして伴走します。",
    url: "https://setalinkapp.com",
    siteName: "セタリンク",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "/images/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "セタリンク | がんばっている改善を、ちゃんと成果につなげる",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "セタリンク | がんばっている改善を、ちゃんと成果につなげる",
    description:
      "改善活動はしているのに、どこを直せば一番効くのか分からない。そんな会社の改善を、数字で判断できる状態にして伴走します。",
    images: ["/images/hero-bg.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "wx5zV6F6f7kQCDLb9l8qdglX_0sQv3k8NzLEtHgxB7o",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "株式会社セタリンク",
  alternateName: ["セタリンク", "SETALINK Inc."],
  url: "https://setalinkapp.com",
  logo: "https://setalinkapp.com/images/hero-bg.jpg",
  description:
    "改善活動の精度を高める会社。データコンサルティング・AI導入支援・業務改善（BPR）を提供。",
  address: {
    "@type": "PostalAddress",
    streetAddress: "世田谷1-15-23",
    addressLocality: "世田谷区",
    addressRegion: "東京都",
    postalCode: "154-0023",
    addressCountry: "JP",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "080-5898-0565",
    contactType: "customer service",
    email: "junya.kataguchi@setalinkapp.com",
    availableLanguage: "Japanese",
  },
  founder: {
    "@type": "Person",
    name: "片口潤哉",
  },
  foundingDate: "2026-04",
  sameAs: ["https://www.linkedin.com/in/junya-kataguchi"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${notoSansJP.variable} ${zenOldMincho.variable} ${kleeOne.variable} ${inter.variable} font-sans antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileCta />
      </body>
    </html>
  );
}
