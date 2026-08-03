import { PageHero } from "@/components/PageHero";
import { Section, SectionHeader } from "@/components/Section";
import { monederoTerms } from "@/content/promotions";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Términos y condiciones",
  description:
    "Términos y condiciones del programa Monedero TACUBA: acumulación, redención de puntos y vigencia del beneficio.",
  path: "/terminos-y-condiciones",
});

export default function TerminosPage() {
  return (
    <>
      <PageHero
        breadcrumb="Términos y condiciones"
        title="Términos y condiciones"
      />
      <Section tone="white">
        <div className="mx-auto max-w-3xl">
          <SectionHeader
            eyebrow="Monedero TACUBA"
            title="Condiciones del programa"
            description="Lea las condiciones de uso, acumulación y redención de puntos."
          />
          <ol className="space-y-4">
            {monederoTerms.map((term, index) => (
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
