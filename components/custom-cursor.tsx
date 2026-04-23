"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const isCoarse = window.matchMedia("(pointer: coarse)").matches;
    if (isCoarse) return;

    const move = (event: PointerEvent) => {
      cursor.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
    };

    const over = (event: Event) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;
      if (target.closest("a, button, [role='button']")) setActive(true);
    };

    const out = (event: Event) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;
      if (target.closest("a, button, [role='button']")) setActive(false);
    };

    window.addEventListener("pointermove", move);
    window.addEventListener("pointerover", over);
    window.addEventListener("pointerout", out);

    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerover", over);
      window.removeEventListener("pointerout", out);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[60] hidden -translate-x-1/2 -translate-y-1/2 md:block"
    >
      <div
        className={`absolute -left-3 -top-3 h-6 w-6 rounded-full border border-cyan-100/40 bg-cyan-100/10 transition-transform duration-150 ${
          active ? "scale-[2.3]" : "scale-100"
        }`}
      />
      <div
        className={`h-2 w-2 rounded-full bg-cyan-100 shadow-[0_0_16px_rgba(165,243,252,0.65)] transition-transform duration-150 ${
          active ? "scale-110" : "scale-100"
        }`}
      />
    </div>
  );
}
