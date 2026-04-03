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
    default: "SETALINK | データ × AI で、本気ではたらく社会を共に創る",
    template: "%s | SETALINK",
  },
  description:
    "データ基盤構築とAI活用の現場伴走を強みとするITコンサルティング会社。データコンサルティング・AI導入支援・業務改善(BPR)を一気通貫で支援します。",
  metadataBase: new URL("https://setalinkapp.com"),
  alternates: {
    canonical: "https://setalinkapp.com",
  },
  openGraph: {
    title: "SETALINK | データ × AI で、本気ではたらく社会を共に創る",
    description:
      "データ基盤構築とAI活用の現場伴走を強みとするITコンサルティング会社。",
    url: "https://setalinkapp.com",
    siteName: "セタリンク",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "/images/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "SETALINK | データ × AI で、本気ではたらく社会を共に創る",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SETALINK | データ × AI で、本気ではたらく社会を共に創る",
    description:
      "データ基盤構築とAI活用の現場伴走を強みとするITコンサルティング会社。",
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
  name: "SETALINK株式会社",
  alternateName: "セタリンク",
  url: "https://setalinkapp.com",
  logo: "https://setalinkapp.com/images/hero-bg.jpg",
  description:
    "データコンサルティング・AI導入支援・業務改善（BPR）を提供するITコンサルティング会社。",
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
        className={`${notoSansJP.variable} ${inter.variable} font-sans antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
