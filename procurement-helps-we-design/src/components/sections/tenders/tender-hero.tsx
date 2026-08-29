import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { MagneticButton } from "@/components/magnetic-button";

/**
 * TenderHero — headline + intro paragraph on the left, Brad's photo on
 * the right.
 */
export function TenderHero() {
  return (
    <section className="bg-background px-6 pt-32 pb-14 md:pt-44 md:pb-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-[1.05fr_0.95fr] md:items-center">
          <div>
            <h1 className="text-[9vw] leading-[1.08] font-semibold tracking-tight md:text-[3rem]">
              Better tender responses start with understanding what the panel expects.
            </h1>
            <p className="mt-6 max-w-lg text-base text-foreground/80">
              I&apos;ve scored thousands of tenders over the years, so I can look at your response
              from the other side of the table.
            </p>
            <MagneticButton href="/contact" className="btn-pill mt-8 inline-flex gap-2">
              Talk about your tender
              <ArrowRight size={16} />
            </MagneticButton>
          </div>

          <div className="relative aspect-4/5 w-full overflow-hidden rounded-[22px] bg-white">
            <Image
              src="/images/team/brad-presenting.png"
              alt="Brad presenting 'How to Win a Tender'"
              fill
              priority
              sizes="(min-width: 768px) 40vw, 90vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
