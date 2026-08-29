/**
 * AboutStrip — right-aligned statement paragraph with a bulleted dot
 * marker and a black pill CTA, mirroring `.text-reveal-section`.
 */
export function AboutStrip() {
  return (
    <section id="about" className="bg-background px-6 py-10 md:py-16">
      <div className="mx-auto max-w-3xl">
        <div className="relative pr-6 text-right">
          <span
            aria-hidden
            className="absolute top-1.5 -right-0.5 h-3.5 w-3.5 rounded-full bg-black"
          />
          <p className="text-xl leading-snug font-medium md:text-2xl">
            Our team is made up of{" "}
            <strong className="font-medium">bold creatives</strong>,{" "}
            <strong className="font-medium">sharp strategists</strong>, and{" "}
            <strong className="font-medium">technical pros</strong> who care about the work.
            [Placeholder mission statement — replace with your own positioning copy of roughly
            this length.]
          </p>
          <a
            href="#about"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-black px-8 py-4 text-xs font-medium text-brand-green transition hover:bg-brand-green hover:text-black"
          >
            About Us
          </a>
        </div>
      </div>
    </section>
  );
}
