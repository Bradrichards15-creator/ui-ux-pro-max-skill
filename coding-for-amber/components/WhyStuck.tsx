import Reveal from "./Reveal";

const myths = [
  {
    advice: "“Just breathe and calm down”",
    problem:
      "Breathing exercises are a fine tool — but used as the whole answer, they teach you anxiety is an emergency to be extinguished. Your body learns the opposite of safety.",
    instead: "We work out what your anxiety is protecting you from first.",
  },
  {
    advice: "“Avoid your triggers”",
    problem:
      "Every avoided train, party or phone call gives you a moment of relief — and quietly confirms to your brain that the thing really was dangerous. The list of triggers only ever grows.",
    instead: "We rebuild trust with those situations, gently and in order.",
  },
  {
    advice: "“Think positive”",
    problem:
      "You can't out-affirm a nervous system that believes it's in danger. Forced positivity just adds a new job: feeling anxious and pretending you're not.",
    instead: "We change what your body believes, not just what you say.",
  },
];

export default function WhyStuck() {
  return (
    <section id="why-stuck" className="scroll-mt-20">
      <div className="mx-auto max-w-content px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-500">
            The honest bit
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Why the usual advice keeps people stuck
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-soft">
            You&apos;ve probably tried all of this already. It&apos;s not that
            you did it wrong — it&apos;s that the advice was never built for
            how anxiety actually works.
          </p>
        </Reveal>

        <div className="mt-12 space-y-6">
          {myths.map((m, i) => (
            <Reveal key={m.advice} delay={i * 80}>
              <div className="grid gap-6 rounded-3xl border border-cream-300/70 bg-cream-50 p-8 md:grid-cols-[1fr_1.4fr_1.2fr] md:gap-10 md:p-10">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-ink-muted">
                    What you&apos;ve been told
                  </p>
                  <p className="mt-2 font-display text-xl font-semibold text-ink">
                    {m.advice}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-ink-muted">
                    Why it keeps you stuck
                  </p>
                  <p className="mt-2 leading-relaxed text-ink-soft">
                    {m.problem}
                  </p>
                </div>
                <div className="rounded-2xl bg-sage-50 p-5">
                  <p className="text-xs font-semibold uppercase tracking-widest text-sage-600">
                    What we do instead
                  </p>
                  <p className="mt-2 leading-relaxed text-ink">{m.instead}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
