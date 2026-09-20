import type { Metadata } from "next";
import { ProjectsPage } from "@/components/projects/projects-page";

export const metadata: Metadata = {
  title: "Proyectos | Cl!ck Soluciones Digitales",
  description:
    "Referencias de soluciones personalizadas de Cl!ck Soluciones Digitales: webs, identidad visual, piezas de comunicación, tarjetas, invitaciones y herramientas digitales a medida.",
};

export default function Proyectos() {
  return <ProjectsPage />;
}
