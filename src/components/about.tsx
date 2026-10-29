import { Reveal } from "@/components/reveal";
import { site } from "@/lib/site";

export function About() {
  return (
    <section id="sobre" className="bg-ink-soft px-5 py-20 text-white sm:px-8 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
        <Reveal>
          <figure className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden lg:mx-0 lg:max-w-none">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/lorena-corporativa.png"
              alt="Abogada Lorena Seleme"
              className="absolute inset-0 size-full object-cover object-[center_15%]"
              width={896}
              height={1200}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10"
            />
          </figure>
        </Reveal>

        <div>
          <Reveal>
            <p className="text-sm font-medium tracking-[0.18em] text-champagne uppercase">
              {site.about.title}
            </p>
            <h2 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">
              Rigor técnico, trato humano.
            </h2>
          </Reveal>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-white/75 sm:text-lg">
            {site.about.body.map((paragraph, index) => (
              <Reveal key={paragraph.slice(0, 24)} delayMs={index * 100}>
                <p>{paragraph}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
