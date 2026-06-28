"use client"

import { useEffect } from "react"
import Lenis from "lenis"

export function SmoothScroll() {
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReduced) return

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    let frame = 0
    function raf(time: number) {
      lenis.raf(time)
      frame = requestAnimationFrame(raf)
    }
    frame = requestAnimationFrame(raf)

    // Anchor links -> smooth scroll via Lenis
    const onClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest('a[href*="#"]') as HTMLAnchorElement | null
      if (!target) return
      const url = new URL(target.href, window.location.href)
      if (url.pathname === window.location.pathname && url.hash) {
        const el = document.querySelector(url.hash)
        if (el) {
          e.preventDefault()
          lenis.scrollTo(el as HTMLElement, { offset: -80 })
          history.pushState(null, "", url.hash)
        }
      }
    }
    document.addEventListener("click", onClick)

    return () => {
      cancelAnimationFrame(frame)
      document.removeEventListener("click", onClick)
      lenis.destroy()
    }
  }, [])

  return null
}
