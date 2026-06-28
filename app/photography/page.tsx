"use client"

import { useState } from "react"
import { useLanguage, t } from "@/lib/language-context"
import { photography } from "@/lib/content"
import { PageHeader } from "@/components/page-header"
import { Reveal } from "@/components/reveal"
import { Lightbox } from "@/components/lightbox"

export default function PhotographyPage() {
  const { lang } = useLanguage()
  const [active, setActive] = useState<number | null>(null)

  const heading = t(photography.heading, lang)
  const emphasis = t(photography.emphasis, lang)
  const headBefore = heading.replace(emphasis, "")

  const images = photography.photos.map((p) => ({ src: p.src, alt: t(p.alt, lang) }))

  return (
    <>
      <PageHeader eyebrow={t(photography.label, lang)} title={t(photography.title, lang)} />

      <section className="mx-auto grid w-[min(88vw,1320px)] grid-cols-1 gap-10 pb-16 md:grid-cols-[1fr_1.6fr] md:gap-14">
        <div className="md:sticky md:top-28 md:self-start">
          <Reveal>
            <h2 className="font-display text-4xl font-black leading-[0.95] tracking-[-0.02em] md:text-5xl">
              {headBefore}
              <span className="italic text-bord">{emphasis}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-6 text-pretty leading-relaxed text-ink/70">{t(photography.text, lang)}</p>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-4 text-pretty leading-relaxed text-grey">{t(photography.filmIntro, lang)}</p>
          </Reveal>

          <Reveal delay={0.16}>
            <a
              href={photography.film.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-6 flex items-center gap-4 border border-border p-3 transition-colors hover:border-bord"
              aria-label={`${t(photography.film.label, lang)} — YouTube`}
            >
              <div className="aspect-video w-28 shrink-0 overflow-hidden bg-ink">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={photography.film.thumb || "/placeholder.svg"}
                  alt={t(photography.film.title, lang)}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <div className="font-mono text-[0.65rem] uppercase tracking-[0.12em] text-bord">
                  {t(photography.film.label, lang)}
                </div>
                <div className="font-display text-base font-semibold">{t(photography.film.title, lang)}</div>
                <div className="font-mono text-[0.65rem] uppercase tracking-[0.1em] text-grey">YouTube ↗</div>
              </div>
            </a>
          </Reveal>
        </div>

        <div className="columns-2 gap-4 [&>*]:mb-4">
          {photography.photos.map((photo, i) => (
            <Reveal as="div" key={photo.src} delay={(i % 3) * 0.05}>
              <button
                type="button"
                onClick={() => setActive(i)}
                className="group block w-full overflow-hidden bg-paper-dim"
                aria-label={t(photo.alt, lang)}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={photo.src || "/placeholder.svg"}
                  alt={t(photo.alt, lang)}
                  loading="lazy"
                  decoding="async"
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                    photo.tall ? "aspect-[3/4]" : "aspect-square"
                  }`}
                />
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      <Lightbox images={images} index={active} onClose={() => setActive(null)} onChange={setActive} />
    </>
  )
}
