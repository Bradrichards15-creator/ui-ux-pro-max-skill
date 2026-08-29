# Page Topology — Homepage Design Clone

Source: static export of marino.co.uk homepage (`index.html` + `css/fe430.css`),
parsed directly (no live browser access). This document maps the layout
system we rebuilt — copy and imagery are original placeholders, not
marino's IP.

## Foundation

- **Font**: Google Font "Plus Jakarta Sans" (weights 200–800), fallback
  Helvetica/Arial. Wired via `next/font/google` in `src/app/layout.tsx`.
- **Palette** (`src/app/globals.css` custom properties):
  - `--background` `#F3F3F3` (page gray)
  - `--brand-black` `#000000` / body text `--brand-ink` `#231F20`
  - `--brand-green` `#82FFCD` (primary accent — buttons, badges, arrows)
  - `--brand-purple` `#E2CBFF` (secondary accent — hover states)
  - `--brand-pink` `#FAB8D7`, `--brand-blue` `#28C6FF` (tertiary accents,
    used on hover states of the 4-tile work grid)
- **Type scale**: h1 24px→34px, h2 22px→28px, h3 20px→24px, h4 18px→20px,
  h5 16px→17px (mobile→desktop breakpoint 768px), weight 500, line-height
  ~1.1–1.2, `text-wrap: balance`. Body 14px→15px, line-height 1.55.
- **Radius**: pill buttons 30–33px; cards/tiles/outer-wraps 22px; images
  20px; inputs 10px; small badges 999px/50%. Set as `--radius: 1.375rem`
  (22px) base token.
- **Motion**: standard easing `cubic-bezier(0.4,0,0.2,1)` at 0.35s for
  hover/interaction; ticker marquee is a CSS `translate3d` loop; scroll
  reveals use fade+translate. Reduced-motion is respected on the ticker.

## Sections, top to bottom

| # | Section | Component | Notes |
|---|---------|-----------|-------|
| 1 | Fixed pill navbar | `src/components/site-header.tsx` | Frosted/blurred pill bar, logo left, nav links + Contact CTA + mobile hamburger right. |
| 2 | Hero | `src/components/sections/hero.tsx` | 3 oversized, alternating-align headline lines (~13vw→7vw type) with floating pill badges and small looping video/media slots tucked between words. Placeholder short paragraph + contact details bottom-right. |
| 3 | Logo ticker | `src/components/sections/logo-ticker.tsx` | Infinite horizontal marquee of client logos, 40px tall mobile / 70px desktop. Placeholder logo chips. |
| 4 | About/mission strip | `src/components/sections/about-strip.tsx` | Right-aligned statement paragraph with a pulsing dot marker + black pill "About Us" CTA. |
| 5 | Work showcase | `src/components/sections/work-showcase.tsx` | Black section. Left column: heading + "View all work" link + 2 work tiles + testimonial slider. Right column: 2 more work tiles. 2×2 bento of hover-reveal project tiles (image bg, gradient overlay, tag pills, excerpt reveal on hover). |
| 6 | Services list | `src/components/sections/services-list.tsx` | "Our Services" pill badge heading + stacked list of 5 service rows (thumbnail + title + 2-line copy + "More Info" arrow link), divided by hairline borders. |
| 7 | Stats ticker + CTA | `src/components/sections/stats-ticker.tsx` | Full-bleed giant scrolling stat marquee (~18vw text) + 2 floating stat pills + media slots, followed by a centered "Send us a brief" CTA button. |
| 8 | Blog/news tiles | `src/components/sections/blog-tiles.tsx` | Black "What's happening?" section — horizontally scrollable row of article tiles (image bg, date, headline, tag pills, "Read article" link), with prev/next controls. |
| 9 | Results highlight | `src/components/sections/results-highlight.tsx` | Centered heading over a white card: stat + testimonial-style case summary on the left, tall device/portrait image slot on the right. |
| 10 | FAQ accordion | `src/components/sections/faq-accordion.tsx` | Right-aligned intro + list of expandable Q&A rows with a rotating circular arrow icon. |
| 11 | Footer | `src/components/site-footer.tsx` | Black, centered: intro line, giant "Get in Touch" heading, contact details + CTA, 2-column link list, closing logo + registration-details row. |

## Placeholder image slots (dimensions for later real-asset swap)

- Hero motion clips: 16:9, 3 slots (small, ~180–260px wide on desktop)
- Work tiles: 4:3 background images, min-height 300px cards
- Service row thumbnails: 16:9, ~250×100px on desktop
- Blog tiles: 3:2 background images, min-height 320px cards
- Results highlight portrait/device image: 7:8
- Client logos (ticker): flexible width, 40–70px tall

All placeholders are rendered via `src/components/placeholder-media.tsx`
(`PlaceholderImage`, `PlaceholderLogo`) as labeled dashed-border boxes —
swap these for real `<Image>` / logo assets later.
