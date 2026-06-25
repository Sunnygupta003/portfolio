"use client";
import ScrollReveal from "@/components/animations/ScrollReveal";

const EDU = [
  {
    title: "Bachelor of Technology", field: "Computer Science & Engineering",
    inst: "GLA University, Mathura", period: "2023 – 2027",
    icon: "🎓", color: "#7c3aed", status: "Pursuing",
    subjects: ["Data Structures", "OOP with Java", "DBMS", "Web Development", "Software Engineering", "Computer Networks"],
    note: "Focusing on Java development, databases, and modern software engineering.",
  },
  {
    title: "Intermediate · 12th Grade", field: "Science Stream (PCM + CS)",
    inst: "Gagan Public School, Aligarh", period: "2021 – 2023",
    icon: "🏫", color: "#0891b2", status: "Completed",
    subjects: ["Physics", "Chemistry", "Mathematics", "Computer Science"],
    note: "Strong analytical foundation through science and computer studies.",
  },
  {
    title: "High School · 10th Grade", field: "General Studies",
    inst: "Gagan Public School, Aligarh", period: "2019 – 2021",
    icon: "📚", color: "#059669", status: "Completed",
    subjects: ["Mathematics", "Science", "Social Studies", "English", "Computer"],
    note: "Consistently strong academic performance across all subjects.",
  },
];

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 64, flexWrap: "wrap", gap: 16 }}>
          <ScrollReveal>
            <p className="label" style={{ marginBottom: 10 }}>Academic</p>
            <h2 className="h2">Education<span style={{ color: "#7c3aed" }}>.</span></h2>
          </ScrollReveal>
        </div>
        <div className="divider" style={{ marginBottom: 48 }} />

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {EDU.map((e, i) => (
            <ScrollReveal key={e.title} direction="left" delay={i * 100}>
              <div className="card-accent" style={{ padding: "28px 32px" }}>
                {/* Top accent line */}
                <div style={{ height: 2, background: `linear-gradient(90deg, ${e.color}, transparent)`, margin: "-28px -32px 24px", borderRadius: "16px 16px 0 0" }} />

                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 20, flexWrap: "wrap" }}>
                  {/* Left */}
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                    <div style={{ width: 52, height: 52, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.6rem", flexShrink: 0, background: `${e.color}10`, border: `1px solid ${e.color}20` }}>
                      {e.icon}
                    </div>
                    <div>
                      <h3 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: "1.05rem", color: "#f0f0f4", marginBottom: 2 }}>{e.title}</h3>
                      <p style={{ fontSize: 13, color: e.color, fontFamily: "'JetBrains Mono',monospace", marginBottom: 6 }}>{e.field}</p>
                      <p style={{ fontSize: 13, color: "#6a6a7a" }}>📍 {e.inst}</p>
                    </div>
                  </div>

                  {/* Right */}
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 8, flexShrink: 0 }}>
                    <span className={`pill ${e.status === "Pursuing" ? "pill-green" : "pill-purple"}`} style={{ fontSize: 11 }}>
                      <span style={{ width: 6, height: 6, borderRadius: "50%", background: e.status === "Pursuing" ? "#22c55e" : "#a78bfa" }} />
                      {e.status}
                    </span>
                    <span className="label" style={{ fontSize: 10 }}>📅 {e.period}</span>
                  </div>
                </div>

                <p className="body" style={{ margin: "16px 0 14px", fontSize: 13, paddingLeft: 68 }}>{e.note}</p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, paddingLeft: 68 }}>
                  {e.subjects.map(s => <span key={s} className="tag" style={{ fontSize: 11 }}>{s}</span>)}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
