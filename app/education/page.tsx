import Link from "next/link";
import Image from "next/image";
import BottomNav from "@/components/bottom-nav";
import InteractivePanel from "@/components/interactive-panel";
import ScrollReveal from "@/components/scroll-reveal";
import { educationProfile } from "@/lib/content";

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[1.25rem] border border-white/10 bg-white/[0.035] px-4 py-3">
      <p className="text-[0.65rem] uppercase tracking-[0.32em] text-white/38">{label}</p>
      <p className="mt-2 text-sm leading-7 text-white/78">{value}</p>
    </div>
  );
}

export default function EducationPage() {
  const { university, college, school } = educationProfile;

  return (
    <>
      <section className="py-10 md:py-14">
        <ScrollReveal className="mb-8">
          <InteractivePanel className="glass-panel rounded-[2rem] border border-white/12 bg-white/[0.055] p-6 transition-transform duration-150 ease-out md:p-8">
            <div className="grid gap-8 lg:grid-cols-[160px_1fr] lg:items-center">
              <Link
                href={university.officialSite}
                target="_blank"
                rel="noreferrer"
                className="group mx-auto flex w-fit flex-col items-center gap-3 lg:mx-0 lg:items-start"
                aria-label="Open University of Madras official site"
              >
                <div className="relative h-32 w-32 overflow-hidden rounded-full border border-white/14 bg-[#07111f] shadow-[0_20px_50px_rgba(0,0,0,0.28)] transition group-hover:border-white/25 group-hover:shadow-[0_24px_56px_rgba(0,0,0,0.34)]">
                  <Image
                    src="/unom_logo.png"
                    alt="University of Madras logo"
                    fill
                    priority
                    className="object-contain p-4"
                  />
                </div>
                <div className="text-center lg:text-left">
                  <p className="text-xs uppercase tracking-[0.32em] text-white/42">{university.name}</p>
                  <p className="mt-1 text-[0.68rem] uppercase tracking-[0.26em] text-white/36 transition group-hover:text-white/56">
                    Open official site
                  </p>
                </div>
              </Link>

              <div className="space-y-4">
                <p className="section-label">Education Journey</p>
                <h1 className="max-w-[12ch] font-heading text-5xl leading-[0.95] sm:text-6xl">
                  My education journey and growth path.
                </h1>
                <p className="max-w-3xl text-base leading-8 text-white/68">{university.description[0]}</p>
                <p className="max-w-3xl text-base leading-8 text-white/62">{university.description[1]}</p>
              </div>
            </div>
          </InteractivePanel>
        </ScrollReveal>

        <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-stretch">
          <ScrollReveal>
            <InteractivePanel className="glass-panel h-full rounded-[1.85rem] border border-white/12 bg-white/[0.05] p-6 transition-transform duration-150 ease-out md:p-7">
              <p className="section-label">College</p>
              <div className="mt-4 flex items-start gap-4">
                <Link
                  href={college.officialSite}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative mt-1 h-20 w-20 shrink-0 overflow-hidden rounded-2xl border border-white/12 bg-[#07111f] shadow-[0_16px_35px_rgba(0,0,0,0.24)] transition group-hover:border-white/25 group-hover:shadow-[0_20px_44px_rgba(0,0,0,0.3)]"
                  aria-label="Open DRBCCC Hindu College official site"
                >
                  <Image
                    src="/drbccc_logo.png"
                    alt="DRBCCC Hindu College logo"
                    fill
                    className="object-contain p-2.5"
                  />
                </Link>

                <div className="min-w-0 flex-1">
                  <Link
                    href={college.officialSite}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2"
                    aria-label="Open DRBCCC Hindu College official site"
                  >
                    <h2 className="font-heading text-4xl leading-[0.96] transition group-hover:text-white sm:text-5xl">
                      {college.name}
                    </h2>
                  </Link>
                  <p className="mt-2 text-base text-white/68">{college.location}</p>
                </div>
              </div>

              <div className="mt-5 space-y-5">
                <div className="space-y-4">
                  <p className="text-base leading-8 text-white/68">{college.description[0]}</p>
                  <p className="text-base leading-8 text-white/62">{college.description[1]}</p>
                </div>

                <div className="rounded-[1.45rem] border border-white/10 bg-white/[0.035] p-4">
                  <p className="text-[0.62rem] uppercase tracking-[0.3em] text-white/38">Academic Snapshot</p>
                  <div className="mt-4 grid gap-3">
                    <MiniStat label="Program" value={college.program} />
                    <MiniStat label="Duration" value={college.duration} />
                    <MiniStat label="CGPA" value={college.cgpa} />
                    <MiniStat label="Study Area" value="Computer Science with Artificial Intelligence" />
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <p className="section-label">Core Subjects</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {college.coreSubjects.map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/76">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </InteractivePanel>
          </ScrollReveal>

          <div className="grid gap-6 lg:h-full lg:grid-rows-2">
            <ScrollReveal delay={80}>
              <InteractivePanel className="glass-panel flex h-full flex-col rounded-[1.85rem] border border-white/12 bg-white/[0.05] p-6 transition-transform duration-150 ease-out md:p-7">
                <p className="section-label">Leadership</p>
                <h3 className="mt-4 font-heading text-3xl leading-[1.02] sm:text-4xl">{college.leadershipTitle}</h3>
                <p className="mt-2 text-[0.68rem] uppercase tracking-[0.3em] text-white/42">{college.leadershipSubtitle}</p>
                <div className="mt-4 space-y-3">
                  {college.leadershipDescription.map((item) => (
                    <p key={item} className="text-base leading-8 text-white/68">
                      {item}
                    </p>
                  ))}
                </div>
              </InteractivePanel>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <InteractivePanel className="glass-panel flex h-full flex-col rounded-[1.85rem] border border-white/12 bg-white/[0.05] p-6 transition-transform duration-150 ease-out md:p-7">
                <p className="section-label">What I Learned</p>
                <div className="mt-4 space-y-3">
                  <p className="text-base leading-8 text-white/68">
                    I learned how to connect computer science theory with practical frontend work, and how small design choices can make a project feel more polished and useful.
                  </p>
                  <p className="text-base leading-8 text-white/68">
                    I learned to lead student activities, explain ideas clearly, and keep a team moving with confidence during TechNeuro Club work.
                  </p>
                </div>
                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-[1.1rem] border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/76">Practical Learning</div>
                  <div className="rounded-[1.1rem] border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/76">Leadership Growth</div>
                  <div className="rounded-[1.1rem] border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/76">Computer Science Base</div>
                </div>
              </InteractivePanel>
            </ScrollReveal>
          </div>
        </div>

        <ScrollReveal delay={140} className="mt-6">
          <InteractivePanel className="glass-panel rounded-[1.85rem] border border-white/12 bg-white/[0.05] p-6 transition-transform duration-150 ease-out md:p-7">
            <p className="section-label">Schooling</p>
            <div className="mt-4 flex flex-wrap items-start justify-between gap-4">
              <div>
                <h3 className="font-heading text-3xl leading-[1.02] sm:text-4xl">{school.name}</h3>
                <p className="mt-2 text-sm uppercase tracking-[0.28em] text-white/42">{school.qualification}</p>
                <p className="mt-2 text-sm uppercase tracking-[0.24em] text-white/50">{school.background}</p>
              </div>

              <div className="grid gap-3 sm:min-w-[280px] sm:grid-cols-2">
                <MiniStat label="Duration" value={school.duration} />
                <MiniStat label="Percentage" value={school.percentage} />
              </div>
            </div>

            <p className="mt-5 max-w-3xl text-base leading-8 text-white/68">
              I completed my HHSC at {school.name} during {school.duration}, with a {school.background.toLowerCase()} that prepared me for college-level computer science learning.
            </p>
          </InteractivePanel>
        </ScrollReveal>
      </section>
      <BottomNav />
    </>
  );
}
