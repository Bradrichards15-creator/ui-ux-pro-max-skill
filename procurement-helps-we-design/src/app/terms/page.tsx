import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Terms of Service - Procurement Helps",
  description: "Terms of service for using the Procurement Helps website and services.",
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" updated="30 August 2026">
      <p>
        These terms cover your use of this website and, where you engage them, the services
        offered by Procurement Helps, operated by Brad Richards.
      </p>

      <div>
        <h2 className="text-base font-semibold text-foreground">The services</h2>
        <p className="mt-2">
          Procurement Helps provides tender support (response writing, bid review and mock
          scoring, lost-bid feedback) and procurement spend support, as described on the Tenders
          and Spend pages. Pricing shown on those pages is indicative and confirmed before any
          work begins - nothing is charged without your agreement.
        </p>
      </div>

      <div>
        <h2 className="text-base font-semibold text-foreground">Getting in touch</h2>
        <p className="mt-2">
          Enquiries made through the contact form, WhatsApp, or by booking a call are not a
          commitment on either side. Scope and price are agreed before any paid work starts.
        </p>
      </div>

      <div>
        <h2 className="text-base font-semibold text-foreground">Fit and refunds</h2>
        <p className="mt-2">
          If Procurement Helps doesn&apos;t think it&apos;s the right fit for a piece of work,
          you&apos;ll be told before work starts, not after payment. If something changes
          partway through a piece of work and it can&apos;t be completed as agreed, any work not
          yet delivered will be refunded.
        </p>
      </div>

      <div>
        <h2 className="text-base font-semibold text-foreground">Website use</h2>
        <p className="mt-2">
          This website is provided as-is. Reasonable care is taken to keep the content accurate
          and up to date, but no guarantee is given that it&apos;s complete, current, or free of
          errors. Content on this site (text, guides, and design) belongs to Procurement Helps
          unless stated otherwise, and shouldn&apos;t be copied or reused without permission.
        </p>
      </div>

      <div>
        <h2 className="text-base font-semibold text-foreground">Liability</h2>
        <p className="mt-2">
          Nothing in these terms limits liability where it can&apos;t legally be limited (for
          example, for fraud). Beyond that, Procurement Helps isn&apos;t liable for indirect or
          consequential losses arising from use of this website.
        </p>
      </div>

      <div>
        <h2 className="text-base font-semibold text-foreground">Governing law</h2>
        <p className="mt-2">
          These terms are governed by the law of England and Wales.
        </p>
      </div>

      <div>
        <h2 className="text-base font-semibold text-foreground">Contact</h2>
        <p className="mt-2">
          Questions about these terms can be sent to{" "}
          <a href="mailto:brad@procurementhelps.com" className="underline hover:text-brand-black">
            brad@procurementhelps.com
          </a>
          .
        </p>
      </div>
    </LegalPage>
  );
}
