"use client";
import { useState } from "react";
import ScrollReveal from "@/components/animations/ScrollReveal";

const PROJECTS = [
  {
    id: 1, num: "01",
    title: "Library Management System",
    sub: "Java · JDBC · MySQL",
    desc: "Full-featured desktop application for library operations — secure authentication, book issue/return tracking, automated fine calculation, and persistent MySQL storage.",
    tech: ["Java", "JDBC", "MySQL"],
    features: ["Login Auth", "Issue & Return", "Fine Calc", "DB Connectivity"],
    color: "#7c3aed", icon: "📚",
    github: "https://github.com", demo: "#", status: "Complete",
  },
  {
    id: 2, num: "02",
    title: "Student Management System",
    sub: "Java · MySQL",
    desc: "CRUD-based student records application with search, add, update, and delete operations backed by a structured MySQL database for reliable data management.",
    tech: ["Java", "MySQL"],
    features: ["CRUD Ops", "Search & Filter", "Data Validation", "Persistence"],
    color: "#0891b2", icon: "🎓",
    github: "https://github.com", demo: "#", status: "Complete",
  },
  {
    id: 3, num: "03",
    title: "Portfolio Website",
    sub: "React · Next.js · Tailwind",
    desc: "This portfolio — built with Next.js 16, Tailwind CSS, and custom canvas animations. Fully responsive, dark-themed, and optimized for performance.",
    tech: ["React", "Next.js", "Tailwind CSS"],
    features: ["Animations", "Responsive", "Dark Theme", "SEO Ready"],
    color: "#059669", icon: "💼",
    github: "https://github.com", demo: "#", status: "Live",
  },
];

export default function Projects() {
  const [hov, setHov] = useState<number | null>(null);

  return (
    <section id="projects" className="section">
      <div className="container">
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 64, flexWrap: "wrap", gap: 16 }}>
          <ScrollReveal>
            <p className="label" style={{ marginBottom: 10 }}>Portfolio</p>
            <h2 className="h2">Featured Projects<span style={{ color: "#7c3aed" }}>.</span></h2>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn btn-ghost" style={{ cursor: "none" }}>
              View all on GitHub
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </a>
          </ScrollReveal>
        </div>
        <div className="divider" style={{ marginBottom: 48 }} />

        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {PROJECTS.map((p, i) => (
            <ScrollReveal key={p.id} direction="up" delay={i * 80}>
              <div
                style={{ display: "grid", gridTemplateColumns: "80px 1fr auto", gap: 32, padding: "28px 0", borderBottom: "1px solid rgba(255,255,255,.06)", alignItems: "start", cursor: "none", transition: "all .3s", borderRadius: 12, paddingLeft: hov === p.id ? 16 : 0, paddingRight: hov === p.id ? 16 : 0, background: hov === p.id ? "rgba(124,58,237,.04)" : "transparent" }}
                onMouseEnter={() => setHov(p.id)}
                onMouseLeave={() => setHov(null)}
              >
                {/* Number + icon */}
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: p.color, fontWeight: 600 }}>{p.num}</span>
                  <span style={{ fontSize: "1.8rem" }}>{p.icon}</span>
                </div>

                {/* Content */}
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6, flexWrap: "wrap" }}>
                    <h3 className="h3" style={{ fontFamily: "'Syne',sans-serif" }}>{p.title}</h3>
                    <span className={`pill ${p.status === "Live" ? "pill-green" : "pill-purple"}`} style={{ fontSize: 11 }}>
                      <span style={{ width: 6, height: 6, borderRadius: "50%", background: p.status === "Live" ? "#22c55e" : "#a78bfa", boxShadow: `0 0 6px currentColor` }} />
                      {p.status}
                    </span>
                  </div>
                  <p style={{ fontSize: 12, color: p.color, fontFamily: "'JetBrains Mono',monospace", marginBottom: 10 }}>{p.sub}</p>
                  <p className="body" style={{ maxWidth: 580, marginBottom: 14 }}>{p.desc}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {p.features.map(f => <span key={f} className="tag" style={{ fontSize: 11 }}>✦ {f}</span>)}
                  </div>
                </div>

                {/* Actions */}
                <div style={{ display: "flex", flexDirection: "column", gap: 8, flexShrink: 0 }}>
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost" style={{ cursor: "none", height: 36, fontSize: 13, padding: "0 16px" }}>
                    <svg viewBox="0 0 24 24" fill="currentColor" width={14} height={14}><path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.49.5.09.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>
                    Code
                  </a>
                  <a href={p.demo} target="_blank" rel="noopener noreferrer" className="btn btn-purple" style={{ cursor: "none", height: 36, fontSize: 13, padding: "0 16px", background: p.color }}>
                    Demo ↗
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
