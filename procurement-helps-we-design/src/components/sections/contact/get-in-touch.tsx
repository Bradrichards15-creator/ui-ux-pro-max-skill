"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, MessageCircle, Pencil } from "lucide-react";

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

type FormState = {
  phone: string;
  name: string;
  email: string;
  message: string;
};

const EMPTY_FORM: FormState = { phone: "", name: "", email: "", message: "" };

type Step = {
  key: keyof FormState;
  question: string;
  hint: string;
  required: boolean;
  type: "tel" | "text" | "email" | "textarea";
  placeholder: string;
};

const STEPS: Step[] = [
  {
    key: "phone",
    question: "What's the best number to reach you on?",
    hint: "The only thing I actually need from you.",
    required: true,
    type: "tel",
    placeholder: "07xxx xxxxxx",
  },
  {
    key: "name",
    question: "And your name?",
    hint: "Optional - but nice to know who I'm calling.",
    required: false,
    type: "text",
    placeholder: "Your name",
  },
  {
    key: "email",
    question: "An email address, if you'd like a reply that way too?",
    hint: "Optional.",
    required: false,
    type: "email",
    placeholder: "you@company.com",
  },
  {
    key: "message",
    question: "What's going on?",
    hint: "A line or two is plenty - optional.",
    required: false,
    type: "textarea",
    placeholder: "e.g. Tender closing Friday, could use a second pair of eyes",
  },
];

function encodeForm(data: Record<string, string>) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");
}

/**
 * DetailsForm — one question per step (phone, name, email, message)
 * instead of a flat field list, with Back/Skip/Next controls. Submits
 * to Netlify Forms via a fetch POST; the matching static form (for
 * Netlify's build-time form detector) lives in app/contact/page.tsx.
 */
function DetailsForm() {
  const [stepIndex, setStepIndex] = useState(0);
  const [data, setData] = useState<FormState>(EMPTY_FORM);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const step = STEPS[stepIndex];
  const isLastStep = stepIndex === STEPS.length - 1;
  const value = data[step.key];
  const canAdvance = !step.required || value.trim().length > 0;

  function update(v: string) {
    setData((d) => ({ ...d, [step.key]: v }));
  }

  function goNext() {
    if (!canAdvance) return;
    if (isLastStep) {
      submit();
    } else {
      setStepIndex((i) => i + 1);
    }
  }

  function goBack() {
    setStepIndex((i) => Math.max(0, i - 1));
  }

  async function submit() {
    setStatus("sending");
    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodeForm({ "form-name": "contact", ...data, "bot-field": "" }),
      });
      if (!res.ok) throw new Error("Form submission failed");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-[22px] bg-white p-8">
        <p className="text-sm font-semibold">Thanks - I&apos;ll be in touch shortly.</p>
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="rounded-[22px] bg-white p-8">
        <p className="text-sm font-semibold">That didn&apos;t send - sorry about that.</p>
        <p className="mt-2 text-sm text-foreground/70">
          Try again, or reach me directly at{" "}
          <a href="mailto:brad@procurementhelps.co.uk" className="underline hover:text-black">
            brad@procurementhelps.co.uk
          </a>{" "}
          or on{" "}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noreferrer"
            className="underline hover:text-black"
          >
            WhatsApp
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="btn-pill mt-5 gap-2"
        >
          Try again
          <ArrowRight size={14} />
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-[22px] bg-white p-8">
      <div className="flex items-center gap-1.5" aria-hidden>
        {STEPS.map((s, i) => (
          <span
            key={s.key}
            className={`h-1.5 flex-1 rounded-full transition-colors duration-300 ${
              i <= stepIndex ? "bg-brand-green" : "bg-black/10"
            }`}
          />
        ))}
      </div>

      <form
        key={step.key}
        className="animate-step-fade mt-6"
        onSubmit={(e) => {
          e.preventDefault();
          goNext();
        }}
      >
        <label htmlFor={step.key} className="text-sm font-semibold">
          {step.question}
        </label>
        <p className="mt-1 text-xs text-muted-foreground">{step.hint}</p>

        {step.type === "textarea" ? (
          <textarea
            id={step.key}
            value={value}
            onChange={(e) => update(e.target.value)}
            placeholder={step.placeholder}
            rows={3}
            autoFocus
            className="mt-4 w-full rounded-2xl border border-black/15 bg-white px-4 py-3 text-sm outline-none focus:border-black"
          />
        ) : (
          <input
            id={step.key}
            type={step.type}
            value={value}
            onChange={(e) => update(e.target.value)}
            placeholder={step.placeholder}
            required={step.required}
            autoFocus
            className="mt-4 w-full rounded-full border border-black/15 bg-white px-4 py-3 text-sm outline-none focus:border-black"
          />
        )}

        <div className="mt-5 flex items-center justify-between gap-3">
          {stepIndex > 0 ? (
            <button
              type="button"
              onClick={goBack}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground/60 hover:text-foreground"
            >
              <ArrowLeft size={14} />
              Back
            </button>
          ) : (
            <span />
          )}

          <div className="flex items-center gap-3">
            {!step.required && !isLastStep && (
              <button
                type="button"
                onClick={() => setStepIndex((i) => i + 1)}
                className="text-sm font-medium text-foreground/60 hover:text-foreground"
              >
                Skip
              </button>
            )}
            <button
              type="submit"
              disabled={!canAdvance || status === "sending"}
              className="btn-pill gap-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {status === "sending" ? "Sending..." : isLastStep ? "Send" : "Next"}
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

/**
 * GetInTouch — method chooser (WhatsApp vs "leave details"), revealing
 * either the WhatsApp topic picker or the step-by-step details form.
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
