import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeader } from "@/components/Section";
import { company } from "@/content/company";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Bolsa de trabajo",
  description:
    "Vacantes en Tintorería TACUBA: ayudante general y atención en mostrador. Postúlese y únase al equipo líder tintorero de Oaxaca.",
  path: "/empleo",
  image: "/images/empleo-mostrador.jpg",
});

const roles = [
  {
    title: "Ayudante general",
    description:
      "Apoyo en planta y procesos de lavado. Buscamos personas responsables y con ganas de aprender.",
    image: "/images/empleo-ayudante.jpg",
  },
  {
    title: "Atención en mostrador",
    description:
      "Recepción de prendas y atención a clientes en sucursal. Se valora experiencia en servicio al cliente.",
    image: "/images/empleo-mostrador.jpg",
  },
];

export default function EmpleoPage() {
  return (
    <>
      <PageHero
        breadcrumb="Empleo"
        title="Bolsa de trabajo"
        description="Forme parte del equipo de Tintorería TACUBA y contribuya a que Oaxaca se vea impecable."
      />
      <Section tone="white">
        <SectionHeader
          eyebrow="Vacantes"
          title="Únase a nuestro equipo"
          description="Si desea postularse, envíenos un mensaje con su experiencia e interés. En breve nos comunicaremos con usted."
        />
        <div className="grid gap-8 md:grid-cols-2">
          {roles.map((role) => (
            <article key={role.title} className="overflow-hidden border border-line bg-white">
              <div className="relative aspect-[5/4] bg-mist-deep">
                <Image
                  src={role.image}
                  alt={role.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h2 className="font-display text-2xl font-semibold text-navy">
                  {role.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted md:text-base">
                  {role.description}
                </p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-12 border border-line bg-mist p-6 md:p-8">
          <h3 className="font-display text-xl font-semibold text-navy">
            Cómo postularse
          </h3>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-muted md:text-base">
            Envíe su información a{" "}
            <a
              href={`mailto:${company.email}?subject=${encodeURIComponent("Postulación — Bolsa de trabajo")}`}
              className="font-semibold text-teal hover:text-teal-dark"
            >
              {company.email}
            </a>{" "}
            o complete el{" "}
            <Link href="/contacto" className="font-semibold text-teal hover:text-teal-dark">
              formulario de contacto
            </Link>
            .
          </p>
        </div>
      </Section>
    </>
  );
}
