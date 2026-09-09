import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Arimo, Barlow_Condensed } from "next/font/google";
import "./globals.css";

const arimo = Arimo({
  variable: "--font-arimo",
  subsets: ["latin"],
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://clicksolucionesdigital.com"),
  title: "Cl!ck Soluciones Digitales",
  description:
    "Diseño web, dashboards, automatizaciones, datos e identidad visual para negocios que quieren crecer con presencia digital.",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${arimo.variable} ${barlowCondensed.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">{children}</body>
    </html>
  );
}
