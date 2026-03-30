import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description:
    "SETALINK株式会社へのお問い合わせ。データ活用・AI導入・業務改善に関するご相談をお気軽にどうぞ。",
  alternates: {
    canonical: "https://setalinkapp.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
