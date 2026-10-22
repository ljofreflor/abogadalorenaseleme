import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

const heroImage = `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/hero-santiago.jpg`;

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[100svh] overflow-hidden bg-ink text-white"
    >
      <div
        aria-hidden
        className="animate-hero-drift absolute inset-0 origin-center"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${heroImage}'), linear-gradient(145deg, #07131f 0%, #142536 48%, #1a3a45 100%)`,
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_30%,rgba(63,125,110,0.35),transparent_55%),radial-gradient(ellipse_at_80%_70%,rgba(200,185,154,0.18),transparent_50%)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/92 via-ink/78 to-ink/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/40" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-16 pt-28 sm:px-8 sm:pb-20 lg:justify-center lg:pb-24">
        <p className="animate-fade-up font-display text-[clamp(2.75rem,8vw,5.75rem)] leading-[0.95] tracking-tight text-white">
          {site.brand}
        </p>
        <div className="animate-line-draw mt-5 h-px w-24 bg-champagne sm:w-32" />
        <h1 className="animate-fade-up-delay-1 mt-7 max-w-xl font-sans text-2xl font-medium tracking-tight text-white/95 sm:text-3xl">
          {site.headline}
        </h1>
        <p className="animate-fade-up-delay-2 mt-4 max-w-lg text-base leading-relaxed text-white/75 sm:text-lg">
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
    </section>
  );
}
