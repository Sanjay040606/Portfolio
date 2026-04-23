"use client";

import { useEffect, useRef, useState } from "react";

type StatCounterProps = {
  value: number;
  suffix?: string;
  label: string;
  delay?: number;
};

export default function StatCounter({ value, suffix = "", label, delay = 0 }: StatCounterProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setVisible(true);
        observer.disconnect();
      },
      { threshold: 0.35 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;

    const timeout = window.setTimeout(() => {
      let current = 0;
      const duration = 900;
      const start = performance.now();

      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        current = Math.floor(progress * value);
        setCount(current);

        if (progress < 1) {
          requestAnimationFrame(tick);
        }
      };

      requestAnimationFrame(tick);
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [visible, value, delay]);

  return (
    <div ref={ref} className="glass-panel rounded-[1.4rem] border border-white/12 px-4 py-4">
      <p className="text-3xl font-heading leading-none text-white">{count}{suffix}</p>
      <p className="mt-2 text-xs uppercase tracking-[0.24em] text-white/42">{label}</p>
    </div>
  );
}
