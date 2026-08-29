const GUIDES = [
  {
    excerptLabel: "Procurement Act 2023 - s.19",
    excerpt:
      "Contracting authorities must publish a pipeline notice at least 40 days before commencing a competitive tendering procedure...",
    title: "PA23 Readiness",
    text: "What the Procurement Act means for suppliers - and how to prepare for tendering under the new rules.",
    price: "£29",
  },
  {
    excerptLabel: "Evaluator note - Social Value",
    excerpt: '"No measurable outcome stated against this criterion. Scored 2/5."',
    title: "Social Value",
    text: "Losing marks on social value? Read the guide built from what actually scores.",
    price: "£39",
  },
  {
    excerptLabel: "Find a Tender - search result",
    excerpt: "Grounds Maintenance Framework - closes in 14 days - CPV 77310000",
    title: "Finding Work",
    text: "Not sure where to find the right tenders? A practical guide to setting up your process and bidding for the work that actually fits your business.",
    price: "£29",
  },
];

/**
 * GuideCards — three guide cards, each topped with a mocked
 * document-excerpt preview styled as a small monospace note.
 */
export function GuideCards() {
  return (
    <section className="bg-background px-6 pb-14 md:pb-20">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-6 md:grid-cols-3">
          {GUIDES.map((guide) => (
            <article key={guide.title} className="flex flex-col rounded-[22px] bg-white p-6">
              <div className="rounded-xl border border-black/10 bg-[#f7f7f7] p-4">
                <span className="text-[10px] font-semibold tracking-wide text-muted-foreground uppercase">
                  {guide.excerptLabel}
                </span>
                <p className="mt-2 font-mono text-[11px] leading-relaxed text-foreground/70">
                  {guide.excerpt}
                </p>
              </div>

              <h3 className="mt-5 text-lg font-semibold">{guide.title}</h3>
              <p className="mt-2 flex-1 text-sm text-foreground/75">{guide.text}</p>

              <div className="mt-5 flex items-center justify-between">
                <span className="rounded-full bg-brand-green px-4 py-2 text-sm font-semibold">
                  {guide.price}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
