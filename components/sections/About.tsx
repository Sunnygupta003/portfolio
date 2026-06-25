"use client";
import { useEffect, useRef, useState } from "react";
import ScrollReveal from "@/components/animations/ScrollReveal";

function Count({ to, s = "" }: { to: number; s?: string }) {
  const [v, setV] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const done = useRef(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !done.current) {
        done.current = true;
        let i = 0;
        const step = () => { i++; setV(i); if (i < to) setTimeout(step, 55); };
        step();
      }
    }, { threshold: .3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [to]);
  return <span ref={ref}>{v}{s}</span>;
}

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        {/* Header row */}
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 64, flexWrap: "wrap", gap: 16 }}>
          <ScrollReveal>
            <p className="label" style={{ marginBottom: 10 }}>About Me</p>
            <h2 className="h2">Who I am<span style={{ color: "#7c3aed" }}>.</span></h2>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <span className="pill pill-purple" style={{ fontSize: 12 }}>Open to opportunities</span>
          </ScrollReveal>
        </div>

        <div className="divider" style={{ marginBottom: 64 }} />

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>
          {/* Left: Bio */}
          <ScrollReveal direction="left">
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p className="body-lg" style={{ fontSize: "1.15rem", lineHeight: 1.8 }}>
                I&apos;m <strong style={{ color: "white", fontWeight: 600 }}>Shradha Garg</strong>, a passionate Computer Science student from Aligarh currently at{" "}
                <span style={{ color: "#a78bfa", fontWeight: 500 }}>GLA University, Mathura</span>.
              </p>
              <p className="body">
                I specialize in Java development with hands-on experience in JDBC, MySQL, and building full backend systems. My projects — from Library Management to Student Management Systems — reflect my obsession with clean, working software.
              </p>
              <p className="body">
                I&apos;m also growing in frontend development through HTML, CSS, JavaScript, and React — aiming to become a complete full-stack engineer who can ship end-to-end products.
              </p>
              <p className="body">
                Outside of coding, I actively compete in hackathons, attend tech workshops, and constantly learn from the open-source community.
              </p>

              {/* Info table */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px 24px", marginTop: 8, paddingTop: 24, borderTop: "1px solid rgba(255,255,255,.06)" }}>
                {[
                  ["Name", "Shradha Garg"],
                  ["Email", "shradhagarg0909@gmail.com"],
                  ["Phone", "+91 8791285126"],
                  ["Location", "Aligarh, U.P."],
                  ["Degree", "B.Tech CSE"],
                  ["University", "GLA University"],
                ].map(([k, v]) => (
                  <div key={k}>
                    <p className="label" style={{ marginBottom: 3, fontSize: 10 }}>{k}</p>
                    <p style={{ fontSize: 13, color: "#c4c4d4", wordBreak: "break-all" }}>{v}</p>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: 8 }}>
                <a href="/resume.pdf" download className="btn btn-purple" style={{ width: "fit-content" }}>
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
                  Download Resume
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Stats + highlights */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {/* Stats grid */}
            <ScrollReveal direction="right">
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                {[
                  { n: 3, s: "+", l: "Projects Built", icon: "🚀" },
                  { n: 4, s: "+", l: "Events & Hackathons", icon: "🏆" },
                  { n: 9, s: "+", l: "Technologies", icon: "⚡" },
                  { n: 2, s: "+", l: "Years of Learning", icon: "📚" },
                ].map(st => (
                  <div key={st.l} className="card" style={{ padding: "20px", textAlign: "center" }}>
                    <div style={{ fontSize: "1.5rem", marginBottom: 6 }}>{st.icon}</div>
                    <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "2rem", color: "#7c3aed", lineHeight: 1 }}>
                      <Count to={st.n} s={st.s} />
                    </div>
                    <p style={{ fontSize: 11, color: "#444458", marginTop: 4 }}>{st.l}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Highlights */}
            {[
              { icon: "🎓", label: "Education", value: "B.Tech CS @ GLA University, Mathura (2023–2027)" },
              { icon: "💼", label: "Internship Status", value: "Actively seeking opportunities in Java / Full Stack development" },
              { icon: "🏆", label: "Latest Event", value: "Frontend Battle 2.0 — IIT Bhubaneswar, June 2025" },
              { icon: "🌍", label: "Location", value: "Vasundhra Colony, Aligarh, Uttar Pradesh 202001" },
            ].map((h, i) => (
              <ScrollReveal key={h.label} direction="right" delay={i * 60 + 100}>
                <div className="card-accent" style={{ padding: "16px 20px", display: "flex", alignItems: "flex-start", gap: 14 }}>
                  <span style={{ fontSize: "1.3rem", flexShrink: 0, marginTop: 1 }}>{h.icon}</span>
                  <div>
                    <p className="label" style={{ fontSize: 10, marginBottom: 3 }}>{h.label}</p>
                    <p style={{ fontSize: 13, color: "#94a3b8", lineHeight: 1.5 }}>{h.value}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
