export const site = {
  name: "Amber Perry",
  handle: "@wordsofamber",
  tagline: "Anxiety coaching that actually meets you where you are",
  instagram: "https://www.instagram.com/wordsofamber",
  tiktok: "https://www.tiktok.com/@wordsofamber",
  email: "hello@wordsofamber.com",
};

export type Programme = {
  id: string;
  name: string;
  duration: string;
  price: string;
  priceNote: string;
  description: string;
  features: string[];
  featured?: boolean;
  /** Stripe Payment Link — set via env so keys never live in code. */
  checkoutUrl: string;
};

// Stripe Payment Links: create in the Stripe dashboard, then set these in
// .env.local. Buttons link straight to checkout — one click, no middle page.
const stripeLinks = {
  reset: process.env.NEXT_PUBLIC_STRIPE_LINK_RESET ?? "",
  oneToOne: process.env.NEXT_PUBLIC_STRIPE_LINK_ONE_TO_ONE ?? "",
  steady: process.env.NEXT_PUBLIC_STRIPE_LINK_STEADY ?? "",
};

export const programmes: Programme[] = [
  {
    id: "reset",
    name: "The Reset",
    duration: "6 weeks",
    price: "£349",
    priceNote: "one payment, everything included",
    description:
      "A focused six weeks to understand your anxiety and build your first real toolkit — for people who want structure and a clear starting point.",
    features: [
      "6 weekly 1:1 sessions (50 min, video)",
      "Personal anxiety map — what drives yours, specifically",
      "Practical tools matched to your patterns, not generic scripts",
      "Message support between sessions",
      "Full app access from day one",
    ],
    checkoutUrl: stripeLinks.reset,
  },
  {
    id: "one-to-one",
    name: "Deep Work 1:1",
    duration: "12 weeks",
    price: "£649",
    priceNote: "or 3 × £225 monthly",
    description:
      "Twelve weeks of unhurried one-to-one work for anxiety that's been around a long time — we go at your pace, right to the roots.",
    features: [
      "12 weekly 1:1 sessions (50 min, video)",
      "Everything in The Reset",
      "Deeper work on long-held patterns and beliefs",
      "Voice-note support Monday–Friday",
      "A personal plan for the months after we finish",
    ],
    featured: true,
    checkoutUrl: stripeLinks.oneToOne,
  },
  {
    id: "steady",
    name: "Steady",
    duration: "monthly",
    price: "£89/mo",
    priceNote: "cancel anytime",
    description:
      "Ongoing monthly support for alumni and anyone who wants a steady hand — a session a month plus the app to keep momentum.",
    features: [
      "1 × monthly 1:1 session (50 min, video)",
      "Full app access — exercises, audio, check-ins",
      "Priority booking for extra sessions",
      "Monthly group Q&A call",
    ],
    checkoutUrl: stripeLinks.steady,
  },
];

export type Story = {
  id: string;
  name: string;
  headline: string;
  quote: string;
  poster: string;
  /** Video URL (e.g. hosted mp4, YouTube/Vimeo embed). Empty = coming soon. */
  videoUrl: string;
  featured?: boolean;
};

export const stories: Story[] = [
  {
    id: "becky",
    name: "Becky",
    headline: "From cancelling everything to booking the flight",
    quote:
      "I'd cancelled three holidays in two years because the panic always won. Amber never once made me feel silly for that. Six months on, I've been to Lisbon — and the loudest thing on the flight was the drinks trolley.",
    poster: "/images/story-becky.jpg",
    videoUrl: "",
    featured: true,
  },
  {
    id: "sarah",
    name: "Sarah",
    headline: "The 3am overthinking finally quietened down",
    quote:
      "I thought lying awake rehearsing conversations was just who I was. It wasn't.",
    poster: "/images/story-sarah.jpg",
    videoUrl: "",
  },
  {
    id: "james",
    name: "James",
    headline: "Back in meetings without the dread",
    quote:
      "I used to script every sentence before speaking. Now I just... speak.",
    poster: "/images/story-james.jpg",
    videoUrl: "",
  },
  {
    id: "priya",
    name: "Priya",
    headline: "Stopped organising life around 'what if'",
    quote:
      "Amber helped me see avoidance was shrinking my world one small no at a time.",
    poster: "/images/story-priya.jpg",
    videoUrl: "",
  },
  {
    id: "tom",
    name: "Tom",
    headline: "First panic-free presentation in years",
    quote:
      "The tools are simple but they're mine — built around how my anxiety actually works.",
    poster: "/images/story-tom.jpg",
    videoUrl: "",
  },
  {
    id: "leah",
    name: "Leah",
    headline: "Learned to feel it without fighting it",
    quote:
      "Nobody had ever explained my anxiety to me like it made sense before.",
    poster: "/images/story-leah.jpg",
    videoUrl: "",
  },
];
