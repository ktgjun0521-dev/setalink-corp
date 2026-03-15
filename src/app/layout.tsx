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
  openGraph: {
    title: "SETALINK | データ × AI で、本気ではたらく社会を共に創る",
    description:
      "データ基盤構築とAI活用の現場伴走を強みとするITコンサルティング会社。",
    url: "https://setalinkapp.com",
    siteName: "SETALINK",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SETALINK | データ × AI で、本気ではたらく社会を共に創る",
    description:
      "データ基盤構築とAI活用の現場伴走を強みとするITコンサルティング会社。",
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
