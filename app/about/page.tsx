import Link from "next/link";
import SocialIcon from "@/components/social-icon";
import InteractivePanel from "@/components/interactive-panel";
import ScrollReveal from "@/components/scroll-reveal";
import { aboutDetails, focusAreas, internshipHighlights, skillGroups, socialLinks, story } from "@/lib/content";

export default function AboutPage() {
  return (
    <section className="grid gap-8 py-10 md:grid-cols-[0.9fr_1.1fr] md:py-14">
      <ScrollReveal className="space-y-6">
        <InteractivePanel className="glass-panel space-y-6 rounded-[2rem] border border-white/12 bg-white/[0.055] p-6 transition-transform duration-150 ease-out">
          <p className="js-page-enter section-label">About</p>
          <h1 className="js-page-enter max-w-[10ch] font-heading text-5xl leading-[0.95] sm:text-7xl">
            More about me and the path I am building.
          </h1>
          <p className="js-page-enter max-w-xl text-base leading-8 text-white/66">
            I like building interfaces that feel carefully composed, visually quiet, and easy to navigate.
          </p>
        </InteractivePanel>
      </ScrollReveal>

      <div className="space-y-6">
        <ScrollReveal>
          <InteractivePanel className="glass-panel rounded-[1.75rem] border border-white/12 bg-white/[0.05] p-6 transition-transform duration-150 ease-out">
          <p className="js-page-enter section-label">Who I am</p>
          <div className="js-page-enter mt-4 rounded-[1.25rem] border border-white/10 bg-white/[0.03] px-4 py-3 text-sm uppercase tracking-[0.24em] text-white/56">
            University of Madras student | Frontend Developer Intern | Portfolio builder
          </div>
          {story.map((paragraph) => (
            <p key={paragraph} className="js-page-enter text-lg leading-9 text-white/74">
              {paragraph}
            </p>
          ))}
          </InteractivePanel>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <InteractivePanel className="glass-panel rounded-[1.75rem] border border-white/12 bg-white/[0.05] p-6 transition-transform duration-150 ease-out">
          <p className="js-page-enter section-label">Internship</p>
          <div className="mt-4 grid gap-4">
            {internshipHighlights.map((item) => (
              <p key={item} className="js-page-enter text-base leading-8 text-white/70">
                {item}
              </p>
            ))}
          </div>
          </InteractivePanel>
        </ScrollReveal>

        <div className="grid gap-4 sm:grid-cols-3">
          {focusAreas.map((item, index) => (
            <ScrollReveal key={item} delay={index * 70}>
              <InteractivePanel className="glass-panel js-page-enter rounded-[1.35rem] border border-white/12 bg-white/[0.05] p-4 transition-transform duration-150 ease-out">
                <p className="text-sm leading-7 text-white/76">{item}</p>
              </InteractivePanel>
            </ScrollReveal>
          ))}
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <ScrollReveal key={group.title} delay={index * 80}>
              <InteractivePanel className="glass-panel js-page-enter rounded-[1.5rem] border border-white/12 bg-white/[0.05] p-5 transition-transform duration-150 ease-out">
                <p className="text-[0.65rem] uppercase tracking-[0.32em] text-white/40">{group.title}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/76">
                      {item}
                    </span>
                  ))}
                </div>
              </InteractivePanel>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={120}>
          <InteractivePanel className="glass-panel space-y-4 rounded-[1.75rem] border border-white/12 bg-white/[0.05] p-6 transition-transform duration-150 ease-out">
          <p className="js-page-enter section-label">Education</p>
          {aboutDetails.map((item) => (
            <p key={item} className="js-page-enter border-b border-white/8 pb-4 text-base leading-8 text-white/66 last:border-b-0 last:pb-0">
              {item}
            </p>
          ))}
          </InteractivePanel>
        </ScrollReveal>

        <ScrollReveal delay={160}>
          <div className="js-page-enter flex flex-wrap gap-4 pb-4 text-sm text-white/58">
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
        </ScrollReveal>
      </div>
    </section>
  );
}
