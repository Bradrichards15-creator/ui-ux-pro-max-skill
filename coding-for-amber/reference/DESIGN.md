# DESIGN.md — Words of Amber

Design system for the Words of Amber website. Any AI agent or developer working
on this project must read this file first and follow it for every component,
page, and copy decision. When in doubt, choose the calmer, softer, more human
option.

---

## 1. Brand essence

**Who:** Amber Perry (@wordsofamber) — anxiety coach and nervous system
regulation specialist. She lived with chronic anxiety and panic for 10+ years
and recovered through nervous system work. She is warm, direct, and honest.
Never clinical, never corporate, never "girlboss".

**Core message:** Anxiety was never the problem — you were never taught what
it is. Visitors are not broken; they were never shown how their nervous system
works. The site should make an emotionally exhausted visitor feel *finally
understood* within the first screen.

**Emotional journey the site must create:**
"I've finally been understood" → "Maybe nothing is wrong with me" →
"This makes sense" → "I actually can recover" → "I trust Amber" →
"I want to work with her."

**Feel:** Luxury wellness. Headspace × Calm × a premium coaching brand.
Soft, breathing, generous whitespace. Premium but *never* cold. Everything
should feel like an exhale.

---

## 2. Colour

Primary brand colour is Amber's teal. Use it with restraint — as accent,
never as wall-to-wall background except in soft washed tints.

