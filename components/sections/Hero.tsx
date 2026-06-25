"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import ParticlesBackground from "@/components/ui/ParticlesBackground";

const ROLES = ["Java Developer", "Backend Developer", "Full Stack Developer", "Problem Solver"];

function TypeWriter() {
  const [text, setText] = useState("");
  const [rIdx, setRIdx] = useState(0);
  const [del, setDel] = useState(false);
  const [cIdx, setCIdx] = useState(0);
  useEffect(() => {
    const r = ROLES[rIdx];
    let t: ReturnType<typeof setTimeout>;
    if (!del && cIdx <= r.length) t = setTimeout(() => { setText(r.slice(0, cIdx)); setCIdx(c => c + 1); }, 70);
    else if (del && cIdx >= 0) t = setTimeout(() => { setText(r.slice(0, cIdx)); setCIdx(c => c - 1); }, 30);
    else if (!del && cIdx > r.length) t = setTimeout(() => setDel(true), 2600);
    else { setDel(false); setRIdx(i => (i + 1) % ROLES.length); setCIdx(0); }
    return () => clearTimeout(t);
  }, [cIdx, del, rIdx]);

  return (
    <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "clamp(.85rem,1.8vw,1.05rem)", color: "var(--text2)", display: "inline-flex", alignItems: "center", gap: 6 }}>
      <span style={{ color: "var(--accent)", opacity: .7 }}>{"// "}</span>
      <span style={{ color: "var(--accent)" }}>{text}</span>
      <span style={{ width: 2, height: "1.1em", background: "var(--accent)", display: "inline-block", animation: "blink 1s step-end infinite", borderRadius: 1, flexShrink: 0 }} />
    </span>
  );
}

