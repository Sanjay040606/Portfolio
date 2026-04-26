import ContactForm from "@/components/contact-form";
import InteractivePanel from "@/components/interactive-panel";
import ScrollReveal from "@/components/scroll-reveal";
import BottomNav from "@/components/bottom-nav";
import RainPanel from "@/components/rain-panel";

export default function ContactPage() {
  return (
    <>
    <section className="relative overflow-hidden py-10 md:py-14">
      <div className="mb-10 grid gap-6 md:grid-cols-[0.82fr_1.18fr] md:items-stretch">
        <ScrollReveal>
          <InteractivePanel className="glass-panel rounded-[2rem] border border-white/12 bg-white/[0.055] p-6 transition-transform duration-150 ease-out md:p-7">
            <div className="space-y-3">
              <p className="js-page-enter section-label">Contact</p>
              <h1 className="js-page-enter max-w-[10ch] font-heading text-5xl leading-[0.95] sm:text-6xl">
                Let&apos;s build something grounded and memorable.
              </h1>
              <p className="js-page-enter max-w-xl text-base leading-8 text-white/66">
                If you have an internship role, freelance idea, or project in mind, send me a note and we can talk.
              </p>
            </div>
          </InteractivePanel>
        </ScrollReveal>

        <RainPanel className="hidden min-h-[220px] rounded-[2rem] border border-white/10 bg-white/[0.022] shadow-[0_12px_40px_rgba(0,0,0,0.18)] transition-transform duration-150 ease-out md:block md:min-h-[320px]" />
      </div>
      <ScrollReveal delay={100}>
        <InteractivePanel className="glass-panel rounded-[1.75rem] border border-white/10 p-0 transition-transform duration-150 ease-out">
          <ContactForm />
        </InteractivePanel>
      </ScrollReveal>
      <div className="mt-10 md:hidden">
        <RainPanel className="min-h-[220px] rounded-[2rem] border border-white/10 bg-white/[0.022] shadow-[0_12px_40px_rgba(0,0,0,0.18)] transition-transform duration-150 ease-out" />
      </div>
    </section>
    <BottomNav />
    </>
  );
}
