import { Reveal, Section, Label } from "./motion";

const steps = [
  {
    h: "We start in the calm",
    b: "We build the work when your system can actually receive it — not mid-panic.",
  },
  {
    h: "We shift the baseline",
    b: "Instead of chasing symptoms, we change the state your body returns to.",
  },
  {
    h: "You find your freedom",
    b: "You learn to feel activation without reading it as danger.",
  },
];

export default function Method() {
  return (
    <Section id="method">
      <Label>The work</Label>
      <Reveal as="h2" delay={0.02}>
        <p className="mt-3 max-w-[800px] text-[clamp(1.9rem,4.2vw,3.2rem)] leading-[1.1] text-ink">
          Most people spend years fighting the spikes.
          <span className="font-display italic text-teal-deep">
            {" "}
            The spike was never the problem.
          </span>
        </p>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mt-6 max-w-[620px] text-[17.5px] leading-[1.7] text-ink-soft">
          Your nervous system shifts quietly between activation and
          recovery. With anxiety, it leans towards activation — even when
          nothing&apos;s actually wrong. Over time, that becomes your
          baseline. We change that, gently, from the inside out.
        </p>
      </Reveal>
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map((s, i) => (
          <Reveal key={s.h} delay={i * 0.1}>
            <div className="h-full rounded-[18px] border border-line bg-paper p-7 transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-[0_20px_44px_rgba(32,48,46,0.10)]">
              <div className="font-display text-2xl text-teal-deep">
                0{i + 1}
              </div>
              <h3 className="mt-3 text-[19px] text-ink">{s.h}</h3>
              <p className="mt-2.5 text-[15px] leading-[1.6] text-ink-soft">
                {s.b}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
