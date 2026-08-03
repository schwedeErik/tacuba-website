export type Locale = "es" | "en";

export const locales: Locale[] = ["es", "en"];
export const defaultLocale: Locale = "es";
export const localeStorageKey = "tacuba-locale";

/** Spanish → es; any other system language → en */
export function detectLocaleFromNavigator(): Locale {
  if (typeof navigator === "undefined") return defaultLocale;

  const candidates = navigator.languages?.length
    ? navigator.languages
    : [navigator.language];

  for (const lang of candidates) {
    if (lang?.toLowerCase().startsWith("es")) return "es";
  }
  return "en";
}

export function readStoredLocale(): Locale | null {
  if (typeof window === "undefined") return null;
  try {
    const value = window.localStorage.getItem(localeStorageKey);
    if (value === "es" || value === "en") return value;
  } catch {
    /* ignore */
  }
  return null;
}

export function resolveInitialLocale(): Locale {
  return readStoredLocale() ?? detectLocaleFromNavigator();
}
