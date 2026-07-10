# Words of Amber — every piece of website text

For Amber to review and edit. Every heading, paragraph, and button label on
the site is listed below, grouped by page and section, with the exact file
it lives in so I (or Claude) can find and update it fast.

**How to use this:** edit the text directly in this document (keep the
`### Section name — file path` headers exactly as they are, so I know where
each edit goes), then send the edited file back. I'll apply every change
into the actual code and redeploy.

Static config-driven data (prices, FAQ, testimonial captions) lives in
`lib/config.ts` — noted separately at the bottom since it's structured data,
not prose.

---

## HOMEPAGE (`app/page.tsx`)

### Nav — `components/Nav.tsx`
- Logo: `Words of Amber` (word "Amber" in italic)
- Nav links: `The work` · `Coaching` · `Stories` · `Amber` · `Say hello`

### 1. Hero — `components/Hero.tsx`
- Eyebrow: `Anxiety coaching · nervous system regulation`
- Headline: `You were never broken.` / *`Just never taught.`*
- Subcopy: `You've tried the therapy, the apps, the breathing, the books — and still feel like you're managing something that never quite lets go.` / `There's a reason for that. It isn't that something's wrong with you.`
- Button 1: `See how we'd work together`
- Button 2: `Just say hello`
- Trust line: `5 years coaching` · `250+ people helped` · `Lived it, not just studied it`
- Photo badge (shows only until a real video is added): `Welcome video coming soon`
- Photo caption: `Hi, I'm Amber — press play.`
- Baseline line captions: `a system stuck on alert` / `a system that feels safe`

### 2. Meet them — `components/MeetThem.tsx`
- `At some point your world got a little smaller, without you really noticing.`
- `Everything started to revolve around how far you were from home, how your body felt, whether you could cope, whether something bad was coming.`
- *`And anxiety became so normal you stopped questioning it.`*
- `It's not your fault. No one ever taught you how to respond when your body feels overwhelmed. That's the part I'm here to help with.`

### Soft CTA bridge (appears twice) — `components/InlineCTA.tsx`
- `This sound familiar? Here's how we'd work together →`

### 3. The work — `components/Method.tsx`
- Eyebrow: `The work`
- Headline: `Most people spend years fighting the spikes.` *`The spike was never the problem.`*
- Body: `Your nervous system shifts quietly between activation and recovery. With anxiety, it leans towards activation — even when nothing's actually wrong. Over time, that becomes your baseline. We change that, gently, from the inside out.`
- Card 1: **We start in the calm** — `We build the work when your system can actually receive it — not mid-panic.`
- Card 2: **We shift the baseline** — `Instead of chasing symptoms, we change the state your body returns to.`
- Card 3: **You find your freedom** — `You learn to feel activation without reading it as danger.`

### 4. Why the usual advice keeps people stuck (dark section) — `components/WhyStuck.tsx`
- Eyebrow: `Why the usual advice keeps people stuck`
- Headline: `None of it was your fault. You were just never shown another way.`
- Body: `Avoiding, controlling, waiting to feel better before living — each quietly taught your system the fear was real. Regulation isn't a technique for mid-panic. It's the state your body is conditioned to return to. That's what we change.`

### 5. Becky's story (teaser) — `components/BeckyStory.tsx`
- Eyebrow: `A real transformation`
- Headline: `This is Becky.`
- Body: `When Becky started, she felt stuck in a cycle of anxiety and panic, especially anywhere unfamiliar. Eight months on, she takes solo trips, enjoys the theatre, and trusts she can handle whatever comes.`
- Credit: `Shared with Becky's permission.`
- Video placeholder text: `Becky's transformation call — video coming soon`

### 6. Meet Amber (summary) — `components/MeetAmber.tsx`
- Eyebrow: `Meet Amber`
- Headline: `I'm not someone who studied anxiety from the outside.`
- Body: `I lived with chronic anxiety and panic for over ten years. What changed everything was nervous system regulation. Last year I drove over a thousand miles across Europe. I wasn't anxious. I was free.`
- Stats: `5 years coaching` · `250+ people helped`
- Link: `Read Amber's full story →`

### 7. What I'm here for — `components/WhatImHereFor.tsx`
- Eyebrow: `What I'm here for`
- Headline: `Wherever your anxiety shows up, there's a way through it.`
- **Panic** — `The sudden spikes that feel like they come from nowhere — and the fear of the next one.`
- **Health anxiety** — `The constant body-checking, the googling, the certainty that this time something's really wrong.`
- **Overthinking** — `The 3am replays, the rehearsed conversations, the mind that won't stop running scenarios.`
- **Fear of anxiety itself** — `When you're no longer just anxious about life — you're anxious about being anxious.`

### 8. Programmes — `components/Programmes.tsx` (pricing/features in `lib/config.ts`, see below)
- Eyebrow: `Ways to work together`
- Headline: `Three ways in — each built around where you are right now.`
- Subcopy: `Nothing here is an instant purchase — every programme starts with a free discovery call, so we can figure out the right fit together before anything is booked.`
- Toggle labels: `See what's included` / `Hide what's included`
- Button: `Book a discovery call`
- Note (shows only until Calendly link is added): `Calendly link not set up yet`

