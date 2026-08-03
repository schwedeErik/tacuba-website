import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { privacySections } from "@/content/legal";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Aviso de privacidad",
  description:
    "Aviso de privacidad de TACUBA DRY CLEAN S.A. DE C.V. Conozca cómo Tintorería Tacuba trata y protege sus datos personales.",
  path: "/aviso-de-privacidad",
});

export default function AvisoPrivacidadPage() {
  return (
    <>
      <PageHero
        breadcrumb="Aviso de privacidad"
        title="Aviso de privacidad"
      />
      <Section tone="white">
        <div className="mx-auto max-w-3xl space-y-10">
          {privacySections.map((section) => (
            <article key={section.title}>
              <h2 className="font-display text-2xl font-semibold text-navy">
                {section.title}
              </h2>
              <div className="mt-3 space-y-3 text-sm leading-relaxed text-ink-muted md:text-base">
                {section.body.map((p) => (
                  <p key={p.slice(0, 48)}>{p}</p>
                ))}
                {"list" in section && section.list && (
                  <ul className="space-y-2 pl-1">
                    {section.list.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {"extra" in section &&
                  section.extra?.map((p) => (
                    <p key={p.slice(0, 48)}>{p}</p>
                  ))}
                {"extraList" in section && section.extraList && (
                  <ul className="space-y-2 pl-1">
                    {section.extraList.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {"closing" in section &&
                  section.closing?.map((p) => (
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
