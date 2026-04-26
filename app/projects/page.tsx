import Image from "next/image";
import { projects } from "@/lib/content";
import ScrollReveal from "@/components/scroll-reveal";
import InteractivePanel from "@/components/interactive-panel";
import BottomNav from "@/components/bottom-nav";
import RainPanel from "@/components/rain-panel";

export default function ProjectsPage() {
  const projectButtonClass =
    "inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/78 transition duration-200 hover:-translate-y-0.5 hover:border-white/35 hover:bg-white/10 hover:text-white";

  return (
    <>
      <section className="relative overflow-hidden py-10 md:py-14">
        <div className="mb-10 grid gap-6 md:grid-cols-[0.95fr_1.05fr] md:items-stretch">
          <ScrollReveal>
            <InteractivePanel className="glass-panel mx-auto w-full max-w-5xl min-h-[220px] rounded-[2rem] border border-white/12 bg-white/[0.055] p-6 transition-transform duration-150 ease-out md:min-h-[320px] md:p-7">
              <div className="space-y-3">
                <p className="js-page-enter section-label">Projects</p>
                <h1 className="js-page-enter max-w-[12ch] font-heading text-5xl leading-[0.95] sm:text-6xl">
                  Selected work with practical depth and cleaner presentation.
                </h1>
              </div>
            </InteractivePanel>
          </ScrollReveal>

          <RainPanel className="hidden min-h-[220px] rounded-[2rem] border border-white/10 bg-white/[0.022] shadow-[0_12px_40px_rgba(0,0,0,0.18)] transition-transform duration-150 ease-out md:block md:min-h-[320px]" />
        </div>

      <div className="mx-auto w-full max-w-5xl space-y-14">
        {projects.map((project, index) => (
          <ScrollReveal key={project.title} delay={index * 120}>
            <InteractivePanel className="mx-auto w-full max-w-5xl space-y-6 rounded-[2rem] border border-white/10 bg-white/[0.03] p-4 md:p-5">
              <div className="grid gap-6 lg:grid-cols-[1.18fr_0.82fr] lg:items-start lg:gap-8">
                <div className="js-page-enter space-y-3 min-w-0 text-center lg:text-left">
                  <div className="flex items-center justify-center gap-4 text-white/35 lg:justify-start">
                    <span className="text-sm">{String(index + 1).padStart(2, "0")}</span>
                    <div className="h-px flex-1 bg-white/10" />
                  </div>

                  <div className="overflow-hidden rounded-[1.5rem] border border-white/15 bg-[#0a0a0a] shadow-[0_30px_80px_rgba(0,0,0,0.35)] ring-1 ring-white/10">
                    <div className="flex flex-wrap items-center gap-2 border-b border-white/10 bg-white/[0.02] px-3 py-3 sm:flex-nowrap sm:px-4">
                      <div className="flex shrink-0 gap-1.5">
                        <div className="h-3 w-3 rounded-full bg-red-500/80" />
                        <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                        <div className="h-3 w-3 rounded-full bg-green-500/80" />
                      </div>
                      <div className="mx-auto flex min-w-0 flex-1 items-center justify-center rounded-md bg-white/[0.04] px-3 py-1.5 text-[0.65rem] text-white/40">
                        <svg viewBox="0 0 24 24" className="mr-1.5 h-3 w-3 shrink-0 opacity-60" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                          <path d="M7 11V7a5 5 0 0110 0v4" />
                        </svg>
                        <span className="min-w-0 truncate">
                          {"live" in project && project.live ? new URL(project.live).hostname : "Live Demo"}
                        </span>
                      </div>
                    </div>
                    <div className="relative aspect-[16/10] bg-[#0f1116]">
                      <video
                        className="absolute inset-0 h-full w-full object-cover object-top md:hidden"
                        src={project.previewVideo}
                        muted
                        loop
                        playsInline
                        autoPlay
                        preload="metadata"
                      />
                      {"live" in project && project.live ? (
                        <iframe
                          src={project.live}
                          title={`${project.title} live preview`}
                          className="absolute inset-0 hidden h-full w-full bg-white md:block"
                          loading="lazy"
                          sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-fullscreen"
                          allowFullScreen
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center px-6 text-center text-sm leading-7 text-white/55">
                          Live demo unavailable for this project.
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="js-page-enter flex min-w-0 flex-col gap-4 text-center lg:text-left">
                  <div className="glass-panel rounded-[1.75rem] border border-white/10 p-5">
                    <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl">{project.title}</h2>
                    <p className="mt-3 text-[0.68rem] uppercase tracking-[0.35em] text-white/45">{project.type}</p>
                    {"caption" in project ? (
                      <p className="mt-3 text-sm uppercase tracking-[0.28em] text-white/55">{project.caption}</p>
                    ) : null}
                    <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-white/68 lg:mx-0">{project.description}</p>
                  </div>

                  <div className="flex flex-wrap justify-center gap-3 text-sm text-white/45 lg:justify-start">
                    {project.stack.map((item) => (
                      <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-2">
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap justify-center gap-4 text-sm lg:justify-start">
                    {"live" in project && project.live ? (
                      <a href={project.live} target="_blank" rel="noreferrer" className={projectButtonClass}>
                        Open Live Site
                      </a>
                    ) : null}
                    <a href={project.github} target="_blank" rel="noreferrer" className={projectButtonClass}>
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </InteractivePanel>
            {project.title === "SageCart" ? (
              <div className="mt-4">
                <InteractivePanel className="glass-panel mx-auto w-full max-w-5xl rounded-[1.35rem] border border-white/10 bg-white/[0.03] p-4 text-center text-sm leading-7 text-white/52 transition-transform duration-150 ease-out lg:text-left">
                  If the live preview stays blank, the deployed site is likely blocking iframe embedding. Use the Open Live Site button to view SageCart in a new tab.
                </InteractivePanel>
              </div>
            ) : null}
          </ScrollReveal>
        ))}
      </div>

      <div className="mx-auto mt-10 w-full max-w-5xl md:hidden">
        <RainPanel className="min-h-[220px] rounded-[2rem] border border-white/10 bg-white/[0.022] shadow-[0_12px_40px_rgba(0,0,0,0.18)] transition-transform duration-150 ease-out" />
      </div>
      </section>
      <BottomNav />
    </>
  );
}
