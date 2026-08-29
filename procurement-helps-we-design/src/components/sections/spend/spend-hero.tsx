import { ArrowRight } from "lucide-react";

/**
 * RenewalCard — mocked "renewal notice" visual: struck-through original
 * quote and a highlighted, renegotiated price.
 */
function RenewalCard() {
  return (
    <div className="rounded-[22px] bg-white p-6 md:p-8">
      <span className="text-[10px] font-semibold tracking-wide text-muted-foreground uppercase">
        Annual materials contract - renewal due 1 Oct
      </span>
      <p className="mt-4 text-sm text-foreground/70">
        Your supplier&apos;s renewal quote comes in at{" "}
        <span className="text-red-600 line-through decoration-2">£312,000 a year.</span>
      </p>
      <div className="mt-4 rounded-xl bg-brand-green/20 p-4">
        <p className="text-xs font-medium text-foreground/70">
          Benchmarked, and renegotiated ahead of the deadline
        </p>
        <p className="mt-1 text-2xl font-semibold">£248,000 a year</p>
      </div>
      <p className="mt-4 text-sm font-semibold">£64,000 saved on the renewal.</p>
    </div>
  );
}

/** SpendHero — headline + intro paragraph beside the renewal notice card. */
export function SpendHero() {
  return (
    <section className="bg-background px-6 pt-32 pb-14 md:pt-44 md:pb-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-[1.05fr_0.95fr] md:items-center">
          <div>
            <h1 className="text-[9vw] leading-[1.08] font-semibold tracking-tight md:text-[3rem]">
              Spend and procurement, looked at properly.
            </h1>
            <p className="mt-6 max-w-lg text-base text-foreground/80">
              Supplier costs have a habit of creeping up. I&apos;ll review your existing spend
              and look at where there&apos;s room to negotiate.
            </p>
            <a href="/contact" className="btn-pill mt-8 gap-2">
              Talk about your spend
              <ArrowRight size={16} />
            </a>
          </div>
          <RenewalCard />
        </div>
      </div>
    </section>
  );
}
