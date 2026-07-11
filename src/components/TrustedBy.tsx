import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { TRUSTED_BY } from "@/lib/data";

export function TrustedBy() {
  const loop = [...TRUSTED_BY, ...TRUSTED_BY];

  return (
    <section className="border-y border-black/5 bg-cream py-14">
      <Container>
        <Reveal className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ink-soft/40">
            Trusted by growth-minded medical spas nationwide
          </p>
        </Reveal>
      </Container>

      <div className="relative mt-8 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-cream to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-cream to-transparent" />
        <div className="flex w-max animate-marquee gap-16 whitespace-nowrap">
          {loop.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="font-serif text-xl font-medium tracking-wide text-ink-soft/30"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
