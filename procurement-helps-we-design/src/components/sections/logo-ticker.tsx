import { PlaceholderLogo } from "@/components/placeholder-media";

const LOGOS = Array.from({ length: 8 }, (_, i) => `Client ${i + 1}`);

/**
 * LogoTicker — infinite horizontal marquee of client logos. Matches the
 * source's `.logo-ticker` (40px tall on mobile, 70px on desktop, 65/160px
 * gaps, CSS-only translate3d loop). Placeholder logo chips stand in for
 * real client marks.
 */
export function LogoTicker() {
  const items = [...LOGOS, ...LOGOS];
  return (
    <section className="overflow-hidden bg-white py-4 md:py-6">
      <div className="group flex w-max animate-[ticker_30s_linear_infinite] items-center gap-16 motion-reduce:animate-none md:gap-40">
        {items.map((label, i) => (
          <PlaceholderLogo key={`${label}-${i}`} label={label} />
        ))}
      </div>
    </section>
  );
}
