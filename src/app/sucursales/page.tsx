import { SucursalesPageContent } from "@/components/pages/SucursalesPageContent";
import { defaultOgImage, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Sucursales en Oaxaca",
  description:
    "Encuentre Tintorería TACUBA cerca de usted: Santa Rosa, Centro, San Sebastián, Violetas, Universidad y Xoxo. Teléfonos, horarios y servicio a domicilio.",
  path: "/sucursales",
  image: defaultOgImage,
});

export default function SucursalesPage() {
  return <SucursalesPageContent />;
}
