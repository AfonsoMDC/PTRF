"use client"

import { motion } from "framer-motion"
import { useLanguage, t } from "@/lib/language-context"
import { hero } from "@/lib/content"

export function Hero() {
  const { lang } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <section aria-labelledby="hero-title" className="relative flex min-h-svh flex-col justify-between pb-10 pt-28">
      <div className="mx-auto flex w-[min(88vw,1320px)] flex-1 flex-col justify-between">
        <div className="flex items-center justify-between font-mono text-[0.72rem] uppercase tracking-[0.14em]">
          <div className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-bord" aria-hidden="true" />
            {t(hero.availability, lang)}
          </div>
          <div className="hidden text-grey sm:block">
            {lang === "nl" ? "Gent, België" : "Ghent, Belgium"} — {year}
          </div>
        </div>

        <div className="py-8">
          <h1 id="hero-title" className="sr-only">
            Afonso Matos da Cruz
          </h1>
          <div
            aria-hidden="true"
            className="font-display font-black uppercase leading-[0.85] tracking-[-0.03em] text-[clamp(3rem,15vw,12rem)]"
          >
            {hero.nameLines.map((line, i) => (
              <div key={line} className="overflow-hidden">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, delay: 0.1 + i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="block"
                >
                  {line}
                </motion.span>
              </div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-10 grid max-w-2xl grid-cols-1 gap-px overflow-hidden border-y border-border sm:grid-cols-3"
          >
            {hero.roles.map((r) => (
              <div key={t(r.label, lang)} className="bg-paper py-4 sm:px-4 sm:first:pl-0">
                <div className="eyebrow text-grey">{t(r.label, lang)}</div>
                <div className="mt-1 font-display text-base font-semibold">{t(r.value, lang)}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="flex items-end justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="flex items-center gap-3 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-grey"
          >
            <span className="inline-block h-8 w-px bg-grey" aria-hidden="true" />
            {t(hero.scroll, lang)}
          </motion.div>
          <div className="hidden font-mono text-[0.72rem] uppercase tracking-[0.14em] text-ink/70 md:block">
            {t(hero.tagline, lang)}
          </div>
        </div>
      </div>
    </section>
  )
}
