"use client";

import Link from "next/link";
import type { ServiceMessage } from "@/i18n/messages/types";
import { useMessages } from "@/i18n/LanguageProvider";

type ServiceListProps = {
  services: ServiceMessage[];
  compact?: boolean;
};

export function ServiceList({ services, compact = false }: ServiceListProps) {
  const t = useMessages();

  return (
    <ul
      className={`grid gap-6 ${
        compact ? "sm:grid-cols-2 lg:grid-cols-3" : "md:grid-cols-2"
      }`}
    >
      {services.map((service) => (
        <li
          key={service.id}
          className="border-t border-line pt-5 transition hover:border-teal"
        >
          <h3 className="font-display text-xl font-semibold text-navy">
            {service.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-muted md:text-base">
            {service.summary}
          </p>
          {!compact && service.details && (
            <ul className="mt-3 space-y-1.5 text-sm text-ink-muted">
              {service.details.map((detail) => (
                <li key={detail} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          )}
          {compact && (
            <Link
              href={`/servicios#${service.id}`}
              className="mt-3 inline-flex text-sm font-semibold text-teal transition hover:text-teal-dark"
            >
              {t.common.viewDetails}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
}
