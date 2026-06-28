import type { Metadata, Viewport } from "next"
import { Inter, Inter_Tight, JetBrains_Mono } from "next/font/google"
import { LanguageProvider } from "@/lib/language-context"
import { SmoothScroll } from "@/components/smooth-scroll"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-inter",
  display: "swap",
})

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-inter-tight",
  display: "swap",
})

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-jetbrains",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Afonso Matos da Cruz — Graphic Designer · Ghent",
  description:
    "Afonso Matos da Cruz — graphic designer specialised in editorial design, typography and branding. Based in Ghent, Belgium.",
  authors: [{ name: "Afonso Matos da Cruz" }],
  openGraph: {
    type: "website",
    title: "Afonso Matos da Cruz — Graphic Designer · Ghent",
    description: "Editorial design, typography and branding from Ghent, Belgium.",
    images: ["/assets/smak/poster.jpg"],
  },
  icons: { icon: "/favicon/favicon.svg" },
}

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" className={`${inter.variable} ${interTight.variable} ${jetbrains.variable} bg-ink`}>
      <body className="bg-paper text-ink antialiased">
        <LanguageProvider>
          <SmoothScroll />
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
          >
            Skip to content
          </a>
          <SiteHeader />
          <main id="main">{children}</main>
          <SiteFooter />
        </LanguageProvider>
      </body>
    </html>
  )
}
