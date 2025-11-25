import type { Metadata } from "next"
import Script from "next/script"
import { Hero } from "@/components/landing/hero"
import { Services } from "@/components/landing/services"
import { Showreel } from "@/components/landing/showreel"
import { Portfolio } from "@/components/landing/portfolio"
import { About } from "@/components/landing/about"
import { Contact } from "@/components/landing/contact"

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
      {/* Highlight Offer: Website + Social Launch Package */}
      <section className="relative bg-[#111111] border-y border-white/10 py-14 md:py-20 px-6 md:px-10 lg:px-16 animate-[fadeIn_0.9s_ease-out]">
        <div className="absolute inset-0 pointer-events-none flex justify-center">
          <div className="w-[420px] h-[420px] md:w-[600px] md:h-[600px] bg-pink-500/10 blur-[140px] md:blur-[200px] rounded-full" />
        </div>
        <div className="max-w-4xl mx-auto text-center leading-snug bg-black/20 border border-white/10 rounded-xl px-6 md:px-12 py-10 md:py-14 backdrop-blur-sm shadow-[0_0_40px_-10px_rgba(0,0,0,0.6)] transition-all duration-300 hover:scale-[1.015] hover:shadow-[0_0_60px_-10px_rgba(255,0,90,0.4)]">
          <p className="inline-block mb-4 px-3 py-1 text-[10px] md:text-xs font-semibold tracking-wide uppercase bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-black rounded-full animate-[fadeIn_0.6s_ease-out_0.1s_both]">Most Popular</p>
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
            “This package launched our brand fast and professionally. The website and content worked together perfectly.” — Client Name
          </div>

          <div className="flex justify-center">
            <a
              href="/services#digital-launch"
              className="px-10 py-4 md:py-5 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-black font-semibold uppercase tracking-wide rounded-lg shadow-[0_4px_20px_rgba(255,0,90,0.35)] hover:shadow-[0_4px_30px_rgba(255,0,90,0.55)] hover:opacity-95 transition-all animate-[fadeInUp_0.6s_ease-out_0.6s_both]"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
      <div className="mt-12 md:mt-20">
        <Services />
      </div>
      <div className="mt-12 md:mt-24">
        <Showreel />
      </div>
      <div className="mt-16 md:mt-28">
        <Portfolio />
      </div>
      <div className="mt-20 md:mt-32">
        <About />
      </div>
      {/* SEO content block */}
      <section className="mt-16 md:mt-28 px-6 md:px-10 lg:px-16">
        <div className="max-w-6xl mx-auto rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] via-black/40 to-black/70 p-8 md:p-12 shadow-[0_20px_90px_rgba(0,0,0,0.7)] space-y-10 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-20 -left-10 w-72 h-72 bg-orange-500/10 blur-[120px]" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/10 blur-[140px]" />
          </div>

          <div className="relative flex flex-wrap items-center gap-3">
            <span className="px-4 py-1 text-[11px] uppercase tracking-[0.2em] rounded-full border border-white/15 bg-white/10 text-white/80">
              LA-built studio
            </span>
            <span className="px-4 py-1 text-[11px] uppercase tracking-[0.2em] rounded-full border border-white/15 bg-white/5 text-white/70">
              Web · Social · Video · Creator
            </span>
          </div>

          <div className="relative space-y-3">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight leading-[1.05]">
              Premium web design, content systems, and launches built in Los Angeles
            </h2>
            <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-4xl">
              We build custom Next.js websites, social/content engines, and creator-ready launches engineered for speed, clarity, and conversion—no templates or generic funnels.
            </p>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { label: "Speed", text: "Next.js + React + TypeScript for fast load and SEO." },
              { label: "Conversion", text: "UX, motion, and funnels tuned to move people to action." },
              { label: "Content", text: "Web + social + video aligned as one repeatable system." },
            ].map((item) => (
              <div key={item.label} className="p-6 rounded-2xl border border-white/10 bg-white/[0.03] space-y-2">
                <p className="text-[11px] uppercase tracking-[0.25em] text-white/60">{item.label}</p>
                <p className="text-white/80 leading-relaxed text-sm md:text-base">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] space-y-3">
              <h3 className="text-xl md:text-2xl font-semibold uppercase tracking-tight">What we deliver</h3>
              <ul className="space-y-2 text-white/75 leading-relaxed">
                <li>Custom web design & development with sharp UX, motion, and performance.</li>
                <li>Social and content strategy with daily execution, reels/TikTok, and copy.</li>
                <li>Video editing and post for brand films and high-retention shorts.</li>
                <li>Creator/artist launches: release pages, EPKs, visualizers, and campaign assets.</li>
              </ul>
            </div>
            <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] space-y-3">
              <h3 className="text-xl md:text-2xl font-semibold uppercase tracking-tight">Why it works</h3>
              <ul className="space-y-2 text-white/75 leading-relaxed">
                <li>Next.js, React, and TypeScript foundations for speed, SEO, and scale.</li>
                <li>Web, social, and video aligned into one repeatable growth engine.</li>
                <li>Premium visual language—typography, grid, motion, and cohesive identity.</li>
                <li>Conversion-first decisions: funnels, retention, and measurable outcomes.</li>
              </ul>
            </div>
          </div>

          <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-3xl">
              Flagship sites, social/content programs, or full launch packages. Built in LA, shipping worldwide. Launch faster, tell a sharper story, convert more of the right audience.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-3 px-7 py-3 rounded-lg bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-black font-semibold uppercase tracking-wide hover:opacity-90 transition shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
            >
              Start your project
            </a>
          </div>
        </div>
      </section>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent my-16 md:my-24" />
      <Contact />
    </main>
  )
}
