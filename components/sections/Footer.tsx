"use client";

const NAV = ["Home","About","Skills","Projects","Experience","Education","Contact"];

export default function Footer() {
  const go = (id: string) => document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer style={{ borderTop: "1px solid rgba(255,255,255,.06)", background: "var(--bg)", paddingTop: 60, paddingBottom: 32 }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: 40, alignItems: "start", marginBottom: 48 }}>
          {/* Brand */}
          <div>
            <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "1.5rem", marginBottom: 8 }}>
              <span style={{ color: "#f0f0f4" }}>Shradha</span>
              <span style={{ color: "#7c3aed" }}>.dev</span>
            </div>
            <p style={{ fontSize: 13, color: "#444458", lineHeight: 1.6, maxWidth: 220 }}>
              Java Developer · Full Stack Enthusiast<br/>
              GLA University, Mathura
            </p>
          </div>

          {/* Links */}
          <div style={{ display: "flex", flexDirection: "column", gap: 4, alignItems: "center" }}>
            <p className="label" style={{ marginBottom: 10, fontSize: 10 }}>Navigation</p>
            {NAV.map(n => (
              <button key={n} onClick={() => go(n)} className="label"
                style={{ background: "none", border: "none", color: "#333348", fontSize: 12, cursor: "none", transition: "color .2s", letterSpacing: ".1em" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#a78bfa"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "#333348"; }}
              >{n}</button>
            ))}
          </div>

          {/* Contact info */}
          <div style={{ textAlign: "right" }}>
            <p className="label" style={{ marginBottom: 12, fontSize: 10 }}>Contact</p>
            {[
              ["✉️", "shradhagarg0909@gmail.com"],
              ["📞", "+91 8791285126"],
              ["📍", "Aligarh, U.P. 202001"],
            ].map(([ic, v]) => (
              <p key={v} style={{ fontSize: 12, color: "#333348", marginBottom: 6 }}>{ic} {v}</p>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,.05)", paddingTop: 24, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <p style={{ fontSize: 12, color: "#222234" }}>
            © 2025 Shradha Garg · Built with Next.js & Tailwind
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="btn btn-ghost"
            style={{ cursor: "none", height: 32, fontSize: 12, padding: "0 14px" }}
          >
            ↑ Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
