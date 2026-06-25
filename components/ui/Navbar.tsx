"use client";
import { useEffect, useState } from "react";
import { useTheme } from "@/components/ui/ThemeProvider";

const LINKS = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Education", id: "education" },
  { label: "Contact", id: "contact" },
];

function SunIcon() {
  return (
    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="5"/>
      <path strokeLinecap="round" d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
    </svg>
  );
}
function MoonIcon() {
  return (
    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
    </svg>
  );
}

export default function Navbar() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const [lastY, setLastY] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const fn = () => {
      const y = window.scrollY;
      setScrolled(y > 50);
      setHidden(y > lastY + 8 && y > 120);
      setLastY(y);
      const ids = [...LINKS].map(l => l.id).reverse();
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && y >= el.offsetTop - 160) { setActive(id); break; }
      }
    };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, [lastY]);

  const go = (id: string) => { setOpen(false); document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); };

  return (
    <nav
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        transform: hidden ? "translateY(-100%)" : "translateY(0)",
        background: scrolled ? (theme === "dark" ? "rgba(7,7,9,.88)" : "rgba(245,245,250,.88)") : "transparent",
        backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        transition: "transform .4s ease, background .35s ease, border-color .35s ease",
      }}
    >
      <div className="container" style={{ height: 62, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
        {/* Logo */}
        <button onClick={() => go("home")} style={{ cursor: "none", background: "none", border: "none", flexShrink: 0 }}>
          <span style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "1.15rem", letterSpacing: "-0.5px" }}>
            <span style={{ color: "var(--text1)" }}>SG</span>
            <span style={{ color: "var(--accent)" }}>.</span>
            <span style={{ color: "var(--text3)", fontWeight: 400, fontSize: ".8rem" }}>dev</span>
          </span>
        </button>

        {/* Desktop links */}
        <div style={{ display: "flex", alignItems: "center", gap: 2, flex: 1, justifyContent: "center" }}>
          {LINKS.map(l => {
            const isActive = active === l.id;
            return (
              <button key={l.id} onClick={() => go(l.id)} style={{
                background: isActive ? "rgba(124,58,237,.1)" : "transparent",
                border: isActive ? "1px solid rgba(124,58,237,.22)" : "1px solid transparent",
                color: isActive ? "var(--accent)" : "var(--text3)",
                cursor: "none", padding: "5px 13px", borderRadius: 8,
                fontSize: 13, fontWeight: 500, transition: "all .2s",
              }}
                onMouseEnter={e => { if (!isActive) { const el = e.currentTarget as HTMLElement; el.style.color = "var(--text2)"; el.style.background = "var(--bg3)"; } }}
                onMouseLeave={e => { if (!isActive) { const el = e.currentTarget as HTMLElement; el.style.color = "var(--text3)"; el.style.background = "transparent"; } }}
              >{l.label}</button>
            );
          })}
        </div>

        {/* Right: Theme toggle + CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
          {mounted && (
            <button
              onClick={toggle}
              className="theme-toggle"
              title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
              style={{ cursor: "none" }}
            >
              {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            </button>
          )}
          <button onClick={() => go("contact")} className="btn btn-purple" style={{ height: 38, padding: "0 18px", fontSize: 13, cursor: "none" }}>
            Hire Me
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden"
            style={{ display: "none", flexDirection: "column", gap: 5, background: "none", border: "none", cursor: "none", padding: 4 }}
            aria-label="Menu"
          >
            {[0, 1, 2].map(i => (
              <span key={i} style={{ display: "block", width: 22, height: 1.5, background: "var(--text2)", borderRadius: 2, transition: "all .3s" }} />
            ))}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div style={{ overflow: "hidden", maxHeight: open ? 400 : 0, transition: "max-height .35s ease", background: theme === "dark" ? "rgba(7,7,9,.96)" : "rgba(245,245,250,.96)", backdropFilter: "blur(20px)", borderTop: open ? "1px solid var(--border)" : "none" }}>
        <div className="container" style={{ paddingTop: 12, paddingBottom: 16, display: "flex", flexDirection: "column", gap: 2 }}>
          {LINKS.map(l => (
            <button key={l.id} onClick={() => go(l.id)} style={{ textAlign: "left", padding: "10px 12px", borderRadius: 8, fontSize: 14, fontWeight: 500, border: "none", cursor: "none", transition: "all .2s", color: active === l.id ? "var(--accent)" : "var(--text3)", background: active === l.id ? "rgba(124,58,237,.08)" : "transparent" }}>
              {l.label}
            </button>
          ))}
          <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
            {mounted && <button onClick={toggle} className="theme-toggle" style={{ cursor: "none", flex: 1, height: 40, justifyContent: "center" }}>{theme === "dark" ? <SunIcon /> : <MoonIcon />}</button>}
            <button onClick={() => go("contact")} className="btn btn-purple" style={{ cursor: "none", flex: 2, justifyContent: "center" }}>Hire Me</button>
          </div>
        </div>
      </div>
    </nav>
  );
}
