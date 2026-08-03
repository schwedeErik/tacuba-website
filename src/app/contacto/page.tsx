import { ContactoPageContent } from "@/components/pages/ContactoPageContent";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contacto",
  description:
    "Escriba a Tintorería TACUBA o visite nuestras oficinas en Carretera Internacional 406, Santa Rosa Panzacola, Oaxaca. contacto@tintoreriatacuba.com.mx",
  path: "/contacto",
});

export default function ContactoPage() {
  return <ContactoPageContent />;
}
