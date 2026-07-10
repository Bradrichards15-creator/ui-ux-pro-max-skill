import { Reveal } from "./motion";

/**
 * Gentle mid-page bridge to the programmes section — placed after "Meet
 * them" and after "Why the usual advice keeps people stuck", per request.
 * Distinct from the DESIGN.md §8 SoftCTA (the Calendly/DM one near the end).
 */
export default function InlineCTA({ bg = "paper" }: { bg?: "paper" | "mist" }) {
  return (
    <div className={bg === "mist" ? "bg-mist" : "bg-paper"}>
      <div className="mx-auto flex max-w-[1120px] justify-center px-[6vw] py-10 md:py-12">
        <Reveal>
          <a
            href="#programmes"
            className="nav-link group inline-flex items-center gap-2.5 rounded-full border border-teal/40 bg-mist px-6 py-3 text-[15px] font-medium text-teal-ink transition-colors duration-[350ms] hover:border-teal/70"
          >
            This sound familiar? Here&apos;s how we&apos;d work together
            <span
              aria-hidden="true"
              className="transition-transform duration-[350ms] group-hover:translate-x-1"
            >
              →
            </span>
          </a>
        </Reveal>
      </div>
    </div>
  );
}
