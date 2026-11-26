// 流入元の記録（ブラウザの sessionStorage に持ち、問い合わせの送信時に一緒に送る）。
// 持つのは「最初に見たページのパス」「参照元のホスト名」「UTM」「直前に読んだ記事のパス」だけ。

export interface Attribution {
  /** セッション最初のページのパス */
  landingPage: string;
  /** 参照元のホスト名（document.referrer のホストだけ。サイト内の移動は入れない） */
  referrer: string;
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
  /** 直前に読んだ記事のパス（/column/* /cases/*） */
  lastArticle: string;
}

const STORAGE_KEY = "setalink.attribution";
const MAX_LENGTH = 200;
const ARTICLE_PATH = /^\/(column|cases)\/[^/]+\/?$/;

const empty: Attribution = {
  landingPage: "",
  referrer: "",
  utmSource: "",
  utmMedium: "",
  utmCampaign: "",
  lastArticle: "",
};

const cut = (value: unknown) => (typeof value === "string" ? value.slice(0, MAX_LENGTH) : "");

export function readAttribution(): Attribution {
  try {
    const stored = JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) ?? "null");
    if (!stored || typeof stored !== "object") return { ...empty };
    return {
      landingPage: cut(stored.landingPage),
      referrer: cut(stored.referrer),
      utmSource: cut(stored.utmSource),
      utmMedium: cut(stored.utmMedium),
      utmCampaign: cut(stored.utmCampaign),
      lastArticle: cut(stored.lastArticle),
    };
  } catch {
    return { ...empty };
  }
}

function referrerHost(): string {
  try {
    if (!document.referrer) return "";
    const host = new URL(document.referrer).hostname;
    return host === window.location.hostname ? "" : host;
  } catch {
    return "";
  }
}

/** ページを開くたびに呼ぶ。sessionStorage が使えない環境では何もしない */
export function recordPageView(pathname: string) {
  try {
    const current = readAttribution();
    const isFirstPage = current.landingPage === "";
    const params = new URLSearchParams(window.location.search);
    const next: Attribution = {
      landingPage: isFirstPage ? cut(pathname) : current.landingPage,
      referrer: isFirstPage ? cut(referrerHost()) : current.referrer,
      utmSource: current.utmSource || cut(params.get("utm_source") ?? ""),
      utmMedium: current.utmMedium || cut(params.get("utm_medium") ?? ""),
      utmCampaign: current.utmCampaign || cut(params.get("utm_campaign") ?? ""),
      lastArticle: ARTICLE_PATH.test(pathname) ? cut(pathname) : current.lastArticle,
    };
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    /* プライベートブラウズなどで保存できないときは記録しない */
  }
}
