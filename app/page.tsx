import { Hero } from "@/components/home/hero"
import { Marquee } from "@/components/home/marquee"
import { SelectedWork } from "@/components/project-list"
import { Interstitial } from "@/components/home/interstitial"
import { HomeTeasers } from "@/components/home/teasers"

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <SelectedWork />
      <Interstitial />
      <div className="py-20 md:py-28">
        <HomeTeasers />
      </div>
    </>
  )
}
