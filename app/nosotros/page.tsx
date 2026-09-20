import type { Metadata } from "next";

import { AboutPage } from "@/components/about/about-page";

export const metadata: Metadata = {
  title: "Nosotros | Cl!ck Soluciones Digitales",
  description:
    "Conocé a Oriana Rojas y la forma de trabajar de Cl!ck Soluciones Digitales: negocio, creatividad, tecnología y soluciones digitales pensadas para cada objetivo.",
};

export default function Nosotros() {
  return <AboutPage />;
}
