"use client";

import { PageHero } from "@/components/PageHero";
import { Section, SectionHeader } from "@/components/Section";
import { useMessages } from "@/i18n/LanguageProvider";

export function TerminosPageContent() {
  const t = useMessages();

  return (
    <>
      <PageHero
        breadcrumb={t.termsPage.breadcrumb}
        title={t.termsPage.title}
      />
      <Section tone="white">
        <div className="mx-auto max-w-3xl">
          <SectionHeader
            eyebrow={t.termsPage.eyebrow}
            title={t.termsPage.sectionTitle}
            description={t.termsPage.sectionDescription}
          />
          <ol className="space-y-4">
            {t.monederoTerms.map((term, index) => (
              <li
                key={term}
                className="flex gap-4 border-t border-line pt-4 text-sm leading-relaxed text-ink-muted md:text-base"
              >
                <span className="font-display text-lg font-semibold text-teal">
                  {index + 1}.
                </span>
                <span>{term}</span>
              </li>
            ))}
          </ol>
        </div>
      </Section>
    </>
  );
}
