import { ArrowRight, CalendarClock, FileStack, Target } from "lucide-react";

const CARDS = [
  {
    title: "Renewal tracking",
    text: "Contracts that auto-renew are where money quietly leaks, whether the rate's good or not. I'll help you set up a simple way to flag renewal dates before they catch you out.",
    Icon: CalendarClock,
  },
  {
    title: "Process & templates",
    text: "No formal procurement function? I'll help you put a lightweight process in place - supplier onboarding, contract tracking, simple approval steps - so buying decisions aren't ad hoc.",
    Icon: FileStack,
  },
  {
    title: "Sourcing strategy",
    text: "Next time you do go to market, there's a right way to approach it. I'll help you think through category strategy and supplier selection - so you're not just picking the first quote that lands.",
    Icon: Target,
  },
];

/** Housekeeping — "Happy with your suppliers?" section with 3 cards. */
export function Housekeeping() {
  return (
    <section className="bg-background px-6 py-14 md:py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-2xl font-medium md:text-3xl">Happy with your suppliers?</h2>
        <p className="mt-3 max-w-xl text-sm text-foreground/80">
          Spend Help isn&apos;t only about cutting costs - sometimes the numbers are fine, and
          it&apos;s the process around them that&apos;s costing you time. If that&apos;s where
          you&apos;re at, here&apos;s some housekeeping worth doing anyway.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {CARDS.map(({ title, text, Icon }) => (
            <article
              key={title}
              className="rounded-[22px] bg-white p-8 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-green/20 text-foreground">
                <Icon size={18} />
              </span>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-foreground/75">{text}</p>
            </article>
          ))}
        </div>

        <a href="/contact" className="mt-8 inline-flex items-center gap-2 text-sm font-bold">
          Talk about your spend
          <ArrowRight size={14} />
        </a>
      </div>
    </section>
  );
}
