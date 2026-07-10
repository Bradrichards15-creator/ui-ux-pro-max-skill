import { Reveal, Section, Label } from "./motion";

// The single permitted `ink` dark section per DESIGN.md §2.
export default function WhyStuck() {
  return (
    <Section bg="ink">
      <Label dark>Why the usual advice keeps people stuck</Label>
      <Reveal delay={0.02}>
        <h2 className="mt-3 max-w-[820px] text-[clamp(1.9rem,4.2vw,3.2rem)] leading-[1.12] text-paper">
          None of it was your fault. You were just never shown another way.
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mt-6 max-w-[640px] text-[17.5px] leading-[1.7] text-paper/72">
          Avoiding, controlling, waiting to feel better before living — each
          quietly taught your system the fear was real. Regulation isn&apos;t
          a technique for mid-panic. It&apos;s the state your body is
          conditioned to return to. That&apos;s what we change.
        </p>
      </Reveal>
    </Section>
  );
}
