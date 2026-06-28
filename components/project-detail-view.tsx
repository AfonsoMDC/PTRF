"use client"

import { useState } from "react"
import Link from "next/link"
import { useLanguage, t } from "@/lib/language-context"
import { projectDetails, projectDetailUi, type ProjectDetail } from "@/lib/content"
import { Reveal } from "@/components/reveal"
import { Lightbox } from "@/components/lightbox"

export function ProjectDetailView({ slug }: { slug: string }) {
  const { lang } = useLanguage()
  const detail: ProjectDetail = projectDetails[slug]
  const [active, setActive] = useState<number | null>(null)

  // collect all gallery/image sources for the lightbox
  const lightboxImages: { src: string; alt: string }[] = []
  detail.blocks.forEach((b) => {
    if (b.type === "image") lightboxImages.push({ src: b.src, alt: t(b.alt, lang) })
    if (b.type === "gallery") b.images.forEach((im) => lightboxImages.push({ src: im.src, alt: t(im.alt, lang) }))
  })

  let imgCursor = 0

  return (
    <article className="pt-32 md:pt-40">
      {/* Back link */}
      <div className="mx-auto w-[min(88vw,1320px)]">
        <Link href="/work" className="font-mono text-xs uppercase tracking-[0.14em] text-grey hover:text-bord">
          {t(projectDetailUi.back, lang)}
        </Link>
      </div>

      {/* Title */}
      <header className="mx-auto w-[min(88vw,1320px)] pb-10 pt-6 md:pb-16">
        <span className="eyebrow text-bord">{t(detail.kicker, lang)}</span>
        <h1 className="mt-4 font-display text-5xl font-black leading-[0.9] tracking-[-0.03em] md:text-8xl">
          {detail.titleLines.map((line, i) => {
            const isEmph = t(line, lang) === t(detail.titleEmphasis, lang)
            return (
              <span key={i} className={`block ${isEmph ? "italic text-bord" : ""}`}>
                {t(line, lang)}
              </span>
            )
          })}
        </h1>

        {/* Summary meta strip */}
        <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden border-y border-border md:grid-cols-4">
          {detail.summaryMeta.map((m) => (
            <div key={t(m.key, lang)} className="bg-paper py-4 md:px-4 md:first:pl-0">
              <dt className="font-mono text-[0.6rem] uppercase tracking-[0.12em] text-grey">{t(m.key, lang)}</dt>
              <dd className="mt-1 font-display text-sm font-semibold leading-snug">{t(m.value, lang)}</dd>
            </div>
          ))}
        </dl>
      </header>

      {/* Intro + full meta */}
      <section className="mx-auto grid w-[min(88vw,1320px)] grid-cols-1 gap-10 pb-16 md:grid-cols-[1.6fr_1fr] md:gap-16">
        <div className="flex flex-col gap-5">
          {detail.intro.map((p, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <p className={`text-pretty leading-relaxed ${i === 0 ? "text-xl text-ink md:text-2xl" : "text-ink/70"}`}>
                {t(p, lang)}
              </p>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1}>
          <div className="border-t border-border md:border-t-0">
            <div className="mb-4 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-bord">
              {t(projectDetailUi.projectInfo, lang)}
            </div>
            <dl className="divide-y divide-border">
              {detail.fullMeta.map((m) => (
                <div key={t(m.key, lang)} className="py-3">
                  <dt className="font-mono text-[0.6rem] uppercase tracking-[0.12em] text-grey">{t(m.key, lang)}</dt>
                  <dd className="mt-1 text-sm leading-relaxed">{t(m.value, lang)}</dd>
                </div>
              ))}
            </dl>
            <a
              href={detail.source.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block font-mono text-[0.65rem] uppercase tracking-[0.1em] text-grey hover:text-bord"
            >
              {t(detail.source.label, lang)} ↗
            </a>
          </div>
        </Reveal>
      </section>

      {/* Blocks */}
      <div className="flex flex-col gap-16 md:gap-24">
        {detail.blocks.map((block, bi) => {
          if (block.type === "text") {
            return (
              <section key={bi} className="mx-auto w-[min(88vw,1320px)]">
                <Reveal>
                  {block.heading && (
                    <h2 className="font-display text-2xl font-bold tracking-[-0.01em] md:text-3xl">
                      {t(block.heading, lang)}
                    </h2>
                  )}
                  {block.paragraphs.map((p, pi) => (
                    <p key={pi} className="mt-4 max-w-2xl text-pretty leading-relaxed text-ink/70">
                      {t(p, lang)}
                    </p>
                  ))}
                </Reveal>
              </section>
            )
          }

          if (block.type === "quote") {
            return (
              <section key={bi} className="mx-auto w-[min(88vw,1320px)]">
                <Reveal>
                  <blockquote className="border-l-2 border-bord pl-6 md:pl-10">
                    <p className="font-display text-3xl font-bold leading-[1.1] tracking-[-0.02em] md:text-5xl">
                      “{t(block.text, lang)}”
                    </p>
                    <cite className="mt-5 block font-mono text-[0.65rem] uppercase not-italic tracking-[0.12em] text-grey">
                      — {t(block.cite, lang)}
                    </cite>
                  </blockquote>
                </Reveal>
              </section>
            )
          }

          if (block.type === "image") {
            const idx = imgCursor++
            const wrapClass = block.full ? "w-full" : "mx-auto w-[min(88vw,1320px)]"
            return (
              <figure key={bi} className={wrapClass}>
                <Reveal>
                  <button
                    type="button"
                    onClick={() => setActive(idx)}
                    className="group block w-full overflow-hidden bg-paper-dim"
                    aria-label={t(block.alt, lang)}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={block.src || "/placeholder.svg"}
                      alt={t(block.alt, lang)}
                      loading="lazy"
                      decoding="async"
                      className={`w-full object-cover transition-transform duration-700 group-hover:scale-[1.02] ${
                        block.full ? "max-h-[80vh]" : ""
                      }`}
                    />
                  </button>
                  {block.caption && (
                    <figcaption
                      className={`mt-3 font-mono text-[0.65rem] uppercase tracking-[0.12em] text-grey ${
                        block.full ? "mx-auto w-[min(88vw,1320px)]" : ""
                      }`}
                    >
                      {t(block.caption, lang)}
                    </figcaption>
                  )}
                </Reveal>
              </figure>
            )
          }

          // gallery
          const startIdx = imgCursor
          imgCursor += block.images.length
          return (
            <section key={bi} className="mx-auto grid w-[min(88vw,1320px)] grid-cols-1 gap-4 sm:grid-cols-2">
              {block.images.map((im, ii) => (
                <Reveal as="div" key={im.src} delay={ii * 0.06}>
                  <button
                    type="button"
                    onClick={() => setActive(startIdx + ii)}
                    className="group block w-full overflow-hidden bg-paper-dim"
                    aria-label={t(im.alt, lang)}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={im.src || "/placeholder.svg"}
                      alt={t(im.alt, lang)}
                      loading="lazy"
                      decoding="async"
                      className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </button>
                </Reveal>
              ))}
            </section>
          )
        })}
      </div>

      {/* Prev / Next */}
      <nav className="mx-auto mt-24 grid w-[min(88vw,1320px)] grid-cols-1 gap-px overflow-hidden border-t border-border sm:grid-cols-2" aria-label="Project navigation">
        {detail.prev ? (
          <Link href={`/work/${detail.prev.slug}`} className="group bg-paper py-10 transition-colors hover:bg-paper-dim sm:pr-6">
            <div className="font-mono text-[0.65rem] uppercase tracking-[0.12em] text-grey">
              {t(projectDetailUi.prevLabel, lang)}
            </div>
            <div className="mt-2 font-display text-2xl font-bold tracking-[-0.01em] group-hover:text-bord">
              {t(detail.prev.title, lang)}
            </div>
          </Link>
        ) : (
          <span />
        )}
        {detail.next && (
          <Link
            href={`/work/${detail.next.slug}`}
            className="group bg-paper py-10 text-right transition-colors hover:bg-paper-dim sm:pl-6"
          >
            <div className="font-mono text-[0.65rem] uppercase tracking-[0.12em] text-grey">
              {t(projectDetailUi.nextLabel, lang)}
            </div>
            <div className="mt-2 font-display text-2xl font-bold tracking-[-0.01em] group-hover:text-bord">
              {t(detail.next.title, lang)}
            </div>
          </Link>
        )}
      </nav>

      <Lightbox images={lightboxImages} index={active} onClose={() => setActive(null)} onChange={setActive} />
    </article>
  )
}
