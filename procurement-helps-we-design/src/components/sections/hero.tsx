import Image from "next/image";
import { ArrowRight } from "lucide-react";

/**
 * Hero — homepage headline over a two-column layout: copy + CTA on the
 * left, a real photo of Brad reviewing a document on the right (was a
 * placeholder media slot).
 */
export function Hero() {
  return (
    <section className="bg-background px-6 pt-32 pb-14 md:pt-44 md:pb-20">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <div>
          <h1 className="text-[10vw] leading-[1.05] font-semibold tracking-tight md:text-[3.4rem]">
            From evaluating tenders to cutting procurement costs - I&apos;ve done both.
          </h1>
          <p className="mt-6 max-w-xl text-base text-foreground/80">
            I&apos;ve spent years reading and scoring tender responses from the evaluator&apos;s
            side - and looking at what businesses pay their suppliers from the buyer&apos;s side
            too. I know what makes a bid stand out to the panel, and what makes a spend line
            worth questioning.
          </p>
          <a href="/contact" className="btn-pill mt-8 gap-2">
            Get in touch
            <ArrowRight size={16} />
          </a>
        </div>

        <div className="relative aspect-4/5 w-full overflow-hidden rounded-[22px] bg-white">
          <Image
            src="/images/team/brad-reviewing-cutout.png"
            alt="Brad Richards reviewing a tender document"
            fill
            priority
            sizes="(min-width: 768px) 40vw, 90vw"
            className="object-cover object-top"
          />
        </div>
      </div>
    </section>
  );
}
