import { Reveal } from "@/components/reveal";
import { site } from "@/lib/site";

export function PracticeAreas() {
  return (
    <section id="areas" className="bg-mist px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-[0.75rem] font-medium tracking-[0.22em] text-navy/55 uppercase">
            Áreas de práctica
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold tracking-[0.02em] text-navy uppercase sm:text-5xl">
            Acompañamiento jurídico en lo que más importa.
          </h2>
          <div className="mt-6 h-0.5 w-14 bg-signal" />
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Atención personalizada en familia, trabajo, civil, sucesiones,
            tributario, penal e inteligencia artificial, con respuestas
            concretas y plazos realistas.
          </p>
        </Reveal>

        <ul className="mt-16 grid gap-x-14 gap-y-12 sm:grid-cols-2">
          {site.practiceAreas.map((area, index) => (
            <Reveal
              key={area.title}
              as="li"
              delayMs={index * 60}
              className="border-t border-navy/15 pt-7"
            >
              <h3 className="font-display text-2xl font-semibold tracking-[0.03em] text-navy uppercase sm:text-[1.7rem]">
                {area.title}
              </h3>
              <p className="mt-3 max-w-md text-[0.975rem] leading-relaxed text-muted-foreground">
                {area.description}
              </p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
