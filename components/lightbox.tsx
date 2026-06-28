"use client"

import { useEffect, useCallback } from "react"
import { AnimatePresence, motion } from "framer-motion"

type LightboxImage = { src: string; alt: string }

type LightboxProps = {
  images: LightboxImage[]
  index: number | null
  onClose: () => void
  onChange: (index: number) => void
}

export function Lightbox({ images, index, onClose, onChange }: LightboxProps) {
  const isOpen = index !== null

  const prev = useCallback(() => {
    if (index === null) return
    onChange((index - 1 + images.length) % images.length)
  }, [index, images.length, onChange])

  const next = useCallback(() => {
    if (index === null) return
    onChange((index + 1) % images.length)
  }, [index, images.length, onChange])

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowLeft") prev()
      if (e.key === "ArrowRight") next()
    }
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", onKey)
    }
  }, [isOpen, onClose, prev, next])

  const current = index !== null ? images[index] : null

  return (
    <AnimatePresence>
      {isOpen && current && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[90] flex items-center justify-center bg-ink/95 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={current.alt}
          onClick={onClose}
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="absolute right-5 top-5 font-mono text-sm text-paper hover:text-bord"
          >
            ✕ CLOSE
          </button>
          {images.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                prev()
              }}
              aria-label="Previous"
              className="absolute left-4 z-10 px-3 py-2 font-display text-3xl text-paper hover:text-bord md:left-8"
            >
              ‹
            </button>
          )}
          <motion.img
            key={current.src}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            src={current.src || "/placeholder.svg"}
            alt={current.alt}
            className="max-h-[85vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          {images.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                next()
              }}
              aria-label="Next"
              className="absolute right-4 z-10 px-3 py-2 font-display text-3xl text-paper hover:text-bord md:right-8"
            >
              ›
            </button>
          )}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 font-mono text-xs uppercase tracking-[0.12em] text-paper/80">
            {current.alt}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
