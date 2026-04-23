"use client";

import { useEffect, useState, type CSSProperties, type ReactNode } from "react";

type InteractivePanelProps = {
  children: ReactNode;
  className?: string;
  mobileMotion?: boolean;
};

export default function InteractivePanel({ children, className = "", mobileMotion = true }: InteractivePanelProps) {
  const [style, setStyle] = useState<CSSProperties>({
    transform: "perspective(1200px) rotateX(0deg) rotateY(0deg)",
    ["--panel-x" as string]: "50%",
    ["--panel-y" as string]: "50%",
    ["--panel-dx" as string]: "0",
    ["--panel-dy" as string]: "0",
  });
  const [isCoarse, setIsCoarse] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(pointer: coarse)");
    const update = () => setIsCoarse(media.matches);
    update();
    media.addEventListener?.("change", update);
    return () => media.removeEventListener?.("change", update);
  }, []);

  if (isCoarse && mobileMotion) {
    return <div className={`${className} interactive-panel-mobile`}>{children}</div>;
  }

  return (
    <div
      className={`interactive-panel ${className}`}
      onPointerMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const rotateY = ((x / rect.width) - 0.5) * 10;
        const rotateX = ((y / rect.height) - 0.5) * -10;
        const dx = ((x / rect.width) - 0.5).toFixed(3);
        const dy = ((y / rect.height) - 0.5).toFixed(3);

        setStyle({
          transform: `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-2px)`,
          ["--panel-x" as string]: `${x}px`,
          ["--panel-y" as string]: `${y}px`,
          ["--panel-dx" as string]: dx,
          ["--panel-dy" as string]: dy,
        });
      }}
      onPointerLeave={() => {
        setStyle({
          transform: "perspective(1200px) rotateX(0deg) rotateY(0deg)",
          ["--panel-x" as string]: "50%",
          ["--panel-y" as string]: "50%",
          ["--panel-dx" as string]: "0",
          ["--panel-dy" as string]: "0",
        });
      }}
      style={style}
    >
      {children}
    </div>
  );
}
