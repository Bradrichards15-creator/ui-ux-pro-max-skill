"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { COOKIE_STORAGE_KEY } from "@/components/cookie-banner";

// Set NEXT_PUBLIC_GA_ID in Netlify's environment variables (Site
// settings -> Environment variables) to your GA4 Measurement ID, e.g.
// G-XXXXXXXXXX. Analytics only loads once that's set AND the visitor
// has accepted cookies - never before, per the Cookie Policy.
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

/**
 * Analytics — loads Google Analytics (GA4) only if the visitor has
 * accepted the cookie banner. Reacts live to a choice made after
 * mount via the "cookie-consent-changed" event dispatched by
 * <CookieBanner>, not just on next page load.
 */
export function Analytics() {
  const [consented, setConsented] = useState(() => {
    if (typeof window === "undefined") return false;
    try {
      return window.localStorage.getItem(COOKIE_STORAGE_KEY) === "accepted";
    } catch {
      return false;
    }
  });

  useEffect(() => {
    function onConsentChange(e: Event) {
      const detail = (e as CustomEvent<"accepted" | "rejected">).detail;
      setConsented(detail === "accepted");
    }

    window.addEventListener("cookie-consent-changed", onConsentChange);
    return () => window.removeEventListener("cookie-consent-changed", onConsentChange);
  }, []);

  if (!GA_ID || !consented) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
}
