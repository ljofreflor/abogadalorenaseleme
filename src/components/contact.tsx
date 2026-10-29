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
          <p className="text-xs font-semibold tracking-[0.22em] text-wine uppercase">
            Contacto
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Conversemos sobre su caso.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Escriba o llame para coordinar una primera consulta. Respuesta en
            horario laboral, de lunes a viernes.
          </p>
        </Reveal>

        <Reveal delayMs={120}>
          <div className="mt-12 flex flex-wrap gap-3">
            <Button
              render={<a href={whatsappHref} target="_blank" rel="noreferrer" />}
              size="lg"
              className="h-11 rounded-sm bg-wine px-6 text-base text-white hover:bg-wine-deep"
            >
              Escribir por WhatsApp
            </Button>
            <Button
              render={<a href={`mailto:${contact.email}`} />}
              variant="outline"
              size="lg"
              className="h-11 rounded-sm border-ink/20 bg-transparent px-6 text-base text-ink hover:bg-ink/5"
            >
              Enviar correo
            </Button>
            <Button
              render={<a href={`tel:${contact.phoneTel}`} />}
              variant="outline"
              size="lg"
              className="h-11 rounded-sm border-ink/20 bg-transparent px-6 text-base text-ink hover:bg-ink/5"
            >
              Llamar
            </Button>
          </div>
        </Reveal>

        <dl className="mt-16 grid gap-10 border-t border-ink/12 pt-12 sm:grid-cols-3">
          <Reveal delayMs={60}>
            <div>
              <dt className="text-xs font-semibold tracking-[0.18em] text-wine uppercase">
                Correo
              </dt>
              <dd className="mt-3">
                <a
                  href={`mailto:${contact.email}`}
                  className="text-lg text-ink underline-offset-4 hover:underline"
                >
                  {contact.email}
                </a>
              </dd>
            </div>
          </Reveal>
          <Reveal delayMs={120}>
            <div>
              <dt className="text-xs font-semibold tracking-[0.18em] text-wine uppercase">
                Teléfono / WhatsApp
              </dt>
              <dd className="mt-3">
                <a
                  href={`tel:${contact.phoneTel}`}
                  className="text-lg text-ink underline-offset-4 hover:underline"
                >
                  {contact.phoneDisplay}
                </a>
              </dd>
            </div>
          </Reveal>
          <Reveal delayMs={180}>
            <div>
              <dt className="text-xs font-semibold tracking-[0.18em] text-wine uppercase">
                Oficina
              </dt>
              <dd className="mt-3 text-lg leading-snug text-ink">
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
