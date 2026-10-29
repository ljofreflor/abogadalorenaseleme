import { site } from "@/lib/site";

const links = [
  { href: "#areas", label: "Áreas" },
  { href: "#sobre", label: "Sobre mí" },
  { href: "#contacto", label: "Contacto" },
] as const;

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-20 border-b border-navy/10 bg-white/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <a
          href="#inicio"
          className="font-display text-xl font-semibold tracking-[0.04em] text-navy uppercase sm:text-2xl"
        >
          {site.shortBrand}
        </a>
        <nav
          aria-label="Principal"
          className="flex items-center gap-5 text-[0.8rem] font-medium tracking-[0.12em] text-navy/70 uppercase sm:gap-8"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-navy"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
