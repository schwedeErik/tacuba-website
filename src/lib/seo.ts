import type { Metadata } from "next";
import { company } from "@/content/company";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.tintoreriatacuba.com.mx";

/** Default WhatsApp / social share image (1200×630 with logo). */
export const defaultOgImage = "/images/og-share.jpg";

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

function absoluteUrl(path: string) {
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${siteUrl.replace(/\/$/, "")}${normalized}`;
}

export function pageMetadata({
  title,
  description,
  path,
  image = defaultOgImage,
  noIndex = false,
}: PageSeoInput): Metadata {
  const url = absoluteUrl(path === "/" ? "/" : path);
  const ogImage = absoluteUrl(image);
  const fullTitle = `${title} | ${company.shortName}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: company.name,
      locale: "es_MX",
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${company.name} — ${title}`,
          type: "image/jpeg",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}
