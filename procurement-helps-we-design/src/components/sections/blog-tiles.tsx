"use client";

import { useRef } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { PlaceholderImage } from "@/components/placeholder-media";

const POSTS = [
  { title: "Placeholder article headline number one goes here", date: "Month . Year", tags: ["Category"] },
  { title: "Placeholder article headline number two, a little longer than the first", date: "Month . Year", tags: ["Category", "Category"] },
  { title: "Placeholder article headline number three", date: "Month . Year", tags: ["Category"] },
  { title: "Placeholder article headline number four", date: "Month . Year", tags: ["Category", "Category"] },
];

/**
 * BlogTiles — "What's happening?" black section with a horizontally
 * scrollable row of blog/news tiles (source uses a tiny-slider carousel;
 * reproduced here as a native scroll-snap row with prev/next buttons).
 */
export function BlogTiles() {
  const trackRef = useRef<HTMLDivElement>(null);

  function scrollBy(delta: number) {
    trackRef.current?.scrollBy({ left: delta, behavior: "smooth" });
  }

  return (
    <section id="blog" className="bg-black px-6 py-14 text-white md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl font-medium">What&apos;s happening?</h2>
          <div className="hidden items-center gap-2 md:flex">
            <button
              type="button"
              aria-label="Previous"
              onClick={() => scrollBy(-360)}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-green text-black transition hover:scale-110"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              type="button"
              aria-label="Next"
              onClick={() => scrollBy(360)}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-green text-black transition hover:scale-110"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
        <a href="#blog" className="mt-2 inline-flex items-center gap-2 text-sm font-bold text-brand-green">
          View all articles
          <ArrowRight size={14} />
        </a>

        <div
          ref={trackRef}
          className="mt-8 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {POSTS.map((post) => (
            <article
              key={post.title}
              className="relative flex min-h-[320px] w-[280px] shrink-0 snap-start flex-col justify-end gap-4 overflow-hidden rounded-[22px] bg-[#231F20] p-6"
            >
              <div className="absolute inset-0">
                <PlaceholderImage
                  label="Article image (3:2)"
                  aspect="3 / 2"
                  tone="dark"
                  className="h-full w-full rounded-none border-0 opacity-40"
                />
              </div>
              <span className="relative text-xs font-medium opacity-80">{post.date}</span>
              <h4 className="relative text-base font-medium">{post.title}</h4>
              <a href="#blog" className="relative inline-flex items-center gap-2 text-xs font-medium">
                Read article
                <ArrowRight size={14} />
              </a>
              <div className="relative flex flex-wrap gap-1.5">
                {post.tags.map((tag, idx) => (
                  <span
                    key={`${post.title}-${tag}-${idx}`}
                    className="rounded-full border border-white/60 px-3 py-1 text-[8px] font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
