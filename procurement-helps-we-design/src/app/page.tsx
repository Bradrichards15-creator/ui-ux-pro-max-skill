import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Hero } from "@/components/sections/hero";
import { LogoTicker } from "@/components/sections/logo-ticker";
import { AboutStrip } from "@/components/sections/about-strip";
import { WorkShowcase } from "@/components/sections/work-showcase";
import { ServicesList } from "@/components/sections/services-list";
import { StatsTicker } from "@/components/sections/stats-ticker";
import { BlogTiles } from "@/components/sections/blog-tiles";
import { ResultsHighlight } from "@/components/sections/results-highlight";
import { FaqAccordion } from "@/components/sections/faq-accordion";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 overflow-hidden">
        <Hero />
        <LogoTicker />
        <AboutStrip />
        <WorkShowcase />
        <ServicesList />
        <StatsTicker />
        <BlogTiles />
        <ResultsHighlight />
        <FaqAccordion />
      </main>
      <SiteFooter />
    </>
  );
}
