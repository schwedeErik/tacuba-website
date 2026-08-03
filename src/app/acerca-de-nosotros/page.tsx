import { AcercaPageContent } from "@/components/pages/AcercaPageContent";
import { defaultOgImage, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Acerca de nosotros",
  description:
    "Conozca la historia, misión, visión e innovaciones de Tintorería TACUBA: más de 60 años como empresa líder tintorera en Oaxaca.",
  path: "/acerca-de-nosotros",
  image: defaultOgImage,
});

export default function AcercaPage() {
  return <AcercaPageContent />;
}
