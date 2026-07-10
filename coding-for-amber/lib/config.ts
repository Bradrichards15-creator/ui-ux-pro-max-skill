/**
 * Single source of truth for every plug-in point that isn't decided yet.
 * Per DESIGN.md §9 — search this file for the bracketed tags before launch:
 * [VIMEO_INTRO] [BECKY_VIDEO] [DISCOVERY_CALL_URL] [SOCIAL_LINKS]
 * [APP_LINK] [CONTACT_ROUTE] [TESTIMONIAL_FEED] [LEGAL]
 */

export const site = {
  name: "Amber Perry",
  brand: "Words of Amber",
  handle: "@wordsofamber",
  // [CONTACT_ROUTE] — no CRM yet, "say hello" submissions need a real inbox.
  contactEmail: "hello@wordsofamber.com",
};

// [SOCIAL_LINKS]
export const social = {
  instagram: "https://www.instagram.com/wordsofamber",
  tiktok: "https://www.tiktok.com/@wordsofamber",
  facebook: "",
  whatsapp: "",
};

// [APP_LINK] — Amber's client app (referenced throughout programmes copy).
export const appLink = "";

// [DISCOVERY_CALL_URL] — Amber books everyone onto a discovery call rather
// than taking instant payment; she wants control over who starts and when.
// Used for the "not sure where to start?" CTA and every programme's primary
// button. Same link across all three programmes unless Amber wants separate
// Calendly event types per programme later.
export const discoveryCallUrl = "";

// [VIMEO_INTRO] — Amber's autoplay-muted vertical welcome video for the hero.
export const vimeoIntroUrl = "";

// [BECKY_VIDEO] — Becky's real transformation call video.
export const beckyVideoUrl = "";

// [TESTIMONIAL_FEED] — grid of client videos from Reels/TikTok/Facebook.
export type TestimonialClip = {
  id: string;
  name: string;
  caption: string;
  videoUrl: string;
};
export const testimonialFeed: TestimonialClip[] = [
  { id: "clip-1", name: "Client story", caption: "Shared with permission", videoUrl: "" },
  { id: "clip-2", name: "Client story", caption: "Shared with permission", videoUrl: "" },
  { id: "clip-3", name: "Client story", caption: "Shared with permission", videoUrl: "" },
  { id: "clip-4", name: "Client story", caption: "Shared with permission", videoUrl: "" },
];

// Real pricing and copy, taken verbatim from Amber's "Work With Me" PDF.
// NOTE for Amber: the Programme 3 copy in your PDF says "Everything included
// in Momentum Elevated" but nothing else names Programme 2 "Momentum
// Elevated" — likely a leftover from an earlier draft. Flagging rather than
// guessing; happy to rename once you confirm.
export type Programme = {
  id: string;
  name: string;
  tag: string;
  who: string;
  price: string;
  priceWeekly: string;
  commitment: string;
  featured?: boolean;
  limited?: boolean;
  features: { title: string; body: string }[];
};

export const programmes: Programme[] = [
  {
    id: "programme-1",
    name: "Programme 1",
    tag: "For starting gently",
    who: "For the person who's ready to start making real changes, at a pace that works around their life",
    price: "£147.00",
    priceWeekly: "£36.75 per week",
    commitment: "Minimum 6-month commitment",
    features: [
      {
        title: "Fortnightly WhatsApp Coaching Sessions",
        body: "Every two weeks, we'll connect through voice notes and messaging for a dedicated coaching session built around you — where you're at, what's coming up, what needs to shift. Each session includes a progress review and practical next steps tailored to your life right now.",
      },
      {
        title: "Weekday Support Between Sessions",
        body: "Light weekday check-ins for those moments when you need a grounding word or a nudge back on track. Response times are within 24–48 working hours.",
      },
      {
        title: "App Access",
        body: "A curated library of tools, practical exercises, emotional regulation frameworks and educational content to support your growth between sessions and beyond.",
      },
    ],
  },
  {
    id: "programme-2",
    name: "Programme 2",
    tag: "Most people start here",
    who: "For the person who's done with half measures and wants consistent, close support to create real change faster",
    price: "£297.00",
    priceWeekly: "£74.25 per week",
    commitment: "Minimum 6-month commitment",
    featured: true,
    features: [
      {
        title: "Fortnightly Zoom Coaching Sessions",
        body: "A dedicated one-to-one session focused entirely on your progress — working through patterns, beliefs and behaviours that have been keeping you stuck, fully tailored to your goals, challenges and lifestyle.",
      },
      {
        title: "Priority Weekday WhatsApp Support",
        body: "Priority access to ongoing support between sessions, whether you're navigating a difficult moment or need accountability. Response times are prioritised within working hours.",
      },
      {
        title: "Full App Access",
        body: "Complete access to all tools, frameworks, reflective exercises and educational content within the app.",
      },
      {
        title: "Exclusive Masterclasses & Group Chat",
        body: "A private client community and exclusive masterclasses — a space to keep learning, share your progress and feel genuinely supported by people on a similar path.",
      },
    ],
  },
  {
    id: "programme-3",
    name: "Programme 3",
    tag: "Limited spaces",
    who: "For the person who wants the highest level of support and is ready to go all in",
    price: "£497.00",
    priceWeekly: "£124.25 per week",
    commitment: "Minimum 6-month commitment",
    limited: true,
    features: [
      {
        title: "Weekly Intensive Zoom Coaching Sessions",
        body: "A focused, in-depth session every week, tailored entirely to what you need most — working through mindset blocks, building emotional resilience and cementing long-term change. Sessions evolve with you as your progress shifts.",
      },
      {
        title: "Unlimited Weekday WhatsApp Coaching",
        body: "Ongoing access to coaching support throughout the week via voice notes and messaging — real guidance in real time as life unfolds.",
      },
      {
        title: "Highest Level of Accountability & Access",
        body: "The closest level of support available: priority responses during working hours, deeper check-ins, and a coaching relationship built on genuine connection.",
      },
      {
        title: "Full App Access, Masterclasses & Private Community",
        body: "Complete access to all resources, content and community spaces within the coaching experience.",
      },
    ],
  },
];

export const faqs: { q: string; a: string }[] = [
  {
    q: "Is this therapy?",
    a: "No — and that difference matters. Therapy often has you talk through the past. This is nervous system work: we gently retrain the state your body has learned to live in. That's often why it works when other things haven't.",
  },
  {
    q: "What if I've already tried everything?",
    a: "Most people who come to me have — therapy, meditation, the apps, the books. None of it was wrong. But most of it works on the moments of panic, not the baseline underneath them. That's where we start, together.",
  },
  {
    q: "How long does it take?",
    a: "I won't pretend it's overnight, and I won't pretend it's forever. Every programme runs on a six-month rhythm — enough time for real change to settle in properly.",
  },
  {
    q: "I'm not sure I can commit right now.",
    a: "I hear this so often. It will never quite feel like the right time — waiting for the perfect moment is part of the pattern we work to change. If you're unsure, just say hello. No pressure, no pitch.",
  },
];

// [LEGAL] — required before taking payments.
export const legal = {
  privacyReady: false,
  termsReady: false,
  crisisDisclaimer:
    "Coaching is a supportive service, not a substitute for medical or psychological treatment. If you're in crisis, please contact your GP or emergency services.",
};
