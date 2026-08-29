const FOOTER_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Culture", href: "#" },
  { label: "Blog", href: "#blog" },
  { label: "Testimonials", href: "#work" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms & Conditions", href: "#" },
];

/**
 * SiteFooter — black, centered footer: intro line, "Get in Touch"
 * oversized heading, contact details + CTA, a two-column link list,
 * and a closing logo + registration-details row.
 */
export function SiteFooter() {
  return (
    <footer id="contact" className="bg-black px-6 py-14 text-center text-white md:py-20">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm text-white/80">
          [Studio] is a placeholder digital marketing agency helping brands grow with smart,
          results-focused Branding, Web Design, SEO, PPC, and Video.
        </p>

        <h3 className="mt-10 text-[13vw] leading-[0.9] font-medium tracking-tight md:text-6xl">
          Get in Touch
        </h3>

        <div className="mt-6 space-y-1 text-sm">
          <p>
            <a href="mailto:hello@example.com" className="hover:text-brand-green">
              hello@example.com
            </a>
          </p>
          <p>
            <a href="tel:0000000000" className="hover:text-brand-green">
              00000 000000
            </a>
          </p>
          <p className="text-white/60">1 Placeholder Square, Example City, EX4 3PL</p>
        </div>
        <a href="#contact" className="btn-pill mt-4">
          Contact
        </a>

        <nav className="mt-10 columns-2 gap-4 text-left text-sm">
          {FOOTER_LINKS.map((link) => (
            <a key={link.label} href={link.href} className="block py-1.5 text-white/85 hover:text-brand-green">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-6">
          <span className="text-lg font-semibold">Studio.</span>
          <p className="text-[11px] text-white/50">Reg No. 00000000. Vat No. 000000000.</p>
        </div>
      </div>
    </footer>
  );
}
