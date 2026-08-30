import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Cookie Policy - Procurement Helps",
  description: "How Procurement Helps uses cookies on this website.",
};

export default function CookiesPage() {
  return (
    <LegalPage title="Cookie Policy" updated="30 August 2026">
      <p>
        This site uses a small number of cookies. Here&apos;s what they do and how to control
        them.
      </p>

      <div>
        <h2 className="text-base font-semibold text-foreground">Essential cookies</h2>
        <p className="mt-2">
          One small cookie remembers whether you&apos;ve accepted or rejected analytics cookies,
          so the banner doesn&apos;t show every time you visit. This is set regardless of your
          choice, since it&apos;s needed to remember the choice itself.
        </p>
      </div>

      <div>
        <h2 className="text-base font-semibold text-foreground">Analytics cookies</h2>
        <p className="mt-2">
          If you accept cookies via the banner, basic analytics cookies are set to understand how
          visitors use the site - which pages are viewed, roughly how long for, and general
          device/location information. No analytics cookies are set unless you accept them, and
          you can withdraw acceptance at any time by clearing your browser&apos;s cookies for this
          site and revisiting.
        </p>
      </div>

      <div>
        <h2 className="text-base font-semibold text-foreground">Third-party cookies</h2>
        <p className="mt-2">
          This site links out to WhatsApp, Calendly, and social platforms. If you click through
          to one of those, they may set their own cookies under their own policies - this policy
          only covers procurementhelps.co.uk itself.
        </p>
      </div>

      <div>
        <h2 className="text-base font-semibold text-foreground">Managing cookies</h2>
        <p className="mt-2">
          Most browsers let you view, delete, and block cookies through their settings. Blocking
          all cookies may affect how the cookie banner behaves, but won&apos;t stop the rest of
          the site working.
        </p>
      </div>

      <div>
        <h2 className="text-base font-semibold text-foreground">Contact</h2>
        <p className="mt-2">
          Questions about this policy can be sent to{" "}
          <a href="mailto:brad@procurementhelps.co.uk" className="underline hover:text-brand-black">
            brad@procurementhelps.co.uk
          </a>
          .
        </p>
      </div>
    </LegalPage>
  );
}
