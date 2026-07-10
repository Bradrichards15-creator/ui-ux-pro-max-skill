"use client";

import { useState } from "react";
import { Reveal, Section, Btn } from "./motion";
import { social } from "@/lib/config";

type Status = "idle" | "loading" | "success" | "error";

// DESIGN.md §8 item 12 — a soft invitation, not a hard email gate. The free
// guide is the incentive; following along is presented as an equal option.
export default function NotReadyYet() {
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
    <Section>
      <div className="mx-auto max-w-[640px] rounded-[24px] border border-line bg-cream p-8 text-center md:p-11">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.18em] text-teal-deep">
            Not ready yet? That&apos;s completely normal.
          </p>
          <h2 className="mt-3 text-[clamp(1.6rem,3vw,2.1rem)] leading-[1.2] text-ink">
            Take the free guide:{" "}
            <span className="font-display italic text-teal-deep">
              Understanding Your Anxiety
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-[440px] text-[15.5px] leading-[1.65] text-ink-soft">
            A short, honest read on what your anxiety is actually doing and
            why it isn&apos;t your fault — no pitch attached.
          </p>
        </Reveal>

        {status === "success" ? (
          <div role="status" className="mx-auto mt-8 max-w-[420px] rounded-2xl bg-mist p-5">
            <p className="font-medium text-teal-ink">The guide is on its way.</p>
            <p className="mt-1 text-sm text-ink-soft">
              Check your inbox in the next few minutes.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-7 flex max-w-[420px] flex-col gap-3 sm:flex-row"
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
              className="h-12 flex-1 rounded-full border border-line bg-paper px-5 text-[15px] text-ink placeholder:text-ink-soft/60 focus:border-teal-deep focus:outline-none"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="h-12 rounded-full bg-teal px-6 text-[15px] font-medium text-ink transition-colors duration-300 hover:bg-teal-deep hover:text-paper disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "loading" ? "Sending…" : "Send me the guide"}
            </button>
          </form>
        )}
        {status === "error" && (
          <p role="alert" className="mt-3 text-sm text-red-700">
            Something went wrong — please try again.
          </p>
        )}

        <div className="mx-auto mt-7 flex max-w-[420px] items-center gap-3 text-xs text-ink-soft">
          <span className="h-px flex-1 bg-line" />
          or
          <span className="h-px flex-1 bg-line" />
        </div>

        <div className="mt-5">
          <Btn variant="ghost" href={social.instagram} target="_blank">
            Just follow along on Instagram
          </Btn>
        </div>
      </div>
    </Section>
  );
}
