"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { recordPageView } from "@/lib/attribution";

// 流入元（最初に見たページ・参照元・UTM・直前に読んだ記事）を sessionStorage に記録する。画面には何も出さない
export default function AttributionCapture() {
  const pathname = usePathname();

  useEffect(() => {
    recordPageView(pathname);
  }, [pathname]);

  return null;
}
