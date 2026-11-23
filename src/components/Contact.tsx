"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  CalendarClock,
  Loader2,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { InstagramIcon, FacebookIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { CALENDLY_URL } from "@/lib/data";
import { cn } from "@/lib/utils";

const SOCIALS = [
  { icon: InstagramIcon, href: "https://instagram.com", label: "Instagram" },
  { icon: FacebookIcon, href: "https://facebook.com", label: "Facebook" },
  { icon: LinkedinIcon, href: "https://linkedin.com", label: "LinkedIn" },
];

type Status = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "Something went wrong. Please try again.");
      }

      (window as any).fbq?.("track", "Lead");
setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <section id="contact" className="bg-cream py-28 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <SectionLabel className="mx-auto justify-center">Contact</SectionLabel>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 text-balance font-serif text-3xl font-semibold text-ink sm:text-4xl lg:text-5xl">
              Let&apos;s Build Your Booking Engine.
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 text-balance text-lg leading-relaxed text-ink-soft/60">
              Tell us about your med spa, or grab a time directly on our calendar below.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <div className="h-full rounded-3xl border border-black/[0.06] bg-white p-8 shadow-[0_1px_2px_rgba(0,0,0,0.04)] sm:p-10">
              {CALENDLY_URL ? (
                <div className="overflow-hidden rounded-2xl border border-black/[0.06]">
                  <iframe
                    src={CALENDLY_URL}
                    title="Schedule a strategy call"
                    className="h-[640px] w-full"
                    loading="lazy"
                  />
                </div>
              ) : (
                <div className="flex h-full min-h-[420px] flex-col items-center justify-center rounded-2xl border border-dashed border-gold/40 bg-gold/[0.04] p-10 text-center">
                  <CalendarClock className="h-9 w-9 text-gold" strokeWidth={1.25} aria-hidden="true" />
                  <p className="mt-5 font-serif text-xl font-semibold text-ink">
                    Calendly Scheduler
                  </p>
                  <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink-soft/55">
                    Connect your Calendly link via the{" "}
                    <code className="rounded bg-ink/5 px-1.5 py-0.5 text-xs">
                      NEXT_PUBLIC_CALENDLY_URL
                    </code>{" "}
                    environment variable to embed live booking here.
                  </p>
                </div>
              )}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-2">
            <div className="flex h-full flex-col rounded-3xl border border-black/[0.06] bg-white p-8 shadow-[0_1px_2px_rgba(0,0,0,0.04)] sm:p-10">
              <form onSubmit={handleSubmit} className="flex flex-1 flex-col gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Full Name" name="name" required />
                  <Field label="Email" name="email" type="email" required />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Phone" name="phone" type="tel" />
                  <Field label="Med Spa Name" name="spaName" />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-xs font-semibold uppercase tracking-wide text-ink-soft/60"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink-soft/30 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
                    placeholder="Tell us a bit about your goals..."
                  />
                </div>

                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={status === "loading"}
                  className={cn(
                    "mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-white transition-colors duration-300 hover:bg-gold hover:text-ink disabled:cursor-not-allowed disabled:opacity-60"
                  )}
                >
                  {status === "loading" && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
                  {status === "loading" ? "Sending..." : "Send Message"}
                </motion.button>

                {status === "success" && (
                  <p className="flex items-center gap-2 text-sm font-medium text-emerald-700">
                    <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                    Thanks — we&apos;ll be in touch within one business day.
                  </p>
                )}
                {status === "error" && (
                  <p className="flex items-center gap-2 text-sm font-medium text-red-600">
                    <AlertCircle className="h-4 w-4" aria-hidden="true" />
                    {errorMessage}
                  </p>
                )}
              </form>

              <div className="mt-8 space-y-3 border-t border-black/[0.06] pt-6">
                <a
                  href="mailto:hello@theaestheticacquisitionco.com"
                  className="flex items-center gap-3 text-sm text-ink-soft/70 transition-colors hover:text-gold-dark"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  hello@theaestheticacquisitionco.com
                </a>
                <a
                  href="tel:+18005551234"
                  className="flex items-center gap-3 text-sm text-ink-soft/70 transition-colors hover:text-gold-dark"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  +1 (800) 555-1234
                </a>
                <div className="flex items-center gap-3 text-sm text-ink-soft/70">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                  Serving medical spas nationwide
                </div>
              </div>

              <div className="mt-6 flex items-center gap-3">
                {SOCIALS.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-ink-soft/60 transition-colors hover:border-gold hover:text-gold-dark"
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-xs font-semibold uppercase tracking-wide text-ink-soft/60"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink-soft/30 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
      />
    </div>
  );
}
