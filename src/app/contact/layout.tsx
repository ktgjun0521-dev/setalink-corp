import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "無料相談・お問い合わせ",
  description:
    "株式会社セタリンクへの無料相談・お問い合わせ。初回相談（60分・オンライン）は無料です。改善したいことがあれば、まずはお気軽にご相談ください。",
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
