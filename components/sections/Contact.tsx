"use client";
import { useState } from "react";
import ScrollReveal from "@/components/animations/ScrollReveal";

type Status = "idle" | "sending" | "sent";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise(r => setTimeout(r, 1500));
    setStatus("sent");
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setStatus("idle"), 4000);
  };

  const INFO = [
    { icon: "✉️", label: "Email", val: "shradhagarg0909@gmail.com", href: "mailto:shradhagarg0909@gmail.com" },
    { icon: "📞", label: "Phone", val: "+91 8791285126", href: "tel:+918791285126" },
    { icon: "💼", label: "LinkedIn", val: "linkedin.com/in/shradha-garg", href: "https://linkedin.com" },
    { icon: "🐙", label: "GitHub", val: "github.com/shradhagarg", href: "https://github.com" },
    { icon: "📍", label: "Location", val: "Aligarh, Uttar Pradesh", href: undefined },
  ];

  return (
    <section id="contact" className="section" style={{ background: "var(--bg2)" }}>
      <div className="container">
        <div style={{ marginBottom: 64 }}>
          <ScrollReveal>
            <p className="label" style={{ marginBottom: 10 }}>Contact</p>
            <h2 className="h2">Get In Touch<span style={{ color: "#7c3aed" }}>.</span></h2>
          </ScrollReveal>
        </div>
        <div className="divider" style={{ marginBottom: 48 }} />

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "start" }}>
          {/* Left */}
          <ScrollReveal direction="left">
            <div>
              <p className="body-lg" style={{ marginBottom: 32, fontSize: "1rem" }}>
                Open to internship opportunities, freelance projects, and collaborations. Whether it&apos;s a question or just a hello — reach out!
              </p>

              {/* Availability */}
              <div className="card" style={{ padding: "16px 20px", marginBottom: 28, display: "flex", alignItems: "center", gap: 12, border: "1px solid rgba(34,197,94,.15)", background: "rgba(34,197,94,.04)" }}>
                <span className="dot-pulse" />
                <p style={{ fontSize: 13, color: "#86efac", fontWeight: 500 }}>Currently available for internships & freelance work</p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                {INFO.map(c => (
                  <div
                    key={c.label}
                    style={{ display: "flex", alignItems: "center", gap: 14, padding: "12px 16px", borderRadius: 10, cursor: c.href ? "none" : "default", transition: "background .2s", textDecoration: "none" }}
                    onMouseEnter={e => { if (c.href) (e.currentTarget as HTMLElement).style.background = "rgba(124,58,237,.06)"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}
                    onClick={() => c.href && (c.href.startsWith("http") ? window.open(c.href, "_blank") : window.location.href = c.href)}
                  >
                    <span style={{ fontSize: "1rem", flexShrink: 0, width: 24, textAlign: "center" }}>{c.icon}</span>
                    <div>
                      <p className="label" style={{ fontSize: 9, marginBottom: 1 }}>{c.label}</p>
                      <p style={{ fontSize: 13, color: "#c4c4d4" }}>{c.val}</p>
                    </div>
                    {c.href && <svg width="12" height="12" fill="none" stroke="#444458" strokeWidth={2} viewBox="0 0 24 24" style={{ marginLeft: "auto", flexShrink: 0 }}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>}
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Form */}
          <ScrollReveal direction="right" delay={100}>
            <form onSubmit={onSubmit} className="card" style={{ padding: "32px", background: "var(--bg3)" }}>
              <h3 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "#f0f0f4", marginBottom: 24 }}>Send a Message</h3>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
                <div>
                  <label className="label" style={{ display: "block", marginBottom: 7, fontSize: 10 }}>Your Name</label>
                  <input name="name" value={form.name} onChange={onChange} placeholder="Shradha Garg" required className="input" />
                </div>
                <div>
                  <label className="label" style={{ display: "block", marginBottom: 7, fontSize: 10 }}>Email Address</label>
                  <input type="email" name="email" value={form.email} onChange={onChange} placeholder="you@email.com" required className="input" />
                </div>
              </div>
              <div style={{ marginBottom: 14 }}>
                <label className="label" style={{ display: "block", marginBottom: 7, fontSize: 10 }}>Subject</label>
                <input name="subject" value={form.subject} onChange={onChange} placeholder="Internship opportunity..." required className="input" />
              </div>
              <div style={{ marginBottom: 22 }}>
                <label className="label" style={{ display: "block", marginBottom: 7, fontSize: 10 }}>Message</label>
                <textarea name="message" value={form.message} onChange={onChange} placeholder="Hi Shradha, I'd love to connect about..." required rows={5} className="input" />
              </div>

              <button type="submit" disabled={status !== "idle"} className="btn btn-purple" style={{ width: "100%", justifyContent: "center", opacity: status === "sending" ? .8 : 1, cursor: "none" }}>
                {status === "idle" && <>Send Message <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg></>}
                {status === "sending" && <>Sending... <svg className="animate-spin" width="14" height="14" fill="none" viewBox="0 0 24 24"><circle opacity=".25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path opacity=".75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg></>}
                {status === "sent" && <>Message Sent ✓</>}
              </button>
              {status === "sent" && <p style={{ textAlign: "center", fontSize: 13, color: "#86efac", marginTop: 12 }}>Thanks! I&apos;ll reply within 24 hours 🚀</p>}
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
