import { ChevronDown } from "lucide-react";
import type { Faq } from "@/lib/faq";

export default function FaqList({ items }: { items: Faq[] }) {
  return (
    <div className="border-t border-border">
      {items.map((f) => (
        <details key={f.q} className="group border-b border-border">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-[15px] font-bold [&::-webkit-details-marker]:hidden">
            <span className="flex items-start gap-3">
              <span className="text-accent-blue">Q</span>
              {f.q}
            </span>
            <ChevronDown className="h-5 w-5 shrink-0 text-accent-blue transition-transform duration-200 group-open:rotate-180" />
          </summary>
          <p className="pb-6 pl-7 text-sm leading-[2]">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
