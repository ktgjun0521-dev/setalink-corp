"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// スマホで画面下に固定する相談ボタン。ファーストビューを過ぎてから出す
export default function MobileCta() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 480);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (pathname === "/contact") return null;
  const dark = pathname === "/concept"; // 検討用のコンセプト案は暗い配色

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t px-4 ${dark ? "border-white/10 bg-[#060A14]/90" : "border-ink bg-background/95"} pb-[calc(env(safe-area-inset-bottom)+12px)] pt-3 backdrop-blur-md transition-transform duration-300 md:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <Link
        href="/contact"
        data-track="cta_click"
        data-track-location="mobile_sticky"
        className={`flex h-12 w-full items-center justify-center gap-2 text-sm font-bold ${
          dark ? "rounded-full bg-accent-lime text-[#0B1020]" : "border-2 border-ink bg-accent-blue text-white"
        }`}
      >
        無料で相談する（60分・オンライン）
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}
