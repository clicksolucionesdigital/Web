import type { Metadata } from "next";

import { ServicesPage } from "@/components/services/services-page";

export const metadata: Metadata = {
  title: "Servicios | Cl!ck Soluciones Digitales",
  description:
    "Servicios de diseño web, identidad visual, piezas de comunicación, herramientas digitales y asesoría para marcas, profesionales y pequeños negocios.",
};

export default function Servicios() {
  return <ServicesPage />;
}
