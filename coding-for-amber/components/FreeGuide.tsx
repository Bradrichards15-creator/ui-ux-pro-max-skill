"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function FreeGuide() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("subscribe failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="free-guide" className="scroll-mt-20 bg-sage-50/70">
      <div className="mx-auto max-w-content px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-2xl rounded-3xl border border-cream-300/70 bg-cream-50 p-8 text-center shadow-sm md:p-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-sage-600">
            Not ready yet? That&apos;s okay.
          </p>
          <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            Take the free guide:
            <br />
            <em className="text-amber-600">Understanding Your Anxiety</em>
          </h2>
          <p className="mx-auto mt-4 max-w-md leading-relaxed text-ink-soft">
            A short, honest guide to what your anxiety is actually doing and
            why it isn&apos;t your fault — the first thing I share with every
            new client. Yours free, straight to your inbox.
          </p>

          {status === "success" ? (
            <div
              role="status"
              className="mx-auto mt-8 max-w-md rounded-2xl bg-sage-50 p-5 text-sage-700"
            >
              <p className="font-medium">The guide is on its way ✳</p>
              <p className="mt-1 text-sm">
                Check your inbox (and the spam folder, just in case) in the
                next few minutes.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <label htmlFor="guide-email" className="sr-only">
                Email address
              </label>
              <input
                id="guide-email"
                type="email"
                required
                autoComplete="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 flex-1 rounded-full border border-cream-300 bg-white px-5 text-ink placeholder:text-ink-muted focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-200"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="h-12 rounded-full bg-amber-500 px-6 font-medium text-white transition-colors duration-200 hover:bg-amber-600 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "loading" ? "Sending…" : "Send me the guide"}
              </button>
            </form>
          )}

          {status === "error" && (
            <p role="alert" className="mt-3 text-sm text-red-700">
              Something went wrong — please try again, or email{" "}
              <a href="mailto:hello@wordsofamber.com" className="underline">
                hello@wordsofamber.com
              </a>
              .
            </p>
          )}

          <p className="mt-5 text-xs text-ink-muted">
            One useful email with the guide, occasional gentle notes after.
            Unsubscribe any time — no guilt trips.
          </p>
        </div>
      </div>
    </section>
  );
}
