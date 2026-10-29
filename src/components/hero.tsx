import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[100svh] overflow-hidden bg-ink text-white"
    >
      {/* Mobile: photo on top; desktop: full-bleed right column */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[46vh] sm:h-[42vh] lg:inset-y-0 lg:left-auto lg:right-0 lg:h-full lg:w-[52%]"
      >
        <div
          className="animate-hero-drift absolute inset-0 origin-center bg-cover bg-[position:center_12%] lg:bg-[position:62%_12%]"
          style={{ backgroundImage: "url('/lorena-corporativa.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/35 via-transparent to-ink lg:bg-gradient-to-r lg:from-ink lg:via-ink/40 lg:to-transparent" />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink to-ink lg:bg-[linear-gradient(90deg,#07131f_0%,#07131f_46%,rgba(7,19,31,0.92)_52%,transparent_68%)]" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-16 pt-[48vh] sm:px-8 sm:pb-20 lg:justify-center lg:pt-28 lg:pb-24">
        <div className="max-w-xl">
          <p className="animate-fade-up font-display text-[clamp(2.75rem,8vw,5.75rem)] leading-[0.95] tracking-tight text-white">
            {site.brand}
          </p>
          <div className="animate-line-draw mt-5 h-px w-24 bg-champagne sm:w-32" />
          <h1 className="animate-fade-up-delay-1 mt-7 font-sans text-2xl font-medium tracking-tight text-white/95 sm:text-3xl">
            {site.headline}
          </h1>
          <p className="animate-fade-up-delay-2 mt-4 text-base leading-relaxed text-white/75 sm:text-lg">
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
              className="h-11 rounded-md border-white/35 bg-transparent px-5 text-base text-white hover:bg-white/10 hover:text-white"
            >
              Ver áreas de práctica
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
