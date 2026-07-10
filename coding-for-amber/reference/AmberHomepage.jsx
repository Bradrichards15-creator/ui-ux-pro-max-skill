import React, { useState, useEffect, useRef } from "react";

/*
  Words of Amber — homepage, built to DESIGN.md
  ================================================
  This is the reference build for Claude Code to match exactly.
  Follows: colour contrast rules, Fraunces/Inter pairing, breathing motion
  (not bouncy), baseline-line motif, real-photo-shaped placeholders,
  one dark section only, British English throughout.
*/

const T = {
  teal: "#71CDC7", tealDeep: "#3E9B95", tealInk: "#1F5A56",
  ink: "#20302E", inkSoft: "#4A5A57",
  paper: "#FBFAF7", mist: "#EDF6F5", cream: "#F3F0E9", line: "#E4E7E4",
};

function useReveal() {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setShown(true); return; }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setShown(true); io.disconnect(); } }, { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return [ref, shown];
}
function Reveal({ children, delay = 0, as: Tag = "div", style, ...rest }) {
  const [ref, shown] = useReveal();
  return (
    <Tag ref={ref} style={{
      opacity: shown ? 1 : 0,
      transform: shown ? "none" : "translateY(20px)",
      transition: `opacity .85s cubic-bezier(.16,1,.3,1) ${delay}s, transform .85s cubic-bezier(.16,1,.3,1) ${delay}s`,
      ...style,
    }} {...rest}>{children}</Tag>
  );
}
function CountUp({ to, suffix = "" }) {
  const [ref, shown] = useReveal();
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!shown) return;
    let raf, start;
    const step = (t) => {
      if (!start) start = t;
      const p = Math.min((t - start) / 1400, 1);
      setN(Math.round((1 - Math.pow(1 - p, 3)) * to));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [shown, to]);
  return <span ref={ref}>{n}{suffix}</span>;
}

function Btn({ children, href, variant = "solid", full, style }) {
  const [h, setH] = useState(false);
  const base = { fontFamily: "Inter, sans-serif", fontSize: 15.5, fontWeight: 500, borderRadius: 999,
    padding: "15px 28px", cursor: "pointer", border: "none", transition: "all .35s cubic-bezier(.16,1,.3,1)",
    textDecoration: "none", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8,
    width: full ? "100%" : "auto" };
  const looks = {
    solid: { background: h ? T.ink : T.teal, color: T.ink, transform: h ? "translateY(-2px)" : "none",
              boxShadow: h ? "0 14px 30px rgba(32,48,46,.16)" : "0 4px 16px rgba(113,205,199,.32)" },
    ghost: { background: "transparent", color: T.ink, border: `1.5px solid ${h ? T.ink : T.line}` },
    dark:  { background: h ? T.teal : T.ink, color: h ? T.ink : "#fff" },
  }[variant];
  return (
    <a href={href} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
       style={{ ...base, ...looks, ...style }}>{children}</a>
  );
}

// baseline-line motif — spiky (alert) settling to calm (safe)
function BaselineLine({ height = 56, calmOnly = false }) {
  const w = 1200, mid = height / 2;
  let d = `M0 ${mid}`;
  for (let i = 1; i <= 48; i++) {
    const x = (w / 48) * i;
    const calmProgress = calmOnly ? 1 : i / 48;
    const chaos = (1 - calmProgress) ** 2;
    const spike = (Math.sin(i * 1.7) + Math.sin(i * 0.6)) * 0.5;
    const y = mid - spike * chaos * (height * 0.6);
    d += ` L${x.toFixed(1)} ${y.toFixed(1)}`;
  }
  return (
    <svg viewBox={`0 0 ${w} ${height}`} width="100%" height={height} preserveAspectRatio="none" aria-hidden="true">
      <path d={d} fill="none" stroke={T.teal} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity=".85" />
    </svg>
  );
}

