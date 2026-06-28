"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

export type Lang = "nl" | "en"

type LanguageContextValue = {
  lang: Lang
  setLang: (lang: Lang) => void
  toggle: () => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("nl")

  useEffect(() => {
    const stored = typeof window !== "undefined" ? (localStorage.getItem("amc-lang") as Lang | null) : null
    if (stored === "nl" || stored === "en") {
      setLangState(stored)
      document.documentElement.lang = stored
    }
  }, [])

  const setLang = (next: Lang) => {
    setLangState(next)
    if (typeof window !== "undefined") {
      localStorage.setItem("amc-lang", next)
      document.documentElement.lang = next
    }
  }

  const toggle = () => setLang(lang === "nl" ? "en" : "nl")

  return <LanguageContext.Provider value={{ lang, setLang, toggle }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider")
  return ctx
}

/** Pick a localized value from a bilingual record. */
export function t<T>(value: { nl: T; en: T }, lang: Lang): T {
  return value[lang]
}
