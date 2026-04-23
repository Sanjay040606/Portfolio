"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";
import CustomCursor from "@/components/custom-cursor";
import GlobalMouseGlow from "@/components/global-mouse-glow";
import ScrollProgress from "@/components/scroll-progress";

const links = [
  { href: "/about", label: "ABOUT" },
  { href: "/projects", label: "PROJECTS" },
  { href: "/contact", label: "CONTACT" },
];

function HomeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5.25 9.75V21h13.5V9.75" />
      <path d="M9.75 21v-6.75h4.5V21" />
    </svg>
  );
}

export default function SiteShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <main className="relative overflow-hidden text-[#eef6ff]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(45,212,191,0.16),transparent_32%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.18),transparent_30%),radial-gradient(circle_at_bottom,rgba(15,118,110,0.08),transparent_36%)]" />
        <div className="absolute left-[-8%] top-[14%] h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute right-[-10%] top-[42%] h-96 w-96 rounded-full bg-emerald-400/8 blur-3xl" />
      </div>
      <GlobalMouseGlow />
      <ScrollProgress />
      <CustomCursor />

      <div className="relative mx-auto min-h-screen max-w-[1180px] px-5 pb-20 pt-6 sm:px-8">
        <header className="glass-panel rounded-[2rem] border border-white/8 px-5 py-4">
          <div className="flex items-start justify-between gap-6">
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/12 bg-white/6 text-white transition duration-200 hover:-translate-y-0.5 hover:bg-white/12"
                aria-label="Go to home page"
              >
                <HomeIcon />
              </Link>

              <div className="space-y-1">
                <Link href="/" className="font-heading inline-block text-3xl tracking-[0.02em] sm:text-4xl">
                  Sanjay S
                </Link>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <button
                type="button"
                onClick={() => setMenuOpen((open) => !open)}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/12 bg-white/6 text-white transition md:hidden"
                aria-expanded={menuOpen}
                aria-label="Toggle navigation menu"
              >
                <span className="flex w-5 flex-col gap-1.5">
                  <span
                    className={`block h-px bg-white transition-transform duration-200 ${
                      menuOpen ? "translate-y-[7px] rotate-45" : ""
                    }`}
                  />
                  <span
                    className={`block h-px bg-white transition-opacity duration-200 ${
                      menuOpen ? "opacity-0" : "opacity-100"
                    }`}
                  />
                  <span
                    className={`block h-px bg-white transition-transform duration-200 ${
                      menuOpen ? "-translate-y-[7px] -rotate-45" : ""
                    }`}
                  />
                </span>
              </button>

              <nav className="hidden flex-wrap gap-2 pt-1 md:flex">
                {links.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.22em] transition duration-200 ${
                        isActive
                          ? "border-white/20 bg-white text-slate-950"
                          : "border-white/10 bg-white/5 text-white/70 hover:border-white/18 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>
            </div>
          </div>

          {menuOpen ? (
            <nav className="mt-5 grid gap-2 border-t border-white/10 pt-5 md:hidden">
              <Link
                href="/"
                className={`rounded-full border px-4 py-3 text-sm tracking-[0.18em] transition ${
                  pathname === "/" ? "border-white/18 bg-white text-slate-950" : "border-white/10 bg-white/5 text-white/72"
                }`}
              >
                HOME
              </Link>
              {links.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`rounded-full border px-4 py-3 text-sm tracking-[0.18em] transition ${
                      isActive ? "border-white/18 bg-white text-slate-950" : "border-white/10 bg-white/5 text-white/72"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          ) : null}
        </header>

        <div className="pt-8">{children}</div>
      </div>
    </main>
  );
}
