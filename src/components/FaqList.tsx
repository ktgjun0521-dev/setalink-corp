import { Plus } from "lucide-react";
import type { Faq } from "@/lib/faq";

export default function FaqList({ items }: { items: Faq[] }) {
  return (
    <div className="space-y-3">
      {items.map((f) => (
        <details key={f.q} className="group rounded-2xl bg-white px-5 py-1 open:pb-4 sm:px-6">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-[15px] font-bold [&::-webkit-details-marker]:hidden">
            <span className="flex items-start gap-3">
              <span className="font-inter text-accent-blue">Q.</span>
              {f.q}
            </span>
            <Plus className="h-5 w-5 shrink-0 text-accent-blue transition-transform duration-300 group-open:rotate-45" />
          </summary>
          <p className="border-t border-border pt-4 text-sm leading-[1.9] text-gray">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
