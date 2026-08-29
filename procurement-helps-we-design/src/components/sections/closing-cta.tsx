import { ArrowRight } from "lucide-react";
import { MagneticButton } from "@/components/magnetic-button";

/**
 * ClosingCta — centered closing heading + pill CTA, reused at the bottom
 * of the homepage and adaptable per-page (pass heading/label/href).
 */
export function ClosingCta({
  heading = "Get in touch if you need any of the above",
  label = "Get in touch",
  href = "/contact",
}: {
  heading?: string;
  label?: string;
  href?: string;
}) {
  return (
    <section className="bg-background px-6 py-14 md:py-20">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
        <h2 className="text-2xl font-medium md:text-3xl">{heading}</h2>
        <MagneticButton href={href} className="btn-pill gap-2">
          {label}
          <ArrowRight size={16} />
        </MagneticButton>
      </div>
    </section>
  );
}
