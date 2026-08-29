import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Hero } from "@/components/sections/hero";
import { ComparisonTable } from "@/components/sections/comparison-table";
import { TwoWaysToHelp } from "@/components/sections/two-ways-to-help";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { ClosingCta } from "@/components/sections/closing-cta";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 overflow-hidden">
        <Hero />
        <ComparisonTable />
        <TwoWaysToHelp />
        <FaqAccordion />
        <ClosingCta />
      </main>
      <SiteFooter />
    </>
  );
}
