"use client";

import { useRef, type ReactNode } from "react";

/**
 * MagneticButton — wraps a pill CTA and subtly pulls it toward the
 * cursor on hover before the color-swap transition takes over.
 */
export function MagneticButton({
  href,
  children,
  className = "",
  target,
  rel,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  target?: string;
  rel?: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  function handleMouseMove(e: React.MouseEvent<HTMLAnchorElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.25}px, ${y * 0.35}px)`;
  }

  function handleMouseLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate(0, 0)";
  }

  return (
    <a
      ref={ref}
      href={href}
      target={target}
      rel={rel}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`transition-transform duration-200 ease-out ${className}`}
    >
      {children}
    </a>
  );
}
