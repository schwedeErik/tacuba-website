import { BranchCard } from "@/components/BranchCard";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeader } from "@/components/Section";
import { branches } from "@/content/branches";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Sucursales en Oaxaca",
  description:
    "Encuentre Tintorería TACUBA cerca de usted: Santa Rosa, Centro, San Sebastián, Violetas, Universidad y Xoxo. Teléfonos, horarios y servicio a domicilio.",
  path: "/sucursales",
  image: "/images/mosaic-sucursales.png",
});

export default function SucursalesPage() {
  return (
    <>
      <PageHero
        breadcrumb="Sucursales"
        title="Sucursales"
        description="Seis puntos de atención con servicio a domicilio. Encuentre la sucursal más cercana."
      />
      <Section tone="mist">
        <SectionHeader
          title="Nuestras ubicaciones"
          description="Horarios, teléfonos y servicios disponibles en cada planta y sucursal."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {branches.map((branch) => (
            <BranchCard key={branch.id} branch={branch} />
          ))}
        </div>
      </Section>
    </>
  );
}
