"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";

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
    <main className="bg-[#0a0a0a] text-[#f5f1e8]">
      <div className="mx-auto min-h-screen max-w-[1120px] px-5 pb-20 pt-6 sm:px-8">
        <header className="border-b border-white/10 pb-6">
          <div className="flex items-start justify-between gap-6">
            <div className="flex items-start gap-4">
              <Link
                href="/"
                className="mt-0.5 flex h-11 w-11 items-center justify-center border border-white/12 text-white transition hover:border-white/30 hover:bg-white/5"
                aria-label="Go to home page"
              >
                <HomeIcon />
              </Link>

              <div>
                <Link href="/" className="font-heading inline-block text-4xl tracking-[0.02em] sm:text-5xl">
                  Sanjay S
                </Link>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <button
                type="button"
                onClick={() => setMenuOpen((open) => !open)}
                className="flex h-11 w-11 items-center justify-center border border-white/12 text-white md:hidden"
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

              <nav className="hidden flex-wrap gap-x-5 gap-y-2 pt-2 text-sm text-white/58 md:flex">
                {links.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`transition hover:text-white ${isActive ? "text-white" : "text-white/58"}`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>
            </div>
          </div>

          {menuOpen ? (
            <nav className="mt-6 grid gap-3 border-t border-white/10 pt-5 md:hidden">
              <Link href="/" className={`text-sm tracking-[0.18em] transition hover:text-white ${pathname === "/" ? "text-white" : "text-white/62"}`}>
                HOME
              </Link>
              {links.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-sm tracking-[0.18em] transition hover:text-white ${
                      isActive ? "text-white" : "text-white/62"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          ) : null}
        </header>

        {children}
      </div>
    </main>
  );
}