const SOCIALS = [
  { href: "https://github.com", label: "GitHub", icon: <svg viewBox="0 0 24 24" fill="currentColor" width={15} height={15}><path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.49.5.09.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg> },
  { href: "https://linkedin.com", label: "LinkedIn", icon: <svg viewBox="0 0 24 24" fill="currentColor" width={15} height={15}><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
  { href: "mailto:shradhagarg0909@gmail.com", label: "Email", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={15} height={15}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg> },
];

export default function Hero() {
  const [vis, setVis] = useState(false);
  useEffect(() => { const t = setTimeout(() => setVis(true), 100); return () => clearTimeout(t); }, []);

  const anim = (delay = 0): React.CSSProperties => ({
    opacity: vis ? 1 : 0,
    transform: vis ? "translateY(0)" : "translateY(30px)",
    transition: `opacity .85s cubic-bezier(.23,1,.32,1) ${delay}ms, transform .85s cubic-bezier(.23,1,.32,1) ${delay}ms`,
  });

  return (
    <section id="home" style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden", padding: 0, background: "var(--bg)" }}>
      <ParticlesBackground />

      {/* Ambient orbs */}
      <div className="orb" style={{ width: 600, height: 600, top: "-15%", right: "8%", background: "radial-gradient(circle, rgba(124,58,237,.08) 0%, transparent 65%)", animationDelay: "0s" }} />
      <div className="orb" style={{ width: 400, height: 400, bottom: "-10%", left: "2%", background: "radial-gradient(circle, rgba(6,182,212,.06) 0%, transparent 65%)", animationDelay: "2.5s" }} />
      <div className="orb" style={{ width: 300, height: 300, top: "40%", left: "40%", background: "radial-gradient(circle, rgba(124,58,237,.04) 0%, transparent 65%)", animationDelay: "5s" }} />

      <div className="container" style={{ position: "relative", zIndex: 2, paddingTop: 100, paddingBottom: 100 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "clamp(32px,6vw,88px)", alignItems: "center" }}>

          {/* ── LEFT ── */}
          <div style={{ maxWidth: 580 }}>
            {/* Status pill */}
            <div style={anim(0)}>
              <span className="pill pill-green" style={{ marginBottom: 28, display: "inline-flex" }}>
                <span className="dot-pulse" />
                Available for Internships
              </span>
            </div>

            {/* Name */}
            <div style={anim(90)}>
              <p className="label" style={{ marginBottom: 14 }}>Hello, I am</p>
              <h1 className="display" style={{ color: "var(--text1)", lineHeight: 1.02 }}>
                Shradha
                <br />
                <span style={{ color: "var(--accent)", display: "inline-block" }}>Garg</span>
                <span style={{ color: "var(--accent)", fontSize: "4rem" }}>.</span>
              </h1>
            </div>

            {/* Typing role */}
            <div style={{ ...anim(170), marginTop: 14, marginBottom: 24 }}>
              <TypeWriter />
            </div>

            {/* Desc */}
            <div style={anim(240)}>
              <p className="body-lg" style={{ maxWidth: 460, marginBottom: 36 }}>
                B.Tech Computer Science student at{" "}
                <span style={{ color: "var(--accent)", fontWeight: 600 }}>GLA University, Mathura</span>.
                Building robust Java backends, designing databases, and crafting modern web experiences.
              </p>
            </div>

            {/* CTAs */}
            <div style={{ ...anim(310), display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 44 }}>
              <a href="/resume.pdf" download className="btn btn-purple">
                <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
                Download Resume
              </a>
              <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} className="btn btn-ghost" style={{ cursor: "none" }}>
                Let&apos;s Talk
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </button>
            </div>

            {/* Socials */}
            <div style={{ ...anim(380), display: "flex", alignItems: "center", gap: 14 }}>
              <span className="label" style={{ fontSize: 10 }}>Find me on</span>
              <div style={{ width: 32, height: 1, background: "var(--border2)" }} />
              {SOCIALS.map(s => (
                <a key={s.label} href={s.href} title={s.label}
                  target={s.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                  style={{ width: 34, height: 34, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", background: "var(--bg3)", border: "1px solid var(--border)", color: "var(--text3)", cursor: "none", transition: "all .22s", textDecoration: "none" }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = "rgba(124,58,237,.12)"; el.style.borderColor = "rgba(124,58,237,.3)"; el.style.color = "var(--accent)"; el.style.transform = "translateY(-3px)"; el.style.boxShadow = "0 6px 20px rgba(124,58,237,.2)"; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = "var(--bg3)"; el.style.borderColor = "var(--border)"; el.style.color = "var(--text3)"; el.style.transform = "none"; el.style.boxShadow = "none"; }}
                >{s.icon}</a>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Photo ── */}
          <div style={{ ...anim(220), display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
            <div className="photo-frame" style={{ width: "clamp(240px,20vw,320px)", aspectRatio: "3/4", position: "relative", animation: "float 6s ease-in-out infinite" }}>
              <Image
                src="/profile.jpg"
                alt="Shradha Garg"
                fill
                sizes="320px"
                priority
                style={{ objectFit: "cover", objectPosition: "center 10%" }}
              />
              {/* Bottom overlay with name */}
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 55%, rgba(0,0,0,.72) 100%)" }} />
              <div style={{ position: "absolute", bottom: 14, left: 14, right: 14 }}>
                <p style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: "1rem", color: "white" }}>Shradha Garg</p>
                <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "10px", color: "rgba(255,255,255,.55)", marginTop: 2 }}>B.Tech CSE · GLA University</p>
              </div>
            </div>

            {/* Mini stats */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, width: "100%" }}>
              {[["3+", "Projects"], ["9+", "Technologies"]].map(([n, l]) => (
                <div key={l} className="card" style={{ padding: "14px 12px", textAlign: "center", borderRadius: 12 }}>
                  <p style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "1.5rem", color: "var(--accent)", lineHeight: 1 }}>{n}</p>
                  <p style={{ fontSize: "11px", color: "var(--text3)", marginTop: 3 }}>{l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div style={{ position: "absolute", bottom: 28, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 6, opacity: .35, zIndex: 2 }}>
        <span className="label" style={{ fontSize: 9 }}>Scroll</span>
        <div style={{ width: 1, height: 36, background: "linear-gradient(180deg, var(--accent), transparent)", animation: "pulse 2s ease-in-out infinite" }} />
      </div>
    </section>
  );
}
