import { branches } from "@/content/branches";
import { company } from "@/content/company";
import { services } from "@/content/services";
import { siteUrl } from "@/lib/seo";

function toTel(phone: string) {
  const digits = phone.replace(/\D/g, "");
  if (digits.startsWith("044") || digits.startsWith("045")) {
    return `+52${digits.slice(3)}`;
  }
  if (digits.length === 10) {
    return `+52${digits}`;
  }
  return `+${digits}`;
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "DryCleaningOrLaundry"],
    "@id": `${siteUrl}/#organization`,
    name: company.name,
    legalName: company.legalName,
    url: siteUrl,
    logo: `${siteUrl}/images/logo.png`,
    image: `${siteUrl}/images/servicio.jpg`,
    description: company.description,
    email: company.email,
    slogan: company.tagline,
    foundingDate: "1960",
    areaServed: {
      "@type": "City",
      name: "Oaxaca de Juárez",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: company.headquarters.address,
      addressLocality: "Oaxaca de Juárez",
      addressRegion: "Oaxaca",
      postalCode: "68030",
      addressCountry: "MX",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: company.email,
      availableLanguage: ["Spanish"],
    },
    sameAs: [siteUrl],
    knowsAbout: company.specialties,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios de Tintorería TACUBA",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.summary,
        },
      })),
    },
    department: branches.map((branch) => ({
      "@type": "DryCleaningOrLaundry",
      name: `${company.shortName} — ${branch.name}`,
      url: `${siteUrl}/sucursales#${branch.id}`,
      telephone: toTel(branch.phones[0]),
      address: {
        "@type": "PostalAddress",
        streetAddress: branch.address,
        addressLocality: "Oaxaca de Juárez",
        addressRegion: "Oaxaca",
        addressCountry: "MX",
      },
    })),
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: company.name,
    description: company.description,
    inLanguage: "es-MX",
    publisher: {
      "@id": `${siteUrl}/#organization`,
    },
  };
}
