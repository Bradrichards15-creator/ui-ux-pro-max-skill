"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

function NotifyBox() {
  const [sent, setSent] = useState(false);

  return (
    <div className="rounded-[22px] bg-white p-8">
      <span className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
        These are in progress
      </span>
      <p className="mt-2 text-sm text-foreground/75">
        Leave your email and I&apos;ll let you know the moment the first one&apos;s ready.
      </p>
      {sent ? (
        <p className="mt-4 text-sm font-medium">Thanks - I&apos;ll be in touch.</p>
      ) : (
        <form
          className="mt-4 flex flex-col gap-2 sm:flex-row"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          <input
            type="email"
            required
            placeholder="Your email"
            className="w-full rounded-full border border-black/15 bg-white px-4 py-2.5 text-sm outline-none focus:border-black"
          />
          <button type="submit" className="btn-pill shrink-0 gap-2 !min-w-0 !px-6 !py-2.5">
            Notify me
            <ArrowRight size={14} />
          </button>
        </form>
      )}
    </div>
  );
}

function RequestBox() {
  const [sent, setSent] = useState(false);

  return (
    <div className="rounded-[22px] bg-white p-8">
      <span className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
        Nothing here for you yet?
      </span>
      <p className="mt-2 text-sm text-foreground/75">
        Tell me what you&apos;re struggling with and I&apos;ll consider writing about it.
      </p>
      {sent ? (
        <p className="mt-4 text-sm font-medium">Thanks - noted.</p>
      ) : (
        <form
          className="mt-4 flex flex-col gap-2 sm:flex-row"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          <input
            type="text"
            required
            placeholder="I'm struggling with..."
            className="w-full rounded-full border border-black/15 bg-white px-4 py-2.5 text-sm outline-none focus:border-black"
          />
          <button type="submit" className="btn-pill shrink-0 gap-2 !min-w-0 !px-6 !py-2.5">
            Send
            <ArrowRight size={14} />
          </button>
        </form>
      )}
    </div>
  );
}

/** CaptureBoxes — the two guides-page email-capture cards. */
export function CaptureBoxes() {
  return (
    <section className="bg-background px-6 pb-14 md:pb-20">
      <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
        <NotifyBox />
        <RequestBox />
      </div>
    </section>
  );
}
