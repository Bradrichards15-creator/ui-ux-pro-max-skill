"use client";

import { useState } from "react";
import { Reveal, Section, Label } from "./motion";
import { faqs } from "@/lib/config";

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <Section>
      <Label>Honest answers</Label>
      <Reveal delay={0.02}>
        <h2 className="my-3 mb-9 text-[clamp(1.9rem,4vw,3rem)] leading-[1.12] text-ink">
          The questions you&apos;re probably asking.
        </h2>
      </Reveal>
      <div className="max-w-[820px]">
        {faqs.map((f, i) => (
          <Reveal key={f.q}>
            <div
              className={`border-t border-line ${
                i === faqs.length - 1 ? "border-b" : ""
              }`}
            >
              <button
                type="button"
                onClick={() => setOpen(open === i ? -1 : i)}
                aria-expanded={open === i}
                className="flex w-full cursor-pointer items-center justify-between gap-5 bg-transparent py-[22px] text-left font-display text-[clamp(1.05rem,2vw,1.3rem)] text-ink"
              >
                {f.q}
                <span
                  aria-hidden="true"
                  className={`font-body text-teal-deep transition-transform duration-300 ${
                    open === i ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              <div
                className="overflow-hidden transition-[max-height] duration-[450ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{ maxHeight: open === i ? 260 : 0 }}
              >
                <p className="max-w-[700px] pb-6 text-[16px] leading-[1.7] text-ink-soft">
                  {f.a}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
