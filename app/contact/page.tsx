"use client"

import { useState, type FormEvent } from "react"
import Link from "next/link"
import { useLanguage, t } from "@/lib/language-context"
import { contact, site } from "@/lib/content"
import { PageHeader } from "@/components/page-header"
import { Reveal } from "@/components/reveal"

export default function ContactPage() {
  const { lang } = useLanguage()
  const [sent, setSent] = useState(false)
  const f = contact.form

  const heading = t(contact.heading, lang)

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = String(data.get("name") || "")
    const email = String(data.get("email") || "")
    const subject = String(data.get("subject") || "")
    const message = String(data.get("message") || "")
    const body = `${message}\n\n— ${name} (${email})`
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject || "Portfolio contact",
    )}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <>
      <PageHeader eyebrow={t(contact.label, lang)} title={t(contact.title, lang)} />

      <section className="mx-auto grid w-[min(88vw,1320px)] grid-cols-1 gap-12 pb-24 md:grid-cols-2 md:gap-16">
        <div>
          <Reveal>
            <h2 className="font-display text-4xl font-black leading-[0.95] tracking-[-0.02em] md:text-5xl">
              {heading}
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-ink/70">{t(contact.sub, lang)}</p>
          </Reveal>

          <Reveal delay={0.12}>
            <nav className="mt-8 flex flex-col divide-y divide-border border-y border-border" aria-label="Contact options">
              <a href={`mailto:${site.email}`} className="group flex items-center gap-3 py-4 hover:text-bord">
                <span className="font-mono text-[0.65rem] uppercase tracking-[0.1em] text-grey">✉</span>
                <span className="break-all text-sm">{site.email}</span>
              </a>
              {site.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 py-4 hover:text-bord"
                >
                  <span className="font-mono text-[0.65rem] uppercase tracking-[0.1em] text-grey">{s.short}</span>
                  <span className="text-sm">{s.label} ↗</span>
                </a>
              ))}
            </nav>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <form onSubmit={onSubmit} className="flex flex-col gap-5" aria-label="Contact form">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <Field id="name" label={t(f.name, lang)} placeholder={t(f.namePlaceholder, lang)} required autoComplete="name" />
              <Field
                id="email"
                type="email"
                label={t(f.email, lang)}
                placeholder={t(f.emailPlaceholder, lang)}
                required
                autoComplete="email"
              />
            </div>
            <Field id="subject" label={t(f.subject, lang)} placeholder={t(f.subjectPlaceholder, lang)} />
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="font-mono text-[0.65rem] uppercase tracking-[0.12em] text-grey">
                {t(f.message, lang)}
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder={t(f.messagePlaceholder, lang)}
                className="resize-none border border-border bg-transparent px-4 py-3 text-sm outline-none transition-colors placeholder:text-grey focus:border-ink"
              />
            </div>
            <p className="text-xs text-grey">
              {lang === "nl" ? "Door in te dienen ga je akkoord met het " : "By submitting you agree to the "}
              <Link href="/privacy" className="underline hover:text-bord">
                {lang === "nl" ? "privacybeleid" : "privacy policy"}
              </Link>
              .
            </p>
            {sent && (
              <p className="font-mono text-xs uppercase tracking-[0.1em] text-bord" role="status">
                {t(f.success, lang)}
              </p>
            )}
            <button
              type="submit"
              className="self-start bg-ink px-8 py-4 font-mono text-xs uppercase tracking-[0.14em] text-paper transition-colors hover:bg-bord"
            >
              {t(f.submit, lang)}
            </button>
          </form>
        </Reveal>
      </section>
    </>
  )
}

function Field({
  id,
  label,
  placeholder,
  type = "text",
  required = false,
  autoComplete,
}: {
  id: string
  label: string
  placeholder: string
  type?: string
  required?: boolean
  autoComplete?: string
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="font-mono text-[0.65rem] uppercase tracking-[0.12em] text-grey">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        autoComplete={autoComplete}
        placeholder={placeholder}
        className="border border-border bg-transparent px-4 py-3 text-sm outline-none transition-colors placeholder:text-grey focus:border-ink"
      />
    </div>
  )
}
