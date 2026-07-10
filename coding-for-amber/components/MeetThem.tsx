import Reveal from "./Reveal";

const personas = [
  {
    title: "The 3am overthinker",
    body: "You replay conversations from years ago, rehearse ones that haven't happened, and your brain saves its loudest questions for the middle of the night.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-6 w-6">
        <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
      </svg>
    ),
  },
  {
    title: "The high-functioning worrier",
    body: "From the outside you're doing brilliantly. Inside, you're braced for the moment it all falls apart — and success never quite feels safe.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-6 w-6">
        <path d="M12 3l7 4v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7l7-4Z" />
        <path d="M12 8v4M12 15.5h.01" />
      </svg>
    ),
  },
  {
    title: "The quiet avoider",
    body: "You've become an expert at the graceful no. Parties, motorways, phone calls — the world gets a little smaller each time, and you've noticed.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-6 w-6">
        <circle cx="12" cy="12" r="9" />
        <path d="M8 12h8" />
      </svg>
    ),
  },
];

export default function MeetThem() {
  return (
    <section id="meet-them" className="scroll-mt-20 bg-cream-200/50">
      <div className="mx-auto max-w-content px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-500">
            Is this you?
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Meet the people I work with every week
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-soft">
            Different lives, same exhausting pattern. If you recognise
            yourself in any of these, you&apos;re exactly who this work is
            for.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {personas.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <div className="h-full rounded-3xl border border-cream-300/70 bg-cream-50 p-8 transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sage-50 text-sage-600">
                  {p.icon}
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-ink">
                  {p.title}
                </h3>
                <p className="mt-3 leading-relaxed text-ink-soft">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
