import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // サービスページは一時的に非公開（ページのファイルは残し、トップへ一時リダイレクト）
  async redirects() {
    return [
      { source: "/services", destination: "/", permanent: false },
      { source: "/services/:path*", destination: "/", permanent: false },
    ];
  },
};

export default nextConfig;
