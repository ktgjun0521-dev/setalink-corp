import { Plus } from "lucide-react";
import type { Faq } from "@/lib/faq";

export default function FaqList({ items }: { items: Faq[] }) {
  return (
    <div className="border-t-2 border-ink">
      {items.map((f) => (
        <details key={f.q} className="group border-b border-ink">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-[15px] font-bold [&::-webkit-details-marker]:hidden">
            <span className="flex items-start gap-3">
              <span className="font-mincho text-lg leading-none text-accent-blue">Q</span>
              {f.q}
            </span>
            <Plus className="h-5 w-5 shrink-0 transition-transform duration-300 group-open:rotate-45" />
          </summary>
          <p className="pb-6 pl-7 text-sm leading-[1.9] text-gray">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
