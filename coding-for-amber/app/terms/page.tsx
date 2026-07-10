import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = { title: "Terms — Words of Amber" };

// [LEGAL] — placeholder. Replace with reviewed terms before launch.
export default function TermsPage() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-2xl px-[6vw] py-24">
        <h1 className="font-display text-3xl text-ink">Terms of service</h1>
        <p className="mt-6 leading-relaxed text-ink-soft">
          This page is a placeholder. Coaching terms need to be added before
          launch — the 6-month minimum commitment stated on each programme,
          cancellation/refund policy, and the scope of coaching vs therapy.
        </p>
      </main>
      <Footer />
    </>
  );
}
