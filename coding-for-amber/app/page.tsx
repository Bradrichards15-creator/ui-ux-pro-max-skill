import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import MeetThem from "@/components/MeetThem";
import SoftCTA from "@/components/SoftCTA";
import WhyStuck from "@/components/WhyStuck";
import BeckyStory from "@/components/BeckyStory";
import MeetAmber from "@/components/MeetAmber";
import Programmes from "@/components/Programmes";
import AfterSignup from "@/components/AfterSignup";
import FreeGuide from "@/components/FreeGuide";
import Footer from "@/components/Footer";

// Section order is deliberate (see DESIGN.md): trust — Becky's story and
// Meet Amber — lands before the programmes and their prices.
export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <MeetThem />
        <SoftCTA />
        <WhyStuck />
        <SoftCTA />
        <BeckyStory />
        <MeetAmber />
        <Programmes />
        <AfterSignup />
        <FreeGuide />
      </main>
      <Footer />
    </>
  );
}
