import type { Metadata } from "next"
import Script from "next/script"
import { Hero } from "@/components/landing/hero"
import { Services } from "@/components/landing/services"
import { Showreel } from "@/components/landing/showreel"
import { Portfolio } from "@/components/landing/portfolio"
import { About } from "@/components/landing/about"
import { Contact } from "@/components/landing/contact"
import { Brands } from "@/components/landing/brands"

const SITE_URL = "https://www.waincreative.com"
const PAGE_URL = SITE_URL
const OG_IMAGE = `${SITE_URL}/og-image.jpg`
const TW_IMAGE = `${SITE_URL}/social-banner.jpg`

const pageTitle = "Wain Creative Co - Premium Web Design & Content Studio in Los Angeles"
const pageDescription =
  "Premium websites, content engines, and social launch systems built in Los Angeles. Wain Creative Co designs and develops high-end digital experiences for modern brands and creators."
const pageKeywords = [
  "Wain Creative Co",
  "Los Angeles web design",
  "creative agency LA",
  "Next.js studio",
  "content production Los Angeles",
  "social media management LA",
  "premium website design",
  "digital brand strategy",
]

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: pageKeywords,
  alternates: { canonical: PAGE_URL },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    siteName: "Wain Creative Co",
    title: pageTitle,
    description: pageDescription,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Wain Creative Co - Digital Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [TW_IMAGE],
  },
}

export default function Home() {
  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: pageTitle,
    url: PAGE_URL,
    description: pageDescription,
    isPartOf: {
      "@type": "WebSite",
      name: "Wain Creative Co",
      url: SITE_URL,
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: OG_IMAGE,
    },
    publisher: {
      "@type": "Organization",
      name: "Wain Creative Co",
      url: SITE_URL,
      logo: `${SITE_URL}/logo.svg`,
    },
  }

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: PAGE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${SITE_URL}/services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Work",
        item: `${SITE_URL}/work`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Contact",
        item: `${SITE_URL}/contact`,
      },
    ],
  }

  return (
    <main className="min-h-screen bg-[#0D0D0D] text-white selection:bg-pink-500 selection:text-white overflow-x-hidden">
      <Script
        id="home-webpage-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <Script
        id="home-breadcrumbs-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div className="animate-[fadeInUp_0.7s_ease-out]">
        <Hero />
      </div>
      <div className="animate-[fadeIn_0.9s_ease-out]">
        <Brands />
      </div>
      {/* Highlight Offer: Website + Social Launch Package */}
      <section className="relative py-20 md:py-12 px-0 md:px-0 lg:px-0 animate-[fadeIn_0.9s_ease-out]">
        <div className="mt-14 md:mt-1 absolute top-6 left-0 right-0 z-20">
          <div className="h-14 md:h-16 w-full bg-gradient-to-r from-amber-200/60 via-rose-300/60 to-cyan-200/60 flex items-center justify-center text-black font-semibold uppercase tracking-[0.32em] text-sm md:text-base">
            Most Popular
          </div>
        </div>
        <div className="mt-14 md:mt-14 absolute inset-0 pointer-events-none flex justify-center">
          <div className="w-[420px] h-[420px] md:w-[600px] md:h-[600px] bg-pink-500/10 blur-[140px] md:blur-[200px] rounded-full" />
        </div>
        <div className="max-w-4xl mx-auto text-center leading-snug bg-black/20 border border-white/10 rounded-xl px-8 md:px-16 pt-20 pb-20 md:pt-24 md:pb-24 backdrop-blur-sm shadow-[0_0_40px_-10px_rgba(0,0,0,0.6)] transition-all duration-300 hover:scale-[1.015] hover:shadow-[0_0_60px_-10px_rgba(255,0,90,0.4)] relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 md:mb-6 animate-[fadeInUp_0.6s_ease-out_0.2s_both]">
            Website + Social Launch Package
          </h2>

          <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-8 md:mb-10 animate-[fadeInUp_0.6s_ease-out_0.3s_both]">
            A complete digital launch built for brands and creators who want to go live fast
            with a premium website and a 30‑day content rollout. One seamless package,
            engineered for momentum.
          </p>

          <div className="text-white/70 text-sm md:text-base max-w-md mx-auto mb-8 md:mb-10 space-y-2 text-left animate-[fadeInUp_0.6s_ease-out_0.4s_both]">
            <div className="flex items-center gap-3"><span className="text-pink-400 text-lg">▶</span><span>Custom Website (4-6 pages)</span></div>
            <div className="flex items-center gap-3"><span className="text-pink-400 text-lg">▶</span><span>30-Day Content Rollout</span></div>
            <div className="flex items-center gap-3"><span className="text-pink-400 text-lg">▶</span><span>8–12 Short-Form Videos Included</span></div>
            <div className="flex items-center gap-3"><span className="text-pink-400 text-lg">▶</span><span>Brand Cohesion Across Web + Social</span></div>
          </div>

          <div className="text-white/50 text-xs md:text-sm italic mb-12 max-w-xl mx-auto leading-relaxed animate-[fadeInUp_0.6s_ease-out_0.5s_both]">
            “This package launched our brand fast and professionally. The website and content worked together perfectly.”
          </div>

          <div className="flex justify-center">
            <a
              href="/services#digital-launch"
                className="group relative px-8 py-4 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-black text-sm uppercase font-bold tracking-widest rounded-lg shadow-[0_4px_20px_rgba(255,0,90,0.35)] hover:shadow-[0_4px_30px_rgba(255,0,90,0.55)] transition-all duration-300 w-full max-w-xs sm:max-w-none sm:w-auto"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
      <div className="animate-[fadeIn_0.9s_ease-out]">
        <Services />
      </div>
      <div className="animate-[fadeIn_0.9s_ease-out]">
        <Showreel />
      </div>
      <div className="animate-[fadeIn_0.9s_ease-out]">
        <Portfolio />
      </div>
      <div className="animate-[fadeIn_0.9s_ease-out]">
        <About />
      </div>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent my-16 md:my-24" />
      <Contact />
    </main>
  )
}
