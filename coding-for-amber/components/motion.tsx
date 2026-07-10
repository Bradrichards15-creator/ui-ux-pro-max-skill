"use client";

import {
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  animate,
} from "framer-motion";
import { useEffect, useRef, useState, type ReactNode, type ElementType } from "react";

// Breathing entrance per DESIGN.md §5: fade + rise 20px, 0.85s, custom ease,
// triggered once via whileInView, threshold ~0.15.
const EASE = [0.16, 1, 0.3, 1] as const;

export function Reveal({
  children,
  delay = 0,
  as = "div",
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  as?: ElementType;
  className?: string;
}) {
  const MotionTag = motion[as as "div"] ?? motion.div;
  const reduceMotion = useReducedMotion();

  // DESIGN.md §5: prefers-reduced-motion disables entrance animation and
  // content is visible immediately. Keep the same element type mounted in
  // both cases (avoids an SSR/client hydration mismatch) and just swap the
  // animation props: reduced motion renders straight into the end state.
  return (
    <MotionTag
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      animate={reduceMotion ? { opacity: 1, y: 0 } : undefined}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.85, ease: EASE, delay }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}

export function Section({
  id,
  children,
  bg,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  bg?: "mist" | "ink" | "paper";
  className?: string;
}) {
  const bgClass =
    bg === "mist" ? "bg-mist" : bg === "ink" ? "bg-ink" : "bg-paper";
  return (
    <section
      id={id}
      className={`scroll-mt-20 ${bgClass} px-[6vw] py-[clamp(64px,9vw,120px)] ${className}`}
    >
      <div className="mx-auto max-w-[1120px]">{children}</div>
    </section>
  );
}

export function Label({
  children,
  dark = false,
}: {
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <p
      className={`text-xs uppercase tracking-[0.18em] ${
        dark ? "text-teal" : "text-teal-deep"
      }`}
    >
      {children}
    </p>
  );
}

export function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const reduceMotion = useReducedMotion();
  const mv = useMotionValue(0);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (reduceMotion) {
      setDisplay(to);
      return;
    }
    if (!inView) return;
    const controls = animate(mv, to, {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to, mv, reduceMotion]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

type BtnVariant = "solid" | "ghost" | "dark";

export function Btn({
  children,
  href,
  variant = "solid",
  full = false,
  className = "",
  target,
}: {
  children: ReactNode;
  href: string;
  variant?: BtnVariant;
  full?: boolean;
  className?: string;
  target?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-7 py-[15px] text-[15.5px] font-medium transition-all duration-[350ms] ease-[cubic-bezier(0.16,1,0.3,1)] no-underline";
  const looks: Record<BtnVariant, string> = {
    solid:
      "bg-teal text-ink shadow-[0_4px_16px_rgba(113,205,199,0.32)] hover:-translate-y-0.5 hover:bg-ink hover:text-paper hover:shadow-[0_14px_30px_rgba(32,48,46,0.16)]",
    ghost:
      "bg-transparent text-ink border-[1.5px] border-line hover:border-ink",
    dark: "bg-ink text-white hover:bg-teal hover:text-ink",
  };
  const disabled = !href || href === "#";
  return (
    <a
      href={disabled ? undefined : href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      aria-disabled={disabled}
      className={`${base} ${looks[variant]} ${full ? "w-full" : "w-auto"} ${
        disabled ? "cursor-not-allowed opacity-60" : "cursor-pointer"
      } ${className}`}
    >
      {children}
    </a>
  );
}

// Signature motif per DESIGN.md §6 — spiky (alert) settling to a calm flat
// line (safe). calmOnly renders the fully-settled version for the closing CTA.
export function BaselineLine({
  height = 56,
  calmOnly = false,
}: {
  height?: number;
  calmOnly?: boolean;
}) {
  const w = 1200;
  const mid = height / 2;
  let d = `M0 ${mid}`;
  for (let i = 1; i <= 48; i++) {
    const x = (w / 48) * i;
    const calmProgress = calmOnly ? 1 : i / 48;
    const chaos = (1 - calmProgress) ** 2;
    const spike = (Math.sin(i * 1.7) + Math.sin(i * 0.6)) * 0.5;
    const y = mid - spike * chaos * (height * 0.6);
    d += ` L${x.toFixed(1)} ${y.toFixed(1)}`;
  }
  return (
    <svg
      viewBox={`0 0 ${w} ${height}`}
      width="100%"
      height={height}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d={d}
        fill="none"
        stroke="#71CDC7"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity={0.85}
      />
    </svg>
  );
}
