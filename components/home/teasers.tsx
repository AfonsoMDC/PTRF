"use client"

import Link from "next/link"
import { useLanguage, t } from "@/lib/language-context"
import { about, photography } from "@/lib/content"
import { Reveal } from "@/components/reveal"

export function HomeTeasers() {
  const { lang } = useLanguage()

  const cards = [
    {
      href: "/about",
      eyebrow: about.label,
      title: about.title,
      text: about.intro,
      img: "/assets/misc/woordwolk.jpg",
      cta: { nl: "Meer over mij →", en: "More about me →" },
    },
    {
      href: "/photography",
      eyebrow: photography.label,
      title: photography.title,
      text: photography.text,
      img: "/assets/fotografie/foto1.jpg",
      cta: { nl: "Bekijk fotografie →", en: "View photography →" },
    },
  ]

  return (
    <section className="mx-auto grid w-[min(88vw,1320px)] grid-cols-1 gap-px overflow-hidden border border-border py-0 md:grid-cols-2">
      {cards.map((c, i) => (
        <Reveal key={c.href} delay={i * 0.08}>
          <Link href={c.href} className="group flex h-full flex-col bg-paper p-8 transition-colors hover:bg-paper-dim md:p-12">
            <span className="eyebrow text-bord">{t(c.eyebrow, lang)}</span>
            <h3 className="mt-3 font-display text-3xl font-black tracking-[-0.02em] md:text-4xl">{t(c.title, lang)}</h3>
            <div className="mt-6 aspect-[16/10] w-full overflow-hidden bg-paper-dim">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={c.img || "/placeholder.svg"}
                alt={t(c.title, lang)}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <p className="mt-6 max-w-md text-pretty leading-relaxed text-ink/70">{t(c.text, lang)}</p>
            <span className="mt-6 font-mono text-xs uppercase tracking-[0.14em] text-ink transition-colors group-hover:text-bord">
              {t(c.cta, lang)}
            </span>
          </Link>
        </Reveal>
      ))}
    </section>
  )
}
