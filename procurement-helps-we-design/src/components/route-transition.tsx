"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { usePathname } from "next/navigation";

/**
 * RouteTransition — fades/slides page content in on every route change,
 * and briefly runs a top progress bar so navigation feels acknowledged
 * even though Next's App Router swaps content near-instantly. The bar
 * is driven imperatively (ref + timeouts) rather than React state, since
 * it's a fire-and-forget visual effect with no bearing on render output.
 */
export function RouteTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isFirstRender = useRef(true);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    const bar = barRef.current;
    if (!bar) return;
    bar.style.opacity = "1";
    bar.style.width = "100%";
    const timer = setTimeout(() => {
      bar.style.opacity = "0";
      bar.style.width = "0%";
    }, 420);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      <div
        ref={barRef}
        aria-hidden
        className="fixed top-0 left-0 z-[100] h-[2px] w-0 bg-brand-green opacity-0 transition-[width,opacity] duration-300 ease-out"
      />
      <div key={pathname} className="route-transition-enter">
        {children}
      </div>
    </>
  );
}
