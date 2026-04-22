import Link from "next/link";
import { aboutDetails, socialLinks, story } from "@/lib/content";

export default function AboutPage() {
  return (
    <section className="grid gap-10 py-14 md:grid-cols-[0.95fr_1.05fr] md:py-16">
      <div className="space-y-6">
        <p className="js-page-enter text-[0.65rem] uppercase tracking-[0.35em] text-white/45">About</p>
        <h1 className="js-page-enter max-w-[10ch] font-heading text-5xl leading-none sm:text-7xl">
          More about me and the path I am building.
        </h1>
      </div>

      <div className="space-y-8">
        <div className="space-y-5 border-b border-white/10 pb-8">
          {story.map((paragraph) => (
            <p key={paragraph} className="js-page-enter text-lg leading-9 text-white/72">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="space-y-4 border-b border-white/10 pb-8">
          {aboutDetails.map((item) => (
            <p key={item} className="js-page-enter border-b border-white/8 pb-4 text-base leading-8 text-white/65 last:border-b-0 last:pb-0">
              {item}
            </p>
          ))}
        </div>

        <div className="js-page-enter flex flex-wrap gap-4 text-sm text-white/58">
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
      </div>
    </section>
  );
}
