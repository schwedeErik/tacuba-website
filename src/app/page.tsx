import { HomePageContent } from "@/components/pages/HomePageContent";
import { company } from "@/content/company";
import { defaultOgImage, pageMetadata } from "@/lib/seo";

export const metadata = {
  ...pageMetadata({
    title: "Tintorería en Oaxaca",
    description: `${company.headline}. ${company.description} ${company.tagline}.`,
    path: "/",
    image: defaultOgImage,
  }),
  title: {
    absolute: `${company.shortName} | Tintorería en Oaxaca`,
  },
};

export default function HomePage() {
  return <HomePageContent />;
}
