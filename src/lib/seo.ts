import type { Metadata } from "next";
import { company } from "@/content/company";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.tintoreriatacuba.com.mx";

export const siteKeywords = [
  "tintorería Oaxaca",
  "Tintorería TACUBA",
  "lavado en seco Oaxaca",
  "planchado profesional",
  "lavandería institucional Oaxaca",
  "servicio a domicilio tintorería",
  "teñido de ropa",
  "Monedero TACUBA",
  "dry cleaning Oaxaca",
];

type PageSeoInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
  noIndex?: boolean;
};

export function pageMetadata({
  title,
  description,
  path,
  image = "/images/servicio.jpg",
  noIndex = false,
}: PageSeoInput): Metadata {
  const url = path === "/" ? siteUrl : `${siteUrl}${path}`;
  const ogImage = image.startsWith("http") ? image : `${siteUrl}${image}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} | ${company.shortName}`,
      description,
      url,
      siteName: company.name,
      locale: "es_MX",
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1700,
          height: 1100,
          alt: `${company.name} — ${title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${company.shortName}`,
      description,
      images: [ogImage],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}
