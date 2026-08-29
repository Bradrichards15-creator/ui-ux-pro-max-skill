import { ArrowRight } from "lucide-react";

const CARDS = [
  {
    title: "Practical guides",
    text: "One-off workbooks for businesses bidding for tender work - buy once, keep for every future bid.",
    link: "Browse the guides",
    href: "/guides",
  },
  {
    title: "The blog",
    text: "Shorter, regular posts on what's changing in procurement and tendering, and what it means for you.",
    link: "Read the blog",
    href: "/blog",
  },
];

/**
 * GuidesBlog — homepage "guides & blog" section, black cards matching the
 * dark-section rhythm used elsewhere on the source site.
 */
export function GuidesBlog() {
  return (
    <section id="guides-blog" className="bg-black px-6 py-14 text-white md:py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-2xl font-medium md:text-3xl">Procurement and tender advice</h2>
        <p className="mt-3 max-w-xl text-sm text-white/70">
          Free reading for whenever you need it - practical guides to keep, and shorter posts on
          what&apos;s changing.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {CARDS.map((card) => (
            <article key={card.title} className="rounded-[22px] bg-[#231F20] p-8">
              <h3 className="text-xl font-medium md:text-2xl">{card.title}</h3>
              <p className="mt-3 text-sm text-white/70">{card.text}</p>
              <a
                href={card.href}
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand-green"
              >
                {card.link}
                <ArrowRight size={14} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
