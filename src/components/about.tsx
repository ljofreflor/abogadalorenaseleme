import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { site } from "@/lib/site";

export function About() {
  return (
    <section id="sobre" className="bg-ink px-5 py-24 text-white sm:px-8 sm:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
        <Reveal>
          <figure className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden lg:mx-0 lg:max-w-none">
            <Image
              src="/lorena-corporativa.png"
              alt="Lorena Seleme, abogada"
              fill
              sizes="(max-width: 1024px) 28rem, 36vw"
              className="object-cover object-[center_18%]"
              priority={false}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent"
            />
          </figure>
        </Reveal>

        <div>
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.22em] text-white/55 uppercase">
              {site.about.title}
            </p>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
              Rigor técnico, trato humano.
            </h2>
          </Reveal>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-white/70 sm:text-lg">
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
