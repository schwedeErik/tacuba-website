import { PrivacidadPageContent } from "@/components/pages/PrivacidadPageContent";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Aviso de privacidad",
  description:
    "Aviso de privacidad de TACUBA DRY CLEAN S.A. DE C.V. Conozca cómo Tintorería Tacuba trata y protege sus datos personales.",
  path: "/aviso-de-privacidad",
});

export default function AvisoPrivacidadPage() {
  return <PrivacidadPageContent />;
}
