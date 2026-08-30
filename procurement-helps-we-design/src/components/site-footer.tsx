"use client";

import Link from "next/link";

const COLUMNS = [
  {
    heading: "Services",
    links: [
      { label: "Tenders", href: "/tenders" },
      { label: "Spend", href: "/spend" },
    ],
  },
  {
    heading: "Company",
    links: [{ label: "Contact", href: "/contact" }],
  },
  {
    heading: "Get in touch",
    links: [
      { label: "Email", href: "mailto:hello@procurementhelps.co.uk" },
      // TODO: swap for your real public Calendly link once you have it
      // (the one you gave is the internal editor URL, not a public booking page)
      { label: "Book a call", href: "/contact" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/bradprocurementhelps/" },
    ],
  },
];

const BOTTOM_LINKS = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Cookies", href: "/cookies" },
  { label: "WhatsApp", href: "https://wa.me/447958145110" },
  { label: "Instagram", href: "https://www.instagram.com/bradprcurementhelps/" },
  { label: "TikTok", href: "https://www.tiktok.com/@brad.procurementhelps?lang=en" },
  { label: "Facebook", href: "https://www.facebook.com/?locale=en_GB&checkpoint_src=1501092823525282" },
];

/**
 * SiteFooter — black footer with Services / Company / Get in touch columns,
 * a newsletter signup, and a bottom row of legal + social links.
 */
export function SiteFooter() {
  return (
    <footer className="bg-black px-6 py-14 text-white md:py-20">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-10 md:grid-cols-[1.2fr_repeat(3,1fr)]">
          <div>
            <span className="text-lg font-semibold">
              Procurement Helps<span className="text-brand-green">.</span>
            </span>
            <p className="mt-4 max-w-xs text-sm text-white/70">
              Get updates on tenders and procurement by email.
            </p>
            <form
              className="mt-4 flex max-w-xs gap-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                required
                placeholder="Your email"
                className="w-full rounded-full border border-white/20 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/40 outline-none focus:border-brand-green"
              />
              <button
                type="submit"
                className="shrink-0 rounded-full bg-brand-green px-5 py-2.5 text-xs font-medium text-black transition hover:bg-white"
              >
                Sign up
              </button>
            </form>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.heading}>
              <h4 className="text-xs font-semibold tracking-wide text-white/50 uppercase">
                {col.heading}
              </h4>
              <nav className="mt-4 flex flex-col gap-2 text-sm">
                {col.links.map((link) => (
                  <Link key={link.label} href={link.href} className="text-white/85 hover:text-brand-green">
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/60 md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} Procurement Helps. All rights reserved.</p>
          <nav className="flex flex-wrap gap-x-5 gap-y-2">
            {BOTTOM_LINKS.map((link) => (
              <Link key={link.label} href={link.href} className="hover:text-brand-green">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
