import ContactForm from "@/components/contact-form";

export default function ContactPage() {
  return (
    <section className="py-14 md:py-16">
      <div className="mb-10">
        <p className="js-page-enter text-[0.65rem] uppercase tracking-[0.35em] text-white/45">Contact</p>
      </div>
      <ContactForm />
    </section>
  );
}
