"use client"

import { useLanguage, t } from "@/lib/language-context"
import { interstitial } from "@/lib/content"

export function Interstitial() {
  const { lang } = useLanguage()
  const text = t(interstitial.text, lang)
  const emphasis = t(interstitial.emphasis, lang)
  const [before] = text.split(emphasis)

  return (
    <section className="relative h-[60vh] min-h-[420px] w-full overflow-hidden bg-ink" aria-label={text}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/assets/smak/affiche_schaduw.jpg"
        alt="S.M.A.K. — editorial composition in context"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover opacity-70"
      />
      <div className="absolute inset-0 flex items-center justify-center px-6">
        <div className="text-center font-display text-[clamp(2.5rem,8vw,7rem)] font-black leading-[0.95] tracking-[-0.02em] text-paper">
          {before}
          <span className="italic text-bord">{emphasis}</span>
        </div>
      </div>
    </section>
  )
}
