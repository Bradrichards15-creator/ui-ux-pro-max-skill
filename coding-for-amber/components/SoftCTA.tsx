import Link from "next/link";
import Reveal from "./Reveal";

/**
 * Gentle mid-page bridge to the programmes section — used after the
 * "meet them" and "why the usual advice keeps people stuck" sections.
 */
export default function SoftCTA() {
  return (
    <div className="mx-auto max-w-content px-5 md:px-8">
      <Reveal>
        <div className="flex justify-center py-10 md:py-14">
          <Link
            href="/#programmes"
            className="group inline-flex items-center gap-3 rounded-full border border-amber-200 bg-amber-50 px-6 py-3.5 text-amber-700 transition-all duration-200 hover:border-amber-300 hover:bg-amber-100"
          >
            <span className="font-medium">
              This sound familiar? Here&apos;s how we&apos;d work together
            </span>
            <span
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>
      </Reveal>
    </div>
  );
}
