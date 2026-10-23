"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

// data-track="イベント名" と data-track-*="値" を付けた要素のクリックを計測する
export default function ClickTracker() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const el = (e.target as HTMLElement | null)?.closest<HTMLElement>("[data-track]");
      if (!el) return;
      const params: Record<string, string> = {};
      for (const [k, v] of Object.entries(el.dataset)) {
        if (k.startsWith("track") && k !== "track" && v) params[k.slice(5).toLowerCase()] = v;
      }
      trackEvent(el.dataset.track as string, params);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  return null;
}
