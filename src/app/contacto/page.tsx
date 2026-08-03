import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeader } from "@/components/Section";
import { company } from "@/content/company";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contacto",
  description:
    "Escriba a Tintorería TACUBA o visite nuestras oficinas en Carretera Internacional 406, Santa Rosa Panzacola, Oaxaca. contacto@tintoreriatacuba.com.mx",
  path: "/contacto",
});

export default function ContactoPage() {
  return (
    <>
      <PageHero
        breadcrumb="Contacto"
        title="Contacto"
        description="Si desea enviarnos un mensaje, llene el siguiente formulario y en breve nos comunicaremos con usted."
      />
      <Section tone="mist">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeader
              eyebrow="Oficinas centrales"
              title="Estamos para servirle"
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
              También puede visitarnos en cualquiera de nuestras{" "}
              <Link href="/sucursales" className="font-semibold text-teal hover:text-teal-dark">
                sucursales
              </Link>
              .
            </p>
          </div>
          <ContactForm />
        </div>
      </Section>
    </>
  );
}
