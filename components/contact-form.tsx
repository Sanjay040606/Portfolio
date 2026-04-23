"use client";

import { FormEvent } from "react";

export default function ContactForm() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const firstName = String(form.get("firstName") || "");
    const lastName = String(form.get("lastName") || "");
    const email = String(form.get("email") || "");
    const subject = String(form.get("subject") || "Portfolio enquiry");
    const message = String(form.get("message") || "");

    const body = [
      `Name: ${firstName} ${lastName}`.trim(),
      `Email: ${email}`,
      "",
      message,
    ].join("\n");

    window.location.href = `mailto:sanjay060406@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form onSubmit={handleSubmit} className="glass-panel grid gap-x-6 gap-y-6 rounded-[2rem] border border-white/10 p-6 md:grid-cols-2 md:p-8">
      <label className="js-page-enter block rounded-[1.25rem] border border-white/10 bg-white/[0.03] px-4 pb-4 pt-4">
        <span className="block text-sm uppercase tracking-[0.18em] text-white/40">First name</span>
        <input
          name="firstName"
          required
          className="mt-4 w-full bg-transparent text-lg text-white outline-none placeholder:text-white/18"
          placeholder="Your first name"
        />
      </label>

      <label className="js-page-enter block rounded-[1.25rem] border border-white/10 bg-white/[0.03] px-4 pb-4 pt-4">
        <span className="block text-sm uppercase tracking-[0.18em] text-white/40">Last name</span>
        <input
          name="lastName"
          className="mt-4 w-full bg-transparent text-lg text-white outline-none placeholder:text-white/18"
          placeholder="Your last name"
        />
      </label>

      <label className="js-page-enter block rounded-[1.25rem] border border-white/10 bg-white/[0.03] px-4 pb-4 pt-4">
        <span className="block text-sm uppercase tracking-[0.18em] text-white/40">Email</span>
        <input
          name="email"
          type="email"
          required
          className="mt-4 w-full bg-transparent text-lg text-white outline-none placeholder:text-white/18"
          placeholder="your@email.com"
        />
      </label>

      <label className="js-page-enter block rounded-[1.25rem] border border-white/10 bg-white/[0.03] px-4 pb-4 pt-4">
        <span className="block text-sm uppercase tracking-[0.18em] text-white/40">Subject</span>
        <input
          name="subject"
          className="mt-4 w-full bg-transparent text-lg text-white outline-none placeholder:text-white/18"
          placeholder="Project or opportunity"
        />
      </label>

      <label className="js-page-enter block rounded-[1.25rem] border border-white/10 bg-white/[0.03] px-4 pb-4 pt-4 md:col-span-2">
        <span className="block text-sm uppercase tracking-[0.18em] text-white/40">Message</span>
        <textarea
          name="message"
          required
          rows={5}
          className="mt-4 w-full resize-none bg-transparent text-lg text-white outline-none placeholder:text-white/18"
          placeholder="Tell me about your idea or opportunity."
        />
      </label>

      <div className="js-page-enter flex flex-col items-start justify-between gap-4 md:col-span-2 md:flex-row md:items-center">
        <button
          type="submit"
          className="rounded-full border border-white/18 bg-white px-6 py-3 text-sm uppercase tracking-[0.24em] text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-100"
        >
          Submit
        </button>
        <p className="text-sm text-white/44">Messages open through your mail app to send directly.</p>
      </div>
    </form>
  );
}
