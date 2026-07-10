import { Reveal, Section } from "./motion";

export default function MeetThem() {
  return (
    <Section bg="mist">
      <Reveal>
        <p className="max-w-[860px] font-display text-[clamp(1.6rem,3.2vw,2.7rem)] leading-[1.3] text-ink">
          At some point your world got a little smaller, without you really
          noticing.
          <br />
          <br />
          Everything started to revolve around how far you were from home,
          how your body felt, whether you could cope, whether something bad
          was coming.
          <br />
          <br />
          <span className="font-display italic text-teal-deep">
            And anxiety became so normal you stopped questioning it.
          </span>
        </p>
      </Reveal>
      <Reveal delay={0.15}>
        <p className="mt-9 max-w-[560px] text-[17px] leading-[1.7] text-ink-soft">
          It&apos;s not your fault. No one ever taught you how to respond when
          your body feels overwhelmed. That&apos;s the part I&apos;m here to
          help with.
        </p>
      </Reveal>
    </Section>
  );
}
