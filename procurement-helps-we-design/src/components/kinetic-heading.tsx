"use client";

import { Fragment, type ReactNode } from "react";

type Line = {
  /** Words in this line. Wrap a word in emphasis to bump weight/color. */
  words: (string | { text: string; emphasis?: boolean })[];
  /** Tailwind text-size classes for this line (allows split-scale headlines). */
  size?: string;
};

/**
 * KineticHeading — headline split into lines/words, each word staggered
 * in on mount (translateY + opacity via CSS animation-delay). Supports
 * per-line font sizing (split-scale) and per-word emphasis styling.
 */
export function KineticHeading({
  lines,
  className = "",
  baseSize = "text-[9vw] md:text-[3rem]",
}: {
  lines: Line[];
  className?: string;
  baseSize?: string;
}) {
  const lineStarts = lines.reduce<number[]>((acc, line, i) => {
    acc.push(i === 0 ? 0 : acc[i - 1] + lines[i - 1].words.length);
    return acc;
  }, []);

  return (
    <h1
      className={`leading-[1.08] font-semibold tracking-tight ${className}`}
    >
      {lines.map((line, li) => (
        <span
          key={li}
          className={`block overflow-hidden ${line.size ?? baseSize}`}
        >
          {line.words.map((w, wi) => {
            const isObj = typeof w !== "string";
            const text = isObj ? w.text : w;
            const emphasis = isObj && w.emphasis;
            const delay = (lineStarts[li] + wi) * 55;
            return (
              <Fragment key={wi}>
                <span
                  className="kinetic-word inline-block"
                  style={{ animationDelay: `${delay}ms` }}
                >
                  <span
                    className={emphasis ? "text-brand-black font-bold" : ""}
                  >
                    {text}
                  </span>
                </span>{" "}
              </Fragment>
            );
          })}
        </span>
      ))}
    </h1>
  );
}

/** Same word-stagger treatment for a paragraph, lighter weight. */
export function KineticParagraph({
  children,
  className = "",
  delayStart = 0,
}: {
  children: ReactNode;
  className?: string;
  delayStart?: number;
}) {
  return (
    <p
      className={`kinetic-word inline-block ${className}`}
      style={{ animationDelay: `${delayStart}ms` }}
    >
      {children}
    </p>
  );
}
