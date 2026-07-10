import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import { stories } from "@/lib/site";

export default function BeckyStory() {
  const becky = stories.find((s) => s.id === "becky")!;

  return (
    <section id="stories" className="scroll-mt-20 bg-sage-50/70">
      <div className="mx-auto max-w-content px-5 py-20 md:px-8 md:py-28">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-lg">
              <Image
                src={becky.poster}
                alt="Becky, smiling after her trip to Lisbon"
                fill
                sizes="(max-width: 768px) 90vw, 45vw"
                className="object-cover"
              />
              {/* Play affordance — becomes a real player once video is hosted */}
              <div className="absolute inset-0 flex items-center justify-center bg-ink/20">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-cream-50/95 shadow-md transition-transform duration-200 hover:scale-105">
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="ml-1 h-6 w-6 text-amber-600">
                    <path d="M8 5.5v13l11-6.5-11-6.5Z" />
                  </svg>
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <p className="text-sm font-semibold uppercase tracking-widest text-sage-600">
              A real story
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              {becky.headline}
            </h2>
            <blockquote className="mt-6 border-l-2 border-amber-300 pl-5 font-display text-lg italic leading-relaxed text-ink-soft">
              &ldquo;{becky.quote}&rdquo;
            </blockquote>
            <p className="mt-4 text-sm font-medium text-ink-muted">
              — Becky, worked with Amber for 6 months
            </p>
            <Link
              href="/stories"
              className="group mt-8 inline-flex items-center gap-2 font-medium text-amber-600 transition-colors hover:text-amber-700"
            >
              Watch Becky&apos;s story and others
              <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
