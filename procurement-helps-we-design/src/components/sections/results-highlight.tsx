import { PlaceholderImage } from "@/components/placeholder-media";

/**
 * ResultsHighlight — centered heading over a white "outer-wrap" card
 * containing a two-column split: stat + testimonial copy on the left,
 * a tall portrait/device mock image on the right.
 */
export function ResultsHighlight() {
  return (
    <section className="bg-background px-6 py-14 md:py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-6 text-center text-2xl font-medium">
          Studio: the results-driven placeholder agency
        </h2>

        <div className="rounded-[22px] bg-white p-6 md:p-10">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <div className="mb-4 w-32">
                <PlaceholderImage label="Client logo" aspect="6 / 1" className="h-10" />
              </div>
              <p className="text-4xl leading-none font-semibold">400%</p>
              <h3 className="mt-1 text-xl font-medium">Revenue growth</h3>
              <p className="mt-3 max-w-sm text-sm text-foreground/80">
                [Placeholder case-study summary] A client achieved significant revenue growth
                through a combined programme of brand, web, and inbound marketing work, generating
                a strong pipeline and traffic growth.
              </p>
              <a href="#work" className="btn-pill mt-6">
                View Work
              </a>
            </div>
            <PlaceholderImage label="Device / portrait mock (7:8)" aspect="7 / 8" />
          </div>
        </div>
      </div>
    </section>
  );
}
