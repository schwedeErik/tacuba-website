import Link from "next/link";

type HeroProps = {
  brand: string;
  title: string;
  subtitle: string;
  imageSrc: string;
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
};

export function Hero({
  brand,
  title,
  subtitle,
  imageSrc,
  primaryCta,
  secondaryCta,
}: HeroProps) {
  return (
    <section className="relative isolate min-h-[88vh] overflow-hidden text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageSrc})` }}
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-navy-deep/92 via-navy/82 to-navy/55"
        aria-hidden
      />
      <div className="texture-overlay absolute inset-0 opacity-30 mix-blend-soft-light" aria-hidden />

      <div className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-end px-5 pb-16 pt-28 md:justify-center md:px-8 md:pb-24 md:pt-20">
        <p className="animate-fade-up font-display text-5xl font-semibold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
          {brand}
        </p>
        <h1 className="animate-fade-up delay-1 mt-5 max-w-2xl font-display text-2xl font-medium leading-snug text-white/95 sm:text-3xl md:text-4xl">
          {title}
        </h1>
        <p className="animate-fade-up delay-2 mt-4 max-w-xl text-base text-white/80 sm:text-lg">
          {subtitle}
        </p>
        {(primaryCta || secondaryCta) && (
          <div className="animate-fade-up delay-3 mt-8 flex flex-wrap gap-3">
            {primaryCta && (
              <Link
                href={primaryCta.href}
                className="inline-flex items-center rounded-md bg-teal px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-dark"
              >
                {primaryCta.label}
              </Link>
            )}
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="inline-flex items-center rounded-md border border-white/40 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
              >
                {secondaryCta.label}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
