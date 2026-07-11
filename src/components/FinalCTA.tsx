import { CalendarCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_100%,rgba(200,162,74,0.2),transparent)]" />
      </div>

      <Container className="relative flex flex-col items-center text-center">
        <Reveal>
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-gold">
            <CalendarCheck className="h-6 w-6" strokeWidth={1.5} aria-hidden="true" />
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-8 max-w-3xl text-balance font-serif text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
            Ready to Fill Your Consultation Calendar?
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-5 max-w-xl text-balance text-lg leading-relaxed text-white/55">
            Book a free, no-pressure strategy call and we&apos;ll show you exactly how
            we&apos;d grow your med spa&apos;s bookings in the next 90 days.
          </p>
        </Reveal>
        <Reveal delay={0.24}>
          <div className="mt-10">
            <Button href="#contact" size="lg">
              Book a Free Strategy Call
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
