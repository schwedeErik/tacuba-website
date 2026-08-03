"use client";

import Image from "next/image";
import Link from "next/link";
import { company } from "@/content/company";
import { useMessages } from "@/i18n/LanguageProvider";
import { withBasePath } from "@/lib/paths";

export function Footer() {
  const t = useMessages();

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/servicios", label: t.nav.services },
    { href: "/sucursales", label: t.nav.branches },
    { href: "/promociones", label: t.nav.promotions },
    { href: "/empleo", label: t.nav.jobs },
    { href: "/contacto", label: t.nav.contact },
  ];

  const footerLinks = [
    { href: "/acerca-de-nosotros", label: t.nav.about },
    { href: "/aviso-de-privacidad", label: t.nav.privacy },
    { href: "/terminos-y-condiciones", label: t.nav.terms },
    { href: "/contacto", label: t.nav.contact },
  ];

  return (
    <footer className="mt-auto border-t border-line bg-navy text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3 md:px-8">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <Image
              src={withBasePath("/images/logo.png")}
              alt={t.common.brandAlt}
              width={64}
              height={44}
              className="h-11 w-auto"
            />
            <div>
              <p className="font-display text-xl font-semibold">{company.shortName}</p>
              <p className="text-sm text-white/70">{t.company.years}</p>
            </div>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-white/75">
            {t.company.description}
          </p>
        </div>

        <div>
          <h2 className="mb-4 font-display text-lg text-white">{t.nav.navigation}</h2>
          <ul className="space-y-2 text-sm text-white/80">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-4 font-display text-lg text-white">{t.nav.information}</h2>
          <ul className="mb-6 space-y-2 text-sm text-white/80">
            {footerLinks.map((link) => (
              <li key={`${link.href}-${link.label}`}>
                <Link href={link.href} className="transition hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <address className="not-italic text-sm leading-relaxed text-white/70">
            {company.headquarters.address}
            <br />
            {company.headquarters.city} {company.headquarters.zip}
            <br />
            <a
              href={`mailto:${company.email}`}
              className="mt-2 inline-block text-teal-soft transition hover:text-white"
            >
              {company.email}
            </a>
          </address>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-5 py-5 text-center text-xs text-white/50 md:px-8 md:text-left">
          © {new Date().getFullYear()} {company.legalName}. {t.common.rights}
        </p>
      </div>
    </footer>
  );
}
