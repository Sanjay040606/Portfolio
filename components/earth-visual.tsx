export default function EarthVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[620px]">
      <div className="absolute inset-0 rounded-full border border-white/8 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_55%)]" />

      <div className="absolute inset-[7%] rounded-full border border-white/10 opacity-70" />
      <div className="absolute inset-[15%] rounded-full border border-white/6 opacity-60" />

      <div className="absolute left-1/2 top-1/2 h-[74%] w-[74%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_30%_30%,#b8f5ff_0%,#4faeff_18%,#1749aa_42%,#081f44_70%,#04101f_100%)] shadow-[0_0_120px_rgba(72,146,255,0.32)]">
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_72%_28%,rgba(255,255,255,0.32),transparent_18%),radial-gradient(circle_at_35%_42%,rgba(96,255,198,0.28),transparent_18%),radial-gradient(circle_at_58%_60%,rgba(93,232,168,0.2),transparent_14%),radial-gradient(circle_at_26%_68%,rgba(120,192,255,0.18),transparent_16%),linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.14)_44%,transparent_56%)] opacity-90 mix-blend-screen" />
        <div className="absolute inset-0 rounded-full bg-[repeating-linear-gradient(to_bottom,transparent_0,transparent_13px,rgba(191,231,255,0.15)_13px,rgba(191,231,255,0.15)_14px)] opacity-25" />
        <div className="absolute inset-0 rounded-full bg-[repeating-linear-gradient(to_right,transparent_0,transparent_13px,rgba(191,231,255,0.1)_13px,rgba(191,231,255,0.1)_14px)] opacity-25" />
        <div className="absolute left-[14%] top-[22%] h-[18%] w-[22%] rounded-[60%_40%_55%_45%/55%_45%_55%_45%] bg-[linear-gradient(135deg,#45d78d,#0e6f57_72%)] opacity-90 blur-[0.2px]" />
        <div className="absolute left-[24%] top-[48%] h-[14%] w-[18%] rounded-[48%_52%_45%_55%/58%_40%_60%_42%] bg-[linear-gradient(135deg,#49c77d,#0d7254_78%)] opacity-90" />
        <div className="absolute right-[18%] top-[32%] h-[12%] w-[16%] rounded-[60%_40%_50%_50%/55%_45%_55%_45%] bg-[linear-gradient(135deg,#35b16f,#0e644e_80%)] opacity-80" />
        <div className="absolute bottom-[18%] right-[22%] h-[16%] w-[22%] rounded-[48%_52%_40%_60%/50%_40%_60%_50%] bg-[linear-gradient(135deg,#4bd18d,#0b694f_75%)] opacity-90" />
        <div className="absolute inset-x-[15%] top-[58%] h-[12%] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_68%)] blur-xl" />
      </div>

      <div className="absolute left-1/2 top-1/2 h-[85%] w-[85%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/18 shadow-[inset_0_0_80px_rgba(123,210,255,0.12)]" />
      <div className="absolute left-1/2 top-[8%] h-[16px] w-[16px] -translate-x-1/2 rounded-full bg-white shadow-[0_0_24px_rgba(255,255,255,0.9)]" />

      <div className="absolute left-[8%] top-[28%] flex items-center gap-3 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-xs uppercase tracking-[0.28em] text-white/72 backdrop-blur-sm">
        <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.95)]" />
        Atmosphere
      </div>

      <div className="absolute bottom-[18%] right-[5%] rounded-full border border-white/10 bg-black/30 px-4 py-2 text-xs uppercase tracking-[0.26em] text-white/72 backdrop-blur-sm">
        Orbiting ideas
      </div>
    </div>
  );
}
