import type { ReactNode } from "react";

// 以前はスクロールで順に表示していたが、落ち着いた見え方にするため動きは付けない
export default function FadeIn({ children, className = "" }: { children: ReactNode; className?: string; delay?: number; direction?: string }) {
  return <div className={className}>{children}</div>;
}
