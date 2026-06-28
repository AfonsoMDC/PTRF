"use client"

import { useLanguage, t } from "@/lib/language-context"
import { marqueeItems } from "@/lib/content"

export function Marquee() {
  const { lang } = useLanguage()
  const items = marqueeItems.map((m) => t(m, lang))
  const sequence = [...items, ...items]

  return (
    <div className="overflow-hidden border-y border-ink bg-ink py-4 text-paper" aria-hidden="true">
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {sequence.map((label, i) => (
          <span key={i} className="flex items-center font-display text-sm font-semibold uppercase tracking-[0.05em]">
            {label}
            <span className="mx-6 text-bord">★</span>
          </span>
        ))}
      </div>
    </div>
  )
}
