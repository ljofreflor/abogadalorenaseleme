import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { PracticeAreas } from "@/components/practice-areas";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <PracticeAreas />
        <About />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
