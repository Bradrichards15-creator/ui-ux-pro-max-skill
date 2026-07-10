import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = { title: "Privacy — Words of Amber" };

// [LEGAL] — placeholder. Replace with a reviewed privacy policy before launch.
export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-2xl px-[6vw] py-24">
        <h1 className="font-display text-3xl text-ink">Privacy policy</h1>
        <p className="mt-6 leading-relaxed text-ink-soft">
          This page is a placeholder. A full privacy policy (covering the
          email list, Stripe payments, coaching session notes, WhatsApp
          messages and any analytics) needs to be added before the site
          takes payments.
        </p>
      </main>
      <Footer />
    </>
  );
}
