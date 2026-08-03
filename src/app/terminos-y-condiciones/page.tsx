import { TerminosPageContent } from "@/components/pages/TerminosPageContent";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Términos y condiciones",
  description:
    "Términos y condiciones del programa Monedero TACUBA: acumulación, redención de puntos y vigencia del beneficio.",
  path: "/terminos-y-condiciones",
});

export default function TerminosPage() {
  return <TerminosPageContent />;
}
