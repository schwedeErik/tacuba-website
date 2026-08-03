"use client";

import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Section, SectionHeader } from "@/components/Section";
import { ServiceList } from "@/components/ServiceList";
import { TestimonialSlider } from "@/components/TestimonialSlider";
import { company } from "@/content/company";
import { useMessages } from "@/i18n/LanguageProvider";
import { withBasePath } from "@/lib/paths";

export function HomePageContent() {
  const t = useMessages();

  return (
    <>
      <Hero
        brand={company.shortName}
        title={t.company.headline}
        subtitle={`“${t.company.tagline}”`}
        imageSrc="/images/servicio.jpg"
        primaryCta={{ href: "/servicios", label: t.home.ctaServices }}
        secondaryCta={{ href: "/sucursales", label: t.home.ctaBranches }}
      />

      <Section tone="white">
        <div className="grid items-end gap-10 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <SectionHeader
              eyebrow={t.company.years}
              title={t.home.leaderTitle}
              description={t.company.description}
            />
          </div>
          <ul className="space-y-3 border-l border-line pl-6">
            {t.company.specialties.map((item) => (
              <li key={item} className="font-display text-lg text-navy">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section tone="mist">
        <SectionHeader
          eyebrow={t.home.servicesEyebrow}
          title={t.home.servicesTitle}
          description={t.home.servicesDescription}
        />
        <ServiceList services={t.services.slice(0, 6)} compact />
        <div className="mt-10">
          <Link
            href="/servicios"
            className="inline-flex items-center rounded-md bg-navy px-5 py-3 text-sm font-semibold text-white transition hover:bg-navy-soft"
          >
            {t.home.viewAllServices}
          </Link>
        </div>
      </Section>

      <Section tone="white">
        <SectionHeader
          eyebrow={t.home.exploreEyebrow}
          title={t.home.exploreTitle}
          description={t.home.exploreDescription}
        />
        <div className="grid gap-8 sm:grid-cols-2">
          {t.home.pathways.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group block overflow-hidden"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-mist-deep">
                <Image
                  src={withBasePath(item.image)}
                  alt={`${item.title} — Tintorería TACUBA`}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <h3 className="mt-4 font-display text-2xl font-semibold text-navy transition group-hover:text-teal">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted md:text-base">
                {item.description}
              </p>
            </Link>
          ))}
        </div>
      </Section>

      <Section tone="mist">
        <SectionHeader
          eyebrow={t.home.testimonialsEyebrow}
          title={t.home.testimonialsTitle}
        />
        <TestimonialSlider items={t.testimonials} />
      </Section>

      <Section tone="navy">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-semibold text-white md:text-4xl">
              {t.home.ctaTitle}
            </h2>
            <p className="mt-3 text-white/75">{t.home.ctaDescription}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/sucursales"
              className="inline-flex rounded-md bg-teal px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-dark"
            >
              {t.home.ctaBranchesButton}
            </Link>
            <Link
              href="/contacto"
              className="inline-flex rounded-md border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              {t.home.ctaContactButton}
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
