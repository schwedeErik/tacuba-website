"use client";

import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeader } from "@/components/Section";
import { company } from "@/content/company";
import { useMessages } from "@/i18n/LanguageProvider";

export function ContactoPageContent() {
  const t = useMessages();

  return (
    <>
      <PageHero
        breadcrumb={t.contactPage.breadcrumb}
        title={t.contactPage.title}
        description={t.contactPage.description}
      />
      <Section tone="mist">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeader
              eyebrow={t.contactPage.eyebrow}
              title={t.contactPage.sectionTitle}
            />
            <address className="not-italic text-sm leading-relaxed text-ink-muted md:text-base">
              <p className="font-medium text-navy">{company.legalName}</p>
              <p className="mt-3">{company.headquarters.address}</p>
              <p>
                {company.headquarters.city} {company.headquarters.zip}
              </p>
              <p className="mt-4">
                <a
                  href={`mailto:${company.email}`}
                  className="font-semibold text-teal hover:text-teal-dark"
                >
                  {company.email}
                </a>
              </p>
            </address>
            <p className="mt-6 text-sm text-ink-muted">
              {t.contactPage.alsoVisit}{" "}
              <Link
                href="/sucursales"
                className="font-semibold text-teal hover:text-teal-dark"
              >
                {t.contactPage.alsoVisitLink}
              </Link>
              {t.contactPage.alsoVisitSuffix}
            </p>
          </div>
          <ContactForm />
        </div>
      </Section>
    </>
  );
}
