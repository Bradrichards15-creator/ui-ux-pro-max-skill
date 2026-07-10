import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-cream-200 bg-cream-200/60">
      <div className="mx-auto max-w-content px-5 py-14 md:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="font-display text-xl font-semibold text-ink">
              Amber Perry
            </p>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
              Anxiety coaching that meets you where you are. Coaching is not a
              substitute for therapy or medical care — if you&apos;re in
              crisis, please contact your GP or call Samaritans on 116 123.
            </p>
          </div>

          <div className="flex gap-16">
            <div>
              <p className="text-sm font-semibold text-ink">Explore</p>
              <ul className="mt-3 space-y-2 text-sm text-ink-soft">
                <li>
                  <Link href="/#programmes" className="hover:text-ink">
                    Programmes
                  </Link>
                </li>
                <li>
                  <Link href="/stories" className="hover:text-ink">
                    Stories
                  </Link>
                </li>
                <li>
                  <Link href="/#about" className="hover:text-ink">
                    Meet Amber
                  </Link>
                </li>
                <li>
                  <Link href="/#free-guide" className="hover:text-ink">
                    Free guide
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold text-ink">Say hello</p>
              <ul className="mt-3 space-y-2 text-sm text-ink-soft">
                <li>
                  <a
                    href={site.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-ink"
                  >
                    Instagram {site.handle}
                  </a>
                </li>
                <li>
                  <a
                    href={site.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-ink"
                  >
                    TikTok
                  </a>
                </li>
                <li>
                  <a href={`mailto:${site.email}`} className="hover:text-ink">
                    {site.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-cream-300/60 pt-6 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Amber Perry. All rights reserved.</p>
          <div className="flex gap-5">
            {/* TODO: legal pages need real content before launch */}
            <Link href="/privacy" className="hover:text-ink">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-ink">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
