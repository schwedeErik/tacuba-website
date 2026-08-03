"use client";

import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { useMessages } from "@/i18n/LanguageProvider";

export function ServiciosPageContent() {
  const t = useMessages();

  return (
    <>
      <PageHero
        breadcrumb={t.servicesPage.breadcrumb}
        title={t.servicesPage.title}
        description={t.servicesPage.description}
      />
      <Section tone="white">
        <div className="space-y-14">
          {t.services.map((service) => (
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
