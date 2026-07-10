import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = { title: "Privacy — Amber Perry" };

// Placeholder — replace with a reviewed privacy policy before launch.
export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-2xl px-5 py-20 md:px-8">
        <h1 className="font-display text-3xl font-semibold text-ink">
          Privacy policy
        </h1>
        <p className="mt-6 leading-relaxed text-ink-soft">
          This page is a placeholder. A full privacy policy (covering the
          email list, Stripe payments, session notes and analytics) needs to
          be added before the site goes live.
        </p>
      </main>
      <Footer />
    </>
  );
}
