"use client";

import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeader } from "@/components/Section";
import { company } from "@/content/company";
import { useMessages } from "@/i18n/LanguageProvider";
import { withBasePath } from "@/lib/paths";

export function EmpleoPageContent() {
  const t = useMessages();

  return (
    <>
      <PageHero
        breadcrumb={t.jobsPage.breadcrumb}
        title={t.jobsPage.title}
        description={t.jobsPage.description}
      />
      <Section tone="white">
        <SectionHeader
          eyebrow={t.jobsPage.eyebrow}
          title={t.jobsPage.sectionTitle}
          description={t.jobsPage.sectionDescription}
        />
        <div className="grid gap-8 md:grid-cols-2">
          {t.jobsPage.roles.map((role) => (
            <article
              key={role.title}
              className="overflow-hidden border border-line bg-white"
            >
              <div className="relative aspect-[5/4] bg-mist-deep">
                <Image
                  src={withBasePath(role.image)}
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
            {t.jobsPage.howTitle}
          </h3>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-muted md:text-base">
            {t.jobsPage.howBodyBefore}{" "}
            <a
              href={`mailto:${company.email}?subject=${encodeURIComponent(t.jobsPage.title)}`}
              className="font-semibold text-teal hover:text-teal-dark"
            >
              {company.email}
            </a>{" "}
            {t.jobsPage.howBodyOr}{" "}
            <Link
              href="/contacto"
              className="font-semibold text-teal hover:text-teal-dark"
            >
              {t.jobsPage.howFormLink}
            </Link>
            {t.jobsPage.howBodyAfter}
          </p>
        </div>
      </Section>
    </>
  );
}
