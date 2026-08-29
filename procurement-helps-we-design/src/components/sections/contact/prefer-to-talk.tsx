import { ArrowRight } from "lucide-react";

const CHANNELS = [
  { label: "Email", href: "mailto:hello@procurementhelps.co.uk" },
  { label: "WhatsApp", href: "https://wa.me/00000000000" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Instagram", href: "https://instagram.com" },
  { label: "TikTok", href: "https://tiktok.com" },
  { label: "Facebook", href: "https://facebook.com" },
];

/** PreferToTalk — booking box + list of other channels. */
export function PreferToTalk() {
  return (
    <section className="bg-background px-6 pb-14 md:pb-20">
      <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
        <div className="rounded-[22px] bg-black p-8 text-white">
          <span className="text-xs font-semibold tracking-wide text-white/60 uppercase">
            Prefer to talk?
          </span>
          <p className="mt-2 text-sm text-white/80">
            Book a 20-minute conversation and tell me what you&apos;re working on. There&apos;s
            no need to prepare anything beforehand.
          </p>
          {/* TODO: swap /contact for your real booking link (e.g. Calendly) */}
          <a
            href="/contact"
            className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-brand-green"
          >
            Book a 20-minute call
            <ArrowRight size={14} />
          </a>
        </div>

        <div className="rounded-[22px] bg-white p-8">
          <span className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
            Other ways to reach me
          </span>
          <ul className="mt-3 flex flex-col gap-2 text-sm font-medium">
            {CHANNELS.map((ch) => (
              <li key={ch.label}>
                <a href={ch.href} className="hover:underline">
                  {ch.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
