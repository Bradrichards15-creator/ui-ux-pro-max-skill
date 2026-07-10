import Image from "next/image";
import Link from "next/link";
import { Reveal, Section, Label, CountUp } from "./motion";

// Moved ahead of Programmes per request — trust before price.
export default function MeetAmber() {
  return (
    <Section id="about">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <Reveal>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[22px] shadow-[0_20px_44px_rgba(32,48,46,0.10)] md:max-w-none">
            <Image
              src="/images/amber-about.jpg"
              alt="Amber Perry writing at her desk"
              fill
              sizes="(max-width: 768px) 90vw, 40vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <Label>Meet Amber</Label>
          <h2 className="my-3 text-[clamp(1.9rem,4vw,3rem)] leading-[1.15] text-ink">
            I&apos;m not someone who studied anxiety from the outside.
          </h2>
          <p className="text-[17px] leading-[1.72] text-ink-soft">
            I lived with chronic anxiety and panic for over ten years. What
            changed everything was nervous system regulation. Last year I
            drove over a thousand miles across Europe. I wasn&apos;t
            anxious. I was free.
          </p>

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

          <Link
            href="/about"
            className="group mt-7 inline-flex items-center gap-2 font-medium text-teal-deep transition-colors hover:text-teal-ink"
          >
            Read Amber&apos;s full story
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </Reveal>
      </div>
    </Section>
  );
}
