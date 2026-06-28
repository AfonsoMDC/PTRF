"use client"

import { useLanguage } from "@/lib/language-context"

export function LanguageToggle({ className = "" }: { className?: string }) {
  const { lang, setLang } = useLanguage()

  return (
    <div
      className={`flex items-center gap-1 font-mono text-[0.7rem] uppercase tracking-[0.15em] ${className}`}
      role="group"
      aria-label="Language switch"
    >
      <button
        type="button"
        onClick={() => setLang("nl")}
        aria-pressed={lang === "nl"}
        className={`px-1 transition-colors ${lang === "nl" ? "text-ink" : "text-grey hover:text-ink"}`}
      >
        NL
      </button>
      <span className="text-grey" aria-hidden="true">
        /
      </span>
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={`px-1 transition-colors ${lang === "en" ? "text-ink" : "text-grey hover:text-ink"}`}
      >
        EN
      </button>
    </div>
  )
}
