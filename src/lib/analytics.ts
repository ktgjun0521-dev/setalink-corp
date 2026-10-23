// 計測（GA4 / Googleタグマネージャー）
// まだIDが決まっていないので、ここでは送信先を設定しない。
// 導入するときは layout.tsx でタグを読み込み、IDを環境変数（例：NEXT_PUBLIC_GA_ID / NEXT_PUBLIC_GTM_ID）に入れる。
// タグがない間は何も送らない（開発中だけコンソールに出す）。

export type TrackParams = Record<string, string | number | undefined>;

// 計測するイベントの名前（公開後の改善に使う）
export const EVENTS = {
  ctaClick: "cta_click", // 無料相談ボタンのクリック（location: どこのボタンか）
  serviceSelect: "service_select", // サービスのカードから相談へ（service: data / ai / bpr）
  caseView: "case_view", // 支援事例への移動
  formStart: "form_start", // 問い合わせフォームの入力開始
  formSubmit: "form_submit_success", // 問い合わせの送信成功
} as const;

export function trackEvent(name: string, params: TrackParams = {}) {
  if (typeof window === "undefined") return;
  const w = window as unknown as { gtag?: (...args: unknown[]) => void; dataLayer?: unknown[] };
  if (typeof w.gtag === "function") {
    w.gtag("event", name, params);
  } else if (Array.isArray(w.dataLayer)) {
    w.dataLayer.push({ event: name, ...params });
  } else if (process.env.NODE_ENV !== "production") {
    console.debug("[track]", name, params);
  }
}
