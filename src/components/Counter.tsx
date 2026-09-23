"use client";

import { useEffect, useRef } from "react";

// Affiche la valeur finale au rendu serveur (SEO / sans JS), puis l'anime à l'apparition.
export default function Counter({ value, suffix = "", duration = 1800 }: { value: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const render = (n: number) => {
      el.textContent = `${n}${suffix}`;
    };
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - start) / duration, 1);
        render(Math.round(value * (1 - Math.pow(1 - p, 3))));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    });
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
      render(value);
    };
  }, [value, suffix, duration]);

  return (
    <span ref={ref}>{`${value}${suffix}`}</span>
  );
}
