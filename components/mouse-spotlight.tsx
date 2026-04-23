"use client";

import { useState, type CSSProperties } from "react";

type MouseSpotlightProps = {
  className?: string;
};

export default function MouseSpotlight({ className = "" }: MouseSpotlightProps) {
  const [point, setPoint] = useState({ x: 50, y: 50, active: false });

  return (
    <div
      className={className}
      onPointerMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        setPoint({
          x: event.clientX - rect.left,
          y: event.clientY - rect.top,
          active: true,
        });
      }}
      onPointerLeave={() => {
        setPoint((current) => ({ ...current, active: false }));
      }}
      style={
        {
          "--spot-x": `${point.x}px`,
          "--spot-y": `${point.y}px`,
        } as CSSProperties
      }
    >
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: point.active ? 1 : 0.55,
          background:
            "radial-gradient(circle at var(--spot-x) var(--spot-y), rgba(103,232,249,0.22), transparent 28%), radial-gradient(circle at var(--spot-x) var(--spot-y), rgba(59,130,246,0.14), transparent 40%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-40 transition-transform duration-300"
        style={{
          transform: point.active ? "scale(1.02)" : "scale(1)",
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(circle at var(--spot-x) var(--spot-y), black 0%, transparent 70%)",
        }}
      />
    </div>
  );
}
