import { Reveal, Section, Btn } from "./motion";
import { discoveryCallUrl, social } from "@/lib/config";

// DESIGN.md §8 item 8 — distinct from the InlineCTA bridges elsewhere.
export default function SoftCTA() {
  return (
    <Section bg="mist">
      <div className="mx-auto max-w-[640px] text-center">
        <Reveal>
          <h2 className="text-[clamp(1.7rem,3.6vw,2.4rem)] leading-[1.15] text-ink">
            Not sure where to start?
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-4 max-w-[480px] text-[16px] leading-[1.68] text-ink-soft">
            Book a free call, no pitch attached — or drop me a message on
            Instagram if that feels easier.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Btn href={discoveryCallUrl || "#contact"} target={discoveryCallUrl ? "_blank" : undefined}>
              Book a free call
            </Btn>
            <Btn
              variant="ghost"
              href={social.instagram}
              target="_blank"
            >
              Message on Instagram
            </Btn>
          </div>
          <p className="mt-6 font-display text-[15px] italic text-teal-deep">
            Or, you know… if you&apos;re ready, dive in above.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
