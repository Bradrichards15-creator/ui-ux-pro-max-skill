"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";

const FAQS = [
  {
    q: "What services does [Studio] offer?",
    a: "Placeholder answer describing the range of services offered, matching the tone and rough length of the original agency copy.",
  },
  {
    q: "How does [Studio] build strategies for clients?",
    a: "Placeholder answer describing the discovery and strategy-building process used with new clients.",
  },
  {
    q: "What makes [Studio] different from other agencies?",
    a: "Placeholder answer describing what differentiates the agency — focus areas, values, or working style.",
  },
  {
    q: "Do you offer both organic and paid services?",
    a: "Placeholder answer confirming the mix of services available, standalone or combined.",
  },
  {
    q: "Can [Studio] help improve lead generation?",
    a: "Placeholder answer describing how the agency approaches lead generation for clients.",
  },
  {
    q: "Can [Studio] support long-term growth?",
    a: "Placeholder answer describing the agency's approach to sustainable, long-term growth.",
  },
];

/**
 * FaqAccordion — right-aligned intro copy over a list of boxed accordion
 * rows with a rotating circular arrow icon, bottom-border dividers.
 */
export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-background px-6 py-14 md:py-20">
      <div className="mx-auto max-w-3xl">
        <div className="text-right">
          <h2 className="text-2xl font-medium">Frequently asked questions</h2>
          <p className="mt-3 text-sm text-foreground/80">
            [Placeholder] An independent studio founded in [Year], building brands, websites, and
            marketing that improve the bottom line.
          </p>
        </div>

        <div className="mt-6 divide-y divide-black/15">
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
