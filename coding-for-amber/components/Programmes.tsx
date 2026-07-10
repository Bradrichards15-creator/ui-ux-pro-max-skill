"use client";

import { useState } from "react";
import { Reveal, Section, Label, Btn } from "./motion";
import { programmes, discoveryCallUrl } from "@/lib/config";

export default function Programmes() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <Section id="programmes" bg="mist">
      <Label>Ways to work together</Label>
      <Reveal delay={0.02}>
        <h2 className="mt-3 max-w-[640px] text-[clamp(1.9rem,4vw,3rem)] leading-[1.12] text-ink">
          Three ways in — each built around where you are right now.
        </h2>
      </Reveal>
      <Reveal delay={0.08}>
        <p className="mt-4 max-w-[560px] text-[15px] leading-[1.6] text-ink-soft">
          Nothing here is an instant purchase — every programme starts with a
          free discovery call, so we can figure out the right fit together
          before anything is booked.
        </p>
      </Reveal>

      <div className="mt-11 grid gap-5 lg:grid-cols-3">
        {programmes.map((p, i) => {
          const open = openId === p.id;
          return (
            <Reveal key={p.id} delay={i * 0.1}>
              <div
                className={`flex h-full flex-col rounded-[22px] p-8 transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-[0_20px_44px_rgba(32,48,46,0.10)] ${
                  p.featured
                    ? "bg-ink text-paper"
                    : "border border-line bg-paper text-ink"
                }`}
              >
                <span className="text-xs font-medium uppercase tracking-[0.08em] text-teal">
                  {p.tag}
                </span>
                <h3 className="my-2.5 text-2xl">{p.name}</h3>
                <div className="mb-4 font-display text-[38px] leading-none">
                  <span className={p.featured ? "text-teal" : "text-teal-deep"}>
                    {p.price}
                  </span>
                  <span className="ml-1 text-sm font-body opacity-60">
                    /month
                  </span>
                </div>
                <p
                  className={`font-display text-[15px] italic leading-[1.6] ${
                    p.featured ? "text-paper/78" : "text-ink-soft"
                  }`}
                >
                  {p.who}
                </p>

                <p
                  className={`mt-5 text-xs ${
                    p.featured ? "text-paper/70" : "text-ink-soft"
                  }`}
                >
                  {p.priceWeekly} · {p.commitment}
                  {p.limited && (
                    <span className="ml-1 font-medium text-teal">
                      · Limited spaces
                    </span>
                  )}
                </p>

                {/* Collapsed by default — headline + price only, full
                    feature list behind a toggle so cards don't dominate. */}
                <button
                  type="button"
                  onClick={() => setOpenId(open ? null : p.id)}
                  aria-expanded={open}
                  className={`mt-5 flex w-full cursor-pointer items-center justify-between gap-2 border-t pt-4 text-left text-sm font-medium ${
                    p.featured
                      ? "border-paper/15 text-paper"
                      : "border-line text-ink"
                  }`}
                >
                  {open ? "Hide what's included" : "See what's included"}
                  <span
                    aria-hidden="true"
                    className={`transition-transform duration-300 ${
                      open ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                <div
                  className="overflow-hidden transition-[max-height] duration-[450ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={{ maxHeight: open ? 640 : 0 }}
                >
                  <ul
                    className={`mt-4 space-y-4 text-sm leading-relaxed ${
                      p.featured ? "text-paper/85" : "text-ink-soft"
                    }`}
                  >
                    {p.features.map((f) => (
                      <li key={f.title}>
                        <p
                          className={`font-medium ${
                            p.featured ? "text-paper" : "text-ink"
                          }`}
                        >
                          {f.title}
                        </p>
                        <p className="mt-1">{f.body}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* [DISCOVERY_CALL_URL] — books a call, not a purchase. */}
                <Btn
                  full
                  variant={p.featured ? "solid" : "dark"}
                  href={discoveryCallUrl || "#contact"}
                  target={discoveryCallUrl ? "_blank" : undefined}
                  className="mt-6"
                >
                  Book a discovery call
                </Btn>
                {!discoveryCallUrl && (
                  <p className="mt-2 text-center text-xs text-ink-soft/70">
                    Calendly link not set up yet
                  </p>
                )}
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
