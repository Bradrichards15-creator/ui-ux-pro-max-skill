import Reveal from "./Reveal";

const steps = [
  {
    n: "1",
    title: "A personal welcome within 24 hours",
    body: "Not an automated receipt — a real message from Amber, so you know you've landed somewhere human.",
  },
  {
    n: "2",
    title: "We book your first session together",
    body: "You pick a time that genuinely works. No pressure to be 'ready' — showing up is the whole job.",
  },
  {
    n: "3",
    title: "You get full app access",
    body: "Exercises, audio and check-ins unlocked from day one, so the work starts before the first call.",
  },
];

export default function AfterSignup() {
  return (
    <section id="after-signup" className="scroll-mt-20">
      <div className="mx-auto max-w-content px-5 py-20 md:px-8 md:py-24">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              What happens after you sign up
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">
              No forms, no waiting rooms, no wondering if it went through.
            </p>
          </div>
        </Reveal>

        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.n} as="li" delay={i * 100} className="h-full">
              <div className="h-full rounded-3xl border border-cream-300/70 bg-cream-50 p-8 text-center">
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 font-display text-xl font-semibold text-amber-600">
                  {s.n}
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-ink">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {s.body}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
