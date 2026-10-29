import Image from "next/image";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[100svh] overflow-hidden bg-mist text-ink"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_12%_20%,rgba(63,125,110,0.14),transparent_48%),radial-gradient(ellipse_at_88%_8%,rgba(200,185,154,0.18),transparent_42%)]"
      />

      <div className="relative z-10 mx-auto grid min-h-[100svh] max-w-6xl items-center gap-10 px-5 pb-16 pt-28 sm:px-8 sm:pb-20 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14 lg:pb-24">
        <div className="order-2 flex flex-col justify-center lg:order-1">
          <p className="animate-fade-up font-display text-[clamp(2.75rem,7vw,5.25rem)] leading-[0.95] tracking-tight text-ink">
            {site.brand}
          </p>
          <div className="animate-line-draw mt-5 h-px w-24 bg-sage sm:w-32" />
          <h1 className="animate-fade-up-delay-1 mt-7 max-w-xl font-sans text-2xl font-medium tracking-tight text-ink sm:text-3xl">
            {site.headline}
          </h1>
          <p className="animate-fade-up-delay-2 mt-4 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
            {site.tagline}
          </p>
          <div className="animate-fade-up-delay-3 mt-9 flex flex-wrap items-center gap-3">
            <Button
              render={<a href="#contacto" />}
              size="lg"
              className="h-11 rounded-md bg-sage px-5 text-base text-white hover:bg-sage-deep"
            >
              Agendar consulta
            </Button>
            <Button
              render={<a href="#areas" />}
              variant="outline"
              size="lg"
              className="h-11 rounded-md border-ink/25 bg-transparent px-5 text-base text-ink hover:bg-ink/5 hover:text-ink"
            >
              Ver áreas de práctica
            </Button>
          </div>
        </div>

        <div className="animate-fade-up order-1 lg:order-2">
          <figure className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden sm:max-w-lg lg:mx-0 lg:max-w-none lg:aspect-[4/5]">
            <Image
              src="/lorena-corporativa.png"
              alt="Lorena Seleme, abogada"
              fill
              priority
              sizes="(max-width: 1024px) 28rem, 42vw"
              className="animate-hero-drift object-cover object-[center_18%]"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
