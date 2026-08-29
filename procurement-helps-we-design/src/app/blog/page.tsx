import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Blog - Procurement Helps",
  description: "Shorter, regular posts on what's changing in procurement and tendering.",
};

// Out of scope for this build per COPY.md notes - placeholder route so
// nav/footer links resolve instead of 404ing.
export default function BlogPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 px-6 pt-32 pb-20 md:pt-44">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-semibold tracking-tight">Coming soon</h1>
          <p className="mt-4 text-sm text-foreground/75">
            Shorter, regular posts on what&apos;s changing in procurement and tendering, and
            what it means for you. Check back soon.
          </p>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
