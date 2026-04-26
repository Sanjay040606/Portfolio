import type { CSSProperties } from "react";

type AmbientRainProps = {
  className?: string;
  style?: CSSProperties;
};

const particles = [
  { left: "6%", delay: "0s", duration: "8.5s", height: "38px", width: "2px", opacity: "0.55" },
  { left: "11%", delay: "1.2s", duration: "10.5s", height: "24px", width: "2px", opacity: "0.42" },
  { left: "18%", delay: "0.5s", duration: "9.2s", height: "30px", width: "1.5px", opacity: "0.5" },
  { left: "24%", delay: "2.2s", duration: "11s", height: "42px", width: "2px", opacity: "0.35" },
  { left: "31%", delay: "0.9s", duration: "9.8s", height: "26px", width: "2px", opacity: "0.45" },
  { left: "39%", delay: "1.8s", duration: "10.8s", height: "34px", width: "1.5px", opacity: "0.4" },
  { left: "47%", delay: "0.2s", duration: "8.8s", height: "46px", width: "2px", opacity: "0.58" },
  { left: "56%", delay: "1.5s", duration: "9.6s", height: "28px", width: "2px", opacity: "0.44" },
  { left: "64%", delay: "0.7s", duration: "10.2s", height: "36px", width: "1.5px", opacity: "0.38" },
  { left: "71%", delay: "2.4s", duration: "11.2s", height: "24px", width: "2px", opacity: "0.48" },
  { left: "78%", delay: "1s", duration: "9s", height: "40px", width: "2px", opacity: "0.52" },
  { left: "85%", delay: "2s", duration: "10.6s", height: "28px", width: "1.5px", opacity: "0.36" },
  { left: "91%", delay: "0.3s", duration: "8.9s", height: "44px", width: "2px", opacity: "0.46" },
];

export default function AmbientRain({ className = "", style }: AmbientRainProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full overflow-hidden ${className}`}
      style={{
        maskImage: "linear-gradient(180deg, black 0%, black 85%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(180deg, black 0%, black 85%, transparent 100%)",
        ...style,
      }}
      >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(103,232,249,0.1),transparent_58%)]" />
      <div
        className="ambient-rain-focus pointer-events-none absolute left-[var(--panel-x,50%)] top-[var(--panel-y,50%)] h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-200/10 opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100"
      />
      {particles.map((particle, index) => (
        <span
          key={index}
          className="ambient-rain-drop absolute top-[-2rem] block rounded-full bg-cyan-200/70 blur-[0.6px] transition-[filter,opacity] duration-300 group-hover:brightness-110"
          style={
            {
              left: particle.left,
              width: particle.width,
              height: particle.height,
              opacity: particle.opacity,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
          } as CSSProperties
          }
        />
      ))}
      <div className="ambient-rain-pulse pointer-events-none absolute left-[var(--panel-tap-x,50%)] top-[var(--panel-tap-y,50%)] h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-100/25 bg-cyan-200/8 opacity-0" />
      <div className="absolute left-[12%] top-6 h-16 w-16 rounded-full bg-cyan-300/8 blur-3xl ambient-rain-glow" />
      <div className="absolute right-[18%] top-2 h-20 w-20 rounded-full bg-emerald-300/6 blur-3xl ambient-rain-glow" />
    </div>
  );
}
