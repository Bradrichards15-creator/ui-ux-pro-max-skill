"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";

const FAQS = [
  {
    q: "How much does bid support cost?",
    a: "It depends on what you need - a bid review and mock scoring is £125, response writing is £85 per question. Full pricing is on the Tenders page.",
  },
  {
    q: "How long does a bid review take?",
    a: "Bid reviews and mock scoring can usually be turned around the same day. Full response writing is normally a two-day turnaround, though it varies depending on how busy things are - let me know your deadline and I'll tell you honestly whether it's workable.",
  },
  {
    q: "What makes Procurement Helps different from an agency?",
    a: "No agency mark-up, no account managers, no templates. It's just me, and every response is written specifically for your business and that tender.",
  },
  {
    q: "Do you only work with public sector bids?",
    a: "Mainly, yes - public sector tenders are what I know best. But I've written plenty of proposals for private sector work too, so get in touch if that's what you need.",
  },
  {
    q: "Where does AI actually fit in?",
    a: "I use AI for the jobs that used to eat a whole afternoon - not for writing your answers. Every response is still built from your evidence, checked and signed off by me. If it reads like a template with the gaps filled in, it isn't from here.",
  },
];

/**
 * FaqAccordion — homepage FAQ section with real Q&A content.
 */
export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-background px-6 py-14 md:py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-2xl font-medium md:text-3xl">Frequently asked questions</h2>

        <div className="mt-8 divide-y divide-black/15">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.q} className="py-2">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-4 text-left"
                >
                  <span className="text-base font-medium">{faq.q}</span>
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-green text-black">
                    <ChevronRight
                      size={14}
                      className={`transition-transform duration-300 ${isOpen ? "rotate-90" : ""}`}
                    />
                  </span>
                </button>
                {isOpen && (
                  <p className="pb-5 text-sm leading-relaxed text-foreground/80">{faq.a}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
