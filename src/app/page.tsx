import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Section, SectionHeader } from "@/components/Section";
import { ServiceList } from "@/components/ServiceList";
import { TestimonialSlider } from "@/components/TestimonialSlider";
import { company } from "@/content/company";
import { featuredServices } from "@/content/services";
import { testimonials } from "@/content/testimonials";
import { withBasePath } from "@/lib/paths";
import { defaultOgImage, pageMetadata } from "@/lib/seo";

export const metadata = {
  ...pageMetadata({
    title: "Tintorería en Oaxaca",
    description: `${company.headline}. ${company.description} ${company.tagline}.`,
    path: "/",
    image: defaultOgImage,
  }),
  title: {
    absolute: `${company.shortName} | Tintorería en Oaxaca`,
  },
};
const pathways = [
  {
    href: "/sucursales",
    title: "Sucursales",
    description: "Seis puntos de atención en Oaxaca con servicio a domicilio.",
    image: "/images/mosaic-sucursales.png",
  },
  {
    href: "/promociones",
    title: "Promociones",
    description: "Monedero TACUBA, beneficios de cumpleaños y ofertas vigentes.",
    image: "/images/mosaic-monedero.png",
  },
  {
    href: "/servicios#domicilio",
    title: "Servicio a domicilio",
    description: "No batalles: nosotros lo hacemos por ti.",
    image: "/images/servicio.jpg",
  },
  {
    href: "/acerca-de-nosotros#innovaciones",
    title: "Lavandería institucional",
    description: company.institutional,
    image: "/images/institucional.png",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero
        brand={company.shortName}
        title={company.headline}
        subtitle={`“${company.tagline}”`}
        imageSrc="/images/servicio.jpg"
        primaryCta={{ href: "/servicios", label: "Ver servicios" }}
        secondaryCta={{ href: "/sucursales", label: "Encontrar sucursal" }}
      />

      <Section tone="white">
        <div className="grid items-end gap-10 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <SectionHeader
              eyebrow={company.years}
              title="Empresa líder en el ramo tintorero"
              description={company.description}
            />
          </div>
          <ul className="space-y-3 border-l border-line pl-6">
            {company.specialties.map((item) => (
              <li key={item} className="font-display text-lg text-navy">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section tone="mist">
        <SectionHeader
          eyebrow="Servicios"
          title="Nuestros servicios"
          description="TACUBA le brinda diversos servicios para el cuidado de sus prendas, blancos, cortinas, pieles y mucho más."
        />
        <ServiceList services={featuredServices} compact />
        <div className="mt-10">
          <Link
            href="/servicios"
            className="inline-flex items-center rounded-md bg-navy px-5 py-3 text-sm font-semibold text-white transition hover:bg-navy-soft"
          >
            Ver todos los servicios
          </Link>
        </div>
      </Section>

      <Section tone="white">
        <SectionHeader
          eyebrow="Explore"
          title="Lo que necesita, con claridad"
          description="Encuentre sucursales, promociones y servicios institucionales sin rodeos."
        />
        <div className="grid gap-8 sm:grid-cols-2">
          {pathways.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group block overflow-hidden"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-mist-deep">
                <Image
                  src={withBasePath(item.image)}
                  alt={`${item.title} — Tintorería TACUBA`}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <h3 className="mt-4 font-display text-2xl font-semibold text-navy transition group-hover:text-teal">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted md:text-base">
                {item.description}
              </p>
            </Link>
          ))}
        </div>
      </Section>

      <Section tone="mist">
        <SectionHeader
          eyebrow="Opiniones"
          title="Nuestros clientes opinan"
        />
        <TestimonialSlider items={testimonials} />
      </Section>

      <Section tone="navy">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-semibold text-white md:text-4xl">
              Visítenos en cualquiera de nuestras sucursales
            </h2>
            <p className="mt-3 text-white/75">
              Seis sucursales en Oaxaca con servicio a domicilio. Estamos listos
              para cuidar sus prendas.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/sucursales"
              className="inline-flex rounded-md bg-teal px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-dark"
            >
              Ver sucursales
            </Link>
            <Link
              href="/contacto"
              className="inline-flex rounded-md border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Contacto
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
