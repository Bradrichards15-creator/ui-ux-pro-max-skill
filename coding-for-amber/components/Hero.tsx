import Image from "next/image";
import { Reveal, Btn, BaselineLine } from "./motion";
import { vimeoIntroUrl } from "@/lib/config";

export default function Hero() {
  return (
    <header className="px-[6vw] pb-0 pt-[18vh]">
      <div className="mx-auto grid max-w-[1180px] items-center gap-12 md:grid-cols-2">
        <div>
          <Reveal>
            <p className="mb-6 text-xs uppercase tracking-[0.2em] text-teal-deep">
              Anxiety coaching · nervous system regulation
            </p>
          </Reveal>
          <Reveal as="h1" delay={0.08}>
            <span className="block text-[clamp(2.4rem,5.4vw,4.4rem)] leading-[1.05] text-ink">
              You were never
              <br />
              broken.
            </span>
            <span className="mt-1 block font-display text-[clamp(2.4rem,5.4vw,4.4rem)] italic leading-[1.05] text-teal-deep">
              Just never taught.
            </span>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-7 max-w-[480px] text-[clamp(1.05rem,1.4vw,1.25rem)] leading-[1.65] text-ink-soft">
              You&apos;ve tried the therapy, the apps, the breathing, the
              books — and still feel like you&apos;re managing something that
              never quite lets go.
              <br />
              <br />
              There&apos;s a reason for that. It isn&apos;t that something&apos;s
              wrong with you.
            </p>
          </Reveal>
          <Reveal delay={0.32}>
            <div className="mt-9 flex flex-wrap gap-4">
              <Btn href="#programmes">See how we&apos;d work together</Btn>
              <Btn variant="ghost" href="#contact">
                Just say hello
              </Btn>
            </div>
          </Reveal>
          <Reveal delay={0.44}>
            <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-teal-deep">
              <span>
                <strong className="text-ink">5 years</strong> coaching
              </span>
              <span className="opacity-40">·</span>
              <span>
                <strong className="text-ink">250+</strong> people helped
              </span>
              <span className="opacity-40">·</span>
              <span>Lived it, not just studied it</span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.24}>
          <div className="relative mx-auto aspect-[1200/1380] w-full max-w-sm overflow-hidden rounded-[22px] shadow-[0_20px_44px_rgba(32,48,46,0.10)] md:max-w-none">
            <Image
              src="/images/amber-hero.jpg"
              alt="Amber Perry smiling, holding her laptop"
              fill
              priority
              sizes="(max-width: 768px) 90vw, 45vw"
              className="object-cover"
            />
            {/* [VIMEO_INTRO] — autoplay-muted welcome video goes here once hosted. */}
            {!vimeoIntroUrl && (
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/50 to-transparent p-5">
                <span className="rounded-full bg-paper/90 px-3.5 py-1.5 text-xs font-medium text-ink-soft">
                  Welcome video coming soon
                </span>
              </div>
            )}
          </div>
          <p className="mt-3 text-center font-display text-sm italic text-teal-deep">
            Hi, I&apos;m Amber — press play.
          </p>
        </Reveal>
      </div>

      <div className="mx-auto mt-[70px] max-w-[1180px]">
        <BaselineLine />
        <div className="mt-2 flex justify-between text-xs tracking-wide text-teal-deep">
          <span>a system stuck on alert</span>
          <span>a system that feels safe</span>
        </div>
      </div>
    </header>
  );
}
