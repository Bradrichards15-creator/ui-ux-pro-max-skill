import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Reveal, Section, Label, Btn, CountUp, BaselineLine } from "@/components/motion";

export const metadata: Metadata = {
  title: "Amber's story — Words of Amber",
  description:
    "I lived with chronic anxiety and panic for over ten years. Here's what changed, and why I coach the way I do.",
};

// Dedicated version of the homepage "Meet Amber" summary — more of her
// story and more photos land here once Amber uploads them.
export default function AboutPage() {
  return (
    <>
      <Nav />
      <main>
        <Section className="!pb-0 !pt-[18vh]">
          <Reveal>
            <Label>Amber&apos;s story</Label>
            <h1 className="mt-3 max-w-[780px] text-[clamp(2.2rem,4.8vw,3.6rem)] leading-[1.08] text-ink">
              I&apos;m not someone who studied anxiety from the outside.
            </h1>
            <p className="mt-5 max-w-[600px] text-[17px] leading-[1.7] text-ink-soft">
              I lived it — for over ten years. This is what that actually
              looked like, and what changed.
            </p>
          </Reveal>
        </Section>

        <Section>
          <div className="grid items-start gap-12 md:grid-cols-2">
            <Reveal>
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[22px] shadow-[0_20px_44px_rgba(32,48,46,0.10)]">
                <Image
                  src="/images/amber-about.jpg"
                  alt="Amber Perry writing at her desk"
                  fill
                  priority
                  sizes="(max-width: 768px) 90vw, 45vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="space-y-5 text-[17px] leading-[1.72] text-ink-soft">
                <p>
                  For over ten years, anxiety and panic ran my life quietly
                  from the background — the constant body-checking, the
                  routes planned around exits, the version of me that showed
                  up smaller than I actually was so nothing could go wrong.
                </p>
                <p>
                  What changed everything wasn&apos;t willpower, and it
                  wasn&apos;t a single breakthrough moment. It was learning
                  what my nervous system was actually doing — and slowly,
                  patiently, teaching it a different baseline.
                </p>
                <p className="font-display text-xl italic text-ink">
                  Last year I drove over a thousand miles across Europe. I
                  wasn&apos;t anxious. I was free.
                </p>
                <p>
                  That&apos;s the work I do now — not from a pedestal, but
                  from having sat exactly where you&apos;re sitting.
                </p>
              </div>

              <div className="mt-8 grid max-w-xs grid-cols-2 gap-6 rounded-[22px] bg-cream p-8">
                <div>
                  <div className="font-display text-4xl text-teal-deep">
                    <CountUp to={5} />
                  </div>
                  <div className="mt-2 text-[13px] text-ink-soft">
                    years coaching
                  </div>
                </div>
                <div>
                  <div className="font-display text-4xl text-teal-deep">
                    <CountUp to={250} suffix="+" />
                  </div>
                  <div className="mt-2 text-[13px] text-ink-soft">
                    people helped
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Section>

        <Section bg="mist">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <Reveal>
              <Label>Why I coach the way I do</Label>
              <h2 className="my-3 max-w-[520px] text-[clamp(1.8rem,3.6vw,2.6rem)] leading-[1.15] text-ink">
                The spike was never the problem. The baseline was.
              </h2>
              <p className="max-w-[480px] text-[17px] leading-[1.72] text-ink-soft">
                Every technique I&apos;d tried before treated anxiety as an
                emergency to manage in the moment. None of it touched the
                state my body kept returning to in between. Nervous system
                regulation did. That&apos;s the whole foundation of how I
                work with people now — gently, from the inside out, at a
                pace that respects where you actually are.
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[22px] shadow-[0_20px_44px_rgba(32,48,46,0.10)]">
                <Image
                  src="/images/amber-story-2.jpg"
                  alt="Amber Perry"
                  fill
                  sizes="(max-width: 768px) 90vw, 45vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>

          <Reveal>
            <div className="mt-16">
              <BaselineLine calmOnly />
              <div className="mt-2 flex justify-center text-xs tracking-wide text-teal-deep">
                <span>a system that feels safe</span>
              </div>
            </div>
          </Reveal>
        </Section>

        <Section>
          <Reveal>
            <div className="rounded-[22px] border border-dashed border-teal/40 bg-mist/40 p-8 text-center">
              <p className="text-sm text-ink-soft">
                More of Amber&apos;s story — and more photos — are on their
                way here soon.
              </p>
            </div>
          </Reveal>
        </Section>

        <Section bg="mist">
          <Reveal>
            <div className="mx-auto max-w-[560px] text-center">
              <h2 className="text-[clamp(1.7rem,3.4vw,2.4rem)] leading-[1.15] text-ink">
                Ready to talk it through?
              </h2>
              <p className="mx-auto mt-4 max-w-[420px] text-[16px] leading-[1.65] text-ink-soft">
                No pitch, just a conversation — book a free discovery call
                or see how the programmes work.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Btn href="/#programmes">See how we&apos;d work together</Btn>
                <Btn variant="ghost" href="/#contact">
                  Just say hello
                </Btn>
              </div>
            </div>
          </Reveal>
        </Section>
      </main>
      <Footer />
    </>
  );
}
