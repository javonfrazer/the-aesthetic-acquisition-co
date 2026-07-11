"use client";

import { motion } from "framer-motion";
import { Target, Clapperboard, Compass, Check, type LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { InstagramIcon } from "@/components/ui/BrandIcons";
import { SERVICES } from "@/lib/data";

const ICONS: Record<string, LucideIcon> = {
  instagram: InstagramIcon as unknown as LucideIcon,
  target: Target,
  clapperboard: Clapperboard,
  compass: Compass,
};

export function Services() {
  return (
    <section id="services" className="bg-white py-28 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <SectionLabel className="mx-auto justify-center">What We Do</SectionLabel>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 text-balance font-serif text-3xl font-semibold text-ink sm:text-4xl lg:text-5xl">
              Everything Your Med Spa Needs to Grow, In One Partner.
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 text-balance text-lg leading-relaxed text-ink-soft/60">
              Four disciplines, one dedicated team, all built around a single goal:
              filling your consultation calendar.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {SERVICES.map((service, i) => {
            const Icon = ICONS[service.icon];
            return (
              <Reveal key={service.title} delay={0.06 * i}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative h-full overflow-hidden rounded-3xl border border-black/[0.06] bg-white p-8 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-shadow duration-300 hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)] sm:p-10"
                >
                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gold/5 blur-2xl transition-colors duration-300 group-hover:bg-gold/10" />

                  <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-ink text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-ink">
                    <Icon className="h-6 w-6" strokeWidth={1.5} aria-hidden="true" />
                  </div>

                  <h3 className="relative mt-6 font-serif text-2xl font-semibold text-ink">
                    {service.title}
                  </h3>
                  <p className="relative mt-3 leading-relaxed text-ink-soft/60">
                    {service.description}
                  </p>

                  <ul className="relative mt-6 space-y-2.5">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-start gap-2.5 text-sm text-ink-soft/70">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={2} aria-hidden="true" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
