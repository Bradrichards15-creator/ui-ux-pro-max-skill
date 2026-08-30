import { ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MagneticButton } from "@/components/magnetic-button";

/** not-found — branded 404 page. */
export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 overflow-hidden">
        <section className="relative overflow-hidden bg-background px-6 pt-32 pb-14 md:pt-44 md:pb-20">
          <div className="hero-glow-bg" />
          <div className="hero-grid-bg" />
          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold tracking-wide text-muted-foreground uppercase">
              404
            </span>
            <h1 className="mt-3 text-[10vw] leading-[1.05] font-semibold tracking-tight md:text-[3.4rem]">
              This page has gone missing.
            </h1>
            <p className="mx-auto mt-6 max-w-lg text-base text-foreground/80">
              The page you&apos;re looking for doesn&apos;t exist, or the link&apos;s out of
              date. Let&apos;s get you back on track.
            </p>
            <MagneticButton href="/" className="btn-pill mt-8 inline-flex gap-2">
              Back to home
              <ArrowRight size={16} />
            </MagneticButton>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
