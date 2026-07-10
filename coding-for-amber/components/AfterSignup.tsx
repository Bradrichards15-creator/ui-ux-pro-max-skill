import { Reveal, Section, Label } from "./motion";

const steps = [
  {
    n: "1",
    h: "A personal welcome within 24 hours",
    b: "Not an automated receipt — a real message from Amber, so you know you've landed somewhere human.",
  },
  {
    n: "2",
    h: "We book your first session together",
    b: "You pick a time that genuinely works. Showing up is the whole job.",
  },
  {
    n: "3",
    h: "You get full app access",
    b: "Tools, frameworks and exercises unlocked from day one, so the work starts before the first call.",
  },
];

// Placed right after Programmes, per request.
export default function AfterSignup() {
  return (
    <Section>
      <Reveal>
        <Label>What happens next</Label>
        <h2 className="mt-3 max-w-[620px] text-[clamp(1.9rem,4vw,2.8rem)] leading-[1.12] text-ink">
          What happens after you sign up
        </h2>
      </Reveal>
      <div className="mt-11 grid gap-5 sm:grid-cols-3">
        {steps.map((s, i) => (
          <Reveal key={s.n} delay={i * 0.1}>
            <div className="h-full rounded-[18px] border border-line bg-paper p-7 text-center">
              <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-mist font-display text-lg text-teal-deep">
                {s.n}
              </span>
              <h3 className="mt-4 text-[17px] text-ink">{s.h}</h3>
              <p className="mt-2.5 text-sm leading-[1.6] text-ink-soft">
                {s.b}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
