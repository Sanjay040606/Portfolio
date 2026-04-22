"use client";

import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";

export default function PageTransition({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".js-page-enter",
        { y: 26, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.07,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        ".js-page-line",
        { scaleX: 0, transformOrigin: "left center" },
        {
          scaleX: 1,
          duration: 0.9,
          stagger: 0.05,
          ease: "power2.out",
          delay: 0.15,
        }
      );

      gsap.fromTo(
        ".js-page-image",
        { scale: 1.04, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          delay: 0.12,
        }
      );
    }, ref);

    return () => ctx.revert();
  }, []);

  return <div ref={ref}>{children}</div>;
}
