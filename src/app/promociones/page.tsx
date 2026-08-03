import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeader } from "@/components/Section";
import { promotions } from "@/content/promotions";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Promociones y Monedero TACUBA",
  description:
    "Acumule puntos con el Monedero TACUBA, disfrute beneficios de cumpleaños y conozca las promociones vigentes de tintorería en Oaxaca.",
  path: "/promociones",
  image: "/images/mosaic-monedero.png",
});

export default function PromocionesPage() {
  return (
    <>
      <PageHero
        breadcrumb="Promociones"
        title="TACUBA le consiente"
        description="Tenemos las mejores promociones para usted. Si aún no las conoce, le invitamos a conocerlas."
      />
      <Section tone="white">
        <SectionHeader
          eyebrow="Beneficios"
          title="Promociones"
          description="Tintorería TACUBA — la mejor de Oaxaca."
        />
        <div className="space-y-16">
          {promotions.map((promo, index) => (
            <article
              key={promo.id}
              id={promo.id}
              className={`grid items-center gap-8 md:grid-cols-2 ${
                index % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-mist-deep">
                {promo.image && (
                  <Image
                    src={promo.image}
                    alt={promo.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                )}
              </div>
              <div>
                <h2 className="font-display text-3xl font-semibold text-navy">
                  {promo.title}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-ink-muted">
                  {promo.summary}
                </p>
                {promo.points && (
                  <ul className="mt-5 space-y-2 text-sm text-ink-muted">
                    {promo.points.map((point) => (
                      <li key={point} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          ))}
        </div>
        <p className="mt-12 text-sm text-ink-muted">
          Consulte los{" "}
          <Link
            href="/terminos-y-condiciones"
            className="font-semibold text-teal hover:text-teal-dark"
          >
            términos y condiciones
          </Link>{" "}
          del Monedero TACUBA.
        </p>
      </Section>
    </>
  );
}
