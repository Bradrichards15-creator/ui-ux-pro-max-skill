import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Reveal, Section, Label, Btn } from "@/components/motion";
import { testimonialFeed, beckyVideoUrl } from "@/lib/config";

export const metadata: Metadata = {
  title: "Client stories — Words of Amber",
  description:
    "Becky's story and real transformations from people who worked with Amber Perry.",
};

export default function StoriesPage() {
  return (
    <>
      <Nav />
      <main>
        <Section className="!pb-0 !pt-[18vh]">
          <Reveal>
            <Label>Client stories</Label>
            <h1 className="mt-3 max-w-[820px] text-[clamp(2.2rem,4.8vw,3.6rem)] leading-[1.08] text-ink">
              Real transformations, in their own words.
            </h1>
            <p className="mt-5 max-w-[600px] text-[17px] leading-[1.7] text-ink-soft">
              Every person here once believed their anxiety was permanent.
              Shared with their permission.
            </p>
          </Reveal>
        </Section>

        {/* Becky — full written story */}
        <Section bg="mist">
          <div className="grid items-center gap-11 md:grid-cols-2">
            <Reveal>
              <Label>A real transformation</Label>
              <h2 className="my-3 text-[clamp(1.8rem,3.6vw,2.7rem)] leading-[1.15] text-ink">
                This is Becky.
              </h2>
              <p className="max-w-[480px] text-[17px] leading-[1.72] text-ink-soft">
                When Becky started, she felt stuck in a cycle of anxiety and
                panic, especially anywhere unfamiliar. Every trip was
                negotiated with her nervous system before it was negotiated
                with anyone else — could she cope, could she get out if she
                needed to, was it worth the risk.
              </p>
              <p className="mt-4 max-w-[480px] text-[17px] leading-[1.72] text-ink-soft">
                Eight months on, she takes solo trips, enjoys the theatre,
                and trusts she can handle whatever comes. Not because the
                anxiety vanished overnight, but because her baseline changed.
              </p>
              <p className="mt-5 text-[13.5px] italic text-teal-deep">
                Shared with Becky&apos;s permission.
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              {/* [BECKY_VIDEO] */}
              <div className="relative aspect-video overflow-hidden rounded-[22px] bg-gradient-to-br from-[#E8DFD0] via-[#D9C9AE] to-[#C9B896]">
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-5 text-center text-ink/35">
                  <span className="flex h-[46px] w-[46px] items-center justify-center rounded-full border-2 border-ink/25">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                      <rect x="3" y="5" width="18" height="14" rx="2" />
                      <circle cx="9" cy="10" r="2" />
                      <path d="M21 15l-4-4-8 8" />
                    </svg>
                  </span>
                  <p className="text-[12.5px] leading-[1.4]">
                    {beckyVideoUrl
                      ? "Becky's transformation call"
                      : "Becky's transformation call — video coming soon"}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </Section>

        {/* Testimonial feed grid */}
        <Section>
          <Reveal>
            <Label>More stories</Label>
            <h2 className="mt-3 text-[clamp(1.7rem,3.4vw,2.4rem)] leading-[1.15] text-ink">
              From Reels, TikTok and client calls.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {testimonialFeed.map((clip, i) => (
              <Reveal key={clip.id} delay={(i % 4) * 0.08}>
                <div className="overflow-hidden rounded-[18px] border border-line bg-paper transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-[0_20px_44px_rgba(32,48,46,0.10)]">
                  {/* [TESTIMONIAL_FEED] */}
                  <div className="relative aspect-[9/16] bg-gradient-to-br from-[#C9E8E5] via-[#9FD6D0] to-[#71CDC7]">
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2.5 p-4 text-center text-ink/40">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-ink/25">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                          <path d="M8 5.5v13l11-6.5-11-6.5Z" />
                        </svg>
                      </span>
                      <p className="text-[11px] leading-[1.4]">
                        {clip.videoUrl ? clip.name : "Video coming soon"}
                      </p>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-ink">{clip.name}</p>
                    <p className="mt-1 text-xs text-ink-soft">{clip.caption}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section bg="mist">
          <Reveal>
            <div className="mx-auto max-w-[560px] text-center">
              <h2 className="text-[clamp(1.7rem,3.4vw,2.4rem)] leading-[1.15] text-ink">
                Your story could be next.
              </h2>
              <p className="mx-auto mt-4 max-w-[420px] text-[16px] leading-[1.65] text-ink-soft">
                Every person on this page started with one small step.
              </p>
              <div className="mt-8">
                <Btn href="/#programmes">See how we&apos;d work together</Btn>
              </div>
            </div>
          </Reveal>
        </Section>
      </main>
      <Footer />
    </>
  );
}
