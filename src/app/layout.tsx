import type { Metadata } from "next";
import { Figtree, Instrument_Serif } from "next/font/google";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Abogada Lorena Seleme | Santiago, Chile",
    template: "%s | Abogada Lorena Seleme",
  },
  description:
    "Asesoría jurídica clara y cercana en derecho de familia, laboral, civil y sucesiones. Atención en Santiago, Chile.",
  metadataBase: new URL("https://abogadalorenaseleme.cl"),
  openGraph: {
    title: "Abogada Lorena Seleme",
    description:
      "Defensa seria, lenguaje claro. Asesoría jurídica para personas y familias en Chile.",
    locale: "es_CL",
    type: "website",
    url: "https://abogadalorenaseleme.cl",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es-CL"
      className={`${figtree.variable} ${instrumentSerif.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
