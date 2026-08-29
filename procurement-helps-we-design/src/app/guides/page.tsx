import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { GuideCards } from "@/components/sections/guides/guide-cards";
import { CaptureBoxes } from "@/components/sections/guides/capture-boxes";

export const metadata: Metadata = {
  title: "Guides - Procurement Helps",
  description:
    "Practical guides for businesses bidding for tender work - buy once and keep them to hand for your next bid.",
};

export default function GuidesPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 overflow-hidden">
        <section className="bg-background px-6 pt-32 pb-14 md:pt-44 md:pb-20">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-[10vw] leading-[1.05] font-semibold tracking-tight md:text-[3.4rem]">
              Guides
            </h1>
            <p className="mt-6 max-w-xl text-base text-foreground/80">
              Practical guides for businesses bidding for tender work - in progress right now.
              Buy once and keep them to hand for your next bid. Buy all three together and save
              over £25.
            </p>
          </div>
        </section>
        <GuideCards />
        <CaptureBoxes />
      </main>
      <SiteFooter />
    </>
  );
}
