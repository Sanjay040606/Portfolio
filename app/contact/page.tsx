import ContactForm from "@/components/contact-form";
import InteractivePanel from "@/components/interactive-panel";
import ScrollReveal from "@/components/scroll-reveal";

export default function ContactPage() {
  return (
    <section className="py-10 md:py-14">
      <ScrollReveal className="mb-10 space-y-3">
        <p className="js-page-enter section-label">Contact</p>
        <h1 className="js-page-enter max-w-[10ch] font-heading text-5xl leading-[0.95] sm:text-6xl">
          Let&apos;s build something grounded and memorable.
        </h1>
        <p className="js-page-enter max-w-xl text-base leading-8 text-white/66">
          If you have an internship role, freelance idea, or project in mind, send me a note and we can talk.
        </p>
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <InteractivePanel className="glass-panel rounded-[1.75rem] border border-white/10 p-0 transition-transform duration-150 ease-out">
          <ContactForm />
        </InteractivePanel>
      </ScrollReveal>
    </section>
  );
}
