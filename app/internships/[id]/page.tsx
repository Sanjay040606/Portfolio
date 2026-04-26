import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { internshipDetails } from "@/lib/content";
import ScrollReveal from "@/components/scroll-reveal";
import InteractivePanel from "@/components/interactive-panel";
import BottomNav from "@/components/bottom-nav";

export function generateStaticParams() {
  return internshipDetails.map((internship) => ({
    id: internship.id,
  }));
}

export default async function InternshipDetailPage({
  params,
}: {
  params: { id: string } | Promise<{ id: string }>;
}) {
  const { id } = await params;
  const internship = internshipDetails.find((item) => item.id === id);

  if (!internship) {
    notFound();
  }

  const buttonClass =
    "inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm text-white/78 transition duration-200 hover:-translate-y-0.5 hover:border-white/35 hover:bg-white/10 hover:text-white";

  return (
    <>
      <section className="py-10 md:py-14">
        <ScrollReveal className="mb-10 space-y-4">
          <p className="js-page-enter section-label">Internship Details</p>
          <div className="space-y-3">
            <h1 className="js-page-enter font-heading text-4xl leading-[1.05] text-white sm:text-5xl">
              <Link
                href={internship.officialSite}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-cyan-200"
              >
                {internship.company}
              </Link>
            </h1>
            <p className="js-page-enter max-w-3xl text-sm leading-7 text-white/55">
              Click the company name to open the official website.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 lg:gap-8">
          <ScrollReveal delay={80}>
            <InteractivePanel className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 sm:p-8 transition-transform duration-150 ease-out">
              <div className="flex flex-col gap-5 border-b border-white/10 pb-6">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="space-y-2">
                    <p className="text-xl font-medium text-cyan-200/90">{internship.role}</p>
                    <p className="text-sm uppercase tracking-[0.15em] text-white/45">{internship.duration}</p>
                  </div>
                  <a
                    href={internship.officialSite}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-100 transition hover:border-cyan-400/40 hover:bg-cyan-400/15"
                  >
                    Visit official site
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17 17 7" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h8v8" />
                    </svg>
                  </a>
                </div>

                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs uppercase tracking-[0.2em] text-white/55">
                    Summer Internship
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs uppercase tracking-[0.2em] text-white/55">
                    Real Client Work
                  </span>
                </div>
              </div>
            </InteractivePanel>
          </ScrollReveal>

          <div className="grid gap-6 xl:grid-cols-2 xl:items-start">
            <div className="space-y-4">
              <ScrollReveal delay={120}>
                <InteractivePanel className="space-y-5 rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 sm:p-8 transition-transform duration-150 ease-out">
                  <div className="space-y-3">
                    <p className="section-label">About the Company</p>
                    <div className="space-y-4">
                      {internship.companySummary?.map((paragraph, index) => (
                        <p key={index} className="text-base leading-8 text-white/72">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-3">
                    <p className="section-label">What I Did</p>
                    <div className="space-y-3">
                      {internship.description.map((paragraph, index) => (
                        <p key={index} className="text-base leading-8 text-white/75">
                          {"\u2022"} {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </InteractivePanel>
              </ScrollReveal>

              <ScrollReveal delay={160}>
                <InteractivePanel className="space-y-4 rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-4 sm:p-5 transition-transform duration-150 ease-out">
                  <div className="space-y-3">
                    <p className="section-label">Certificate</p>
                    <p className="text-sm leading-7 text-white/66">
                      I completed the internship and received the official completion certificate. You can open it here whenever you want to verify the internship record.
                    </p>
                  </div>

                  <a
                    href={internship.certificate}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2.5 text-sm font-medium text-cyan-100 transition duration-200 hover:-translate-y-0.5 hover:border-cyan-400/50 hover:bg-cyan-400/20"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    View Completion Certificate
                  </a>
                </InteractivePanel>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={160}>
              <InteractivePanel className="space-y-5 rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 sm:p-8 transition-transform duration-150 ease-out">
                <div className="space-y-3">
                  <p className="section-label">Project Breakdown</p>
                  <h2 className="font-heading text-3xl text-white">{internship.project.title}</h2>
                  <p className="text-base leading-8 text-white/72">{internship.project.description}</p>
                </div>

                <div className="space-y-3">
                  <p className="section-label">Tools Used</p>
                  <div className="flex flex-wrap gap-3">
                    {internship.project.tools?.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/70"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <p className="section-label">What Made It Different</p>
                  <div className="space-y-3">
                    {internship.project.highlight?.map((item, index) => (
                      <p key={index} className="text-base leading-8 text-white/72">
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              </InteractivePanel>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={200}>
            <div className="space-y-5">
              <div className="space-y-5">
                <div className="px-2">
                  <h2 className="font-heading text-3xl text-white">Live Demo: {internship.project.title}</h2>
                  <p className="mt-4 max-w-3xl text-base leading-8 text-white/66">
                    The preview is embedded here so you can inspect the work without leaving the page. If a site blocks embedding, use the button below to open it in a new tab.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <a href={internship.project.live} target="_blank" rel="noreferrer" className={buttonClass}>
                      Open Live Site
                    </a>
                    {internship.project.github && (
                      <a href={internship.project.github} target="_blank" rel="noreferrer" className={buttonClass}>
                        View GitHub
                      </a>
                    )}
                  </div>
                </div>

                <div className="overflow-hidden rounded-[1.5rem] border border-white/15 bg-[#0a0a0a] shadow-[0_30px_80px_rgba(0,0,0,0.4)] ring-1 ring-white/10">
                  <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.02] px-4 py-3">
                    <div className="flex gap-1.5">
                      <div className="h-3 w-3 rounded-full bg-red-500/80" />
                      <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                      <div className="h-3 w-3 rounded-full bg-green-500/80" />
                    </div>
                    <div className="mx-auto flex w-1/2 items-center justify-center rounded-md bg-white/[0.04] px-3 py-1.5 text-[0.65rem] text-white/40">
                      <svg viewBox="0 0 24 24" className="mr-1.5 h-3 w-3 opacity-60" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                        <path d="M7 11V7a5 5 0 0110 0v4" />
                      </svg>
                      {new URL(internship.project.live).hostname}
                    </div>
                  </div>
                  <div className="relative aspect-[16/10] w-full">
                    <div className="absolute inset-0 md:hidden">
                      <Image
                        src={internship.project.previewImage || "/pgi-website-preview.svg"}
                        alt={`${internship.project.title} preview`}
                        fill
                        sizes="100vw"
                        className="object-cover object-top"
                      />
                    </div>
                    <iframe
                      src={internship.project.live}
                      title={`${internship.project.title} live preview`}
                      className="absolute inset-0 hidden h-full w-full bg-white md:block"
                      loading="lazy"
                      sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-fullscreen"
                      allowFullScreen
                    />
                  </div>
                </div>

                <p className="px-2 text-sm leading-7 text-white/45">
                  Mobile shows a static preview with a fixed frame. On desktop, if the live frame stays blank, the deployed site is probably blocking embeds, so use the new-tab view instead.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <BottomNav />
    </>
  );
}
