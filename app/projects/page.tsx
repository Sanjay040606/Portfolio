import { projects } from "@/lib/content";
import ScrollReveal from "@/components/scroll-reveal";
import InteractivePanel from "@/components/interactive-panel";

export default function ProjectsPage() {
  const projectButtonClass =
    "inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/78 transition duration-200 hover:-translate-y-0.5 hover:border-white/35 hover:bg-white/10 hover:text-white";

  return (
    <section className="py-10 md:py-14">
      <ScrollReveal className="mb-10 space-y-3">
        <p className="js-page-enter section-label">Projects</p>
        <h1 className="js-page-enter max-w-[12ch] font-heading text-5xl leading-[0.95] sm:text-6xl">
          Selected work with practical depth and cleaner presentation.
        </h1>
      </ScrollReveal>

      <div className="space-y-14">
        {projects.map((project, index) => (
          <ScrollReveal key={project.title} delay={index * 120}>
            <InteractivePanel className="grid gap-8 rounded-[2rem] border border-white/10 bg-white/[0.03] p-5 pb-14 md:grid-cols-[1fr_1.05fr] md:items-start md:gap-12">
              <div className="js-page-enter space-y-4">
                <div className="flex items-center gap-4 text-white/35">
                  <span className="text-sm">{String(index + 1).padStart(2, "0")}</span>
                  <div className="js-page-line h-px flex-1 bg-white/10" />
                </div>
                <div className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/[0.02] shadow-[0_24px_80px_rgba(0,0,0,0.28)]">
                  <div className="aspect-[16/10] bg-white/95">
                    <img
                      src={project.previewImage}
                      alt={`${project.title} preview`}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                </div>
              </div>

              <div className="js-page-enter flex h-full flex-col justify-start space-y-5 pt-1">
                <div className="glass-panel rounded-[1.75rem] border border-white/10 p-6">
                  <h2 className="font-heading text-4xl sm:text-5xl">{project.title}</h2>
                  <p className="mt-3 text-[0.68rem] uppercase tracking-[0.35em] text-white/45">{project.type}</p>
                  {"caption" in project ? (
                    <p className="mt-3 text-sm uppercase tracking-[0.28em] text-white/55">{project.caption}</p>
                  ) : null}
                  <p className="mt-5 max-w-2xl text-base leading-8 text-white/68">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-3 text-sm text-white/45">
                  {project.stack.map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-2">
                      {item}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4 text-sm">
                  {"live" in project && project.live ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className={projectButtonClass}
                    >
                      Live Demo
                    </a>
                  ) : null}
                  <a href={project.github} target="_blank" rel="noreferrer" className={projectButtonClass}>
                    GitHub
                  </a>
                </div>
              </div>
            </InteractivePanel>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
