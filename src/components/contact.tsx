"use client";

import { FormEvent, useState } from "react";
import { ButtonLink } from "@/components/button-link";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          brand: data.get("brand"),
          platform: data.get("platform"),
          message: data.get("message")
        })
      });

      if (!response.ok) {
        throw new Error("Unable to send message");
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="section-pad relative overflow-hidden bg-[#15140f]">
      <div className="absolute right-0 top-20 h-64 w-64 rounded-full bg-warm/8 blur-3xl" />
      <div className="absolute left-8 top-16 hidden h-40 w-40 rounded-[2rem] border border-line opacity-50 lg:block" />
      <div className="container-shell relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <span className="signal-mark mb-6" aria-hidden="true" />
          <p className="eyebrow">contact</p>
          <h2 className="mt-4 text-balance text-4xl font-semibold tracking-normal sm:text-5xl">
            let&apos;s build a social presence that can actually keep pace.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-muted">
            Tell us what you are managing, what feels messy, and where the brand
            needs to show up with more clarity.
          </p>
          <div className="mt-8">
            <ButtonLink href="mailto:hello@sociel.in" variant="secondary">
              hello@sociel.in
            </ButtonLink>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="signal-frame tactile-card rounded-[1.5rem] border border-line bg-white/[0.045] p-5 transition duration-300 sm:p-7"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="name" name="name" placeholder="your name" required />
            <Field label="email" name="email" type="email" placeholder="you@brand.com" required />
            <Field label="brand / company" name="brand" placeholder="brand name" />
            <label className="grid gap-2 text-sm font-semibold text-foreground">
              platform focus
              <select
                name="platform"
                className="focus-ring min-h-12 rounded-2xl border border-line bg-[#11110f] px-4 text-sm text-foreground"
                defaultValue="Instagram + LinkedIn"
              >
                <option>Instagram + LinkedIn</option>
                <option>Instagram management</option>
                <option>LinkedIn presence</option>
                <option>Short-form content</option>
                <option>Full platform management</option>
              </select>
            </label>
          </div>
          <label className="mt-4 grid gap-2 text-sm font-semibold text-foreground">
            message
            <textarea
              name="message"
              required
              rows={6}
              placeholder="what should sociel help you organize, sharpen, or publish?"
              className="focus-ring resize-none rounded-2xl border border-line bg-[#11110f] px-4 py-3 text-sm leading-6 text-foreground placeholder:text-muted/60"
            />
          </label>
          <button
            type="submit"
            disabled={status === "sending"}
            className="focus-ring mt-5 min-h-12 w-full rounded-full bg-surface px-5 text-sm font-semibold text-surface-ink shadow-[inset_0_1px_0_rgba(255,255,255,0.45),0_16px_45px_rgba(0,0,0,0.22)] transition hover:-translate-y-0.5 hover:bg-warm disabled:cursor-wait disabled:opacity-70"
          >
            {status === "sending" ? "sending..." : "start a project"}
          </button>
          {status === "success" ? (
            <p className="mt-4 rounded-2xl border border-warm/25 bg-warm/10 px-4 py-3 text-sm text-foreground">
              Message sent. We&apos;ll get back to you soon.
            </p>
          ) : null}
          {status === "error" ? (
            <p className="mt-4 rounded-2xl border border-red-300/25 bg-red-400/10 px-4 py-3 text-sm text-foreground">
              Something went wrong. Please email hello@sociel.in directly.
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  placeholder,
  type = "text",
  required = false
}: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-foreground">
      {label}
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="focus-ring min-h-12 rounded-2xl border border-line bg-[#11110f] px-4 text-sm text-foreground placeholder:text-muted/60"
      />
    </label>
  );
}
