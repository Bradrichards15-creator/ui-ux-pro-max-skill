"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * ScrollReveal — fades/slides a section's children up once it enters the
 * viewport. Wrap a list of children with `stagger` to delay each direct
 * child's reveal by `staggerMs` for a cascade effect.
 */
export function ScrollReveal({
  children,
  className = "",
  stagger = false,
  staggerMs = 90,
}: {
  children: ReactNode;
  className?: string;
  stagger?: boolean;
  staggerMs?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = stagger
      ? Array.from(el.children)
      : [el];

    targets.forEach((child, i) => {
      child.classList.add("reveal-up");
      (child as HTMLElement).style.animationDelay = `${i * staggerMs}ms`;
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            targets.forEach((t) => t.classList.add("is-visible"));
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [stagger, staggerMs]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
