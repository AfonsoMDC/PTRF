"use client"

import Link from "next/link"
import { useLanguage, t } from "@/lib/language-context"
import { about, site } from "@/lib/content"
import { PageHeader } from "@/components/page-header"
import { Reveal } from "@/components/reveal"

export default function AboutPage() {
  const { lang } = useLanguage()

  const heading = t(about.heading, lang)
  const [hBefore, hAfter] = heading.split(/(\S+\.)$/).filter(Boolean)

  return (
    <>
      <PageHeader eyebrow={t(about.label, lang)} title={t(about.title, lang)} />

      <section className="mx-auto grid w-[min(88vw,1320px)] grid-cols-1 gap-10 pb-20 md:grid-cols-[1fr_1.3fr] md:gap-16 md:pb-28">
        <Reveal>
          <div className="relative">
            <div className="absolute -left-3 -top-3 h-full w-full border border-bord" aria-hidden="true" />
            <div className="relative aspect-[4/5] overflow-hidden bg-paper-dim">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/misc/woordwolk.jpg"
                alt="Afonso Matos da Cruz at work — word cloud in Adobe Illustrator"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-3 font-mono text-[0.65rem] uppercase tracking-[0.12em] text-grey">
              {t(about.photoLabel, lang)}
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal delay={0.06}>
            <h2 className="font-display text-4xl font-black leading-[0.95] tracking-[-0.02em] md:text-6xl">
              {hBefore}
              <span className="italic text-bord">{hAfter}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-ink/80">{t(about.intro, lang)}</p>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-4 text-pretty leading-relaxed text-grey">{t(about.secondary, lang)}</p>
          </Reveal>

          <Reveal delay={0.18}>
            <dl className="mt-8 border-t border-border">
              {about.table.map((row) => (
                <div key={t(row.key, lang)} className="grid grid-cols-1 gap-1 border-b border-border py-4 sm:grid-cols-[140px_1fr] sm:gap-4">
                  <dt className="font-mono text-[0.7rem] uppercase tracking-[0.12em] text-grey">{t(row.key, lang)}</dt>
                  <dd className="text-sm leading-relaxed">{t(row.value, lang)}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.22}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={site.cv}
                download
                className="bg-ink px-6 py-3 font-mono text-xs uppercase tracking-[0.12em] text-paper transition-colors hover:bg-bord"
              >
                {t(about.downloadCv, lang)}
              </a>
              <Link
                href="/contact"
                className="border border-ink px-6 py-3 font-mono text-xs uppercase tracking-[0.12em] transition-colors hover:border-bord hover:text-bord"
              >
                {t(about.collaborate, lang)}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border bg-paper-dim/40" aria-label="Design philosophy">
        <div className="mx-auto grid w-[min(88vw,1320px)] grid-cols-1 gap-px py-16 md:grid-cols-3">
          {about.pillars.map((p, i) => (
            <Reveal key={t(p.num, lang)} delay={i * 0.08}>
              <div className="h-full px-0 md:px-8 md:first:pl-0">
                <div className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-bord">{t(p.num, lang)}</div>
                <h3 className="mt-3 font-display text-2xl font-bold tracking-[-0.01em]">{t(p.title, lang)}</h3>
                <p className="mt-3 leading-relaxed text-ink/70">{t(p.text, lang)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
