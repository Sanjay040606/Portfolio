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
        { y: 36, opacity: 0, filter: "blur(12px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1.05,
          stagger: 0.08,
          ease: "power4.out",
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
        ".js-home-hero",
        { scale: 0.76, y: 54, rotate: -5, rotateX: 16, opacity: 0 },
        {
          scale: 1,
          y: 0,
          rotate: 0,
          rotateX: 0,
          opacity: 1,
          duration: 1.45,
          ease: "expo.out",
          delay: 0.02,
        }
      );

      gsap.fromTo(
        ".js-home-photo",
        { scale: 0.2, opacity: 0, rotate: -28, y: -14 },
        {
          scale: 1,
          opacity: 1,
          rotate: 0,
          y: 0,
          duration: 1.1,
          ease: "elastic.out(1, 0.8)",
          delay: 0.18,
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
