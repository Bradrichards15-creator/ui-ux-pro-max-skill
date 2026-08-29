type PricingRow = {
  name: string;
  desc: string;
  price: string;
};

/**
 * PricingTable — shared "row: name — desc — price" table used on the
 * Tenders and Spend pages.
 */
export function PricingTable({
  heading,
  subhead,
  rows,
  note,
}: {
  heading: string;
  subhead?: string;
  rows: PricingRow[];
  note?: string;
}) {
  return (
    <section className="bg-background px-6 py-14 md:py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-2xl font-medium md:text-3xl">{heading}</h2>
        {subhead && <p className="mt-3 max-w-xl text-sm text-foreground/80">{subhead}</p>}

        <div className="mt-8 divide-y divide-black/10 overflow-hidden rounded-[22px] bg-white">
          {rows.map((row) => (
            <div
              key={row.name}
              className="flex flex-col gap-2 p-6 md:flex-row md:items-center md:justify-between md:gap-8 md:p-8"
            >
              <div>
                <h3 className="text-base font-semibold">{row.name}</h3>
                <p className="mt-1 max-w-md text-sm text-foreground/70">{row.desc}</p>
              </div>
              <span className="shrink-0 rounded-full bg-brand-green px-5 py-2 text-sm font-semibold">
                {row.price}
              </span>
            </div>
          ))}
        </div>

        {note && <p className="mt-4 text-xs text-muted-foreground">{note}</p>}
      </div>
    </section>
  );
}
