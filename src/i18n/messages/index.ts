import type { Locale } from "@/i18n/config";
import { en } from "./en";
import { es } from "./es";
import type { Messages } from "./types";

export const messagesByLocale: Record<Locale, Messages> = {
  es,
  en,
};

export function getMessages(locale: Locale): Messages {
  return messagesByLocale[locale];
}

export type { Messages };
