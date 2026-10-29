import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { site } from "@/lib/site";

export function Contact() {
  const { contact } = site;
  const whatsappHref = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
    "Hola, me gustaría agendar una consulta con la Abogada Lorena Seleme."
  )}`;

  return (
    <section id="contacto" className="bg-mist px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-sm font-medium tracking-[0.18em] text-sage-deep uppercase">
            Contacto
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-4xl tracking-tight text-ink sm:text-5xl">
            Conversemos sobre su caso.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Escriba o llame para coordinar una primera consulta. Respuesta en
            horario laboral, de lunes a viernes.
          </p>
        </Reveal>

        <Reveal delayMs={120}>
          <div className="mt-12 flex flex-wrap gap-3">
            <Button
              render={<a href={whatsappHref} target="_blank" rel="noreferrer" />}
              size="lg"
              className="h-11 rounded-md bg-sage px-5 text-base text-white hover:bg-sage-deep"
            >
              Escribir por WhatsApp
            </Button>
            <Button
              render={<a href={`mailto:${contact.email}`} />}
              variant="outline"
              size="lg"
              className="h-11 rounded-md border-ink/20 bg-transparent px-5 text-base text-ink hover:bg-ink/5"
            >
              Enviar correo
            </Button>
            <Button
              render={<a href={`tel:${contact.phoneTel}`} />}
              variant="outline"
              size="lg"
              className="h-11 rounded-md border-ink/20 bg-transparent px-5 text-base text-ink hover:bg-ink/5"
            >
              Llamar
            </Button>
          </div>
        </Reveal>

        <dl className="mt-14 grid gap-8 border-t border-ink/15 pt-10 sm:grid-cols-3">
          <Reveal delayMs={60}>
            <div>
              <dt className="text-sm font-medium tracking-wide text-sage-deep uppercase">
                Correo
              </dt>
              <dd className="mt-2">
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
              <dt className="text-sm font-medium tracking-wide text-sage-deep uppercase">
                Teléfono / WhatsApp
              </dt>
              <dd className="mt-2">
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
              <dt className="text-sm font-medium tracking-wide text-sage-deep uppercase">
                Oficina
              </dt>
              <dd className="mt-2 text-lg leading-snug text-ink">
                {contact.address}
              </dd>
              <dd className="mt-1 text-sm text-muted-foreground">
                {contact.hours} · {site.city}
              </dd>
            </div>
          </Reveal>
        </dl>

        <p className="mt-10 text-xs text-muted-foreground">
          Dirección y horario de oficina son provisionales hasta confirmar
          datos definitivos.
        </p>
      </div>
    </section>
  );
}
