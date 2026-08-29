import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ContactHero } from "@/components/sections/contact/contact-hero";
import { GetInTouch } from "@/components/sections/contact/get-in-touch";
import { PreferToTalk } from "@/components/sections/contact/prefer-to-talk";
import { BioBlock } from "@/components/sections/contact/bio-block";

export const metadata: Metadata = {
  title: "Contact - Procurement Helps",
  description:
    "Whether you've got a tender coming up, lost a recent bid or want to look at your supplier costs, start by telling Procurement Helps what's going on.",
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 overflow-hidden">
        <ContactHero />
        <GetInTouch />
        <PreferToTalk />
        <BioBlock />
      </main>
      <SiteFooter />
    </>
  );
}
