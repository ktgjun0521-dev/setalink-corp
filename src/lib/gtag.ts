// Google Analytics 4 にイベントを送る小さなヘルパー。
// gtag が読み込まれていない（NEXT_PUBLIC_GA_ID 未設定・広告ブロックなど）ときは何もしない。

type EventParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(name: string, params: EventParams = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", name, params);
}
