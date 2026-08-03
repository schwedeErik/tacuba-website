"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import {
  defaultLocale,
  localeStorageKey,
  resolveInitialLocale,
  type Locale,
} from "@/i18n/config";
import { getMessages, type Messages } from "@/i18n/messages";

type LanguageContextValue = {
  locale: Locale;
  messages: Messages;
  setLocale: (locale: Locale) => void;
};

let clientLocale: Locale = defaultLocale;
let hydrated = false;
const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getClientLocale(): Locale {
  if (!hydrated && typeof window !== "undefined") {
    clientLocale = resolveInitialLocale();
    document.documentElement.lang = clientLocale;
    hydrated = true;
  }
  return clientLocale;
}

function getServerLocale(): Locale {
  return defaultLocale;
}

function writeLocale(next: Locale) {
  clientLocale = next;
  hydrated = true;
  if (typeof document !== "undefined") {
    document.documentElement.lang = next;
  }
  try {
    window.localStorage.setItem(localeStorageKey, next);
  } catch {
    /* ignore */
  }
  emit();
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const locale = useSyncExternalStore(
    subscribe,
    getClientLocale,
    getServerLocale,
  );

  const setLocale = useCallback((next: Locale) => {
    writeLocale(next);
  }, []);

  const value = useMemo(
    () => ({
      locale,
      messages: getMessages(locale),
      setLocale,
    }),
    [locale, setLocale],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}

export function useMessages(): Messages {
  return useLanguage().messages;
}
