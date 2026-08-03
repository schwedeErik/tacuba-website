"use client";

import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeader } from "@/components/Section";
import { useMessages } from "@/i18n/LanguageProvider";
import { withBasePath } from "@/lib/paths";

export function PromocionesPageContent() {
  const t = useMessages();

  return (
    <>
      <PageHero
        breadcrumb={t.promotionsPage.breadcrumb}
        title={t.promotionsPage.title}
        description={t.promotionsPage.description}
      />
      <Section tone="white">
        <SectionHeader
          eyebrow={t.promotionsPage.eyebrow}
          title={t.promotionsPage.sectionTitle}
          description={t.promotionsPage.sectionDescription}
        />
        <div className="space-y-16">
          {t.promotions.map((promo, index) => (
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
                    src={withBasePath(promo.image)}
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
          {t.promotionsPage.termsLinkPrefix}{" "}
          <Link
            href="/terminos-y-condiciones"
            className="font-semibold text-teal hover:text-teal-dark"
          >
            {t.promotionsPage.termsLink}
          </Link>{" "}
          {t.promotionsPage.termsLinkSuffix}
        </p>
      </Section>
    </>
  );
}
