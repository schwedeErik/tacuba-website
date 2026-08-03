import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { services } from "@/content/services";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Servicios de tintorería en Oaxaca",
  description:
    "Tintorería de calidad, piel y gamuza, blancos, cortinas, peluches sanitizados, planchado, teñido, composturas, servicios urgentes y a domicilio en Oaxaca.",
  path: "/servicios",
});

export default function ServiciosPage() {
  return (
    <>
      <PageHero
        breadcrumb="Servicios"
        title="Nuestros servicios"
        description="TACUBA le brinda diversos servicios para el cuidado de sus prendas, blancos, cortinas, pieles y mucho más."
      />
      <Section tone="white">
        <div className="space-y-14">
          {services.map((service) => (
            <article
              key={service.id}
              id={service.id}
              className="scroll-mt-28 border-b border-line pb-10 last:border-b-0 last:pb-0"
            >
              <h2 className="font-display text-2xl font-semibold text-navy md:text-3xl">
                {service.title}
              </h2>
              <p className="mt-3 max-w-3xl text-base leading-relaxed text-ink-muted">
                {service.summary}
              </p>
              {service.details && (
                <ul className="mt-4 max-w-3xl space-y-2 text-sm text-ink-muted md:text-base">
                  {service.details.map((detail) => (
                    <li key={detail} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
