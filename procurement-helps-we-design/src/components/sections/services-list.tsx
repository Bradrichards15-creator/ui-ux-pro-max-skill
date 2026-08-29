import { ArrowRight } from "lucide-react";
import { PlaceholderImage } from "@/components/placeholder-media";

const SERVICES = [
  {
    title: "Service One",
    summary: "Short placeholder summary describing what this service delivers for clients.",
    detail: "Sub-service • Sub-service • Sub-service • Sub-service",
  },
  {
    title: "Service Two",
    summary: "Short placeholder summary describing what this service delivers for clients.",
    detail: "Sub-service • Sub-service • Sub-service • Sub-service",
  },
  {
    title: "Service Three",
    summary: "Short placeholder summary describing what this service delivers for clients.",
    detail: "Sub-service • Sub-service • Sub-service • Sub-service • Sub-service",
  },
  {
    title: "Service Four",
    summary: "Short placeholder summary describing what this service delivers for clients.",
    detail: "Sub-service • Sub-service • Sub-service • Sub-service",
  },
  {
    title: "Service Five",
    summary: "Short placeholder summary describing what this service delivers for clients.",
    detail: "Sub-service • Sub-service • Sub-service • Sub-service",
  },
];

/**
 * ServicesList — "Our Services" header badge + a stacked list of rows,
 * each with a 100x[full] thumbnail (250px wide on desktop, absolutely
 * positioned per `.row-left-image`), title, two-line copy stack, and a
 * right-aligned "More Info" text-link with an arrow underline.
 */
export function ServicesList() {
  return (
    <section id="services" className="bg-background px-6 py-14 md:py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 inline-flex items-center rounded-full bg-white px-5 py-2.5 text-sm font-medium">
          Our Services
        </div>

        <div className="divide-y divide-black/15">
          {SERVICES.map((service) => (
            <article
              key={service.title}
              className="grid grid-cols-1 gap-4 py-8 first:pt-0 last:pb-0 md:grid-cols-[220px_1fr_auto] md:items-center md:gap-8"
            >
              <div className="hidden md:block">
                <PlaceholderImage label="Service image (16:9)" aspect="16 / 9" className="h-[100px]" />
              </div>

              <div>
                <h3 className="text-2xl font-bold md:text-3xl">{service.title}</h3>
                <p className="mt-2 max-w-md text-sm text-foreground/80">{service.summary}</p>
                <p className="mt-2 max-w-md text-xs text-muted-foreground">{service.detail}</p>
              </div>

              <a
                href="#contact"
                className="group inline-flex items-center gap-3 text-sm font-bold md:justify-self-end"
              >
                <span>More Info</span>
                <ArrowRight size={18} className="transition group-hover:translate-x-1.5" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
