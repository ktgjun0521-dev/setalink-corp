"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

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

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 transition-transform duration-300 md:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <Link
        href="/contact"
        className="flex h-[52px] w-full items-center justify-center bg-accent-blue pb-[env(safe-area-inset-bottom)] text-sm font-bold text-white"
      >
        無料で相談する（60分・オンライン）
      </Link>
    </div>
  );
}
