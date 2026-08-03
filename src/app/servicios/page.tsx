import { ServiciosPageContent } from "@/components/pages/ServiciosPageContent";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Servicios de tintorería en Oaxaca",
  description:
    "Tintorería de calidad, piel y gamuza, blancos, cortinas, peluches sanitizados, planchado, teñido, composturas, servicios urgentes y a domicilio en Oaxaca.",
  path: "/servicios",
});

export default function ServiciosPage() {
  return <ServiciosPageContent />;
}
