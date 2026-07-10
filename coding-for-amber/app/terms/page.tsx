import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = { title: "Terms — Amber Perry" };

// Placeholder — replace with reviewed terms of service before launch.
export default function TermsPage() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-2xl px-5 py-20 md:px-8">
        <h1 className="font-display text-3xl font-semibold text-ink">
          Terms of service
        </h1>
        <p className="mt-6 leading-relaxed text-ink-soft">
          This page is a placeholder. Coaching terms (refunds, cancellations,
          scope of coaching vs therapy) need to be added before the site goes
          live.
        </p>
      </main>
      <Footer />
    </>
  );
}
