import { Reveal } from "@/components/reveal";
import { site } from "@/lib/site";

export function About() {
  return (
    <section id="sobre" className="bg-ink-soft px-5 py-20 text-white sm:px-8 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal>
          <p className="text-sm font-medium tracking-[0.18em] text-champagne uppercase">
            {site.about.title}
          </p>
          <h2 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">
            Rigor técnico, trato humano.
          </h2>
        </Reveal>
        <div className="space-y-5 text-base leading-relaxed text-white/75 sm:text-lg">
          {site.about.body.map((paragraph, index) => (
            <Reveal key={paragraph.slice(0, 24)} delayMs={index * 100}>
              <p>{paragraph}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
