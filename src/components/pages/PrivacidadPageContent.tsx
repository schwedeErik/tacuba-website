"use client";

import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { useMessages } from "@/i18n/LanguageProvider";

export function PrivacidadPageContent() {
  const t = useMessages();

  return (
    <>
      <PageHero
        breadcrumb={t.privacyPage.breadcrumb}
        title={t.privacyPage.title}
      />
      <Section tone="white">
        <div className="mx-auto max-w-3xl space-y-10">
          {t.privacySections.map((section) => (
            <article key={section.title}>
              <h2 className="font-display text-2xl font-semibold text-navy">
                {section.title}
              </h2>
              <div className="mt-3 space-y-3 text-sm leading-relaxed text-ink-muted md:text-base">
                {section.body.map((p) => (
                  <p key={p.slice(0, 48)}>{p}</p>
                ))}
                {section.list && (
                  <ul className="space-y-2 pl-1">
                    {section.list.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {section.extra?.map((p) => (
                  <p key={p.slice(0, 48)}>{p}</p>
                ))}
                {section.extraList && (
                  <ul className="space-y-2 pl-1">
                    {section.extraList.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {section.closing?.map((p) => (
                  <p key={p.slice(0, 48)}>{p}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
