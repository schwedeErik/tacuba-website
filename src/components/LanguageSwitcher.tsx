"use client";

import { useLanguage } from "@/i18n/LanguageProvider";
import type { Locale } from "@/i18n/config";

export function LanguageSwitcher() {
  const { locale, setLocale, messages } = useLanguage();

  return (
    <div
      className="inline-flex items-center rounded-md border border-line bg-white p-0.5 text-xs font-semibold"
      role="group"
      aria-label={messages.language.label}
    >
      {(["es", "en"] as Locale[]).map((code) => {
        const active = locale === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLocale(code)}
            className={`rounded px-2.5 py-1.5 transition ${
              active
                ? "bg-navy text-white"
                : "text-ink-muted hover:text-navy"
            }`}
            aria-pressed={active}
          >
            {messages.language[code]}
          </button>
        );
      })}
    </div>
  );
}
