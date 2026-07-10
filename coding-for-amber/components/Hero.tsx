import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[34rem] w-[34rem] animate-breathe rounded-blob bg-amber-100/70"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-48 -left-48 h-[28rem] w-[28rem] animate-breathe rounded-blob bg-sage-50"
        style={{ animationDelay: "-3.5s" }}
      />

      <div className="relative mx-auto grid max-w-content items-center gap-12 px-5 pb-20 pt-16 md:grid-cols-[1.1fr_0.9fr] md:px-8 md:pb-28 md:pt-24">
        <div className="animate-fade-up">
          <p className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-1.5 text-sm font-medium text-amber-700">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-amber-500"
            />
            Anxiety coaching with Amber Perry
          </p>

          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.12] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            You&apos;re not broken.
            <br />
            Your anxiety makes sense —{" "}
            <span className="text-amber-500">and it can change.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
            I help overthinkers, worriers and quiet panickers understand what
            their anxiety is actually doing — and build a life where it stops
            calling the shots. No &ldquo;just breathe&rdquo;. No pretending
            it&apos;s simple. Just honest, practical work, together.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="#programmes"
              className="rounded-full bg-amber-500 px-7 py-3.5 font-medium text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-amber-600 hover:shadow-md"
            >
              See the programmes
            </Link>
            <Link
              href="/stories"
              className="rounded-full border border-ink/15 px-7 py-3.5 font-medium text-ink transition-colors duration-200 hover:border-ink/30 hover:bg-cream-50"
            >
              Read Becky&apos;s story
            </Link>
          </div>

          <p className="mt-7 text-sm text-ink-muted">
            Trusted by 200+ clients · {`4.9/5 average from client reviews`}
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-md animate-fade-up md:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden rounded-blob shadow-lg">
            <Image
              src="/images/amber-hero.jpg"
              alt="Amber Perry, anxiety coach, smiling warmly"
              fill
              priority
              sizes="(max-width: 768px) 90vw, 40vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -left-4 rounded-2xl border border-cream-200 bg-cream-50 px-5 py-4 shadow-md sm:-left-8">
            <p className="font-display text-sm italic text-ink">
              &ldquo;Anxiety is a messenger, not a life sentence.&rdquo;
            </p>
            <p className="mt-1 text-xs text-ink-muted">— Amber</p>
          </div>
        </div>
      </div>
    </section>
  );
}
