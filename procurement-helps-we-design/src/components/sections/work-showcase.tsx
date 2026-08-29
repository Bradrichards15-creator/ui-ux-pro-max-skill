"use client";

import { useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { PlaceholderImage } from "@/components/placeholder-media";

type WorkItem = {
  title: string;
  excerpt: string;
  tags: string[];
};

const WORK_ITEMS: WorkItem[] = [
  {
    title: "Client One",
    excerpt: "Placeholder one-line summary of the project outcome and scope, similar length to the original.",
    tags: ["Branding", "Web Design", "SEO", "PPC", "Video"],
  },
  {
    title: "Client Two",
    excerpt: "Placeholder summary describing the engagement and the results delivered for this client.",
    tags: ["Web Design", "SEO", "PPC"],
  },
  {
    title: "Client Three",
    excerpt: "Placeholder summary describing the engagement and the results delivered for this client.",
    tags: ["Branding", "Web Design", "SEO", "PPC"],
  },
  {
    title: "Client Four",
    excerpt: "Placeholder summary describing the engagement and the results delivered for this client.",
    tags: ["Branding", "Web Design", "SEO", "PPC", "Video"],
  },
];

const TESTIMONIALS = [
  { quote: "Absolutely fantastic team to work with!", name: "Person One", org: "Company A" },
  { quote: "A superb, competent, and fast creative partner.", name: "Person Two", org: "Company B" },
  { quote: "Excellent quality, and communication was clear and professional throughout.", name: "Person Three", org: "Company C" },
];

function WorkTile({ item }: { item: WorkItem }) {
  return (
    <article className="group relative flex min-h-[300px] flex-col justify-end gap-6 overflow-hidden rounded-[22px] bg-[#231F20] p-6 text-white">
      <div className="absolute inset-0">
        <PlaceholderImage
          label="Project image (4:3)"
          aspect="4 / 3"
          tone="dark"
          className="h-full w-full rounded-none border-0 opacity-40"
        />
      </div>
      <div className="relative flex flex-1 flex-col justify-end gap-2">
        <h4 className="text-lg font-medium">{item.title}</h4>
        <a href="#work" className="inline-flex items-center gap-2 text-xs font-medium">
          View work
          <ArrowRight size={14} className="transition group-hover:translate-x-1.5" />
        </a>
        <p className="mt-1 max-h-0 overflow-hidden text-sm opacity-0 transition-all duration-500 group-hover:max-h-24 group-hover:opacity-100">
          {item.excerpt}
        </p>
      </div>
      <div className="relative flex flex-wrap gap-1.5">
        {item.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/60 px-3 py-1 text-[8px] font-medium"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}

function TestimonialSlider() {
  const [i, setI] = useState(0);
  const t = TESTIMONIALS[i];
  return (
    <div>
      <blockquote className="text-lg leading-snug font-medium text-white">
        “{t.quote}”
      </blockquote>
      <p className="mt-2 text-sm text-white/70">
        {t.name}: <strong className="font-semibold text-white">{t.org}</strong>
      </p>
      <div className="mt-6 flex items-center gap-4">
        <button
          type="button"
          aria-label="Previous testimonial"
          onClick={() => setI((v) => (v - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-green text-black transition hover:scale-110"
        >
          <ChevronLeft size={16} />
        </button>
        <span className="text-sm text-white/60">
          {i + 1} / {TESTIMONIALS.length}
        </span>
        <button
          type="button"
          aria-label="Next testimonial"
          onClick={() => setI((v) => (v + 1) % TESTIMONIALS.length)}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-green text-black transition hover:scale-110"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}

/**
 * WorkShowcase — black "work-black-section": intro column + testimonial
 * slider on the left, a 2x2 bento grid of hover-reveal work tiles on the
 * right (marino's `.work-tile` hover reveals excerpt + darkens via a
 * gradient overlay; simplified here to an opacity/height reveal).
 */
export function WorkShowcase() {
  return (
    <section id="work" className="bg-[#000] px-6 py-14 text-white md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="flex flex-col gap-10">
            <div>
              <h2 className="text-2xl font-medium">Our latest work</h2>
              <p className="mt-3 max-w-sm text-sm text-white/70">
                [Placeholder] A short line describing the studio and the kind of clients it
                serves, matching the original&apos;s length.
              </p>
              <a
                href="#work"
                className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-brand-green"
              >
                View all work
                <ArrowRight size={14} />
              </a>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <WorkTile item={WORK_ITEMS[0]} />
              <WorkTile item={WORK_ITEMS[1]} />
            </div>
            <TestimonialSlider />
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <WorkTile item={WORK_ITEMS[2]} />
            <WorkTile item={WORK_ITEMS[3]} />
          </div>
        </div>
      </div>
    </section>
  );
}
