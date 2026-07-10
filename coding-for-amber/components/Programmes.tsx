import { Reveal, Section, Label, Btn } from "./motion";
import { programmes } from "@/lib/config";

export default function Programmes() {
  return (
    <Section id="programmes" bg="mist">
      <Label>Ways to work together</Label>
      <Reveal delay={0.02}>
        <h2 className="mt-3 max-w-[640px] text-[clamp(1.9rem,4vw,3rem)] leading-[1.12] text-ink">
          Three ways in — each built around where you are right now.
        </h2>
      </Reveal>

      <div className="mt-11 grid gap-5 lg:grid-cols-3">
        {programmes.map((p, i) => (
          <Reveal key={p.id} delay={i * 0.1}>
            <div
              className={`flex h-full flex-col rounded-[22px] p-8 transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-[0_20px_44px_rgba(32,48,46,0.10)] ${
                p.featured
                  ? "bg-ink text-paper"
                  : "border border-line bg-paper text-ink"
              }`}
            >
              <span className="text-xs font-medium uppercase tracking-[0.08em] text-teal">
                {p.tag}
              </span>
              <h3 className="my-2.5 text-2xl">{p.name}</h3>
              <div className="mb-4 font-display text-[38px] leading-none">
                <span className={p.featured ? "text-teal" : "text-teal-deep"}>
                  {p.price}
                </span>
                <span className="ml-1 text-sm font-body opacity-60">
                  /month
                </span>
              </div>
              <p
                className={`font-display text-[15px] italic leading-[1.6] ${
                  p.featured ? "text-paper/78" : "text-ink-soft"
                }`}
              >
                {p.who}
              </p>

              <ul
                className={`mt-6 flex-1 space-y-4 text-sm leading-relaxed ${
                  p.featured ? "text-paper/85" : "text-ink-soft"
                }`}
              >
                {p.features.map((f) => (
                  <li key={f.title}>
                    <p
                      className={`font-medium ${
                        p.featured ? "text-paper" : "text-ink"
                      }`}
                    >
                      {f.title}
                    </p>
                    <p className="mt-1">{f.body}</p>
                  </li>
                ))}
              </ul>

              <p
                className={`mt-6 text-xs ${
                  p.featured ? "text-paper/70" : "text-ink-soft"
                }`}
              >
                {p.priceWeekly} · {p.commitment}
                {p.limited && (
                  <span className="ml-1 font-medium text-teal">
                    · Limited spaces
                  </span>
                )}
              </p>

              {/* [STRIPE_LINKS] — one click straight to Stripe checkout. */}
              <Btn
                full
                variant={p.featured ? "solid" : "dark"}
                href={p.checkoutUrl || "#programmes"}
                target={p.checkoutUrl ? "_blank" : undefined}
                className="mt-6"
              >
                Choose {p.name}
              </Btn>
              {!p.checkoutUrl && (
                <p className="mt-2 text-center text-xs text-ink-soft/70">
                  Checkout link not set up yet
                </p>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
