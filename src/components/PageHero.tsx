import Link from "next/link";

type PageHeroProps = {
  title: string;
  description?: string;
  breadcrumb?: string;
};

export function PageHero({ title, description, breadcrumb }: PageHeroProps) {
  return (
    <div className="border-b border-line bg-navy text-white">
      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-16">
        {breadcrumb && (
          <p className="mb-3 text-sm text-white/60">
            <Link href="/" className="transition hover:text-white">
              Inicio
            </Link>
            <span className="mx-2">/</span>
            <span>{breadcrumb}</span>
          </p>
        )}
        <h1 className="animate-fade-up font-display text-4xl font-semibold tracking-tight text-white md:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="animate-fade-up delay-1 mt-4 max-w-2xl text-base text-white/75 md:text-lg">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
