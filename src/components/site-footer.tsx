import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-ink/10 bg-ink px-5 py-10 text-white/65 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-display text-xl text-white">{site.brand}</p>
          <p className="mt-1 text-sm">
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
