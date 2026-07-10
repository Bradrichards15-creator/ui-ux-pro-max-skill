# Amber Perry — wordsofamber.com

Next.js 15 (App Router) + Tailwind CSS site for Amber Perry, anxiety coach.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Before launch

1. **Real photos** — drop Amber's photos into `public/images/` using the same
   filenames (`amber-hero.jpg`, `amber-about.jpg`, `story-*.jpg`). The current
   files are labelled placeholders.
2. **Stripe** — create three Payment Links in the Stripe dashboard and set
   them in `.env.local` (see `.env.example`). Programme buttons link straight
   to checkout.
3. **Email provider** — wire `app/api/subscribe/route.ts` to
   ConvertKit/MailerLite and attach the "Understanding Your Anxiety" PDF to
   the welcome automation.
4. **Testimonial videos** — host the videos (e.g. Vimeo/Mux) and set
   `videoUrl` per story in `lib/site.ts`.
5. **Legal** — replace the placeholder `/privacy` and `/terms` pages.

Design system lives in `DESIGN.md`. All copy/prices/programmes are in
`lib/site.ts` — edit there, not in components.
