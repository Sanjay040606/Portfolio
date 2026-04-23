"use client";

import { useEffect, useRef } from "react";

export default function GlobalMouseGlow() {
  const glowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    const isCoarse = window.matchMedia("(pointer: coarse)").matches;
    if (isCoarse) {
      glow.style.left = "50%";
      glow.style.top = "35%";
      glow.style.transform = "translate3d(-50%, -50%, 0)";
      glow.style.opacity = "0.12";
      return;
    }

    const move = (event: PointerEvent) => {
      glow.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
      glow.style.opacity = "1";
    };

    const leave = () => {
      glow.style.opacity = "0.3";
    };

    window.addEventListener("pointermove", move);
    window.addEventListener("pointerleave", leave);

    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerleave", leave);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[1] -translate-x-1/2 -translate-y-1/2"
      style={{ opacity: 0.18 }}
    >
      <div className="h-[12rem] w-[12rem] rounded-full bg-cyan-300/6 blur-3xl" />
    </div>
  );
}
