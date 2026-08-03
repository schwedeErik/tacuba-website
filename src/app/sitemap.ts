import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";

const routes = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },
  { path: "/servicios", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/sucursales", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/promociones", priority: 0.8, changeFrequency: "weekly" as const },
  { path: "/acerca-de-nosotros", priority: 0.7, changeFrequency: "yearly" as const },
  { path: "/empleo", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/contacto", priority: 0.8, changeFrequency: "yearly" as const },
  { path: "/aviso-de-privacidad", priority: 0.3, changeFrequency: "yearly" as const },
  { path: "/terminos-y-condiciones", priority: 0.3, changeFrequency: "yearly" as const },
];

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: route.path === "/" ? siteUrl : `${siteUrl}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
