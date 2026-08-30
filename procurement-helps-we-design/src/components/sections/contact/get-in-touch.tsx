"use client";

import { useState } from "react";
import { ArrowRight, MessageCircle, Pencil } from "lucide-react";

const WHATSAPP_NUMBER = "447958145110";

const TOPICS = [
  { label: "I've got a tender coming up", message: "Hi, I've got a tender coming up." },
  { label: "I think I'm paying too much", message: "Hi, I think I'm paying too much for something." },
  { label: "Not sure yet - just want to talk", message: "Hi, not sure yet - just want to talk." },
];

type Method = "whatsapp" | "form" | null;

function WhatsappTopicPicker() {
  return (
    <div className="rounded-[22px] bg-white p-8">
      <p className="text-sm font-semibold">What&apos;s going on?</p>
      <div className="mt-4 flex flex-col gap-2">
        {TOPICS.map((topic) => (
          <a
            key={topic.label}
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(topic.message)}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between rounded-full border border-black/15 px-5 py-3 text-sm font-medium transition hover:border-black hover:bg-black hover:text-white"
          >
            {topic.label}
            <ArrowRight size={14} />
          </a>
        ))}
      </div>
    </div>
  );
}

function DetailsForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="rounded-[22px] bg-white p-8">
        <p className="text-sm font-semibold">Thanks - I&apos;ll be in touch shortly.</p>
      </div>
    );
  }

  return (
    <div className="rounded-[22px] bg-white p-8">
      <p className="text-sm font-semibold">Leave a few details</p>
      <form
        className="mt-4 flex flex-col gap-3"
        onSubmit={(e) => {
          e.preventDefault();
          setSent(true);
        }}
      >
        <input
          type="tel"
          required
          placeholder="Phone number*"
          className="w-full rounded-full border border-black/15 bg-white px-4 py-3 text-sm outline-none focus:border-black"
        />
        <input
          type="text"
          placeholder="Name"
          className="w-full rounded-full border border-black/15 bg-white px-4 py-3 text-sm outline-none focus:border-black"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full rounded-full border border-black/15 bg-white px-4 py-3 text-sm outline-none focus:border-black"
        />
        <textarea
          placeholder="What's going on? (a line or two)"
          rows={3}
          className="w-full rounded-2xl border border-black/15 bg-white px-4 py-3 text-sm outline-none focus:border-black"
        />
        <p className="text-xs text-muted-foreground">
          * Only required field - everything else is optional.
        </p>
        <button type="submit" className="btn-pill gap-2 self-start">
          Send
          <ArrowRight size={14} />
        </button>
      </form>
    </div>
  );
}

/**
 * GetInTouch — method chooser (WhatsApp vs "leave details"), revealing
 * either the WhatsApp topic picker or the details form.
 */
export function GetInTouch() {
  const [method, setMethod] = useState<Method>(null);

  return (
    <section className="bg-background px-6 py-14 md:py-20">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-semibold">How would you rather get in touch?</p>

        <div className="mt-4 grid gap-6 sm:grid-cols-2">
          <button
            type="button"
            onClick={() => setMethod("whatsapp")}
            aria-pressed={method === "whatsapp"}
            className={`flex flex-col items-start gap-2 rounded-[22px] border p-6 text-left transition ${
              method === "whatsapp" ? "border-black bg-white" : "border-black/10 bg-white/60 hover:bg-white"
            }`}
          >
            <MessageCircle size={20} />
            <span className="text-sm font-semibold">Message me on WhatsApp</span>
            <span className="text-xs text-foreground/70">
              Opens with a short note already started - just add your details and send.
            </span>
          </button>

          <button
            type="button"
            onClick={() => setMethod("form")}
            aria-pressed={method === "form"}
            className={`flex flex-col items-start gap-2 rounded-[22px] border p-6 text-left transition ${
              method === "form" ? "border-black bg-white" : "border-black/10 bg-white/60 hover:bg-white"
            }`}
          >
            <Pencil size={20} />
            <span className="text-sm font-semibold">Leave a few details</span>
            <span className="text-xs text-foreground/70">
              Your phone number and a line about what&apos;s going on - I&apos;ll get back to
              you.
            </span>
          </button>
        </div>

        {method && (
          <div className="mt-6">
            {method === "whatsapp" ? <WhatsappTopicPicker /> : <DetailsForm />}
          </div>
        )}
      </div>
    </section>
  );
}
