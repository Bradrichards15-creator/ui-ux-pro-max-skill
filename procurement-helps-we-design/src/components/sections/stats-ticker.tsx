import { PlaceholderImage } from "@/components/placeholder-media";

const TICKER_TEXT =
  "100 verified 5 star reviews  •  Clients in 30 countries  •  A decade of experience  •  £100 million in client revenue generated  •  ";

/**
 * StatsTicker — full-bleed oversized scrolling marquee (`.ticker`, 18vw
 * text) with two floating stat pill badges and media slots layered over
 * it, followed by a centered CTA strip.
 */
export function StatsTicker() {
  return (
    <section className="relative overflow-hidden bg-background px-6 py-14 md:py-20">
      <div className="relative mx-auto max-w-6xl">
        <div className="relative overflow-hidden whitespace-nowrap">
          <div className="flex w-max animate-[ticker_30s_linear_infinite] items-center motion-reduce:animate-none">
            <span className="pb-4 text-[13vw] leading-[0.9] font-semibold tracking-tight md:text-[9vw]">
              {TICKER_TEXT}
            </span>
            <span aria-hidden className="pb-4 text-[13vw] leading-[0.9] font-semibold tracking-tight md:text-[9vw]">
              {TICKER_TEXT}
            </span>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-4">
          <span className="rounded-full bg-brand-green px-5 py-2.5 text-xs font-semibold">
            Decades of experience
          </span>
          <span className="rounded-full bg-brand-green px-5 py-2.5 text-xs font-semibold">
            Clients in 30 countries
          </span>
          <div className="ml-auto hidden gap-3 md:flex">
            <PlaceholderImage label="Motion clip (16:9)" aspect="16 / 9" className="w-32" />
            <PlaceholderImage label="Motion clip (16:9)" aspect="16 / 9" className="w-32" />
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 text-center">
          <strong className="text-lg font-semibold">Send us a brief and we&apos;ll talk</strong>
          <a href="#contact" className="btn-pill">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