| Token          | Hex       | Use |
|----------------|-----------|-----|
| `teal`         | `#71CDC7` | Primary accent: buttons, highlights, motifs, links |
| `teal-deep`    | `#3E9B95` | Accessible teal for small text on light backgrounds |
| `teal-ink`     | `#1F5A56` | Darkest teal — text on teal backgrounds |
| `mist`         | `#EDF6F5` | Pale teal wash — alternating section backgrounds |
| `ink`          | `#20302E` | Primary text, dark sections |
| `ink-soft`     | `#4A5A57` | Secondary/body text |
| `paper`        | `#FBFAF7` | Main page background (warm off-white, never pure #FFF) |
| `cream`        | `#F3F0E9` | Warm secondary surface — cards, soft moments |
| `line`         | `#E4E7E4` | Hairline borders, dividers |

**Rules:**
- Teal on `paper`/`mist` for accents; `teal-deep` whenever teal text is small.
- Never use pure black or pure white anywhere.
- One dark (`ink`) section per page maximum — used for contrast and gravity,
  e.g. "why the usual advice keeps people stuck".
- No multi-colour gradients. If a gradient is used at all, it is a barely
  perceptible teal→mist wash.
- Contrast must meet WCAG AA. `teal` (#71CDC7) fails on white for body text —
  only use it for large display text, fills, or decorative elements.

---

## 3. Typography

| Role      | Font       | Notes |
|-----------|-----------|-------|
| Display   | **Fraunces** (Google Fonts, optical sizing on) | Headlines, pull quotes, stats. Weight 300–500 only. Italic used for emotional emphasis words. |
| Body / UI | **Inter** (Google Fonts) | Body copy, buttons, nav, labels. Weights 400 and 500 only. |

**Scale (fluid, clamp-based):**
- H1: `clamp(2.4rem, 5.4vw, 4.4rem)`, line-height 1.05, letter-spacing -0.02em
- H2: `clamp(1.9rem, 4.2vw, 3.2rem)`, line-height 1.1
- H3: 19–25px
- Body: 16–17.5px, line-height 1.65–1.72
- Labels/eyebrows: 12px, uppercase, letter-spacing 0.18em, `teal-deep`

**Rules:**
- Headlines are sentence case, never Title Case, never ALL CAPS (except tiny
  eyebrow labels).
- Italic Fraunces = the emotional beat of a headline
  (e.g. "You were never broken. *Just never taught.*").
- Never use more than two typefaces.
- Line length for body copy: max ~65 characters (max-width ≈ 560–640px).

---

## 4. Spacing & layout

- Section vertical padding: `clamp(64px, 9vw, 120px)`. Generous. Everything breathes.
- Content max-width: 1120px, centred, 6vw side padding.
- Border radius: 16–24px on cards, 999px (pill) on buttons and inputs.
- Shadows: soft and low — `0 20px 44px rgba(32,48,46,.10)` max, on hover only.
- Alternate section backgrounds: `paper` → `mist` → `paper` → `ink` (once) → …
- Mobile-first. Cards stack vertically on mobile; no horizontal carousels for
  core content. Grid: `repeat(auto-fit, minmax(280px, 1fr))` pattern.

---

## 5. Motion & animation

Animation principle: **breathing, not bouncing.** The audience is anxious
people. Motion must feel like a slow exhale — nothing snappy, springy, or
attention-grabbing.

- Library: **Framer Motion** (already installed). Do not add Anime.js, GSAP,
  or any second animation library.
- Standard entrance: fade + rise 20px, duration 0.85s,
  ease `cubic-bezier(0.16, 1, 0.3, 1)`, staggered children 80–100ms apart.
- Scroll-triggered reveals via `whileInView`, threshold ~0.15, trigger once.
- Hover on cards: translateY(-4px) + soft shadow, 0.4s.
- Buttons: subtle lift on hover, colour cross-fade 0.35s.
- Parallax: allowed on ONE hero/feature moment only, subtle (≤ 40px travel).
- Respect `prefers-reduced-motion`: all entrance animation disabled, content
  visible immediately.
- Never: spinning elements, pulsing badges, auto-advancing carousels,
  countdown timers, anything urgent-feeling.

---

## 6. Signature motif — the baseline line

A recurring SVG "nervous system trace": a horizontal line that is spiked and
jagged on the left (a system stuck on alert) and settles into a calm flat line
on the right (a system that feels safe). This is Amber's core teaching —
"the spike isn't the issue, the baseline is" — made visual.

- Appears in the hero (full width, teal, with the caption pair
  "a system stuck on alert" / "a system that feels safe").
- Reappears, fully calm, near the final CTA.
- May be used as a subtle section divider. Never more than 3 uses per page.

---

## 7. Tone of voice (all copy, including microcopy)

- **British English.** Always.
- Warm, direct, human. Short lines. Meet-then-move: acknowledge the feeling
  first, then reframe.
- Absolution before education: "It's not your fault. You were never taught."
- No toxic positivity, no hustle language, no clinical jargon, no "journey to
  your best self" filler.
- Speak to "you", singular. Amber speaks as "I".
- CTAs are invitations, not pressure: "Just say hello", "See how we'd work
  together", "Not sure? That's completely normal."
- Never fabricate testimonials, statistics, review counts, or star ratings.
  Real proof only: 5 years coaching, 250+ people helped, Becky's story
  (shared with permission).
- Footer must include: "Coaching is a supportive service, not a substitute
  for medical or psychological treatment. If you're in crisis, please contact
  your GP or emergency services."

---

## 8. Page structure (locked)

### Main page, in order:
1. **Hero** — headline "You were never broken. / *Just never taught.*",
   subcopy, primary CTA (to programmes) + soft CTA ("Just say hello"),
   trust line (5 years · 250+ helped · lived it), Amber's autoplay-muted
   intro video (Vimeo placeholder `[VIMEO_INTRO]`), baseline-line motif.
2. **Meet them** — mist background. "At some point your world got smaller…"
   Absolution copy.
3. **The work / method** — three cards: start in the calm → shift the
   baseline → find your freedom.
4. **Why the usual advice keeps people stuck** — the single `ink` dark section.
5. **Becky's transformation** — mist background. Video of a real
   transformation call (`[BECKY_VIDEO]`), her written story alongside.
   "Shared with Becky's permission." Not tied to any programme.
6. **What I'm here for** — four cream cards (panic, health anxiety,
   overthinking, fear of anxiety itself). Not tied to any programme.
7. **Programmes** — three cards, narrative "for the person who…" lines taken
   from Amber's own PDF. £147 / £297 / £497 per month, six-month commitment
   stated. Programme Two featured. Direct Stripe checkout links
   (`[STRIPE_LINKS]` placeholders).
8. **Soft CTA** — "Not sure where to start?" → free Calendly call
   (`[CALENDLY_URL]`) or Instagram DM. Include the light-hearted
   "or, you know… if you're ready, dive in above."
9. **Meet Amber** — her real story (10+ years anxiety, recovery through
   nervous system regulation, 1,000+ miles across Europe — "I wasn't anxious.
   I was free."). Real stats only.
10. **FAQ** — accordion. Honest answers. Includes "Is this therapy?" (no),
    "What if I've tried everything?", commitment fears.
11. **Contact — "Say hello"** — conversational multi-step flow, NOT a form:
    what's bringing you here → how soon → anything caught your eye →
    easiest place to reach you (Instagram DM / WhatsApp / email — audience is
    young, email least preferred). Warm success state. Routes to Amber's
    inbox (`[CONTACT_ROUTE]` — no CRM yet).
12. **"Not ready yet" capture** — soft follow/DM invitation, not a hard
    email gate.
13. **Footer** — socials (Instagram, TikTok, Facebook, WhatsApp), app link
    (`[APP_LINK]`), Privacy & Terms placeholders (`[LEGAL]` — REQUIRED before
    taking payments), crisis disclaimer.

### Second page — `/stories` (Client stories):
- Becky's written story, grid of client videos from Reels/TikTok/Facebook
  (`[TESTIMONIAL_FEED]` placeholders), closing CTA back to programmes.

---

## 9. Tech constraints

- **Stack:** Next.js (App Router), React, Tailwind CSS, Framer Motion.
  All already installed in this project.
- Components live in `/components`, one file per section.
- All plug-in points are marked with bracketed tags in comments:
  `[VIMEO_INTRO]`, `[BECKY_VIDEO]`, `[STRIPE_LINKS]`, `[CALENDLY_URL]`,
  `[SOCIAL_LINKS]`, `[APP_LINK]`, `[CONTACT_ROUTE]`, `[TESTIMONIAL_FEED]`,
  `[LEGAL]`. Keep a single `config.ts` where all of these live.
- Video: Vimeo embeds (no ads, premium player). Empty states must look
  intentional, not broken.
- Images: use `next/image`. Amber's own photos will be dropped into
  `/public/images` — build with tasteful placeholders sized and positioned
  for real portrait photography.
- Semantic HTML, proper heading order, alt text on all images, WCAG AA.
- SEO: metadata, OpenGraph, sensible titles. No fake schema (no invented
  review/rating schema).

---

## 10. Never do

- Generic SaaS look: purple/blue gradients, floating 3D blobs, glassmorphism
  everywhere, stock photos of people laughing at salads.
- Urgency/pressure patterns: countdowns, "only 2 spots left!" (exception:
  Programme Three genuinely is limited — say "Limited spaces" plainly, once),
  exit-intent popups, sticky bars that follow the user aggressively.
- Fabricated social proof of any kind.
- Pure black, pure white, Title Case Headlines, ALL-CAPS shouting.
- More than one dark section per page.
- Snappy/springy/bouncy animation.
- Corporate copy ("solutions", "unlock", "empower", "elevate", "transform
  your life today").
