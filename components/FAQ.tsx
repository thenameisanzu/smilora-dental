"use client";
import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { faqs } from "@/lib/content";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="mx-auto max-w-3xl space-y-3">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={faq.q}
            className="overflow-hidden rounded-2xl border border-ink/10 bg-white transition-shadow hover:shadow-sm"
          >
            <button
              type="button"
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between p-5 text-left font-display text-base font-bold text-ink md:text-lg"
            >
              <span className="flex items-center gap-3">
                <HelpCircle size={20} className="shrink-0 text-teal" />
                {faq.q}
              </span>
              <ChevronDown
                size={20}
                className={`shrink-0 text-ink/50 transition-transform duration-200 ${
                  isOpen ? "rotate-180 text-teal" : ""
                }`}
              />
            </button>
            {isOpen && (
              <div className="border-t border-ink/5 px-5 pb-5 pt-3 text-sm leading-relaxed text-ink/75 md:text-base">
                {faq.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
