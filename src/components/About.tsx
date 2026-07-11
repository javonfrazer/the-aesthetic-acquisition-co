"use client";

import { motion } from "framer-motion";
import { Award, Gem, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";

const CREDENTIALS = [
  { icon: Gem, label: "Med Spa Exclusive Agency" },
  { icon: Award, label: "8-Figure Ad Spend Managed" },
  { icon: Users, label: "150+ Clinics Partnered" },
];

export function About() {
  return (
    <section id="about" className="bg-white py-28 sm:py-32">
      <Container className="grid items-center gap-16 lg:grid-cols-2">
        <Reveal>
          <div className="relative">
            <PhotoPlaceholder
              label="The Aesthetic Acquisition Co. Team"
              className="aspect-[4/5] w-full"
            />
            <div className="absolute -bottom-8 -right-6 w-60 rounded-2xl border border-black/[0.06] bg-white p-5 shadow-[0_20px_60px_rgba(0,0,0,0.1)] sm:-right-10">
              <div className="flex -space-x-3">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-9 w-9 rounded-full border-2 border-white bg-gradient-to-br from-gold-light to-gold-dark"
                  />
                ))}
              </div>
              <p className="mt-3 text-sm font-medium text-ink-soft/70">
                A dedicated strategist &amp; content team for every partner
              </p>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <SectionLabel>About Us</SectionLabel>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 text-balance font-serif text-3xl font-semibold text-ink sm:text-4xl lg:text-5xl">
              Built By Marketers Who Grew Up Inside Med Spas.
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink-soft/65">
              <p>
                The Aesthetic Acquisition Co. was founded on a simple frustration: medical
                spas deserve marketing as refined as the treatments they provide, yet most
                were stuck with generic agencies or in-house teams stretched too thin.
              </p>
              <p>
                Today we partner exclusively with medical spas and aesthetic clinics,
                pairing premium content, data-driven Meta advertising, and a deep
                understanding of the patient journey to consistently fill consultation
                calendars — not just grow follower counts.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {CREDENTIALS.map(({ icon: Icon, label }) => (
                <motion.div
                  key={label}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl border border-black/[0.06] bg-cream p-5"
                >
                  <Icon className="h-5 w-5 text-gold" strokeWidth={1.5} aria-hidden="true" />
                  <p className="mt-3 text-sm font-medium leading-snug text-ink-soft/75">
                    {label}
                  </p>
                </motion.div>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
