# Words of Amber — wordsofamber.com

Next.js 16 (App Router) + Tailwind CSS v4 + Framer Motion site for Amber
Perry, anxiety coach. Built to match `DESIGN.md` and `reference/AmberHomepage.jsx`.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Before launch

Search the codebase for these bracketed tags (all centralised in
`lib/config.ts`) — each marks a real plug-in point that isn't wired up yet:

1. **`[STRIPE_LINKS]`** — create three Payment Links in the Stripe dashboard
   (Products → Payment links) and set `NEXT_PUBLIC_STRIPE_LINK_PROGRAMME_1/2/3`
   in `.env.local` (see `.env.example`). Programme buttons already link
   straight to checkout, one click, no intermediate page.
2. **`[VIMEO_INTRO]`** — Amber's autoplay-muted welcome video for the hero.
   Currently a labelled placeholder over her real photo.
3. **`[BECKY_VIDEO]`** — Becky's real transformation call, referenced on the
   homepage and `/stories`.
4. **`[TESTIMONIAL_FEED]`** — grid of client videos from Reels/TikTok/Facebook
   on `/stories`. Currently 4 placeholder tiles.
5. **`[CALENDLY_URL]`** — the free "not sure where to start?" call.
6. **`[CONTACT_ROUTE]`** — the "Say hello" flow posts to `/api/contact`,
   which currently only logs to the server console. Needs a real inbox (e.g.
   forward to email via Resend, or a Zapier/Make hook into WhatsApp/Instagram).
7. **Email provider** — `/api/subscribe` (the free-guide capture) also just
   logs for now. Wire it to a real provider (ConvertKit/MailerLite) and
   attach the "Understanding Your Anxiety" guide to its welcome automation —
   the guide itself still needs writing.
8. **`[APP_LINK]`** — Amber's client app, referenced in programme copy and
   the footer once set.
9. **`[SOCIAL_LINKS]`** — Instagram and TikTok are set; Facebook and
   WhatsApp are empty in `lib/config.ts`.
10. **`[LEGAL]`** — `/privacy` and `/terms` are placeholders. Required before
    taking payments.

One more thing worth Amber's eyes: her PDF's Programme 3 copy says
"Everything included in **Momentum Elevated**", but nothing else names
Programme 2 that — likely a leftover from an earlier draft. Programme
headers are currently "Programme 1/2/3" as printed; flag for her to confirm
before renaming anything.

## Where things live

- `DESIGN.md` — the design system. Read this before changing anything visual.
- `lib/config.ts` — every plug-in point, real programme pricing/copy (taken
  verbatim from Amber's "Work With Me" PDF), FAQ content.
- `components/` — one file per homepage section, in the order used by
  `app/page.tsx`.
- `reference/` — the original brief materials (DESIGN.md, AmberHomepage.jsx,
  the PDF, Amber's 7 source photos). Kept for provenance; not part of the
  build. Two of the photos (`Amber 3.jpg`, `Amber 6.jpg`) were copied into
  `public/images/` as `amber-hero.jpg` / `amber-about.jpg`.
