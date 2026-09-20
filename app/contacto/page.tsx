import type { Metadata } from "next";

import { ContactPage } from "@/components/contact/contact-page";

export const metadata: Metadata = {
  title: "Contacto | Cl!ck Soluciones Digitales",
  description:
    "Contacto de Cl!ck Soluciones Digitales para iniciar proyectos web, identidad visual, piezas de diseño, herramientas digitales y asesoría.",
};

export default function Contacto() {
  return <ContactPage />;
}
