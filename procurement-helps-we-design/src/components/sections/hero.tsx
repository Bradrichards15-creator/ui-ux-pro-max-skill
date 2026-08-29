import { ArrowRight } from "lucide-react";

/**
 * Hero — homepage headline, centered, imageless.
 */
export function Hero() {
  return (
    <section className="bg-background px-6 pt-32 pb-14 md:pt-44 md:pb-20">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-[10vw] leading-[1.05] font-semibold tracking-tight md:text-[3.4rem]">
          From evaluating tenders to cutting procurement costs - I&apos;ve done both.
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base text-foreground/80">
          I&apos;ve spent years reading and scoring tender responses from the evaluator&apos;s
          side - and looking at what businesses pay their suppliers from the buyer&apos;s side
          too. I know what makes a bid stand out to the panel, and what makes a spend line
          worth questioning.
        </p>
        <a href="/contact" className="btn-pill mt-8 inline-flex gap-2">
          Get in touch
          <ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
}
