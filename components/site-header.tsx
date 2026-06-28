"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"
import { useLanguage, t } from "@/lib/language-context"
import { nav, site } from "@/lib/content"
import { LanguageToggle } from "@/components/language-toggle"

export function SiteHeader() {
  const { lang } = useLanguage()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-paper/85 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-[min(88vw,1320px)] items-center justify-between py-5">
        <Link href="/" className="font-display text-lg font-bold tracking-tight">
          {site.shortName}
          <sup className="text-[0.5em] text-bord">®</sup>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {nav.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-mono text-[0.72rem] uppercase tracking-[0.14em] text-ink/80 transition-colors hover:text-bord"
            >
              {t(item.label, lang)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <LanguageToggle />
          <div className="hidden items-center gap-3 md:flex" aria-label="Social media">
            {site.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="font-mono text-[0.72rem] uppercase tracking-[0.1em] text-grey transition-colors hover:text-bord"
              >
                {s.short}
              </a>
            ))}
          </div>
          <button
            type="button"
            className="flex h-6 w-7 flex-col justify-center gap-1.5 md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className={`h-px w-full bg-ink transition-transform duration-300 ${open ? "translate-y-[7px] rotate-45" : ""}`}
            />
            <span className={`h-px w-full bg-ink transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
            <span
              className={`h-px w-full bg-ink transition-transform duration-300 ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-0 z-40 flex flex-col bg-paper px-[6vw] pt-28 md:hidden"
          >
            <nav className="flex flex-col gap-2" aria-label="Mobile">
              {nav.slice(1).map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i + 0.1, duration: 0.4 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-4xl font-bold tracking-tight"
                  >
                    {t(item.label, lang)}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="mt-auto flex items-center justify-between border-t border-border py-6">
              <div className="flex gap-4">
                {site.socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs uppercase tracking-[0.1em] text-grey"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
              <LanguageToggle />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
