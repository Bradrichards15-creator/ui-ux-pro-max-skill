# Amber Perry (@wordsofamber) — Design System

> Note: this file was authored during the build because the original DESIGN.md
> and AmberHomepage.jsx reference were not present in the repository. It now
> serves as the working design system — edit it and the code together.

## Brand feel

Calm, warm, human, unhurried. Amber is an anxiety coach: the site itself must
lower the reader's heart rate. Nothing flashy, nothing loud, no dark patterns.
Generous whitespace, soft edges, warm light.

## Colour

| Token | Hex | Use |
|---|---|---|
| `cream-100` | `#FBF7F0` | Page background |
| `cream-50` | `#FDFBF7` | Raised cards |
| `cream-200` | `#F5EDE1` | Alternate section bands |
| `ink` | `#2E2A26` | Headings, body |
| `ink-soft` | `#57504A` | Secondary body text |
| `ink-muted` | `#6E655D` | Captions, meta (large text only) |
| `amber-500` | `#B46636` | Primary CTA, links (white text passes 4.5:1) |
| `amber-600` | `#9A5028` | CTA hover |
| `amber-100` | `#F6E1D1` | Soft highlights, pill badges |
| `sage-500` | `#6B7C5C` | Secondary accent, checkmarks |
| `sage-50` | `#F2F4EF` | Calm section tint |

Rules: never pure black/white; text on tinted bands must keep ≥4.5:1;
red only for form errors.

## Typography

- **Display:** Fraunces (serif, warm, slightly editorial) — headings, pull quotes.
- **Body:** Inter — 16–18px body, line-height 1.6–1.75.
- Scale: 14 / 16 / 18 / 22 / 28 / 36 / 48 / 60. Headings 600–650 weight,
  tight-ish leading (1.1–1.2). Max line length ~65ch.

## Spacing & layout

- Container `max-w-6xl` (72rem), px-5 mobile / px-8 desktop.
- Sections `py-20` mobile → `py-28` desktop. 8pt rhythm throughout.
- Cards `rounded-3xl`, borders `1px` cream-300/soft, shadows minimal
  (`shadow-sm`→`shadow-md` on hover only).
- Photos: organic blob radius on hero, `rounded-3xl` elsewhere,
  always `next/image` + `object-cover`.

## Motion

- Scroll reveal: fade-up 24px, 600ms ease-out, once, staggered ≤3 siblings.
- Hero blob: 7s "breathe" scale loop (1 → 1.04).
- Buttons/cards: 200ms transitions, subtle lift (translate-y −2px).
- Everything gated behind `prefers-reduced-motion`.

## Voice

Second person, validating, no medical claims, no urgency/scarcity tactics.
"You're not broken" energy. British English (Amber is UK-based).

## Page order (deliberate)

Hero → Meet them (personas) → soft CTA → Why usual advice keeps people stuck
→ soft CTA → Becky's story → Meet Amber → **Programmes** → What happens after
you sign up → Free guide email capture → Footer.
Trust (stories + Amber) lands *before* price.
