"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

type Footnote = {
  n: number;
  marker: string;
  heading: string;
  body: string;
};

const FOOTNOTES: Footnote[] = [
  {
    n: 1,
    marker: "12-14 weeks",
    heading: "12-14 weeks",
    body: "The requirement says 10 weeks. You're already telling the panel you'll take longer than they've asked.",
  },
  {
    n: 2,
    marker: "a job tracker",
    heading: '"a job tracker"',
    body: "Which one? Who manages it? What does the buyer actually get to see?",
  },
  {
    n: 3,
    marker: "willing to appoint",
    heading: '"willing to appoint"',
    body: "That's not a commitment. If the contract requires one, say who it will be and what they'll be responsible for.",
  },
  {
    n: 4,
    marker: "follow the KPIs",
    heading: '"follow the KPIs"',
    body: "What does that mean in practice? Measure them? Report them? Review them? The panel needs to know.",
  },
  {
    n: 5,
    marker: "deliver community benefits",
    heading: '"deliver community benefits"',
    body: "Which benefits? How many? By when? Who benefits? And how will you demonstrate that you've delivered them?",
  },
];

/**
 * MarkupCard — an annotated "response as submitted" document excerpt.
 * Five phrases are underlined with numbered footnote markers; clicking a
 * marker (or the footnote itself) highlights the matching pair.
 */
function MarkupCard() {
  const [active, setActive] = useState<number | null>(null);

  const parts: (string | Footnote)[] = [
    "If successful, we intend to mobilise the contract over ",
    FOOTNOTES[0],
    ". We will use ",
    FOOTNOTES[1],
    " to plan and manage onboarding, and are willing to appoint a ",
    FOOTNOTES[2],
    " who will follow the ",
    FOOTNOTES[3],
    " set out in the specification. We will also deliver ",
    FOOTNOTES[4],
    " throughout the contract term.",
  ];

  return (
    <div className="rounded-[22px] bg-white p-6 md:p-8">
      <span className="text-[10px] font-semibold tracking-wide text-muted-foreground uppercase">
        Response as submitted
      </span>
      <p className="mt-4 text-sm leading-relaxed">
        {parts.map((part, i) =>
          typeof part === "string" ? (
            <span key={i}>{part}</span>
          ) : (
            <button
              key={part.n}
              type="button"
              onMouseEnter={() => setActive(part.n)}
              onFocus={() => setActive(part.n)}
              onClick={() => setActive(active === part.n ? null : part.n)}
              className={`underline decoration-red-500 decoration-2 underline-offset-2 transition ${
                active === part.n ? "bg-red-500/15" : ""
              }`}
            >
              {part.marker}
              <sup className="ml-0.5 font-semibold text-red-600">{part.n}</sup>
            </button>
          ),
        )}
      </p>

      <ol className="mt-6 space-y-3 border-t border-black/10 pt-4">
        {FOOTNOTES.map((fn) => (
          <li
            key={fn.n}
            onMouseEnter={() => setActive(fn.n)}
            className={`rounded-lg p-2 text-xs transition ${
              active === fn.n ? "bg-red-500/10" : ""
            }`}
          >
            <span className="font-semibold text-red-600">{fn.n}. {fn.heading}</span>
            <span className="block text-foreground/70">{fn.body}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

/**
 * TenderHero — headline + intro paragraph beside the annotated markup
 * card, followed by "The problem" closing statement.
 */
export function TenderHero() {
  return (
    <section className="bg-background px-6 pt-32 pb-14 md:pt-44 md:pb-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-[1.05fr_0.95fr] md:items-start">
          <div>
            <h1 className="text-[9vw] leading-[1.08] font-semibold tracking-tight md:text-[3rem]">
              Better tender responses start with understanding what the panel expects.
            </h1>
            <p className="mt-6 max-w-lg text-base text-foreground/80">
              I&apos;ve scored thousands of tenders over the years, so I can look at your response
              from the other side of the table.
            </p>
            <a href="/contact" className="btn-pill mt-8 gap-2">
              Talk about your tender
              <ArrowRight size={16} />
            </a>
          </div>
          <MarkupCard />
        </div>

        <div className="mt-14 max-w-xl">
          <h2 className="text-lg font-semibold">The problem</h2>
          <p className="mt-2 text-sm text-foreground/75">
            None of these statements give the evaluator much to score. They sound like
            commitments, but most of the important detail is left for the panel to assume.
          </p>
        </div>
      </div>
    </section>
  );
}
