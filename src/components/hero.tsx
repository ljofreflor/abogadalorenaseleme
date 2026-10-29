import Image from "next/image";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[100svh] overflow-hidden bg-white text-navy"
    >
      <div className="relative z-10 mx-auto grid min-h-[100svh] max-w-6xl items-center gap-12 px-5 pb-20 pt-28 sm:px-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16 lg:pb-24">
        <div className="order-2 flex flex-col justify-center lg:order-1">
          <p className="animate-fade-up text-[0.75rem] font-medium tracking-[0.22em] text-navy/55 uppercase">
            Abogada · Las Condes
          </p>
          <p className="animate-fade-up-delay-1 mt-4 font-display text-[clamp(2.85rem,7.2vw,5.5rem)] leading-[0.92] font-semibold tracking-[0.01em] text-navy uppercase">
            {site.brand}
          </p>
          <div className="animate-line-draw mt-6 h-0.5 w-16 bg-signal" />
          <h1 className="animate-fade-up-delay-2 mt-8 max-w-xl font-sans text-xl font-normal tracking-tight text-navy/90 sm:text-2xl">
            {site.headline}
          </h1>
          <p className="animate-fade-up-delay-2 mt-4 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
            {site.tagline}
          </p>
          <div className="animate-fade-up-delay-3 mt-10 flex flex-wrap items-center gap-3">
            <Button
              render={<a href="#contacto" />}
              size="lg"
              className="h-11 rounded-none bg-navy px-6 text-sm font-medium tracking-[0.08em] text-white uppercase hover:bg-navy-deep"
            >
              Agendar consulta
            </Button>
            <Button
              render={<a href="#areas" />}
              variant="outline"
              size="lg"
              className="h-11 rounded-none border-navy/30 bg-transparent px-6 text-sm font-medium tracking-[0.08em] text-navy uppercase hover:bg-navy/5"
            >
              Áreas de práctica
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
              className="object-cover object-[center_18%]"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
