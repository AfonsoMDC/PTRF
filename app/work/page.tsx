"use client"

import { useLanguage, t } from "@/lib/language-context"
import { ProjectList } from "@/components/project-list"
import { ArchiveGrid } from "@/components/archive-grid"
import { PageHeader } from "@/components/page-header"

const copy = {
  eyebrow: { nl: "01 — Geselecteerd werk", en: "01 — Selected work" },
  title: { nl: "Werk", en: "Work" },
  intro: {
    nl: "Geselecteerde projecten rond editorial design, typografie, branding en motion — plus losse experimentele werken.",
    en: "Selected projects across editorial design, typography, branding and motion — plus loose experimental works.",
  },
}

export default function WorkPage() {
  const { lang } = useLanguage()
  return (
    <>
      <PageHeader eyebrow={t(copy.eyebrow, lang)} title={t(copy.title, lang)} intro={t(copy.intro, lang)} />
      <div className="mx-auto w-[min(88vw,1320px)]">
        <ProjectList />
      </div>
      <ArchiveGrid />
    </>
  )
}
