"use client"

import { motion } from "framer-motion"

type PageHeaderProps = {
  eyebrow: string
  title: string
  intro?: string
}

export function PageHeader({ eyebrow, title, intro }: PageHeaderProps) {
  return (
    <header className="mx-auto w-[min(88vw,1320px)] pb-12 pt-36 md:pb-16 md:pt-44">
      <motion.span
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="eyebrow block text-bord"
      >
        {eyebrow}
      </motion.span>
      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.08 }}
        className="mt-4 font-display text-5xl font-black leading-[0.92] tracking-[-0.03em] md:text-8xl"
      >
        {title}
      </motion.h1>
      {intro && (
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.16 }}
          className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-ink/70"
        >
          {intro}
        </motion.p>
      )}
    </header>
  )
}
