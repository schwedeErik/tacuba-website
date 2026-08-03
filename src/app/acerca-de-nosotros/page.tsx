import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeader } from "@/components/Section";
import { company } from "@/content/company";
import { withBasePath } from "@/lib/paths";
import { defaultOgImage, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Acerca de nosotros",
  description:
    "Conozca la historia, misión, visión e innovaciones de Tintorería TACUBA: más de 60 años como empresa líder tintorera en Oaxaca.",
  path: "/acerca-de-nosotros",
  image: defaultOgImage,
});

export default function AcercaPage() {
  return (
    <>
      <PageHero
        breadcrumb="Acerca de nosotros"
        title="Acerca de nosotros"
        description={`${company.years}. Empresa líder en el ramo tintorero.`}
      />

      <Section tone="white" id="historia">
        <SectionHeader eyebrow="Historia" title="Nuestra historia" />
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4 text-base leading-relaxed text-ink-muted">
            {company.history.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
          <div className="relative aspect-[4/3] overflow-hidden bg-mist-deep">
            <Image
              src={withBasePath("/images/mosaic-innovaciones.png")}
              alt="Tintorería TACUBA"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>
      </Section>

      <Section tone="mist" id="mision-vision">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <SectionHeader eyebrow="Propósito" title="Misión" />
            <p className="text-base leading-relaxed text-ink-muted md:text-lg">
              “{company.mission}”
            </p>
          </div>
          <div>
            <SectionHeader eyebrow="Futuro" title="Visión" />
            <p className="text-base leading-relaxed text-ink-muted md:text-lg">
              “{company.vision}”
            </p>
          </div>
        </div>
      </Section>

      <Section tone="white" id="innovaciones">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <SectionHeader
              eyebrow="Innovaciones"
              title="Siempre a la vanguardia"
              description={company.innovations}
            />
            <p className="text-base leading-relaxed text-ink-muted">
              {company.institutional}
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden bg-mist-deep">
            <Image
              src={withBasePath("/images/institucional.png")}
              alt="Lavandería institucional TACUBA"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </Section>
    </>
  );
}
