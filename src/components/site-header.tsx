import { site } from "@/lib/site";

const links = [
  { href: "#areas", label: "Áreas" },
  { href: "#sobre", label: "Sobre mí" },
  { href: "#contacto", label: "Contacto" },
] as const;

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-5 sm:px-8 sm:py-6">
        <a
          href="#inicio"
          className="font-display text-lg font-semibold tracking-[0.04em] text-white uppercase sm:text-xl"
        >
          {site.shortBrand}
        </a>
        <nav
          aria-label="Principal"
          className="flex items-center gap-5 text-sm font-medium tracking-wide text-white/75 sm:gap-8"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
