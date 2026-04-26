"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import InteractivePanel from "@/components/interactive-panel";

const pages = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function BottomNav() {
  const pathname = usePathname();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const otherPages = pages.filter((page) => page.href !== pathname);

  return (
    <div className="js-page-enter flex justify-center pb-8 pt-8 sm:pb-12">
      <InteractivePanel mobileMotion={false} className="flex flex-wrap items-center justify-center gap-3 rounded-[1.75rem] border border-white/12 bg-white/[0.045] p-3 sm:p-4 transition-transform duration-150 ease-out">
        {otherPages.map((page) => (
          <Link
            key={page.href}
            href={page.href}
            className="rounded-full border border-white/12 bg-white/6 px-5 py-2.5 sm:px-6 sm:py-3 text-sm font-medium text-white transition duration-200 hover:-translate-y-0.5 hover:bg-white/12"
          >
            {page.label}
          </Link>
        ))}
        
        <div className="w-px h-6 bg-white/10 mx-1 hidden sm:block" />
        
        <button
          onClick={handleScrollToTop}
          className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-white/12 bg-white/6 text-white transition duration-200 hover:-translate-y-0.5 hover:bg-white/12"
          aria-label="Back to top"
          title="Back to top"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m18 15-6-6-6 6" />
          </svg>
        </button>
      </InteractivePanel>
    </div>
  );
}
