"use client";
import { useEffect, useRef, useState, ReactNode } from "react";

interface Props {
  children: ReactNode;
  direction?: "up" | "left" | "right" | "down";
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function ScrollReveal({ children, direction = "up", delay = 0, className, style }: Props) {
  const [vis, setVis] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setTimeout(() => setVis(true), delay); obs.unobserve(e.target); }
    }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [delay]);

  const t = {
    up: "translateY(32px)",
    down: "translateY(-32px)",
    left: "translateX(-32px)",
    right: "translateX(32px)",
  }[direction];

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        opacity: vis ? 1 : 0,
        transform: vis ? "translate(0,0)" : t,
        transition: `opacity .7s cubic-bezier(.23,1,.32,1) ${delay}ms, transform .7s cubic-bezier(.23,1,.32,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
