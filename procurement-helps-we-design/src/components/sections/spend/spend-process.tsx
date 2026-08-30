import { Search, Handshake, TrendingDown } from "lucide-react";

const STEPS = [
  {
    n: "01",
    title: "Review",
    text: "I go through what you're actually paying, supplier by supplier, and benchmark it against the market.",
    Icon: Search,
  },
  {
    n: "02",
    title: "Negotiate",
    text: "Where there's room to move, I go back to the supplier and negotiate it - before renewal deadlines catch you out.",
    Icon: Handshake,
  },
  {
    n: "03",
    title: "Save",
    text: "You keep the same supplier relationship, just on better terms - with a clear number showing what changed.",
    Icon: TrendingDown,
  },
];

/**
 * SpendProcess — three-step review/negotiate/save strip. Replaces the
 * photo this page doesn't have with a code-drawn visual instead.
 */
export function SpendProcess() {
  return (
    <section className="bg-background px-6 py-14 md:py-20">
      <div className="mx-auto max-w-5xl">
        <div className="relative grid gap-10 md:grid-cols-3 md:gap-6">
          <div
            aria-hidden
            className="absolute top-[27px] right-0 left-0 hidden h-px md:block"
            style={{
              background:
                "repeating-linear-gradient(to right, rgba(0,0,0,.15) 0, rgba(0,0,0,.15) 6px, transparent 6px, transparent 14px)",
            }}
          />
          {STEPS.map(({ n, title, text, Icon }) => (
            <div key={n} className="relative">
              <div className="flex items-center gap-3">
                <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-black/5">
                  <Icon size={22} />
                </span>
                <span className="text-xs font-semibold tracking-wide text-muted-foreground">
                  {n}
                </span>
              </div>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-foreground/75">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
