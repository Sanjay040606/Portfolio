import { projects } from "@/lib/content";

export default function ProjectsPage() {
  const projectButtonClass =
    "inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/78 transition duration-200 hover:border-white/35 hover:bg-white/10 hover:text-white";

  return (
    <section className="py-14 md:py-16">
      <div className="mb-10">
        <p className="js-page-enter text-[0.65rem] uppercase tracking-[0.35em] text-white/45">Projects</p>
      </div>

      <div className="space-y-14">
        {projects.map((project, index) => (
          <article key={project.title} className="grid gap-8 border-b border-white/10 pb-14 md:grid-cols-[0.95fr_1.05fr] md:gap-12">
            <div className="js-page-enter space-y-4">
              <div className="flex items-center justify-between text-white/35">
                <span className="text-sm">{String(index + 1).padStart(2, "0")}</span>
                <div className="js-page-line ml-4 h-px flex-1 bg-white/10" />
              </div>
              <div className="overflow-hidden border border-white/10 bg-white/[0.02] shadow-[0_24px_80px_rgba(0,0,0,0.28)]">
                <div className="aspect-[16/10] bg-white">
                  <img
                    src={project.previewImage}
                    alt={`${project.title} preview`}
                    className="h-full w-full object-contain object-center"
                  />
                </div>
              </div>
            </div>

            <div className="js-page-enter space-y-5">
              <h2 className="font-heading text-4xl sm:text-5xl">{project.title}</h2>
              <p className="text-[0.68rem] uppercase tracking-[0.35em] text-white/45">{project.type}</p>
              {"caption" in project ? <p className="text-sm uppercase tracking-[0.28em] text-white/55">{project.caption}</p> : null}
              <p className="max-w-2xl text-base leading-8 text-white/65">{project.description}</p>
              <div className="flex flex-wrap gap-3 text-sm text-white/45">
                {project.stack.map((item) => (
                  <span key={item}>{item}</span>
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
          </article>
        ))}
      </div>
    </section>
  );
}
