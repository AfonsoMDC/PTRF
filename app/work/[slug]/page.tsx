import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { projectDetails, projects, site } from "@/lib/content"
import { ProjectDetailView } from "@/components/project-detail-view"

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const detail = projectDetails[slug]
  if (!detail) return {}
  const title = detail.titleLines.map((l) => l.en).join(" ")
  return {
    title: `${title} — ${site.name}`,
    description: detail.intro[0]?.en,
  }
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  if (!projectDetails[slug]) notFound()
  return <ProjectDetailView slug={slug} />
}
