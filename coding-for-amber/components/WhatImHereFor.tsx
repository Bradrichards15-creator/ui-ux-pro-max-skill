import { Reveal, Section, Label } from "./motion";

const items = [
  {
    h: "Panic",
    b: "The sudden spikes that feel like they come from nowhere — and the fear of the next one.",
  },
  {
    h: "Health anxiety",
    b: "The constant body-checking, the googling, the certainty that this time something's really wrong.",
  },
  {
    h: "Overthinking",
    b: "The 3am replays, the rehearsed conversations, the mind that won't stop running scenarios.",
  },
  {
    h: "Fear of anxiety itself",
    b: "When you're no longer just anxious about life — you're anxious about being anxious.",
  },
];

// Not tied to any programme — a way for a visitor to see themselves here.
export default function WhatImHereFor() {
  return (
    <Section>
      <Label>What I&apos;m here for</Label>
      <Reveal delay={0.02}>
        <h2 className="mt-3 max-w-[700px] text-[clamp(1.9rem,4.2vw,3.2rem)] leading-[1.1] text-ink">
          Wherever your anxiety shows up, there&apos;s a way through it.
        </h2>
      </Reveal>
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it, i) => (
          <Reveal key={it.h} delay={i * 0.08}>
            <div className="h-full rounded-[18px] bg-cream p-6 transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-[0_20px_44px_rgba(32,48,46,0.10)]">
              <h3 className="text-[19px] text-ink">{it.h}</h3>
              <p className="mt-2.5 text-[14.5px] leading-[1.6] text-ink-soft">
                {it.b}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
