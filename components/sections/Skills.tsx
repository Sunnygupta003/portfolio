"use client";
import { useEffect, useRef, useState } from "react";
import ScrollReveal from "@/components/animations/ScrollReveal";

const SKILLS = [
  { name: "Java", pct: 80, icon: "☕", cat: "Language", color: "#f89820" },
  { name: "Spring Boot", pct: 65, icon: "🍃", cat: "Framework", color: "#6db33f" },
  { name: "MySQL", pct: 75, icon: "🐬", cat: "Database", color: "#00758f" },
  { name: "JDBC", pct: 70, icon: "🔌", cat: "Connectivity", color: "#a78bfa" },
  { name: "HTML", pct: 88, icon: "🌐", cat: "Frontend", color: "#e34c26" },
  { name: "CSS", pct: 82, icon: "🎨", cat: "Frontend", color: "#264de4" },
  { name: "JavaScript", pct: 65, icon: "⚡", cat: "Language", color: "#f7df1e" },
  { name: "React", pct: 60, icon: "⚛️", cat: "Framework", color: "#61dafb" },
  { name: "Git & GitHub", pct: 75, icon: "🐙", cat: "Tools", color: "#f05032" },
];

function Bar({ skill, idx }: { skill: typeof SKILLS[0]; idx: number }) {
  const [on, setOn] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setTimeout(() => setOn(true), idx * 60); obs.unobserve(e.target); }
    }, { threshold: .2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [idx]);

  return (
    <div ref={ref} className="card-accent" style={{ padding: "18px 20px", opacity: on ? 1 : 0, transform: on ? "none" : "translateY(16px)", transition: `opacity .5s ease ${idx * 50}ms, transform .5s ease ${idx * 50}ms` }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: "1.2rem" }}>{skill.icon}</span>
          <div>
            <p style={{ fontSize: 14, fontWeight: 600, color: "#f0f0f4", fontFamily: "'Syne',sans-serif" }}>{skill.name}</p>
            <span className="tag" style={{ marginTop: 2, height: 20, fontSize: 10, background: `${skill.color}10`, borderColor: `${skill.color}25`, color: skill.color }}>{skill.cat}</span>
          </div>
        </div>
        <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 13, fontWeight: 600, color: skill.color }}>{on ? skill.pct : 0}%</span>
      </div>
      <div className="skill-bar">
        <div className="skill-fill" style={{ width: on ? `${skill.pct}%` : "0%", background: `linear-gradient(90deg,${skill.color}aa,${skill.color})`, transitionDelay: `${idx * 50}ms` }} />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section" style={{ background: "var(--bg2)" }}>
      <div className="container">
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 64, flexWrap: "wrap", gap: 16 }}>
          <ScrollReveal>
            <p className="label" style={{ marginBottom: 10 }}>Tech Stack</p>
            <h2 className="h2">My Skills<span style={{ color: "#7c3aed" }}>.</span></h2>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <p className="body" style={{ maxWidth: 320, textAlign: "right" }}>A growing toolkit of technologies I use to ship real software.</p>
          </ScrollReveal>
        </div>
        <div className="divider" style={{ marginBottom: 48 }} />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 12 }}>
          {SKILLS.map((s, i) => <Bar key={s.name} skill={s} idx={i} />)}
        </div>

        <ScrollReveal delay={400}>
          <div style={{ marginTop: 40, paddingTop: 40, borderTop: "1px solid rgba(255,255,255,.06)" }}>
            <p className="label" style={{ marginBottom: 16, textAlign: "center" }}>Also familiar with</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center" }}>
              {["OOP Concepts", "Data Structures", "Problem Solving", "Error Debugging", "Arduino & IoT", "Linux Basics", "REST APIs", "Algorithms"].map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
