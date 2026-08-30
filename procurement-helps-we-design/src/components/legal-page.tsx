import type { ReactNode } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

/**
 * LegalPage — plain, readable layout shared by Privacy/Terms/Cookies.
 * Deliberately understated: no hero flourish, just a clean typographic
 * read, since these pages exist to be correct and easy to skim, not to
 * sell anything.
 */
export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 overflow-hidden">
        <section className="bg-background px-6 pt-32 pb-20 md:pt-44 md:pb-28">
          <div className="mx-auto max-w-2xl">
            <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">{title}</h1>
            <p className="mt-2 text-xs text-muted-foreground">Last updated: {updated}</p>
            <div className="prose-legal mt-10 space-y-6 text-sm leading-relaxed text-foreground/80">
              {children}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
