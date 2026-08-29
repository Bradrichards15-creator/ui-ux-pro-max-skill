import { PlaceholderImage } from "@/components/placeholder-media";

/**
 * Hero — three stacked, alternating-align headline lines with floating
 * pill badges and a rounded media slot tucked into each line, matching
 * marino's oversized responsive headline (line-height 1.1, ~15vw type)
 * and asymmetric left/right layout rhythm.
 */
export function Hero() {
  return (
    <section className="bg-background px-6 pt-32 pb-10 md:pt-40">
      <div className="mx-auto max-w-6xl">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold">
          <span>[Placeholder headline]</span>
          <span className="text-muted-foreground">Verified Partner</span>
        </div>

        <div className="flex flex-col gap-2 md:gap-0">
          {/* Line 1 */}
          <div className="relative flex items-center gap-4">
            <h1 className="text-[13vw] leading-[1.05] font-semibold tracking-tight md:text-[7vw]">
              Building
            </h1>
            <div className="hidden w-[18vw] shrink-0 md:block">
              <PlaceholderImage label="Motion clip 1 (16:9)" aspect="16 / 9" className="rounded-xl" />
            </div>
            <span className="ml-auto hidden rounded-full bg-brand-green px-5 py-2 text-[11px] font-semibold md:inline-block">
              £100m+ client revenue
            </span>
          </div>

          {/* Line 2 */}
          <div className="relative flex flex-row-reverse items-center gap-4 md:pl-[14vw]">
            <h1 className="text-[13vw] leading-[1.05] font-semibold tracking-tight md:text-[7vw]">
              Brands That
            </h1>
            <div className="hidden w-[12vw] shrink-0 md:block">
              <PlaceholderImage label="Motion clip 2 (16:9)" aspect="16 / 9" className="rounded-xl" />
            </div>
          </div>

          {/* Line 3 */}
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
            <h1 className="text-[13vw] leading-[1.05] font-semibold tracking-tight md:text-[7vw]">
              Grow &amp; Scale
            </h1>
            <div className="max-w-md pb-1 text-sm">
              <p>
                <strong>[Your city]-born, globally trusted</strong> — placeholder copy describing
                the agency&apos;s track record and results, sized to roughly match the original
                paragraph length here for layout purposes only.
              </p>
              <div className="mt-3 w-40">
                <PlaceholderImage label="Motion clip 3 (16:9)" aspect="16 / 9" className="rounded-xl" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 hidden justify-end gap-6 text-sm font-medium md:flex">
          <a href="mailto:hello@example.com" className="hover:underline">
            hello@example.com
          </a>
          <a href="tel:0000000000" className="hover:underline">
            00000 000000
          </a>
        </div>
      </div>
    </section>
  );
}
