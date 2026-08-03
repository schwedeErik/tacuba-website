import { PromocionesPageContent } from "@/components/pages/PromocionesPageContent";
import { defaultOgImage, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Promociones y Monedero TACUBA",
  description:
    "Acumule puntos con el Monedero TACUBA, disfrute beneficios de cumpleaños y conozca las promociones vigentes de tintorería en Oaxaca.",
  path: "/promociones",
  image: defaultOgImage,
});

export default function PromocionesPage() {
  return <PromocionesPageContent />;
}
