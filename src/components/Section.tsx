import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "default" | "mist" | "white" | "navy";
};

const tones = {
  default: "bg-transparent",
  mist: "atmosphere",
  white: "bg-white",
  navy: "bg-navy text-white",
};

export function Section({
  children,
  className = "",
  id,
  tone = "default",
}: SectionProps) {
  return (
    <section id={id} className={`${tones[tone]} ${className}`}>
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">{children}</div>
    </section>
  );
}

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  light?: boolean;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className="mb-10 max-w-2xl">
      {eyebrow && (
        <p
          className={`mb-2 text-sm font-semibold uppercase tracking-[0.14em] ${
            light ? "text-teal-soft" : "text-teal"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-display text-3xl font-semibold tracking-tight md:text-4xl ${
          light ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-3 text-base leading-relaxed md:text-lg ${
            light ? "text-white/75" : "text-ink-muted"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
