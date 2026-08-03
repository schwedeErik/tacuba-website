import { EmpleoPageContent } from "@/components/pages/EmpleoPageContent";
import { defaultOgImage, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Bolsa de trabajo",
  description:
    "Vacantes en Tintorería TACUBA: ayudante general y atención en mostrador. Postúlese y únase al equipo líder tintorero de Oaxaca.",
  path: "/empleo",
  image: defaultOgImage,
});

export default function EmpleoPage() {
  return <EmpleoPageContent />;
}
