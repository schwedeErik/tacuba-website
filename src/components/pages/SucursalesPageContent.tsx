"use client";

import { BranchCard } from "@/components/BranchCard";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeader } from "@/components/Section";
import { useMessages } from "@/i18n/LanguageProvider";

export function SucursalesPageContent() {
  const t = useMessages();

  return (
    <>
      <PageHero
        breadcrumb={t.branchesPage.breadcrumb}
        title={t.branchesPage.title}
        description={t.branchesPage.description}
      />
      <Section tone="mist">
        <SectionHeader
          title={t.branchesPage.locationsTitle}
          description={t.branchesPage.locationsDescription}
        />
        <div className="grid gap-6 md:grid-cols-2">
          {t.branches.map((branch) => (
            <BranchCard key={branch.id} branch={branch} />
          ))}
        </div>
      </Section>
    </>
  );
}