### 9. What happens after you sign up — `components/AfterSignup.tsx`
- Eyebrow: `What happens next`
- Headline: `What happens after you sign up`
- Step 1: **A personal welcome within 24 hours** — `Not an automated receipt — a real message from Amber, so you know you've landed somewhere human.`
- Step 2: **We book your first session together** — `You pick a time that genuinely works. Showing up is the whole job.`
- Step 3: **You get full app access** — `Tools, frameworks and exercises unlocked from day one, so the work starts before the first call.`

### 10. Not sure where to start (soft CTA) — `components/SoftCTA.tsx`
- Headline: `Not sure where to start?`
- Body: `Book a free call, no pitch attached — or drop me a message on Instagram if that feels easier.`
- Button 1: `Book a free call`
- Button 2: `Message on Instagram`
- Closing line: *`Or, you know… if you're ready, dive in above.`*

### 11. FAQ — content lives in `lib/config.ts` (see below)
- Eyebrow: `Honest answers`
- Headline: `The questions you're probably asking.`

### 12. Say hello (contact flow) — `components/Contact.tsx`
- Headline: `Let's start with a conversation.`
- Subcopy: `No forms that feel like paperwork. Just tell me what's going on, and I'll come back to you personally.`
- **Step 1** — `What's bringing you here?` — options: `Panic that comes out of nowhere` / `Anxiety about my health` / `Overthinking I can't switch off` / `Something else`
- **Step 2** — `How soon are you thinking?` — options: `Ready now` / `Exploring, no rush` / `Just curious`
- **Step 3** — `Anything caught your eye? (optional)` — placeholder text: `A programme, something on the site, anything at all…`
- **Step 4** — `Easiest place to reach you?` — options: `Instagram DM` / `WhatsApp` / `Email`
- Buttons: `Continue` / `← Back` / `Say hello` (submit)
- Success message: `Thank you for saying hello.` / `I read every single message myself. I'll come back to you personally, usually within a day or two.`
- Footer line: `Prefer to write directly? hello@wordsofamber.com`

### 13. Not ready yet (free guide capture) — `components/NotReadyYet.tsx`
- Eyebrow: `Not ready yet? That's completely normal.`
- Headline: `Take the free guide:` *`Understanding Your Anxiety`*
- Body: `A short, honest read on what your anxiety is actually doing and why it isn't your fault — no pitch attached.`
- Email field placeholder: `you@example.com`
- Button: `Send me the guide`
- Success message: `The guide is on its way.` / `Check your inbox in the next few minutes.`
- Divider word: `or`
- Secondary button: `Just follow along on Instagram`

### Footer — `components/Footer.tsx`
- Crisis disclaimer (also see `legal.crisisDisclaimer` in config): `Coaching is a supportive service, not a substitute for medical or psychological treatment. If you're in crisis, please contact your GP or emergency services.`
- "Explore" links: `Coaching` · `Client stories` · `Meet Amber` · (`The app`, once set)
- "Say hello" links: `Instagram @wordsofamber` · `TikTok` · email address
- Bottom bar: `© [year] Amber Perry. All rights reserved.` · `Privacy` · `Terms`

---

## /ABOUT PAGE (`app/about/page.tsx`)

- Eyebrow: `Amber's story`
- Headline: `I'm not someone who studied anxiety from the outside.`
- Subcopy: `I lived it — for over ten years. This is what that actually looked like, and what changed.`
- Paragraph 1: `For over ten years, anxiety and panic ran my life quietly from the background — the constant body-checking, the routes planned around exits, the version of me that showed up smaller than I actually was so nothing could go wrong.`
- Paragraph 2: `What changed everything wasn't willpower, and it wasn't a single breakthrough moment. It was learning what my nervous system was actually doing — and slowly, patiently, teaching it a different baseline.`
- Pull quote: `Last year I drove over a thousand miles across Europe. I wasn't anxious. I was free.`
- Paragraph 3: `That's the work I do now — not from a pedestal, but from having sat exactly where you're sitting.`
- Stats: `5 years coaching` · `250+ people helped`
- Section 2 eyebrow: `Why I coach the way I do`
- Section 2 headline: `The spike was never the problem. The baseline was.`
- Section 2 body: `Every technique I'd tried before treated anxiety as an emergency to manage in the moment. None of it touched the state my body kept returning to in between. Nervous system regulation did. That's the whole foundation of how I work with people now — gently, from the inside out, at a pace that respects where you actually are.`
- Placeholder note (remove once more content is added): `More of Amber's story — and more photos — are on their way here soon.`
- Closing headline: `Ready to talk it through?`
- Closing body: `No pitch, just a conversation — book a free discovery call or see how the programmes work.`
- Buttons: `See how we'd work together` / `Just say hello`

---

## /STORIES PAGE (`app/stories/page.tsx`)

