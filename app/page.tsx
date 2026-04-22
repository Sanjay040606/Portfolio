import Image from "next/image";
import Link from "next/link";
import { hero, socialLinks } from "@/lib/content";

export default function HomePage() {
  return (
    <section className="grid gap-10 py-14 md:grid-cols-[1.08fr_0.92fr] md:py-20">
      <div className="space-y-10">
        <div className="space-y-4">
          <p className="js-page-enter text-sm uppercase tracking-[0.3em] text-white/42">{hero.eyebrow}</p>
          <h2 className="js-page-enter max-w-[10ch] font-heading text-5xl leading-none sm:text-7xl">
            {hero.welcome}
          </h2>
          <p className="js-page-enter max-w-[14ch] font-heading text-4xl leading-none text-white/88 sm:text-6xl">
            {hero.title}
          </p>
          <p className="js-page-enter max-w-xl text-base leading-8 text-white/62 sm:text-lg">
            {hero.description}
          </p>
        </div>

        <div className="js-page-enter flex flex-wrap gap-3 text-sm text-white/58">
          {socialLinks.map((link) => {
            const external = link.href.startsWith("http") || link.href.endsWith(".pdf");
            return (
              <Link
                key={link.label}
                href={link.href}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
                className="transition hover:text-white"
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="js-page-enter flex flex-wrap gap-6 border-t border-white/10 pt-8 text-sm uppercase tracking-[0.2em] text-white/46">
          <Link href="/about" className="transition hover:text-white">About Me</Link>
          <Link href="/projects" className="transition hover:text-white">Projects</Link>
          <Link href="/contact" className="transition hover:text-white">Contact</Link>
        </div>
      </div>

      <div className="space-y-4">
        <div className="relative overflow-hidden border border-white/10 bg-white/[0.02]">
          <div className="js-page-image relative aspect-[4/5]">
            <Image src="/sanjay-img.jpeg" alt="Portrait of Sanjay S" fill priority className="object-cover grayscale" />
          </div>
        </div>
        <p className="js-page-enter text-sm uppercase tracking-[0.22em] text-white/38">
          Web developer building clean interfaces and learning through real projects.
        </p>
      </div>
    </section>
  );
}
