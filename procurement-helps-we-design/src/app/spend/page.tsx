import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SpendHero } from "@/components/sections/spend/spend-hero";
import { SpendProcess } from "@/components/sections/spend/spend-process";
import { PricingTable } from "@/components/sections/pricing-table";
import { Housekeeping } from "@/components/sections/spend/housekeeping";
import { ScrollReveal } from "@/components/scroll-reveal";

export const metadata: Metadata = {
  title: "Spend - Procurement Helps",
  description:
    "A review of your existing supplier spend, benchmarked against market rates, with negotiated savings before renewal deadlines hit.",
};

const PRICING_ROWS = [
  {
    name: "Initial conversation",
    desc: "A quick chat - no obligation, honest first read on whether it's worth digging into.",
    price: "Free",
  },
  {
    name: "Spend diagnostic",
    desc: "A clear picture of where the savings are, benchmarked against market rates.",
    price: "£99",
  },
  {
    name: "Savings fee",
    desc: "A transparent number, agreed between us once the saving's confirmed.",
    price: "No saving, no fee",
    tag: "No risk",
  },
];

export default function SpendPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 overflow-hidden">
        <SpendHero />
        <ScrollReveal>
          <SpendProcess />
        </ScrollReveal>
        <ScrollReveal>
          <PricingTable
            heading="How you're charged"
            rows={PRICING_ROWS}
            note="Free to ask, no pressure either way - if I don't think there's anything worth digging into, I'll tell you upfront."
          />
        </ScrollReveal>
        <ScrollReveal>
          <Housekeeping />
        </ScrollReveal>
      </main>
      <SiteFooter />
    </>
  );
}
