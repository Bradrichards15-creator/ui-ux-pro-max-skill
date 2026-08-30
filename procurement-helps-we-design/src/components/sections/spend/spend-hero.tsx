import { ArrowRight } from "lucide-react";
import { MagneticButton } from "@/components/magnetic-button";

/** SpendHero — centered headline + intro paragraph. */
export function SpendHero() {
  return (
    <section className="relative overflow-hidden bg-background px-6 pt-32 pb-14 md:pt-44 md:pb-20">
      <div className="spend-mesh-bg">
        <div className="spend-mesh-layer" />
      </div>
      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <h1 className="text-[9vw] leading-[1.08] font-semibold tracking-tight md:text-[3rem]">
          Spend and procurement, looked at properly.
        </h1>
        <p className="mx-auto mt-6 max-w-lg text-base text-foreground/80">
          Supplier costs have a habit of creeping up. I&apos;ll review your existing spend
          and look at where there&apos;s room to negotiate.
        </p>
        <MagneticButton href="/contact" className="btn-pill mt-8 inline-flex gap-2">
          Talk about your spend
          <ArrowRight size={16} />
        </MagneticButton>
      </div>
    </section>
  );
}
