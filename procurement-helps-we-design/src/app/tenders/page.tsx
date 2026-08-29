import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { TenderHero } from "@/components/sections/tenders/tender-hero";
import { TenderServices } from "@/components/sections/tenders/tender-services";
import { TenderPhoto } from "@/components/sections/tenders/tender-photo";
import { Industries } from "@/components/sections/tenders/industries";
import { PricingTable } from "@/components/sections/pricing-table";
import { ClosingCta } from "@/components/sections/closing-cta";

export const metadata: Metadata = {
  title: "Tenders - Procurement Helps",
  description:
    "Response writing, bid review and mock scoring, and lost-bid feedback - from someone who has scored thousands of tenders.",
};

const PRICING_ROWS = [
  {
    name: "Bid review & mock scoring",
    desc: "I'll stress-test your response and give you suggestions before you submit.",
    price: "£125",
  },
  {
    name: "Response writing",
    desc: "Per question. Most tenders run 3-4 questions.",
    price: "£85",
  },
  {
    name: "Lost-bid feedback session",
    desc: "I'll go through the feedback with you and flag what I think the panel didn't spell out.",
    price: "£125",
  },
  {
    name: "Larger or ongoing projects",
    desc: "If you're stretched for resources, get in touch about a retainer. However long you need it for.",
    price: "Ask",
  },
];

export default function TendersPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 overflow-hidden">
        <TenderHero />
        <TenderServices />
        <TenderPhoto />
        <Industries />
        <PricingTable
          heading="Pricing"
          subhead="Transparent, upfront pricing - no agency mark-up, no account managers, just me. Get in touch first and I'll confirm scope before anything's charged."
          rows={PRICING_ROWS}
        />
        <section className="bg-background px-6 pb-14 md:pb-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm text-foreground/75">
              If I don&apos;t think I&apos;m the right fit for your tender, I&apos;ll tell you
              before we start - not after you&apos;ve paid. And if something changes partway
              through and I can&apos;t deliver what we agreed, I&apos;ll refund the work I
              haven&apos;t done.
            </p>
          </div>
        </section>
        <ClosingCta
          heading="Talk about your tender"
          label="Talk about your tender"
          href="/contact"
        />
      </main>
      <SiteFooter />
    </>
  );
}
