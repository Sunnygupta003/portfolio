"use client";
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const raf = useRef<number>(0);

  useEffect(() => {
    if (typeof window === "undefined" || window.innerWidth < 768) return;

    const move = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
      }
    };

    const tick = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.12;
      ring.current.y += (pos.current.y - ring.current.y) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = `${ring.current.x}px`;
        ringRef.current.style.top = `${ring.current.y}px`;
      }
      raf.current = requestAnimationFrame(tick);
    };

    const addHover = (el: Element) => {
      el.addEventListener("mouseenter", () => {
        dotRef.current?.classList.add("hov");
        ringRef.current?.classList.add("hov");
      });
      el.addEventListener("mouseleave", () => {
        dotRef.current?.classList.remove("hov");
        ringRef.current?.classList.remove("hov");
      });
    };

    const refresh = () => {
      document.querySelectorAll("a, button, [data-hover]").forEach(addHover);
    };

    window.addEventListener("mousemove", move);
    const obs = new MutationObserver(refresh);
    obs.observe(document.body, { childList: true, subtree: true });
    refresh();
    tick();

    return () => {
      cancelAnimationFrame(raf.current);
      window.removeEventListener("mousemove", move);
      obs.disconnect();
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}
