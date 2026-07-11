"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { FAQS } from "@/lib/data";
import { cn } from "@/lib/utils";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white py-28 sm:py-32">
      <Container className="mx-auto max-w-3xl">
        <div className="text-center">
          <Reveal>
            <SectionLabel className="mx-auto justify-center">FAQ</SectionLabel>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 text-balance font-serif text-3xl font-semibold text-ink sm:text-4xl lg:text-5xl">
              Questions, Answered.
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 divide-y divide-black/[0.06] border-y border-black/[0.06]">
          {FAQS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <Reveal key={item.question} delay={0.04 * index}>
                <div>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                  >
                    <span className="font-serif text-lg font-medium text-ink sm:text-xl">
                      {item.question}
                    </span>
                    <span
                      className={cn(
                        "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-black/10 text-ink transition-all duration-300",
                        isOpen && "rotate-45 border-gold bg-gold text-ink"
                      )}
                    >
                      <Plus className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-panel-${index}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 pr-14 leading-relaxed text-ink-soft/65">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
