"use client";

import { useEffect, useRef, useState, type CSSProperties, type PointerEvent as ReactPointerEvent, type ReactNode } from "react";

type InteractivePanelProps = {
  children: ReactNode;
  className?: string;
  mobileMotion?: boolean;
  tapRipple?: boolean;
  paused?: boolean;
  onPointerDown?: (event: ReactPointerEvent<HTMLDivElement>) => void;
  onPointerMove?: (event: ReactPointerEvent<HTMLDivElement>) => void;
  onPointerUp?: (event: ReactPointerEvent<HTMLDivElement>) => void;
  onPointerCancel?: (event: ReactPointerEvent<HTMLDivElement>) => void;
  onPointerLeave?: (event: ReactPointerEvent<HTMLDivElement>) => void;
};

export default function InteractivePanel({
  children,
  className = "",
  mobileMotion = true,
  tapRipple = false,
  paused = false,
  onPointerDown,
  onPointerMove,
  onPointerUp,
  onPointerCancel,
  onPointerLeave,
}: InteractivePanelProps) {
  const [style, setStyle] = useState<CSSProperties>({
    transform: "perspective(1200px) rotateX(0deg) rotateY(0deg)",
    ["--panel-x" as string]: "50%",
    ["--panel-y" as string]: "50%",
    ["--panel-dx" as string]: "0",
    ["--panel-dy" as string]: "0",
    ["--panel-tap-x" as string]: "50%",
    ["--panel-tap-y" as string]: "50%",
  });
  const [isCoarse, setIsCoarse] = useState(false);
  const [tapActive, setTapActive] = useState(false);
  const tapTimerRef = useRef<number | null>(null);

  useEffect(() => {
    const media = window.matchMedia("(pointer: coarse)");
    const update = () => setIsCoarse(media.matches);
    update();
    media.addEventListener?.("change", update);
    return () => {
      media.removeEventListener?.("change", update);
      if (tapTimerRef.current) {
        clearTimeout(tapTimerRef.current);
      }
    };
  }, []);

  const triggerTap = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!tapRipple) {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    setStyle((current) => ({
      ...current,
      ["--panel-tap-x" as string]: `${Math.max(0, Math.min(rect.width, x))}px`,
      ["--panel-tap-y" as string]: `${Math.max(0, Math.min(rect.height, y))}px`,
    }));

    if (tapTimerRef.current) {
      clearTimeout(tapTimerRef.current);
    }

    setTapActive(false);
    window.requestAnimationFrame(() => {
      setTapActive(true);
      tapTimerRef.current = window.setTimeout(() => setTapActive(false), 700);
    });
  };

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    triggerTap(event);
    onPointerDown?.(event);
  };

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!isCoarse || !mobileMotion) {
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
    }

    onPointerMove?.(event);
  };

  const handlePointerUp = (event: ReactPointerEvent<HTMLDivElement>) => {
    onPointerUp?.(event);
  };

  const handlePointerCancel = (event: ReactPointerEvent<HTMLDivElement>) => {
    onPointerCancel?.(event);
  };

  const handlePointerLeave = (event: ReactPointerEvent<HTMLDivElement>) => {
    setStyle({
      transform: "perspective(1200px) rotateX(0deg) rotateY(0deg)",
      ["--panel-x" as string]: "50%",
      ["--panel-y" as string]: "50%",
      ["--panel-dx" as string]: "0",
      ["--panel-dy" as string]: "0",
      ["--panel-tap-x" as string]: "50%",
      ["--panel-tap-y" as string]: "50%",
    });

    onPointerLeave?.(event);
  };

  if (isCoarse && mobileMotion) {
    const vars = style as Record<string, string | number | undefined>;
    const mobileStyle = {
      ["--panel-x" as string]: vars["--panel-x"] ?? "50%",
      ["--panel-y" as string]: vars["--panel-y"] ?? "50%",
      ["--panel-dx" as string]: vars["--panel-dx"] ?? "0",
      ["--panel-dy" as string]: vars["--panel-dy"] ?? "0",
      ["--panel-tap-x" as string]: vars["--panel-tap-x"] ?? "50%",
      ["--panel-tap-y" as string]: vars["--panel-tap-y"] ?? "50%",
    } as CSSProperties;

    return (
      <div
        className={`${className} interactive-panel-mobile`}
        data-tap-active={tapRipple && tapActive ? "true" : undefined}
        data-paused={paused ? "true" : undefined}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerCancel}
        onPointerLeave={handlePointerLeave}
        style={mobileStyle}
      >
        {children}
      </div>
    );
  }

  return (
    <div
      className={`interactive-panel ${className}`}
      data-tap-active={tapRipple && tapActive ? "true" : undefined}
      data-paused={paused ? "true" : undefined}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerCancel}
      onPointerLeave={handlePointerLeave}
      style={style}
    >
      {children}
    </div>
  );
}
