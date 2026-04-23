"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const next = max > 0 ? (scrollTop / max) * 100 : 0;
      setProgress(next);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed left-0 top-0 z-[70] h-[2px] w-full bg-white/6">
      <div className="h-full bg-gradient-to-r from-cyan-200 via-sky-200 to-white transition-[width] duration-150 ease-out" style={{ width: `${progress}%` }} />
    </div>
  );
}
