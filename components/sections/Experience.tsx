"use client";
import React from "react";
import ScrollReveal from "@/components/animations/ScrollReveal";

const EVENTS = [
  { year: "Jun 2025", title: "Frontend Battle 2.0", org: "WebnD · IIT Bhubaneswar", type: "Hackathon", color: "#7c3aed", icon: "🏆", desc: "Competed in a national-level frontend hackathon organized by WebnD (Web Dev & Design Society of IIT Bhubaneswar) — 19–21 June 2025." },
  { year: "Apr 2025", title: "SmartLink Hackathon", org: "IEEE PES · GLA University", type: "Workshop", color: "#0891b2", icon: "⚡", desc: "Arduino & IoT Workshop organized by IEEE PES Student Chapter and the Dept. of Electrical Engineering at GLA University." },
  { year: "2025", title: "ISP 47 Contest Webinar", org: "Internshala Student Partner", type: "Webinar", color: "#059669", icon: "🌐", desc: "ISP 47 First Registrations Contest Webinar — building career readiness, networking, and professional skills." },
  { year: "2025", title: "AI IoT Survival Challenge", org: "IIOT Lab · GLA University", type: "Workshop", color: "#d97706", icon: "🤖", desc: "Hands-on AI + IoT exploration at the IIOT Lab, CSED Block — blending software intelligence with hardware." },
];

export default function Experience() {
  return (
    <section id="experience" className="section" style={{ background: "var(--bg2)" }}>
      <div className="container">
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 64, flexWrap: "wrap", gap: 16 }}>
          <ScrollReveal>
            <p className="label" style={{ marginBottom: 10 }}>Activities</p>
            <h2 className="h2">Events & Experience<span style={{ color: "#7c3aed" }}>.</span></h2>
          </ScrollReveal>
        </div>
        <div className="divider" style={{ marginBottom: 48 }} />

        <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: 0 }}>
          {/* Left year column */}
          <div />
          <div />

          {EVENTS.map((ev, i) => (
            <React.Fragment key={ev.title}>
              <ScrollReveal direction="left">
                <div style={{ paddingTop: 20, paddingRight: 40, paddingBottom: i < EVENTS.length - 1 ? 40 : 0 }}>
                  <span className="label" style={{ fontSize: 11 }}>{ev.year}</span>
                  <div style={{ marginTop: 8 }}>
                    <span className="tag" style={{ background: `${ev.color}10`, borderColor: `${ev.color}25`, color: ev.color, fontSize: 11 }}>{ev.type}</span>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={80}>
                <div style={{ position: "relative", paddingLeft: 32, paddingBottom: i < EVENTS.length - 1 ? 40 : 0, paddingTop: 20 }}>
                  {i < EVENTS.length - 1 && (
                    <div style={{ position: "absolute", left: 4, top: 28, bottom: 0, width: 1, background: "linear-gradient(180deg, rgba(124,58,237,.4) 0%, transparent 100%)" }} />
                  )}
                  <div style={{ position: "absolute", left: 0, top: 24, width: 9, height: 9, borderRadius: "50%", background: ev.color, boxShadow: `0 0 10px ${ev.color}80` }} />

                  <div className="card-accent" style={{ padding: "20px 24px" }}>
                    <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                      <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{ev.icon}</span>
                      <div style={{ flex: 1 }}>
                        <h3 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: "1rem", color: "#f0f0f4", marginBottom: 3 }}>{ev.title}</h3>
                        <p style={{ fontSize: 12, color: ev.color, fontFamily: "'JetBrains Mono',monospace", marginBottom: 10 }}>{ev.org}</p>
                        <p className="body" style={{ fontSize: 13 }}>{ev.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
