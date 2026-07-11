"use client";

import { motion } from "framer-motion";
import { Sparkles, TrendingUp, ShieldCheck, Clock, type LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { WHY_CHOOSE_US } from "@/lib/data";

const ICONS: Record<string, LucideIcon> = {
  sparkles: Sparkles,
  trending: TrendingUp,
  shield: ShieldCheck,
  clock: Clock,
};

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-ink py-28 sm:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_100%_0%,rgba(200,162,74,0.14),transparent)]" />
      </div>

      <Container className="relative grid items-center gap-16 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <Reveal>
            <SectionLabel light>Why Choose Us</SectionLabel>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 text-balance font-serif text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
              A Marketing Partner That Actually Understands Aesthetics.
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 max-w-lg text-balance text-lg leading-relaxed text-white/55">
              We&apos;re not a generalist agency bolting med spas onto a client roster.
              This is the only industry we serve.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {WHY_CHOOSE_US.map((item, i) => {
              const Icon = ICONS[item.icon];
              return (
                <Reveal key={item.title} delay={0.08 * i}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6"
                  >
                    <Icon className="h-6 w-6 text-gold" strokeWidth={1.5} aria-hidden="true" />
                    <h3 className="mt-4 font-serif text-lg font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/50">
                      {item.description}
                    </p>
                  </motion.div>
                </Reveal>
              );
            })}
          </div>
        </div>

        <Reveal delay={0.1} className="order-1 lg:order-2">
          <div className="relative">
            <PhotoPlaceholder
              label="Injector Consultation"
              variant="dark"
              className="aspect-[4/5] w-full"
            />
            <div className="absolute -right-6 -top-6 hidden rounded-2xl border border-gold/20 bg-black/70 px-6 py-4 backdrop-blur-xl sm:block">
              <p className="font-serif text-2xl font-semibold text-gold-light">Niche Focus</p>
              <p className="mt-1 text-xs uppercase tracking-wide text-white/40">
                100% Medical Spas
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
