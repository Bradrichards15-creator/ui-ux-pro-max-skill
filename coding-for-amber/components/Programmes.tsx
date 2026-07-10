import Reveal from "./Reveal";
import { programmes } from "@/lib/site";

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-sage-500">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export default function Programmes() {
  return (
    <section id="programmes" className="scroll-mt-20 bg-cream-200/50">
      <div className="mx-auto max-w-content px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-amber-500">
              Work with me
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Three ways in — pick the pace that feels doable
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">
              Every programme is 1:1, built around your specific anxiety, and
              starts the same way: a personal welcome from me within 24 hours.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {programmes.map((p, i) => (
            <Reveal key={p.id} delay={i * 100} className="h-full">
              <div
                className={`relative flex h-full flex-col rounded-3xl border p-8 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg ${
                  p.featured
                    ? "border-amber-300 bg-cream-50 shadow-md"
                    : "border-cream-300/70 bg-cream-50"
                }`}
              >
                {p.featured && (
                  <span className="absolute -top-3.5 left-8 rounded-full bg-amber-500 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                    Most chosen
                  </span>
                )}

                <div className="flex items-baseline justify-between">
                  <h3 className="font-display text-2xl font-semibold text-ink">
                    {p.name}
                  </h3>
                  <span className="rounded-full bg-sage-50 px-3 py-1 text-xs font-medium text-sage-600">
                    {p.duration}
                  </span>
                </div>

                <p className="mt-4 leading-relaxed text-ink-soft">
                  {p.description}
                </p>

                <div className="mt-6">
                  <span className="font-display text-4xl font-semibold text-ink">
                    {p.price}
                  </span>
                  <span className="ml-2 text-sm text-ink-muted">
                    {p.priceNote}
                  </span>
                </div>

                <ul className="mt-6 flex-1 space-y-3 text-sm text-ink-soft">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <CheckIcon />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Direct Stripe Payment Link — one click to checkout. */}
                <a
                  href={p.checkoutUrl || "#programmes"}
                  {...(p.checkoutUrl
                    ? {}
                    : {
                        "aria-disabled": true,
                        title:
                          "Checkout link not configured yet — set NEXT_PUBLIC_STRIPE_LINK_* in .env.local",
                      })}
                  className={`mt-8 block rounded-full py-3.5 text-center font-medium transition-all duration-200 ${
                    p.featured
                      ? "bg-amber-500 text-white hover:-translate-y-0.5 hover:bg-amber-600 hover:shadow-md"
                      : "border border-ink/15 text-ink hover:border-ink/30 hover:bg-cream-100"
                  }`}
                >
                  Start {p.name}
                </a>
                <p className="mt-3 text-center text-xs text-ink-muted">
                  Secure checkout via Stripe · Apple Pay &amp; Google Pay
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-10 text-center text-sm text-ink-soft">
            Not sure which fits? Message me on{" "}
            <a
              href="https://www.instagram.com/wordsofamber"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-amber-600 underline-offset-4 hover:underline"
            >
              Instagram
            </a>{" "}
            and I&apos;ll tell you honestly — even if the answer is
            &ldquo;none of them yet&rdquo;.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
