import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy - Procurement Helps",
  description: "How Procurement Helps collects, uses, and protects your data.",
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="30 August 2026">
      <p>
        This policy explains what personal data Procurement Helps (&quot;I&quot;, &quot;me&quot;)
        collects when you use this website, why, and what your rights are. Procurement Helps is
        operated by Brad Richards, contactable at{" "}
        <a href="mailto:brad@procurementhelps.co.uk" className="underline hover:text-brand-black">
          brad@procurementhelps.co.uk
        </a>
        .
      </p>

      <div>
        <h2 className="text-base font-semibold text-foreground">What I collect</h2>
        <p className="mt-2">
          When you use the contact form or the WhatsApp links, I collect whatever you choose to
          give me - typically your name, phone number, email address, and
          the details of your enquiry. If you accept cookies via the cookie banner, I also collect
          basic analytics data about how you use the site (pages visited, general location,
          device type). If you reject cookies, no analytics data is collected.
        </p>
      </div>

      <div>
        <h2 className="text-base font-semibold text-foreground">How I use it</h2>
        <p className="mt-2">
          Enquiry details are used only to respond to you and, where relevant, to deliver the
          service you&apos;ve asked about. I don&apos;t sell or share your data with third
          parties for marketing purposes. Analytics data (where accepted) is used to understand
          how the site is used and to improve it.
        </p>
      </div>

      <div>
        <h2 className="text-base font-semibold text-foreground">How long I keep it</h2>
        <p className="mt-2">
          I keep enquiry and client data for as long as it&apos;s needed to deliver the service
          and meet any legal or accounting obligations, then delete it. You can ask me to delete
          your data at any time.
        </p>
      </div>

      <div>
        <h2 className="text-base font-semibold text-foreground">Your rights</h2>
        <p className="mt-2">
          Under UK GDPR, you have the right to ask what data I hold about you, to ask me to
          correct or delete it, and to withdraw consent to analytics cookies at any time. To
          exercise any of these, email{" "}
          <a href="mailto:brad@procurementhelps.co.uk" className="underline hover:text-brand-black">
            brad@procurementhelps.co.uk
          </a>
          . If you&apos;re not satisfied with how I&apos;ve handled your data, you can complain to
          the UK Information Commissioner&apos;s Office (ICO).
        </p>
      </div>

      <div>
        <h2 className="text-base font-semibold text-foreground">Third-party links</h2>
        <p className="mt-2">
          This site links out to WhatsApp, Calendly, and social platforms. Once you leave this
          site via one of those links, their own privacy policies apply, not this one.
        </p>
      </div>

      <div>
        <h2 className="text-base font-semibold text-foreground">Changes to this policy</h2>
        <p className="mt-2">
          I may update this policy occasionally. The date at the top of this page shows when it
          was last changed.
        </p>
      </div>
    </LegalPage>
  );
}
