"use client"

import { useState } from "react"
import { useLanguage, t } from "@/lib/language-context"
import { archive } from "@/lib/content"
import { Reveal } from "@/components/reveal"
import { Lightbox } from "@/components/lightbox"

export function ArchiveGrid() {
  const { lang } = useLanguage()
  const [active, setActive] = useState<number | null>(null)

  const images = archive.items.map((it) => ({ src: it.img, alt: t(it.name, lang) }))

  return (
    <section id="archief" aria-labelledby="archief-title" className="mx-auto w-[min(88vw,1320px)] py-20 md:py-28">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <Reveal>
            <span className="eyebrow text-bord">{t(archive.label, lang)}</span>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 id="archief-title" className="mt-3 font-display text-4xl font-black tracking-[-0.02em] md:text-6xl">
              {t(archive.title, lang)}
            </h2>
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <span className="font-display text-6xl font-black text-paper-dim md:text-8xl" aria-hidden="true">
            {archive.count}
          </span>
        </Reveal>
      </div>

      <Reveal delay={0.12}>
        <p className="mb-10 max-w-xl text-pretty leading-relaxed text-ink/70">{t(archive.note, lang)}</p>
      </Reveal>

      <div role="list" aria-label="Archive works" className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {archive.items.map((item, i) => (
          <Reveal as="div" key={item.img} delay={(i % 4) * 0.05} role="listitem">
            <button
              type="button"
              onClick={() => setActive(i)}
              className="group block w-full text-left"
              aria-label={`${t(item.name, lang)} — ${t(item.type, lang)}`}
            >
              <div className="aspect-[3/4] w-full overflow-hidden bg-paper-dim">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.img || "/placeholder.svg"}
                  alt={t(item.name, lang)}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="mt-3 font-display text-base font-semibold leading-tight">{t(item.name, lang)}</div>
              <div className="font-mono text-[0.65rem] uppercase tracking-[0.1em] text-grey">{t(item.type, lang)}</div>
            </button>
          </Reveal>
        ))}
      </div>

      <Lightbox images={images} index={active} onClose={() => setActive(null)} onChange={setActive} />
    </section>
  )
}
