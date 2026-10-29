import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-ink-soft px-5 py-12 text-white/55 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-display text-xl font-semibold tracking-tight text-white">
            {site.brand}
          </p>
          <p className="mt-2 text-sm">
            {site.city} · {site.domain}
          </p>
        </div>
        <p className="text-sm">
          © 2026 {site.shortBrand}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
