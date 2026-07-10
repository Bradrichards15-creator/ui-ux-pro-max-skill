import Image from "next/image";
import Reveal from "./Reveal";
import { site } from "@/lib/site";

const credentials = [
  "Certified anxiety & mindset coach",
  "200+ clients coached 1:1",
  "Lived it — recovered from panic disorder herself",
];

export default function MeetAmber() {
  return (
    <section id="about" className="scroll-mt-20">
      <div className="mx-auto max-w-content px-5 py-20 md:px-8 md:py-28">
        <div className="grid items-center gap-12 md:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl shadow-lg md:max-w-none">
              <Image
                src="/images/amber-about.jpg"
                alt="Amber Perry sitting with a cup of tea, mid-conversation"
                fill
                sizes="(max-width: 768px) 90vw, 40vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <p className="text-sm font-semibold uppercase tracking-widest text-amber-500">
              Meet Amber
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              I&apos;m not going to coach you from a pedestal.
              <br />
              I&apos;ve sat where you&apos;re sitting.
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink-soft">
              <p>
                Ten years ago I was the one cancelling plans, googling
                symptoms at 2am and quietly building a life around my anxiety.
                What finally changed things wasn&apos;t willpower or a
                miracle technique — it was understanding what my anxiety was
                actually doing, and having someone patient in my corner while
                I retrained it.
              </p>
              <p>
                That&apos;s what I do now, as {site.handle} — for the
                overthinkers, the worriers and the quiet panickers. No jargon,
                no judgement, no pretending it&apos;s linear. Just the work
                that actually moves the needle, done together.
              </p>
            </div>
            <ul className="mt-7 space-y-3">
              {credentials.map((c) => (
                <li key={c} className="flex items-start gap-3 text-ink">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-sage-500">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
