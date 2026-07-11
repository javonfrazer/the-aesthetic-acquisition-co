"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { STATS, TESTIMONIALS } from "@/lib/data";

export function Results() {
  return (
    <section id="results" className="bg-cream py-28 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <SectionLabel className="mx-auto justify-center">Results</SectionLabel>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 text-balance font-serif text-3xl font-semibold text-ink sm:text-4xl lg:text-5xl">
              Real Med Spas. Real Booked Consultations.
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={0.06 * i}>
              <div className="rounded-2xl border border-black/[0.06] bg-white px-4 py-8 text-center shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
                <p className="font-serif text-3xl font-semibold text-ink sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-xs uppercase tracking-wide text-ink-soft/50 sm:text-sm">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={0.08 * i}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="flex h-full flex-col rounded-3xl border border-black/[0.06] bg-white p-8 shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
              >
                <div className="flex items-center justify-between">
                  <Quote className="h-8 w-8 text-gold/40" aria-hidden="true" />
                  <div className="flex gap-0.5" aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <Star key={idx} className="h-4 w-4 fill-gold text-gold" aria-hidden="true" />
                    ))}
                  </div>
                </div>

                <p className="mt-6 flex-1 text-balance leading-relaxed text-ink-soft/75">
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div className="mt-8 flex items-center justify-between border-t border-black/[0.06] pt-6">
                  <div>
                    <p className="font-serif text-base font-semibold text-ink">{t.name}</p>
                    <p className="text-sm text-ink-soft/50">{t.role}</p>
                  </div>
                  <span className="rounded-full bg-gold/10 px-3 py-1 text-right text-xs font-semibold text-gold-dark">
                    {t.result}
                  </span>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
