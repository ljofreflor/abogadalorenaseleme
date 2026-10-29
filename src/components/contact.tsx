import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { site } from "@/lib/site";

export function Contact() {
  const { contact } = site;
  const whatsappHref = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
    "Hola, me gustaría agendar una consulta con la Abogada Lorena Seleme."
  )}`;

  return (
    <section id="contacto" className="bg-mist px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-[0.75rem] font-medium tracking-[0.22em] text-navy/55 uppercase">
            Contacto
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold tracking-[0.02em] text-navy uppercase sm:text-5xl">
            Conversemos sobre su caso.
          </h2>
          <div className="mt-6 h-0.5 w-14 bg-signal" />
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Escriba o llame para coordinar una primera consulta. Respuesta en
            horario laboral, de lunes a viernes.
          </p>
        </Reveal>

        <Reveal delayMs={120}>
          <div className="mt-12 flex flex-wrap gap-3">
            <Button
              render={<a href={whatsappHref} target="_blank" rel="noreferrer" />}
              size="lg"
              className="h-11 rounded-none bg-navy px-6 text-sm font-medium tracking-[0.08em] text-white uppercase hover:bg-navy-deep"
            >
              WhatsApp
            </Button>
            <Button
              render={<a href={`mailto:${contact.email}`} />}
              variant="outline"
              size="lg"
              className="h-11 rounded-none border-navy/30 bg-transparent px-6 text-sm font-medium tracking-[0.08em] text-navy uppercase hover:bg-navy/5"
            >
              Correo
            </Button>
            <Button
              render={<a href={`tel:${contact.phoneTel}`} />}
              variant="outline"
              size="lg"
              className="h-11 rounded-none border-navy/30 bg-transparent px-6 text-sm font-medium tracking-[0.08em] text-navy uppercase hover:bg-navy/5"
            >
              Llamar
            </Button>
          </div>
        </Reveal>

        <dl className="mt-16 grid gap-10 border-t border-navy/15 pt-12 sm:grid-cols-3">
          <Reveal delayMs={60}>
            <div>
              <dt className="text-[0.7rem] font-medium tracking-[0.18em] text-navy/55 uppercase">
                Correo
              </dt>
              <dd className="mt-3">
                <a
                  href={`mailto:${contact.email}`}
                  className="text-lg text-navy underline-offset-4 hover:underline"
                >
                  {contact.email}
                </a>
              </dd>
            </div>
          </Reveal>
          <Reveal delayMs={120}>
            <div>
              <dt className="text-[0.7rem] font-medium tracking-[0.18em] text-navy/55 uppercase">
                Teléfono / WhatsApp
              </dt>
              <dd className="mt-3">
                <a
                  href={`tel:${contact.phoneTel}`}
                  className="text-lg text-navy underline-offset-4 hover:underline"
                >
                  {contact.phoneDisplay}
                </a>
              </dd>
            </div>
          </Reveal>
          <Reveal delayMs={180}>
            <div>
              <dt className="text-[0.7rem] font-medium tracking-[0.18em] text-navy/55 uppercase">
                Oficina
              </dt>
              <dd className="mt-3 text-lg leading-snug text-navy">
                {contact.address}
              </dd>
              <dd className="mt-1 text-sm text-muted-foreground">
                {contact.hours} · {site.city}
              </dd>
            </div>
          </Reveal>
        </dl>

        <p className="mt-10 text-xs text-muted-foreground">
          Horario de atención provisional hasta confirmar datos definitivos.
        </p>
      </div>
    </section>
  );
}
