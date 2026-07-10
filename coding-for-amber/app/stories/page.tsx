import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { stories } from "@/lib/site";

export const metadata: Metadata = {
  title: "Client stories — Amber Perry, Anxiety Coach",
  description:
    "Real stories from people who worked with Amber Perry: panic, overthinking and avoidance — and what changed.",
};

function PlayBadge({ available }: { available: boolean }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-ink/20">
      {available ? (
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-cream-50/95 shadow-md">
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="ml-0.5 h-5 w-5 text-amber-600">
            <path d="M8 5.5v13l11-6.5-11-6.5Z" />
          </svg>
        </span>
      ) : (
        <span className="rounded-full bg-cream-50/95 px-4 py-1.5 text-xs font-medium text-ink-soft shadow-sm">
          Video coming soon
        </span>
      )}
    </div>
  );
}

export default function StoriesPage() {
  const becky = stories.find((s) => s.featured)!;
  const rest = stories.filter((s) => !s.featured);

  return (
    <>
      <Nav />
      <main>
        <section className="mx-auto max-w-content px-5 pb-16 pt-16 md:px-8 md:pt-24">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-amber-500">
              Client stories
            </p>
            <h1 className="mt-3 max-w-2xl font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
              Proof it changes — from people who were sure it wouldn&apos;t
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
              Every one of these people once believed their anxiety was
              permanent. Shared with their permission, in their own words.
            </p>
          </Reveal>
        </section>

        {/* Becky — featured */}
        <section className="bg-sage-50/70">
          <div className="mx-auto max-w-content px-5 py-16 md:px-8 md:py-20">
            <div className="grid items-center gap-10 md:grid-cols-[1.15fr_0.85fr]">
              <Reveal>
                <div className="relative aspect-video overflow-hidden rounded-3xl shadow-lg">
                  <Image
                    src={becky.poster}
                    alt={`${becky.name} — ${becky.headline}`}
                    fill
                    priority
                    sizes="(max-width: 768px) 90vw, 55vw"
                    className="object-cover"
                  />
                  <PlayBadge available={Boolean(becky.videoUrl)} />
                </div>
              </Reveal>
              <Reveal delay={120}>
                <p className="text-sm font-semibold uppercase tracking-widest text-sage-600">
                  Becky&apos;s story
                </p>
                <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                  {becky.headline}
                </h2>
                <blockquote className="mt-5 border-l-2 border-amber-300 pl-5 font-display italic leading-relaxed text-ink-soft">
                  &ldquo;{becky.quote}&rdquo;
                </blockquote>
                <p className="mt-4 text-sm text-ink-muted">
                  — Becky, worked with Amber for 6 months
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Grid of further stories */}
        <section className="mx-auto max-w-content px-5 py-16 md:px-8 md:py-20">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              More stories
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((s, i) => (
              <Reveal key={s.id} delay={(i % 3) * 80} className="h-full">
                <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-cream-300/70 bg-cream-50 transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
                  <div className="relative aspect-video">
                    <Image
                      src={s.poster}
                      alt={`${s.name} — ${s.headline}`}
                      fill
                      sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                      className="object-cover"
                    />
                    <PlayBadge available={Boolean(s.videoUrl)} />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-lg font-semibold text-ink">
                      {s.headline}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">
                      &ldquo;{s.quote}&rdquo;
                    </p>
                    <p className="mt-4 text-sm font-medium text-ink-muted">
                      — {s.name}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-16 rounded-3xl bg-cream-200/60 p-8 text-center md:p-12">
              <h2 className="font-display text-2xl font-semibold text-ink">
                Your story could be next
              </h2>
              <p className="mx-auto mt-3 max-w-md leading-relaxed text-ink-soft">
                Every person on this page started with one small step.
              </p>
              <Link
                href="/#programmes"
                className="mt-7 inline-block rounded-full bg-amber-500 px-7 py-3.5 font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-amber-600 hover:shadow-md"
              >
                See how we&apos;d work together
              </Link>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
