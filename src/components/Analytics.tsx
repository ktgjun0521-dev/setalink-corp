"use client";

import { useEffect } from "react";
import Script from "next/script";
import { trackEvent } from "@/lib/gtag";

// Google Analytics 4。環境変数 NEXT_PUBLIC_GA_ID があるときだけ読み込む（未設定なら何も出さない）
const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";
const enabled = /^G-[A-Z0-9]+$/.test(GA_ID);

export default function Analytics() {
  // /contact へのリンクのクリックを cta_click として送る（サイト内のどのボタンでも同じ扱い）
  useEffect(() => {
    if (!enabled) return;
    const onClick = (event: MouseEvent) => {
      const target = event.target instanceof Element ? event.target.closest("a[href]") : null;
      if (!(target instanceof HTMLAnchorElement)) return;
      const url = new URL(target.href, window.location.href);
      if (url.origin !== window.location.origin || url.pathname !== "/contact") return;
      trackEvent("cta_click", {
        link_text: (target.textContent ?? "").replace(/\s+/g, " ").trim().slice(0, 100),
        page_path: window.location.pathname,
      });
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  if (!enabled) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
      </Script>
    </>
  );
}
