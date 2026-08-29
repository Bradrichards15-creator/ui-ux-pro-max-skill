import { ArrowRight } from "lucide-react";

const CARDS = [
  {
    title: "Tender support",
    text: "Response writing, bid review and mock scoring, and lost-bid feedback - informed by years on the other side of the table.",
    link: "Tender support",
    href: "/tenders",
  },
  {
    title: "Spend help",
    text: "Costs and contracts have a habit of creeping up and getting lost without anyone noticing. I'll help you find the savings, tighten up how you buy and get a proper process in place - you might not need a full-time procurement manager, just someone to send a message to when it matters.",
    link: "Spend help",
    href: "/spend",
  },
];

/**
 * TwoWaysToHelp — homepage "two ways to get more from your procurement"
 * section, styled to match the black "Where I write" section on the
 * Tenders page: dark background, white text, dark cards.
 */
export function TwoWaysToHelp() {
  return (
    <section id="services" className="bg-black px-6 py-14 text-white md:py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-2xl font-medium md:text-3xl">
          Two ways to get more from your procurement
        </h2>
        <p className="mt-3 max-w-xl text-sm text-white/70">
          A good business doesn&apos;t automatically make a good tender response - and supplier
          costs have a habit of creeping up unnoticed. Here&apos;s where I help.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {CARDS.map((card) => (
            <article key={card.title} className="rounded-[22px] bg-[#231F20] p-8">
              <h3 className="text-xl font-medium text-white md:text-2xl">{card.title}</h3>
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
