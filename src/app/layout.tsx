import type { Metadata } from "next";
import { Barlow_Condensed, Source_Sans_3 } from "next/font/google";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const sourceSans = Source_Sans_3({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
    "Asesoría jurídica clara y cercana en derecho de familia, laboral, civil, sucesiones, tributario, penal e inteligencia artificial. Atención en Las Condes, Santiago.",
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
      className={`${sourceSans.variable} ${barlowCondensed.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
