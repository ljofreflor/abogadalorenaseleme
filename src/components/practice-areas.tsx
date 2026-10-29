import { Reveal } from "@/components/reveal";
import { site } from "@/lib/site";

export function PracticeAreas() {
  return (
    <section id="areas" className="bg-fog px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.22em] text-wine uppercase">
            Áreas de práctica
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Acompañamiento jurídico en lo que más importa.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Atención personalizada en familia, trabajo, civil, sucesiones,
            tributario, penal e inteligencia artificial, con respuestas
            concretas y plazos realistas.
          </p>
        </Reveal>

        <ul className="mt-16 grid gap-x-16 gap-y-14 sm:grid-cols-2">
          {site.practiceAreas.map((area, index) => (
            <Reveal
              key={area.title}
              as="li"
              delayMs={index * 70}
              className="border-t border-ink/12 pt-7"
            >
              <h3 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-[1.7rem]">
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