// image placeholder shaped like real portrait photography, not a grey box
function PhotoFrame({ ratio = "125%", tone = "warm", label }) {
  const tones = {
    warm: "linear-gradient(160deg, #E8DFD0 0%, #D9C9AE 55%, #C9B896 100%)",
    teal: "linear-gradient(160deg, #C9E8E5 0%, #9FD6D0 60%, #71CDC7 100%)",
  };
  return (
    <div style={{ position: "relative", paddingTop: ratio, borderRadius: 22, overflow: "hidden",
                  background: tones[tone] }}>
      <div style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center",
                    color: "rgba(32,48,46,.35)", textAlign: "center", padding: 20 }}>
        <div style={{ width: 46, height: 46, borderRadius: 999, border: "2px solid rgba(32,48,46,.25)",
                      display: "grid", placeItems: "center", margin: "0 auto 12px" }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="10" r="2"/><path d="M21 15l-4-4-8 8"/>
          </svg>
        </div>
        <p style={{ fontSize: 12.5, fontFamily: "Inter, sans-serif", lineHeight: 1.4 }}>{label}</p>
      </div>
    </div>
  );
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? Math.min(y / h, 1) : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const faqs = [
    ["Is this therapy?", "No — and that difference matters. Therapy often has you talk through the past. This is nervous system work: we gently retrain the state your body has learned to live in. That's often why it works when other things haven't."],
    ["What if I've already tried everything?", "Most people who come to me have — therapy, meditation, the apps, the books. None of it was wrong. But most of it works on the moments of panic, not the baseline underneath them. That's where we start, together."],
    ["How long does it take?", "I won't pretend it's overnight, and I won't pretend it's forever. Every programme runs on a six-month rhythm — enough time for real change to settle in properly."],
    ["I'm not sure I can commit right now.", "I hear this so often. It will never quite feel like the right time — waiting for the perfect moment is part of the pattern we work to change. If you're unsure, just say hello. No pressure, no pitch."],
  ];

  return (
    <div style={{ background: T.paper, color: T.ink, fontFamily: "Inter, system-ui, sans-serif", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500&family=Inter:wght@400;500&display=swap');
        *{box-sizing:border-box;} html{scroll-behavior:smooth;}
        h1,h2,h3{font-family:'Fraunces',Georgia,serif;font-weight:400;margin:0;letter-spacing:-.01em;}
        p{margin:0;}
        .lift{transition:transform .4s cubic-bezier(.16,1,.3,1),box-shadow .4s ease;}
        .lift:hover{transform:translateY(-4px);box-shadow:0 20px 44px rgba(32,48,46,.10);}
        .nl{position:relative;cursor:pointer;}
        .nl:after{content:'';position:absolute;left:0;bottom:-4px;height:1.5px;width:0;background:${T.teal};transition:width .3s ease;}
        .nl:hover:after{width:100%;}
      `}</style>

      <div style={{ position: "fixed", top: 0, left: 0, height: 3, width: `${progress * 100}%`, background: T.teal, zIndex: 100 }} />

      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 90, display: "flex",
                    alignItems: "center", justifyContent: "space-between",
                    padding: scrolled ? "14px 6vw" : "22px 6vw",
                    background: scrolled ? "rgba(251,250,247,.9)" : "transparent",
                    backdropFilter: scrolled ? "blur(12px)" : "none",
                    borderBottom: `1px solid ${scrolled ? T.line : "transparent"}`, transition: "all .4s ease" }}>
        <div style={{ fontFamily: "Fraunces, serif", fontSize: 20 }}>
          Words of <span style={{ fontStyle: "italic", color: T.tealDeep }}>Amber</span>
        </div>
        <div style={{ display: "flex", gap: 30, fontSize: 14.5, color: T.inkSoft }}>
          <span className="nl" onClick={() => go("method")}>The work</span>
          <span className="nl" onClick={() => go("programmes")}>Coaching</span>
          <span className="nl" onClick={() => go("stories")}>Becky's story</span>
          <span className="nl" onClick={() => go("about")}>Amber</span>
          <span className="nl" onClick={() => go("contact")}>Say hello</span>
        </div>
      </nav>

      {/* ---------- hero ---------- */}
      <header style={{ padding: "18vh 6vw 0" }}>
        <div style={{ display: "grid", gap: 50, gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
                      alignItems: "center", maxWidth: 1180, margin: "0 auto" }}>
          <div>
            <Reveal><p style={{ letterSpacing: ".2em", textTransform: "uppercase", fontSize: 12, color: T.tealDeep, marginBottom: 26 }}>
              Anxiety coaching · nervous system regulation</p></Reveal>
            <Reveal delay={.08} as="h1" style={{ fontSize: "clamp(2.4rem,5.4vw,4.4rem)", lineHeight: 1.05 }}>
              You were never<br />broken.
              <span style={{ display: "block", fontStyle: "italic", color: T.tealDeep, marginTop: 4 }}>Just never taught.</span>
            </Reveal>
            <Reveal delay={.2}>
              <p style={{ fontSize: "clamp(1.05rem,1.4vw,1.25rem)", lineHeight: 1.65, color: T.inkSoft, marginTop: 28, maxWidth: 480 }}>
                You've tried the therapy, the apps, the breathing, the books — and still feel like you're
                managing something that never quite lets go.
                <br /><br />
                There's a reason for that. It isn't that something's wrong with you.
              </p>
            </Reveal>
            <Reveal delay={.32} style={{ marginTop: 36, display: "flex", gap: 16, flexWrap: "wrap" }}>
              <Btn href="#programmes">See how we'd work together</Btn>
              <Btn variant="ghost" href="#contact">Just say hello</Btn>
            </Reveal>
            <Reveal delay={.44} style={{ marginTop: 40, display: "flex", gap: 26, flexWrap: "wrap", fontSize: 14, color: T.tealDeep }}>
              <span><strong style={{ color: T.ink }}>5 years</strong> coaching</span>
              <span style={{ opacity: .4 }}>·</span>
              <span><strong style={{ color: T.ink }}>250+</strong> people helped</span>
              <span style={{ opacity: .4 }}>·</span>
              <span>Lived it, not just studied it</span>
            </Reveal>
          </div>
          <Reveal delay={.24}>
            <PhotoFrame ratio="115%" tone="teal" label="Amber's welcome video — vertical portrait, autoplay muted" />
            <p style={{ fontSize: 13, color: T.tealDeep, marginTop: 12, textAlign: "center", fontStyle: "italic" }}>
              Hi, I'm Amber — press play.
            </p>
          </Reveal>
        </div>

        <div style={{ marginTop: 70, maxWidth: 1180, margin: "70px auto 0" }}>
          <BaselineLine />
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: T.tealDeep, letterSpacing: ".05em", marginTop: 8 }}>
            <span>a system stuck on alert</span><span>a system that feels safe</span>
          </div>
        </div>
      </header>

      {/* ---------- meet them ---------- */}
      <Section bg={T.mist}>
        <Reveal>
          <p style={{ fontFamily: "Fraunces, serif", fontSize: "clamp(1.6rem,3.2vw,2.7rem)", lineHeight: 1.3, maxWidth: 860 }}>
            At some point your world got a little smaller, without you really noticing.
            <br /><br />
            Everything started to revolve around how far you were from home, how your body felt,
            whether you could cope, whether something bad was coming.
            <br /><br />
            <span style={{ color: T.tealDeep, fontStyle: "italic" }}>And anxiety became so normal you stopped questioning it.</span>
          </p>
        </Reveal>
        <Reveal delay={.15}>
          <p style={{ marginTop: 38, fontSize: 17, color: T.inkSoft, maxWidth: 560, lineHeight: 1.7 }}>
            It's not your fault. No one ever taught you how to respond when your body feels overwhelmed.
            That's the part I'm here to help with.
          </p>
        </Reveal>
      </Section>

      {/* ---------- method ---------- */}
      <Section id="method">
        <Label>The work</Label>
        <Reveal as="h2" style={{ fontSize: "clamp(1.9rem,4.2vw,3.2rem)", lineHeight: 1.1, maxWidth: 800, marginTop: 12 }}>
          Most people spend years fighting the spikes.
          <span style={{ color: T.tealDeep, fontStyle: "italic" }}> The spike was never the problem.</span>
        </Reveal>
        <Reveal delay={.1}>
          <p style={{ fontSize: 17.5, color: T.inkSoft, maxWidth: 620, lineHeight: 1.7, marginTop: 24 }}>
            Your nervous system shifts quietly between activation and recovery. With anxiety, it leans
            towards activation — even when nothing's actually wrong. Over time, that becomes your baseline.
            We change that, gently, from the inside out.
          </p>
        </Reveal>
        <div style={{ display: "grid", gap: 20, marginTop: 50, gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))" }}>
          {[["We start in the calm", "We build the work when your system can actually receive it — not mid-panic."],
            ["We shift the baseline", "Instead of chasing symptoms, we change the state your body returns to."],
            ["You find your freedom", "You learn to feel activation without reading it as danger."]].map(([h, b], i) => (
            <Reveal key={h} delay={i * .1} className="lift"
              style={{ background: T.paper, border: `1px solid ${T.line}`, borderRadius: 18, padding: "28px 26px" }}>
              <div style={{ fontFamily: "Fraunces, serif", fontSize: 26, color: T.tealDeep, marginBottom: 12 }}>0{i + 1}</div>
              <h3 style={{ fontSize: 19, marginBottom: 10 }}>{h}</h3>
              <p style={{ fontSize: 15, color: T.inkSoft, lineHeight: 1.6 }}>{b}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---------- one dark section ---------- */}
      <Section bg={T.ink}>
        <Label dark>Why the usual advice keeps people stuck</Label>
        <Reveal as="h2" style={{ fontSize: "clamp(1.9rem,4.2vw,3.2rem)", lineHeight: 1.12, maxWidth: 820, marginTop: 12, color: T.paper }}>
          None of it was your fault. You were just never shown another way.
        </Reveal>
        <Reveal delay={.1}>
          <p style={{ fontSize: 17.5, color: "rgba(251,250,247,.72)", maxWidth: 640, lineHeight: 1.7, marginTop: 24 }}>
            Avoiding, controlling, waiting to feel better before living — each quietly taught your system
            the fear was real. Regulation isn't a technique for mid-panic. It's the state your body is
            conditioned to return to. That's what we change.
          </p>
        </Reveal>
      </Section>

      {/* ---------- Becky ---------- */}
      <Section id="stories" bg={T.mist}>
        <div style={{ display: "grid", gap: 44, gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", alignItems: "center" }}>
          <Reveal>
            <Label>A real transformation</Label>
            <h2 style={{ fontSize: "clamp(1.8rem,3.6vw,2.7rem)", lineHeight: 1.15, margin: "12px 0 18px" }}>This is Becky.</h2>
            <p style={{ fontSize: 17, color: T.inkSoft, lineHeight: 1.72, maxWidth: 460 }}>
              When Becky started, she felt stuck in a cycle of anxiety and panic, especially anywhere
              unfamiliar. Eight months on, she takes solo trips, enjoys the theatre, and trusts she can
              handle whatever comes.
            </p>
            <p style={{ marginTop: 20, fontSize: 13.5, color: T.tealDeep, fontStyle: "italic" }}>Shared with Becky's permission.</p>
          </Reveal>
          <Reveal delay={.12}><PhotoFrame ratio="56.25%" tone="warm" label="Becky's transformation call — Vimeo embed" /></Reveal>
        </div>
      </Section>

      {/* ---------- programmes ---------- */}
      <Section id="programmes">
        <Label>Ways to work together</Label>
        <Reveal as="h2" style={{ fontSize: "clamp(1.9rem,4vw,3rem)", marginTop: 12, maxWidth: 640 }}>
          Three ways in — each built around where you are right now.
        </Reveal>
        <div style={{ display: "grid", gap: 22, marginTop: 46, gridTemplateColumns: "repeat(auto-fit,minmax(290px,1fr))" }}>
          {[
            { name: "Programme One", feat: false, price: "£147", tag: "For starting gently",
              who: "For the person ready to start making real changes, at a pace that works around their life." },
            { name: "Programme Two", feat: true, price: "£297", tag: "Most people start here",
              who: "For the person who's done with half measures and wants consistent, close support." },
            { name: "Programme Three", feat: false, price: "£497", tag: "Limited spaces",
              who: "For the person who wants the highest level of support and is ready to go all in." },
          ].map((s, i) => (
            <Reveal key={s.name} delay={i * .1} className="lift"
              style={{ borderRadius: 22, padding: "34px 30px", background: s.feat ? T.ink : T.paper,
                       color: s.feat ? T.paper : T.ink, border: s.feat ? "none" : `1px solid ${T.line}` }}>
              <span style={{ fontSize: 12, letterSpacing: ".08em", textTransform: "uppercase", color: T.teal }}>{s.tag}</span>
              <h3 style={{ fontSize: 24, margin: "10px 0" }}>{s.name}</h3>
              <div style={{ fontFamily: "Fraunces, serif", fontSize: 38, color: s.feat ? T.teal : T.tealDeep, marginBottom: 16 }}>{s.price}<span style={{fontSize:14,fontFamily:"Inter, sans-serif",opacity:.6}}> /month</span></div>
              <p style={{ fontSize: 15, lineHeight: 1.6, fontStyle: "italic", color: s.feat ? "rgba(251,250,247,.78)" : T.inkSoft }}>{s.who}</p>
              <Btn full variant={s.feat ? "solid" : "dark"} href="#" style={{ marginTop: 22 }}>Choose {s.name}</Btn>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---------- about ---------- */}
      <Section id="about" bg={T.mist}>
        <div style={{ display: "grid", gap: 50, gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", alignItems: "center" }}>
          <Reveal>
            <Label>Meet Amber</Label>
            <h2 style={{ fontSize: "clamp(1.9rem,4vw,3rem)", margin: "12px 0 22px" }}>I'm not someone who studied anxiety from the outside.</h2>
            <p style={{ fontSize: 17, color: T.inkSoft, lineHeight: 1.72 }}>
              I lived with chronic anxiety and panic for over ten years. What changed everything was
              nervous system regulation. Last year I drove over a thousand miles across Europe.
              I wasn't anxious. I was free.
            </p>
          </Reveal>
          <Reveal delay={.12}>
            <div style={{ background: T.paper, borderRadius: 22, padding: "40px 36px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 26 }}>
                <Stat n={5} label="years coaching" />
                <Stat n={250} suffix="+" label="people helped" />
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ---------- faq ---------- */}
      <Section>
        <Label>Honest answers</Label>
        <Reveal as="h2" style={{ fontSize: "clamp(1.9rem,4vw,3rem)", margin: "12px 0 36px" }}>The questions you're probably asking.</Reveal>
        <div style={{ maxWidth: 820 }}>
          {faqs.map(([q, a], i) => (
            <Reveal key={q} style={{ borderTop: `1px solid ${T.line}`, borderBottom: i === faqs.length - 1 ? `1px solid ${T.line}` : "none" }}>
              <button onClick={() => setOpen(open === i ? -1 : i)}
                style={{ width: "100%", textAlign: "left", background: "none", border: "none", cursor: "pointer",
                         padding: "22px 0", display: "flex", justifyContent: "space-between", gap: 20,
                         fontFamily: "Fraunces, serif", fontSize: "clamp(1.05rem,2vw,1.3rem)", color: T.ink }}>
                {q}
                <span style={{ color: T.tealDeep, fontFamily: "Inter, sans-serif",
                               transform: open === i ? "rotate(45deg)" : "none", transition: "transform .3s ease" }}>+</span>
              </button>
              <div style={{ maxHeight: open === i ? 260 : 0, overflow: "hidden", transition: "max-height .45s cubic-bezier(.16,1,.3,1)" }}>
                <p style={{ fontSize: 16, color: T.inkSoft, lineHeight: 1.7, paddingBottom: 24, maxWidth: 700 }}>{a}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---------- contact teaser ---------- */}
      <Section id="contact" bg={T.mist}>
        <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto" }}>
          <Reveal as="h2" style={{ fontSize: "clamp(2rem,4.4vw,3.2rem)" }}>Let's start with a conversation.</Reveal>
          <Reveal delay={.1}>
            <p style={{ fontSize: 17, color: T.inkSoft, lineHeight: 1.68, margin: "18px 0 32px" }}>
              No forms that feel like paperwork. Just tell me what's going on, and I'll come back to you personally.
            </p>
            <Btn href="#">Say hello</Btn>
          </Reveal>
        </div>
      </Section>
    </div>
  );
}

function Section({ id, children, bg }) {
  return <section id={id} style={{ background: bg || "transparent", padding: "clamp(64px,9vw,120px) 6vw" }}>
    <div style={{ maxWidth: 1120, margin: "0 auto" }}>{children}</div></section>;
}
function Label({ children, dark }) {
  return <p style={{ letterSpacing: ".18em", textTransform: "uppercase", fontSize: 12, color: dark ? T.teal : T.tealDeep }}>{children}</p>;
}
function Stat({ n, suffix, label }) {
  return <div><div style={{ fontFamily: "Fraunces, serif", fontSize: 38, color: T.tealDeep }}><CountUp to={n} suffix={suffix} /></div>
    <div style={{ fontSize: 13, color: T.inkSoft, marginTop: 8 }}>{label}</div></div>;
}
