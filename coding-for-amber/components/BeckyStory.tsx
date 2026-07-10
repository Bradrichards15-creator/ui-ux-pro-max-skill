import { Reveal, Section, Label } from "./motion";
import { beckyVideoUrl } from "@/lib/config";

export default function BeckyStory() {
  return (
    <Section id="stories" bg="mist">
      <div className="grid items-center gap-11 md:grid-cols-2">
        <Reveal>
          <Label>A real transformation</Label>
          <h2 className="my-3 text-[clamp(1.8rem,3.6vw,2.7rem)] leading-[1.15] text-ink">
            This is Becky.
          </h2>
          <p className="max-w-[460px] text-[17px] leading-[1.72] text-ink-soft">
            When Becky started, she felt stuck in a cycle of anxiety and
            panic, especially anywhere unfamiliar. Eight months on, she takes
            solo trips, enjoys the theatre, and trusts she can handle
            whatever comes.
          </p>
          <p className="mt-5 text-[13.5px] italic text-teal-deep">
            Shared with Becky&apos;s permission.
          </p>
        </Reveal>
        <Reveal delay={0.12}>
          {/* [BECKY_VIDEO] — real transformation call, once hosted on Vimeo. */}
          <div className="relative aspect-video overflow-hidden rounded-[22px] bg-gradient-to-br from-[#E8DFD0] via-[#D9C9AE] to-[#C9B896]">
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-5 text-center text-ink/35">
              <span className="flex h-[46px] w-[46px] items-center justify-center rounded-full border-2 border-ink/25">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  aria-hidden="true"
                >
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
  );
}
