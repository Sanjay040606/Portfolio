import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { assets, hero, homeFacts, homeHighlights, homeStats, socialLinks } from "@/lib/content";
import SocialIcon from "@/components/social-icon";
import InteractivePanel from "@/components/interactive-panel";
import StatCounter from "@/components/stat-counter";

export default function HomePage() {
  return (
    <section className="grid gap-12 py-12 md:grid-cols-[1.08fr_0.92fr] md:items-center md:py-18">
      <div
        className="space-y-10 transition-transform duration-150 ease-out"
        style={{ transform: "translate3d(calc(var(--panel-dx, 0) * -16px), calc(var(--panel-dy, 0) * -10px), 0)" } as CSSProperties}
      >
        <InteractivePanel className="glass-panel space-y-4 rounded-[2rem] border border-white/12 bg-white/[0.055] p-6 transition-transform duration-150 ease-out">
          <p className="js-page-enter section-label">{hero.eyebrow}</p>
          <h1 className="js-page-enter max-w-[8ch] font-heading text-6xl leading-[0.92] sm:text-8xl">
            {hero.welcome}
          </h1>
          <p className="js-page-enter max-w-[16ch] font-heading text-3xl leading-[1.02] text-white/86 sm:text-5xl">
            {hero.title}
          </p>
          <p className="js-page-enter max-w-xl text-base leading-8 text-white/66 sm:text-lg">
            {hero.description}
          </p>
        </InteractivePanel>

        <InteractivePanel mobileMotion={false} className="js-page-enter flex flex-wrap gap-3 rounded-[1.75rem] border border-white/12 bg-white/[0.045] p-4 transition-transform duration-150 ease-out">
          <Link
            href="/projects"
            className="rounded-full border border-white/18 bg-white px-5 py-3 text-sm font-medium text-slate-950 transition duration-200 hover:-translate-y-0.5 hover:bg-cyan-100"
          >
            Explore Projects
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-white/12 bg-white/6 px-5 py-3 text-sm font-medium text-white transition duration-200 hover:-translate-y-0.5 hover:bg-white/12"
          >
            Contact Me
          </Link>
        </InteractivePanel>

        <InteractivePanel className="js-page-enter max-w-lg rounded-[1.5rem] border border-white/12 bg-white/[0.05] px-4 py-4 text-sm leading-7 text-white/68 transition-transform duration-150 ease-out">
          <div className="space-y-2">
            {homeHighlights.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </InteractivePanel>

        <div className="js-page-enter grid gap-3 sm:grid-cols-3">
          {homeStats.map((item, index) => (
            <StatCounter key={item.label} value={item.value} label={item.label} suffix={item.suffix} delay={index * 120} />
          ))}
        </div>

        <div className="js-page-enter flex flex-wrap gap-4 text-sm text-white/58">
          {socialLinks.map((link) => {
            const external = link.href.startsWith("http") || link.href.endsWith(".pdf");
            const icon = link.label === "Resume" ? null : <SocialIcon label={link.label} />;
            return (
              <Link
                key={link.label}
                href={link.href}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 transition hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
              >
                {icon}
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>

      <div
        className="relative transition-transform duration-150 ease-out"
        style={{ transform: "translate3d(calc(var(--panel-dx, 0) * 18px), calc(var(--panel-dy, 0) * 14px), 0)" } as CSSProperties}
      >
        <div className="absolute -left-4 top-10 h-20 w-20 rounded-full bg-cyan-400/15 blur-3xl motion-safe:animate-pulse" />
        <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-emerald-400/12 blur-3xl motion-safe:animate-pulse" />

        <InteractivePanel className="js-home-hero glass-panel relative min-h-[420px] overflow-hidden rounded-[2rem] border border-white/10 p-6 transition-transform duration-150 ease-out">
          <div className="absolute inset-x-8 top-8 h-56 rounded-full bg-[radial-gradient(circle_at_center,rgba(103,232,249,0.2),transparent_68%)] blur-2xl motion-safe:animate-[float_8s_ease-in-out_infinite]" />
          <div className="absolute left-8 bottom-8 h-24 w-24 rounded-full bg-white/8 blur-xl motion-safe:animate-[float_10s_ease-in-out_infinite]" />

          <div className="js-home-photo absolute right-6 top-6 z-20 h-24 w-24 overflow-hidden rounded-full border border-white/18 bg-slate-950/70 shadow-[0_18px_50px_rgba(0,0,0,0.35)] sm:h-28 sm:w-28 motion-safe:animate-[float_7s_ease-in-out_infinite]">
            <Image
              src={assets.portrait}
              alt="Portrait of Sanjay S"
              fill
              priority
              unoptimized
              className="object-cover"
            />
          </div>

          <div className="relative z-10 flex h-full flex-col justify-between gap-6 pt-28 sm:pt-32">
            <div className="max-w-md space-y-3">
              <p className="text-[0.65rem] uppercase tracking-[0.32em] text-white/40">Featured</p>
              <h2 className="max-w-[10ch] font-heading text-4xl leading-[0.95] sm:text-5xl">
                Frontend projects with clear structure and polished motion.
              </h2>
              <p className="text-sm leading-7 text-white/66">
                I build responsive web experiences with React, Next.js, JavaScript, and real internship experience from Plant Green Inertia and TATTI.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {homeFacts.map((item, index) => (
                <div
                  key={item.label}
                  className={`rounded-full border border-white/10 bg-white/[0.04] px-4 py-3 text-center ${
                    index === 1 ? "sm:-translate-y-2" : ""
                  }`}
                >
                  <p className="text-[0.62rem] uppercase tracking-[0.24em] text-white/36">{item.label}</p>
                  <p className="mt-1 text-sm text-white/76">{item.value}</p>
                </div>
              ))}
              </div>
            </div>
        </InteractivePanel>
      </div>
    </section>
  );
}
