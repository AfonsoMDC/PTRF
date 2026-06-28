"use client"

import Link from "next/link"
import { useLanguage, t } from "@/lib/language-context"
import { footer, nav, projects, site } from "@/lib/content"
import { Reveal } from "@/components/reveal"

export function SiteFooter() {
  const { lang } = useLanguage()
  const year = new Date().getFullYear()

  const line2 = t(footer.bigLine2, lang)
  const emphasis = t(footer.bigEmphasis, lang)
  const [before, after] = line2.split(emphasis)

  return (
    <footer className="border-t border-border bg-paper" role="contentinfo">
      <div className="mx-auto w-[min(88vw,1320px)] py-16 md:py-24">
        <Reveal className="overflow-hidden">
          <div className="font-display text-[14vw] font-black leading-[0.92] tracking-[-0.03em] md:text-[10vw]">
            <span className="block">{t(footer.bigLine1, lang)}</span>
            <span className="block">
              {before}
              <span className="text-bord">{emphasis}</span>
              {after}
            </span>
          </div>
        </Reveal>

        <div className="mt-12 flex flex-col gap-8 border-t border-border pt-10 md:flex-row md:items-end md:justify-between">
          <p className="max-w-md text-pretty leading-relaxed text-ink/70">{t(footer.blurb, lang)}</p>
          <a href={`mailto:${site.email}`} className="font-display text-lg font-semibold underline-offset-4 hover:underline">
            {site.email}
          </a>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-10 md:grid-cols-4">
          <div>
            <div className="font-display text-base font-bold">{site.name}</div>
            <div className="mt-1 text-sm text-grey">
              {t(site.role, lang)} · {t(site.location, lang)}
            </div>
            <div className="mt-4 flex gap-3">
              {site.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="font-mono text-xs uppercase tracking-[0.1em] text-grey hover:text-bord"
                >
                  {s.short}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="eyebrow text-grey">{t(footer.navTitle, lang)}</div>
            <nav className="mt-4 flex flex-col gap-2">
              {nav.slice(1).map((item) => (
                <Link key={item.href} href={item.href} className="text-sm text-ink/80 hover:text-bord">
                  {t(item.label, lang)}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <div className="eyebrow text-grey">{t(footer.projectsTitle, lang)}</div>
            <nav className="mt-4 flex flex-col gap-2">
              {projects.map((p) => (
                <Link key={p.slug} href={`/work/${p.slug}`} className="text-sm text-ink/80 hover:text-bord">
                  {t(p.title, lang)}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <div className="eyebrow text-grey">{t(footer.contactTitle, lang)}</div>
            <nav className="mt-4 flex flex-col gap-2">
              <a href={`mailto:${site.email}`} className="text-sm text-ink/80 hover:text-bord">
                {lang === "nl" ? "E-mail" : "Email"}
              </a>
              <a href={site.cv} download className="text-sm text-ink/80 hover:text-bord">
                {lang === "nl" ? "Download CV" : "Download CV"}
              </a>
            </nav>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 text-xs text-grey md:flex-row md:items-center md:justify-between">
          <span>
            © {year} {site.name}. {t(footer.rights, lang)}
          </span>
          <nav className="flex gap-5">
            {footer.legal.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-bord">
                {t(l.label, lang)}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
