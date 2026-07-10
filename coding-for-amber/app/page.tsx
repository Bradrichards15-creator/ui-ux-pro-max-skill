import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import MeetThem from "@/components/MeetThem";
import InlineCTA from "@/components/InlineCTA";
import Method from "@/components/Method";
import WhyStuck from "@/components/WhyStuck";
import BeckyStory from "@/components/BeckyStory";
import MeetAmber from "@/components/MeetAmber";
import WhatImHereFor from "@/components/WhatImHereFor";
import Programmes from "@/components/Programmes";
import AfterSignup from "@/components/AfterSignup";
import SoftCTA from "@/components/SoftCTA";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import NotReadyYet from "@/components/NotReadyYet";
import Footer from "@/components/Footer";

// Order follows DESIGN.md §8's locked structure, with two changes made at
// explicit request: (1) Becky's story and Meet Amber sit before Programmes —
// trust before price; (2) "What happens after you sign up" runs right after
// Programmes.
export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <MeetThem />
        <InlineCTA />
        <Method />
        <WhyStuck />
        <InlineCTA bg="mist" />
        <BeckyStory />
        <MeetAmber />
        <WhatImHereFor />
        <Programmes />
        <AfterSignup />
        <SoftCTA />
        <FAQ />
        <Contact />
        <NotReadyYet />
      </main>
      <Footer />
    </>
  );
}
