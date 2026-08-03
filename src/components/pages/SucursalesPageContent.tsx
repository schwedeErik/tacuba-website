"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { BranchCard } from "@/components/BranchCard";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeader } from "@/components/Section";
import { useMessages } from "@/i18n/LanguageProvider";

const BranchesMap = dynamic(
  () =>
    import("@/components/BranchesMap").then((mod) => mod.BranchesMap),
  {
    ssr: false,
    loading: () => (
      <div className="h-[min(70vh,520px)] w-full animate-pulse border border-line bg-mist-deep" />
    ),
  },
);

export function SucursalesPageContent() {
  const t = useMessages();
  const [activeId, setActiveId] = useState<string | null>(null);

  function handleSelect(id: string) {
    setActiveId(id);
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  }

  return (
    <>
      <PageHero
        breadcrumb={t.branchesPage.breadcrumb}
        title={t.branchesPage.title}
        description={t.branchesPage.description}
      />

      <Section tone="white">
        <SectionHeader
          eyebrow={t.branchesPage.mapEyebrow}
          title={t.branchesPage.mapTitle}
          description={t.branchesPage.mapDescription}
        />
        <BranchesMap
          branches={t.branches}
          activeId={activeId}
          onSelect={handleSelect}
          directionsLabel={t.branchesPage.directions}
          mapLabel={t.branchesPage.mapLabel}
        />
      </Section>

      <Section tone="mist">
        <SectionHeader
          title={t.branchesPage.locationsTitle}
          description={t.branchesPage.locationsDescription}
        />
        <div className="grid gap-6 md:grid-cols-2">
          {t.branches.map((branch) => (
            <BranchCard
              key={branch.id}
              branch={branch}
              active={activeId === branch.id}
              onSelect={handleSelect}
            />
          ))}
        </div>
      </Section>
    </>
  );
}
