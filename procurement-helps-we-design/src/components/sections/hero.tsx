import { ArrowRight } from "lucide-react";
import { KineticHeading } from "@/components/kinetic-heading";

/**
 * Hero — homepage headline, centered, imageless. Split-scale lines with
 * word-by-word kinetic reveal on load and selective emphasis on the two
 * halves of the "evaluator vs buyer" pitch.
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background px-6 pt-32 pb-14 md:pt-44 md:pb-20">
      <div className="hero-glow-bg" />
      <div className="hero-grid-bg" />
      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <KineticHeading
          className="mx-auto"
          lines={[
            {
              size: "text-[7.5vw] md:text-[2.5rem] text-foreground/55 font-medium",
              words: ["From", "evaluating"],
            },
            {
              size: "text-[9vw] md:text-[3.4rem]",
              words: [{ text: "tenders", emphasis: true }, "to"],
            },
            {
              size: "text-[9vw] md:text-[3.4rem]",
              words: ["cutting", { text: "procurement", emphasis: true }],
            },
            {
              size: "text-[9vw] md:text-[3.4rem]",
              words: [{ text: "costs", emphasis: true }, "-", "I've", "done", "both."],
            },
          ]}
        />
        <p
          className="kinetic-word mx-auto mt-6 block max-w-xl text-base text-foreground/80"
          style={{ animationDelay: "620ms" }}
        >
          I&apos;ve spent years reading and scoring tender responses from the evaluator&apos;s
          side - and looking at what businesses pay their suppliers from the buyer&apos;s side
          too. I know what makes a bid stand out to the panel, and what makes a spend line
          worth questioning.
        </p>
        <a
          href="/contact"
          className="kinetic-word btn-pill mt-8 inline-flex gap-2"
          style={{ animationDelay: "700ms" }}
        >
          Get in touch
          <ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
}
