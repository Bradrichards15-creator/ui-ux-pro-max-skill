"use client";

import { useEffect, useState } from "react";

export const COOKIE_STORAGE_KEY = "procurement-helps-cookie-choice";
const STORAGE_KEY = COOKIE_STORAGE_KEY;

/**
 * CookieBanner — bottom-fixed bar shown once (persisted via localStorage)
 * with Reject/Accept actions, styled to match the site's card + pill
 * button language. Starts hidden on both server and client to avoid a
 * hydration mismatch, then reveals itself after mount if no choice has
 * been stored yet.
 */
export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        const choice = window.localStorage.getItem(STORAGE_KEY);
        if (!choice) setVisible(true);
      } catch {
        setVisible(true);
      }
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  function choose(value: "accepted" | "rejected") {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // ignore storage errors (private mode etc.)
    }
    // Let <Analytics /> react immediately if the choice happens after mount,
    // rather than only on the next page load.
    window.dispatchEvent(new CustomEvent("cookie-consent-changed", { detail: value }));
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] p-4 md:p-6">
      <div className="mx-auto flex max-w-3xl flex-col items-start gap-4 rounded-[22px] bg-black p-5 text-white shadow-xl md:flex-row md:items-center md:p-6">
        <p className="text-sm text-white/80">
          We use cookies to understand how visitors use this site. We won&apos;t set analytics
          cookies unless you accept. See our{" "}
          <a href="/cookies" className="underline hover:text-brand-green">
            Cookie Policy
          </a>{" "}
          for details.
        </p>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={() => choose("rejected")}
            className="rounded-full border border-white/30 px-5 py-2.5 text-xs font-medium transition hover:bg-white/10"
          >
            Reject
          </button>
          <button
            type="button"
            onClick={() => choose("accepted")}
            className="rounded-full bg-brand-green px-5 py-2.5 text-xs font-medium text-black transition hover:bg-white"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
