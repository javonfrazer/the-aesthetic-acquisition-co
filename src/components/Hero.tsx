"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-ink pt-28 pb-20"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(200,162,74,0.22),transparent)]" />
        <div className="absolute -left-40 top-1/3 h-[420px] w-[420px] rounded-full bg-gold/10 blur-[120px]" />
        <div className="absolute -right-32 bottom-0 h-[380px] w-[380px] rounded-full bg-gold/10 blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <Container className="relative grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold-light"
          >
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            Premium Marketing for Medical Spas
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-balance font-serif text-4xl font-semibold leading-[1.1] text-white sm:text-5xl lg:text-6xl"
          >
            Turn Your Medical Spa Into The{" "}
            <span className="text-gradient-gold">Go-To Choice</span> In Your City.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22 }}
            className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-white/60"
          >
            We help medical spas consistently generate consultation bookings through
            premium social media management and Meta advertising.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.34 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Button href="#contact" size="lg">
              Book a Free Strategy Call
            </Button>
            <Button href="#services" variant="ghost" size="lg" icon={false}>
              View Services
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-14 flex items-start gap-5 border-t border-white/10 pt-8 sm:gap-8"
          >
            {[
              ["150+", "Med Spas Served"],
              ["3.2x", "Avg. Booking Lift"],
              ["$8M+", "Ad Spend Managed"],
            ].map(([value, label]) => (
              <div key={label} className="min-w-0">
                <p className="font-serif text-xl font-semibold text-white sm:text-2xl">{value}</p>
                <p className="mt-1 text-[10px] uppercase leading-snug tracking-wide text-white/40 sm:text-xs">
                  {label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative hidden lg:block"
        >
          <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.03] p-3 shadow-[0_40px_120px_rgba(0,0,0,0.5)]">
            <PhotoPlaceholder
              label="Med Spa Treatment Room"
              variant="dark"
              className="aspect-[4/5] w-full"
            />
          </div>
          <div className="absolute -bottom-8 -left-10 w-56 rounded-2xl border border-white/10 bg-black/60 p-5 backdrop-blur-xl">
            <p className="font-serif text-3xl font-semibold text-gold-light">+186%</p>
            <p className="mt-1 text-xs uppercase tracking-wide text-white/50">
              Consultations in 90 Days
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
