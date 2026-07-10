import Link from "next/link";
import { site, social, appLink, legal } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-cream">
      <div className="mx-auto max-w-[1120px] px-[6vw] py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="font-display text-xl text-ink">
              Words of <span className="italic text-teal-deep">Amber</span>
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              {legal.crisisDisclaimer}
            </p>
          </div>

          <div className="flex gap-14">
            <div>
              <p className="text-sm font-medium text-ink">Explore</p>
              <ul className="mt-3 space-y-2 text-sm text-ink-soft">
                <li>
                  <Link href="/#programmes" className="hover:text-ink">
                    Coaching
                  </Link>
                </li>
                <li>
                  <Link href="/stories" className="hover:text-ink">
                    Client stories
                  </Link>
                </li>
                <li>
                  <Link href="/#about" className="hover:text-ink">
                    Meet Amber
                  </Link>
                </li>
                {appLink ? (
                  <li>
                    <a href={appLink} className="hover:text-ink">
                      The app
                    </a>
                  </li>
                ) : null}
              </ul>
            </div>
            <div>
              <p className="text-sm font-medium text-ink">Say hello</p>
              <ul className="mt-3 space-y-2 text-sm text-ink-soft">
                <li>
                  <a
                    href={social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-ink"
                  >
                    Instagram {site.handle}
                  </a>
                </li>
                {social.tiktok ? (
                  <li>
                    <a
                      href={social.tiktok}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-ink"
                    >
                      TikTok
                    </a>
                  </li>
                ) : null}
                <li>
                  <a href={`mailto:${site.contactEmail}`} className="hover:text-ink">
                    {site.contactEmail}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-6 text-xs text-ink-soft sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Amber Perry. All rights reserved.</p>
          {/* [LEGAL] — required before taking payments. */}
          <div className="flex gap-5">
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
