const ROWS: [string, string][] = [
  [
    "Account manager relays your brief to a writer you'll never speak to",
    "Evaluator's-eye expertise, direct from me - the person who's actually scored bids like yours",
  ],
  [
    'Quote comes after a "discovery call" and a follow-up email',
    "Transparent pricing - no agency mark-up, the fees are the fees",
  ],
  [
    "Recycled sections from someone else's last tender, lightly reworded",
    "No templates - every response written for your business and this tender",
  ],
  [
    "Generic answers from an AI subscription tool, easy for an evaluator to spot",
    "Written by someone who knows exactly what a scored answer needs - not a prompt",
  ],
  [
    "Fees that grow once you're already committed",
    "Honest from the start - no hidden fees, nothing dressed up",
  ],
];

/**
 * ComparisonTable — "A typical agency" vs "Me" two-column comparison,
 * stacked cards on mobile, a bordered table on desktop.
 */
export function ComparisonTable() {
  return (
    <section className="bg-background px-6 py-14 md:py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-2xl font-medium md:text-3xl">What makes it different</h2>
        <p className="mt-3 max-w-xl text-sm text-foreground/80">
          Most bid support comes from an agency. Here&apos;s the actual difference.
        </p>

        <div className="mt-8 overflow-hidden rounded-[22px] bg-white">
          <div className="grid grid-cols-2 gap-px bg-black/10 text-sm font-semibold">
            <div className="bg-white px-5 py-4 md:px-8">A typical agency</div>
            <div className="bg-brand-green px-5 py-4 md:px-8">Me</div>
          </div>
          <div className="divide-y divide-black/10">
            {ROWS.map(([theirs, mine]) => (
              <div key={theirs} className="grid grid-cols-2 gap-px">
                <div className="px-5 py-5 text-sm text-foreground/70 md:px-8">{theirs}</div>
                <div className="bg-brand-green/10 px-5 py-5 text-sm font-medium md:px-8">
                  {mine}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
