"use client";

import { useState } from "react";
import { Reveal, Section, BaselineLine } from "./motion";
import { site } from "@/lib/config";

const darkBtn =
  "inline-flex items-center justify-center rounded-full bg-ink px-7 py-[15px] text-[15.5px] font-medium text-white transition-all duration-[350ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-teal hover:text-ink disabled:cursor-not-allowed disabled:opacity-60";

type Answers = {
  bringing: string;
  howSoon: string;
  caughtEye: string;
  reachVia: string;
  reachDetail: string;
};

const bringingOptions = [
  "Panic that comes out of nowhere",
  "Anxiety about my health",
  "Overthinking I can't switch off",
  "Something else",
];
const howSoonOptions = ["Ready now", "Exploring, no rush", "Just curious"];
const reachOptions = ["Instagram DM", "WhatsApp", "Email"];

// A conversational multi-step flow, not a form — per DESIGN.md §8 item 11.
export default function Contact() {
  const [step, setStep] = useState(0);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [answers, setAnswers] = useState<Answers>({
    bringing: "",
    howSoon: "",
    caughtEye: "",
    reachVia: "",
    reachDetail: "",
  });

  const totalSteps = 4;

  async function submit() {
    setSending(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(answers),
      });
    } catch {
      // [CONTACT_ROUTE] has no CRM yet — fail soft, still show the warm state.
    } finally {
      setSending(false);
      setSent(true);
    }
  }

  return (
    <Section id="contact" bg="mist">
      <div className="mx-auto max-w-[640px] text-center">
        <Reveal>
          <h2 className="text-[clamp(2rem,4.4vw,3.2rem)] leading-[1.12] text-ink">
            Let&apos;s start with a conversation.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto my-4 max-w-[480px] text-[17px] leading-[1.68] text-ink-soft">
            No forms that feel like paperwork. Just tell me what&apos;s going
            on, and I&apos;ll come back to you personally.
          </p>
        </Reveal>
      </div>

      <div className="mx-auto mt-10 max-w-[560px] rounded-[24px] border border-line bg-paper p-8 md:p-10">
        {sent ? (
          <div role="status" className="text-center">
            <h3 className="font-display text-2xl text-ink">
              Thank you for saying hello.
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
              I read every single message myself. I&apos;ll come back to you
              personally, usually within a day or two.
            </p>
          </div>
        ) : (
          <>
            {step === 0 && (
              <ChoiceStep
                q="What's bringing you here?"
                options={bringingOptions}
                value={answers.bringing}
                onChange={(v) => setAnswers({ ...answers, bringing: v })}
                onNext={() => setStep(1)}
              />
            )}
            {step === 1 && (
              <ChoiceStep
                q="How soon are you thinking?"
                options={howSoonOptions}
                value={answers.howSoon}
                onChange={(v) => setAnswers({ ...answers, howSoon: v })}
                onNext={() => setStep(2)}
                onBack={() => setStep(0)}
              />
            )}
            {step === 2 && (
              <TextStep
                q="Anything caught your eye? (optional)"
                placeholder="A programme, something on the site, anything at all…"
                value={answers.caughtEye}
                onChange={(v) => setAnswers({ ...answers, caughtEye: v })}
                onNext={() => setStep(3)}
                onBack={() => setStep(1)}
              />
            )}
            {step === 3 && (
              <ReachStep
                value={answers.reachVia}
                detail={answers.reachDetail}
                onChangeVia={(v) => setAnswers({ ...answers, reachVia: v })}
                onChangeDetail={(v) =>
                  setAnswers({ ...answers, reachDetail: v })
                }
                onSubmit={submit}
                onBack={() => setStep(2)}
                sending={sending}
              />
            )}

            <div className="mt-8 flex justify-center gap-1.5" aria-hidden="true">
              {Array.from({ length: totalSteps }).map((_, i) => (
                <span
                  key={i}
                  className={`h-1.5 w-1.5 rounded-full transition-colors ${
                    i === step ? "bg-teal-deep" : "bg-line"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <Reveal>
        <div className="mx-auto mt-16 max-w-[1180px]">
          <BaselineLine calmOnly />
        </div>
      </Reveal>

      <p className="mt-6 text-center text-xs text-ink-soft">
        Prefer to write directly?{" "}
        <a href={`mailto:${site.contactEmail}`} className="underline">
          {site.contactEmail}
        </a>
      </p>
    </Section>
  );
}

function StepButtons({
  onNext,
  onBack,
  nextLabel = "Continue",
  disabled = false,
}: {
  onNext: () => void;
  onBack?: () => void;
  nextLabel?: string;
  disabled?: boolean;
}) {
  return (
    <div className="mt-7 flex items-center justify-between gap-4">
      {onBack ? (
        <button
          type="button"
          onClick={onBack}
          className="cursor-pointer bg-transparent text-sm text-ink-soft hover:text-ink"
        >
          ← Back
        </button>
      ) : (
        <span />
      )}
      <button type="button" onClick={onNext} disabled={disabled} className={darkBtn}>
        {nextLabel}
      </button>
    </div>
  );
}

function OptionButton({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full cursor-pointer rounded-2xl border px-5 py-3.5 text-left text-[15px] transition-colors duration-300 ${
        selected
          ? "border-teal-deep bg-mist text-ink"
          : "border-line bg-paper text-ink-soft hover:border-teal/50"
      }`}
    >
      {label}
    </button>
  );
}

function ChoiceStep({
  q,
  options,
  value,
  onChange,
  onNext,
  onBack,
}: {
  q: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
  onNext: () => void;
  onBack?: () => void;
}) {
  return (
    <div>
      <h3 className="font-display text-xl text-ink">{q}</h3>
      <div className="mt-5 space-y-3">
        {options.map((opt) => (
          <OptionButton
            key={opt}
            label={opt}
            selected={value === opt}
            onClick={() => onChange(opt)}
          />
        ))}
      </div>
      <StepButtons onNext={onNext} onBack={onBack} disabled={!value} />
    </div>
  );
}

function TextStep({
  q,
  placeholder,
  value,
  onChange,
  onNext,
  onBack,
}: {
  q: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  onNext: () => void;
  onBack?: () => void;
}) {
  return (
    <div>
      <h3 className="font-display text-xl text-ink">{q}</h3>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={3}
        className="mt-5 w-full rounded-2xl border border-line bg-paper px-5 py-3.5 text-[15px] text-ink placeholder:text-ink-soft/60 focus:border-teal-deep focus:outline-none"
      />
      <StepButtons onNext={onNext} onBack={onBack} />
    </div>
  );
}

function ReachStep({
  value,
  detail,
  onChangeVia,
  onChangeDetail,
  onSubmit,
  onBack,
  sending,
}: {
  value: string;
  detail: string;
  onChangeVia: (v: string) => void;
  onChangeDetail: (v: string) => void;
  onSubmit: () => void;
  onBack: () => void;
  sending: boolean;
}) {
  return (
    <div>
      <h3 className="font-display text-xl text-ink">
        Easiest place to reach you?
      </h3>
      <div className="mt-5 space-y-3">
        {reachOptions.map((opt) => (
          <OptionButton
            key={opt}
            label={opt}
            selected={value === opt}
            onClick={() => onChangeVia(opt)}
          />
        ))}
      </div>
      {value && (
        <input
          type={value === "Email" ? "email" : "text"}
          value={detail}
          onChange={(e) => onChangeDetail(e.target.value)}
          placeholder={
            value === "Instagram DM"
              ? "@yourhandle"
              : value === "WhatsApp"
              ? "Your number"
              : "you@example.com"
          }
          className="mt-4 w-full rounded-2xl border border-line bg-paper px-5 py-3.5 text-[15px] text-ink placeholder:text-ink-soft/60 focus:border-teal-deep focus:outline-none"
        />
      )}
      <div className="mt-7 flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={onBack}
          className="cursor-pointer bg-transparent text-sm text-ink-soft hover:text-ink"
        >
          ← Back
        </button>
        <button
          type="button"
          onClick={onSubmit}
          disabled={!value || !detail || sending}
          className={darkBtn}
        >
          {sending ? "Sending…" : "Say hello"}
        </button>
      </div>
    </div>
  );
}
