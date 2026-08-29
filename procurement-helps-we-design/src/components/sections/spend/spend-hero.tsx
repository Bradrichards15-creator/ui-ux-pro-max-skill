import { ArrowRight } from "lucide-react";

/** SpendHero — centered headline + intro paragraph. */
export function SpendHero() {
  return (
    <section className="bg-background px-6 pt-32 pb-14 md:pt-44 md:pb-20">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-[9vw] leading-[1.08] font-semibold tracking-tight md:text-[3rem]">
          Spend and procurement, looked at properly.
        </h1>
        <p className="mx-auto mt-6 max-w-lg text-base text-foreground/80">
          Supplier costs have a habit of creeping up. I&apos;ll review your existing spend
          and look at where there&apos;s room to negotiate.
        </p>
        <a href="/contact" className="btn-pill mt-8 inline-flex gap-2">
          Talk about your spend
          <ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
}
