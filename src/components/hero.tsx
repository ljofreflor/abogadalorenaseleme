import Image from "next/image";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[100svh] overflow-hidden bg-ink text-white"
    >
      <div className="absolute inset-0">
        <Image
          src="/lorena-corporativa.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="animate-hero-drift object-cover object-[center_18%]"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(105deg,rgba(28,32,50,0.92)_0%,rgba(28,32,50,0.78)_42%,rgba(28,32,50,0.35)_68%,rgba(28,32,50,0.55)_100%)]"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_40%,transparent_20%,rgba(28,32,50,0.45)_100%)]"
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-20 pt-28 sm:px-8 sm:pb-24 lg:justify-center lg:pb-28">
        <div className="max-w-2xl">
          <p className="animate-fade-up font-display text-[clamp(2.75rem,8vw,5.5rem)] font-semibold leading-[0.92] tracking-tight text-white">
            {site.brand}
          </p>
          <div className="animate-line-draw mt-6 h-px w-20 bg-wine sm:w-28" />
          <h1 className="animate-fade-up-delay-1 mt-7 max-w-xl font-sans text-xl font-medium tracking-tight text-white/95 sm:text-2xl lg:text-[1.65rem]">
            {site.headline}
          </h1>
          <p className="animate-fade-up-delay-2 mt-4 max-w-lg text-base leading-relaxed text-white/70 sm:text-lg">
            {site.tagline}
          </p>
          <div className="animate-fade-up-delay-3 mt-10 flex flex-wrap items-center gap-3">
            <Button
              render={<a href="#contacto" />}
              size="lg"
              className="h-11 rounded-sm bg-wine px-6 text-base text-white hover:bg-wine-deep"
            >
              Agendar consulta
            </Button>
            <Button
              render={<a href="#areas" />}
              variant="outline"
              size="lg"
              className="h-11 rounded-sm border-white/35 bg-transparent px-6 text-base text-white hover:bg-white/10 hover:text-white"
            >
              Ver áreas de práctica
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
