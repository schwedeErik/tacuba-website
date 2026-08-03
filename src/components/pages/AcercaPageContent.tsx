"use client";

import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeader } from "@/components/Section";
import { useMessages } from "@/i18n/LanguageProvider";
import { withBasePath } from "@/lib/paths";

export function AcercaPageContent() {
  const t = useMessages();

  return (
    <>
      <PageHero
        breadcrumb={t.aboutPage.breadcrumb}
        title={t.aboutPage.title}
        description={`${t.company.years}. ${t.aboutPage.description}`}
      />

      <Section tone="white" id="historia">
        <SectionHeader
          eyebrow={t.aboutPage.historyEyebrow}
          title={t.aboutPage.historyTitle}
        />
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4 text-base leading-relaxed text-ink-muted">
            {t.company.history.map((paragraph) => (
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
            <SectionHeader
              eyebrow={t.aboutPage.purposeEyebrow}
              title={t.aboutPage.missionTitle}
            />
            <p className="text-base leading-relaxed text-ink-muted md:text-lg">
              “{t.company.mission}”
            </p>
          </div>
          <div>
            <SectionHeader
              eyebrow={t.aboutPage.futureEyebrow}
              title={t.aboutPage.visionTitle}
            />
            <p className="text-base leading-relaxed text-ink-muted md:text-lg">
              “{t.company.vision}”
            </p>
          </div>
        </div>
      </Section>

      <Section tone="white" id="innovaciones">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <SectionHeader
              eyebrow={t.aboutPage.innovationsEyebrow}
              title={t.aboutPage.innovationsTitle}
              description={t.company.innovations}
            />
            <p className="text-base leading-relaxed text-ink-muted">
              {t.company.institutional}
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
