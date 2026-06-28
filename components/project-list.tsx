"use client"

import Link from "next/link"
import { useLanguage, t } from "@/lib/language-context"
import { projects, workSection } from "@/lib/content"
import { Reveal } from "@/components/reveal"

export function ProjectList() {
  const { lang } = useLanguage()

  return (
    <div role="list" aria-label="Selected projects">
      {projects.map((p, i) => (
        <Reveal as="div" key={p.slug} delay={i * 0.06}>
          <Link
            href={`/work/${p.slug}`}
            role="listitem"
            aria-label={t(p.title, lang)}
            className="group grid grid-cols-1 items-center gap-6 border-t border-border py-8 last:border-b md:grid-cols-[auto_1fr_auto] md:gap-10 md:py-10"
          >
            <span className="font-mono text-sm text-grey">{p.num}</span>

            <div className="order-3 md:order-2">
              <div className="mb-3 flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-border px-2 py-0.5 font-mono text-[0.62rem] uppercase tracking-[0.12em] text-grey"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="font-display text-3xl font-bold leading-[1.02] tracking-[-0.02em] transition-colors group-hover:text-bord md:text-5xl">
                {t(p.title, lang)}
              </div>
              <div className="mt-2 text-grey">{t(p.sub, lang)}</div>
              <div className="mt-1 font-mono text-xs text-grey">{p.year}</div>
            </div>

            <div className="order-2 aspect-[4/3] w-full overflow-hidden bg-paper-dim md:order-3 md:w-72">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.img || "/placeholder.svg"}
                alt={t(p.title, lang)}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105"
              />
            </div>
          </Link>
        </Reveal>
      ))}
    </div>
  )
}

export function SelectedWork() {
  const { lang } = useLanguage()
  return (
    <section id="werk" aria-labelledby="werk-title" className="mx-auto w-[min(88vw,1320px)] py-20 md:py-28">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <Reveal>
            <span className="eyebrow text-bord">{t(workSection.label, lang)}</span>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 id="werk-title" className="mt-3 font-display text-4xl font-black tracking-[-0.02em] md:text-6xl">
              {t(workSection.title, lang)}
            </h2>
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <span className="font-display text-6xl font-black text-paper-dim md:text-8xl" aria-hidden="true">
            03
          </span>
        </Reveal>
      </div>
      <ProjectList />
    </section>
  )
}
