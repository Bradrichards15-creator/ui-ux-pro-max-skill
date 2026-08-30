import { ArrowRight } from "lucide-react";

const CHANNELS = [
  { label: "Email", href: "mailto:brad@procurementhelps.co.uk" },
  { label: "WhatsApp", href: "https://wa.me/447958145110" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/bradprocurementhelps/" },
  { label: "Instagram", href: "https://www.instagram.com/bradprcurementhelps/" },
  { label: "TikTok", href: "https://www.tiktok.com/@brad.procurementhelps?lang=en" },
  { label: "Facebook", href: "https://www.facebook.com/?locale=en_GB&checkpoint_src=1501092823525282" },
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
          <a
            href="https://calendly.com/brad-procurementhelps"
            target="_blank"
            rel="noreferrer"
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