- Eyebrow: `Client stories`
- Headline: `Real transformations, in their own words.`
- Subcopy: `Every person here once believed their anxiety was permanent. Shared with their permission.`
- Becky section — same copy as the homepage teaser, plus:
  - `Every trip was negotiated with her nervous system before it was negotiated with anyone else — could she cope, could she get out if she needed to, was it worth the risk.`
  - `Eight months on, she takes solo trips, enjoys the theatre, and trusts she can handle whatever comes. Not because the anxiety vanished overnight, but because her baseline changed.`
- Grid section eyebrow: `More stories`
- Grid section headline: `From Reels, TikTok and client calls.`
- Closing headline: `Your story could be next.`
- Closing body: `Every person on this page started with one small step.`
- Button: `See how we'd work together`

---

## /PRIVACY PAGE (`app/privacy/page.tsx`) — placeholder, not real copy yet
- Headline: `Privacy policy`
- Body: `This page is a placeholder. A full privacy policy (covering the email list, coaching session notes, WhatsApp messages and any analytics) needs to be added before launch.`

## /TERMS PAGE (`app/terms/page.tsx`) — placeholder, not real copy yet
- Headline: `Terms of service`
- Body: `This page is a placeholder. Coaching terms need to be added before launch — the 6-month minimum commitment stated on each programme, cancellation/refund policy, and the scope of coaching vs therapy.`

---

## STRUCTURED DATA — `lib/config.ts`

This is where prices, programme features, FAQ answers, and testimonial
captions live — same idea as above, just organised as data instead of page
copy. Edit values in quotes; leave the field names (`name:`, `price:`, etc.)
alone.

### Programmes
**Programme 1** — tag `For starting gently` — £147.00/month (£36.75/week) — Minimum 6-month commitment
> *For the person who's ready to start making real changes, at a pace that works around their life*
- **Fortnightly WhatsApp Coaching Sessions** — Every two weeks, we'll connect through voice notes and messaging for a dedicated coaching session built around you — where you're at, what's coming up, what needs to shift. Each session includes a progress review and practical next steps tailored to your life right now.
- **Weekday Support Between Sessions** — Light weekday check-ins for those moments when you need a grounding word or a nudge back on track. Response times are within 24–48 working hours.
- **App Access** — A curated library of tools, practical exercises, emotional regulation frameworks and educational content to support your growth between sessions and beyond.

**Programme 2** (featured, "Most people start here") — £297.00/month (£74.25/week) — Minimum 6-month commitment
> *For the person who's done with half measures and wants consistent, close support to create real change faster*
- **Fortnightly Zoom Coaching Sessions** — A dedicated one-to-one session focused entirely on your progress — working through patterns, beliefs and behaviours that have been keeping you stuck, fully tailored to your goals, challenges and lifestyle.
- **Priority Weekday WhatsApp Support** — Priority access to ongoing support between sessions, whether you're navigating a difficult moment or need accountability. Response times are prioritised within working hours.
- **Full App Access** — Complete access to all tools, frameworks, reflective exercises and educational content within the app.
- **Exclusive Masterclasses & Group Chat** — A private client community and exclusive masterclasses — a space to keep learning, share your progress and feel genuinely supported by people on a similar path.

**Programme 3** ("Limited spaces") — £497.00/month (£124.25/week) — Minimum 6-month commitment
> *For the person who wants the highest level of support and is ready to go all in*
- **Weekly Intensive Zoom Coaching Sessions** — A focused, in-depth session every week, tailored entirely to what you need most — working through mindset blocks, building emotional resilience and cementing long-term change. Sessions evolve with you as your progress shifts.
- **Unlimited Weekday WhatsApp Coaching** — Ongoing access to coaching support throughout the week via voice notes and messaging — real guidance in real time as life unfolds.
- **Highest Level of Accountability & Access** — The closest level of support available: priority responses during working hours, deeper check-ins, and a coaching relationship built on genuine connection.
- **Full App Access, Masterclasses & Private Community** — Complete access to all resources, content and community spaces within the coaching experience.

> ⚠️ Flag for Amber: her PDF's Programme 3 text says "Everything included in **Momentum Elevated**" but nothing else names Programme 2 that. Confirm if that's a real name to use, or a leftover from an earlier draft.

### FAQ
- **Is this therapy?** — No — and that difference matters. Therapy often has you talk through the past. This is nervous system work: we gently retrain the state your body has learned to live in. That's often why it works when other things haven't.
- **What if I've already tried everything?** — Most people who come to me have — therapy, meditation, the apps, the books. None of it was wrong. But most of it works on the moments of panic, not the baseline underneath them. That's where we start, together.
- **How long does it take?** — I won't pretend it's overnight, and I won't pretend it's forever. Every programme runs on a six-month rhythm — enough time for real change to settle in properly.
- **I'm not sure I can commit right now.** — I hear this so often. It will never quite feel like the right time — waiting for the perfect moment is part of the pattern we work to change. If you're unsure, just say hello. No pressure, no pitch.

### Site details
- Contact email: `hello@wordsofamber.com`
- Instagram: `@wordsofamber`
