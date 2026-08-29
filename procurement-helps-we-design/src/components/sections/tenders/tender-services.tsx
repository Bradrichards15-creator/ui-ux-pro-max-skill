const ITEMS = [
  {
    title: "Response writing",
    text: "Answers that give the panel what they're actually looking for - and take the burden off you.",
  },
  {
    title: "Bid review & mock scoring",
    text: "Scored the way a real panel would - quick, low-cost, and it might be the edge you need.",
  },
  {
    title: "Lost-bid feedback session",
    text: "More to work with than a traditional feedback letter ever gives you.",
  },
];

/** TenderServices — 3-up row of the core tender-support services. */
export function TenderServices() {
  return (
    <section className="bg-background px-6 py-14 md:py-20">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-6 md:grid-cols-3">
          {ITEMS.map((item) => (
            <article key={item.title} className="rounded-[22px] bg-white p-8">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-foreground/75">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
