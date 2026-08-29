import { ArrowRight } from "lucide-react";

/**
 * TenderHero — centered headline + intro paragraph, followed by
 * "The problem" closing statement.
 */
export function TenderHero() {
  return (
    <section className="bg-background px-6 pt-32 pb-14 md:pt-44 md:pb-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-[9vw] leading-[1.08] font-semibold tracking-tight md:text-[3rem]">
            Better tender responses start with understanding what the panel expects.
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-base text-foreground/80">
            I&apos;ve scored thousands of tenders over the years, so I can look at your response
            from the other side of the table.
          </p>
          <a href="/contact" className="btn-pill mt-8 inline-flex gap-2">
            Talk about your tender
            <ArrowRight size={16} />
          </a>
        </div>

        <div className="mx-auto mt-14 max-w-xl text-center">
          <h2 className="text-lg font-semibold">The problem</h2>
          <p className="mt-2 text-sm text-foreground/75">
            None of these statements give the evaluator much to score. They sound like
            commitments, but most of the important detail is left for the panel to assume.
          </p>
        </div>
      </div>
    </section>
  );
}
