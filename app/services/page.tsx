import { Check, ArrowRight } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"
import { TrackedLink } from "@/components/tracking/tracked-link"

const services = [
  {
    id: "web-design",
    number: "01",
    title: "Web Design & Development",
    subtitle: "High-End Websites That Actually Perform",
    description:
      "We design and build digital experiences that feel cinematic, fast, and intentional. Every page, every interaction, every detail is crafted to elevate your brand and drive action.",
    features: [
      "Custom UI/UX",
      "Next.js + React Development",
      "Motion & Micro-Interactions",
      "Mobile-First Layouts",
      "CMS Setup & Training",
      "Speed + SEO Optimization",
    ],
    outcome:
      "A flagship-level website that looks premium, sells better, and scales with your business.",
    cta: "Start a Web\nProject",
    featureNote: "Built to convert, load fast, and feel like a real product.",
    startingAt: "Packages start at $800",
    accent: "from-orange-500 via-pink-500 to-purple-600",
  },
  {
    id: "social-content",
    number: "02",
    title: "Social Media Management & Content Strategy",
    subtitle: "Full-Service Social Management + Short-Form Content",
    description:
      "We run your social like a studio - strategy, production, posting, and optimization. Not more posts, but content with purpose, voice, and momentum that compounds month after month.",
    features: [
      "Monthly Content Strategy",
      "Full Social Management",
      "Short-Form Video Production",
      "Copywriting in Your Voice",
      "Audience Growth & Engagement",
      "Data-Driven Content Decisions",
      "Paid Ads Setup & Optimization (Meta/TikTok)",
      "On-Site Shooting Days Available",
    ],
    outcome:
      "Consistent content that builds trust, authority, and real followers who convert.",
    cta: "Start Social\nStrategy",
    featureNote: "Engineered for consistent growth, daily trust-building, and scalable reach.",
    startingAt: "Packages start at $600/mo",
    accent: "from-purple-600 via-pink-500 to-orange-500",
  },
  {
    id: "digital-launch",
    number: "03",
    title: "Website + Social Launch Package",
    subtitle: "Full Digital Launch: Website + 30-Day Content Rollout",
    description:
      "A complete digital upgrade combining a premium custom website with a high-volume content rollout. Designed for brands and creators who want to launch, relaunch, or scale fast with cinematic storytelling and consistent content.",
    features: [
      "Custom Website (4-6 Pages)",
      "Next.js + React Development",
      "Launch-Day Motion + Interactions",
      "Full Social Strategy + Management (30 Days)",
      "8-12 Short-Form Videos Included",
      "Copywriting for Website + Social",
      "SEO + Speed Optimization",
      "Brand Cohesion Across All Platforms",
    ],
    outcome:
      "A unified brand presence that looks premium, feels modern, and launches with momentum across website and social.",
    cta: "Launch My\nBrand",
    featureNote: "Your entire digital identity elevated in one seamless package.",
    startingAt: "Packages start at $1,800",
    accent: "from-orange-500 via-purple-600 to-pink-500",
  },
  {
    id: "content-day",
    number: "04",
    title: "Content Day (Shoot + Edit)",
    subtitle: "High-Volume Content, Delivered Fast",
    description:
      "A focused shoot day designed to stock you up with premium short-form content. We capture, cut, and deliver assets ready for Reels, TikTok, and ads - clean, sharp, and on-brand.",
    features: [
      "Half-Day or Full-Day Shoots",
      "6-12 Reels Delivered",
      "Vertical-First Framing & Lighting",
      "Hook + Caption Guidance",
      "Same-Week Delivery",
      "On-Brand Color & Sound Polish",
    ],
    outcome:
      "A full month of high-retention content in one day, ready to post and built to perform.",
    cta: "Book a\nContent Day",
    featureNote: "The fastest way to upgrade your social presence with volume and quality.",
    startingAt: "Half-days start at $400",
    accent: "from-purple-600 via-pink-500 to-orange-500",
  },
  {
    id: "video-editing",
    number: "05",
    title: "Video Editing & Post-Production",
    subtitle: "Cinematic Editing for Modern Brands",
    description:
      "We edit like a studio. Fast pacing, perfect color, strong storytelling, and visuals that feel premium everywhere they appear.",
    features: [
      "Short-Form Social Video",
      "Brand & Commercial Edits",
      "Color Grading & Finishing",
      "Motion Graphics & Titles",
      "Clean Sound Design & Mix",
    ],
    outcome:
      "High-retention videos that keep people watching and elevate your brand instantly.",
    cta: "Start Editing\nProject",
    featureNote: "Cut for retention, pacing, and a premium finish.",
    startingAt: "Projects start at $250",
    accent: "from-pink-500 via-purple-600 to-orange-500",
  },
  {
    id: "creator-services",
    number: "06",
    title: "Creator & Artist Digital Services",
    subtitle: "The Digital Identity Behind Your Release",
    description:
      "We design the full visual ecosystem behind creators, artists, and releases. More than assets, a complete rollout.",
    features: [
      "Release & Campaign Landing Pages",
      "EPKs & Media Kits",
      "Visualizers & Lyric Videos",
      "Brand Identity for Creators",
      "Content Packs for Social",
    ],
    outcome:
      "A world-class digital presence that makes your music, release, or brand look major.",
    cta: "Start Creator\nProject",
    featureNote: "A full rollout stack that makes your release look major.",
    startingAt: "Packages start at $500",
    accent: "from-orange-500 via-purple-600 to-pink-500",
  },
] as const

const SITE_URL = "https://www.waincreative.com"
const PAGE_URL = `${SITE_URL}/services`
const OG_IMAGE = `${SITE_URL}/og-image.jpg`
const TW_IMAGE = `${SITE_URL}/social-banner.jpg`

const pageTitle = "Services | Wain Creative Co – LA Web Design, Social Media & Content Studio"
const pageDescription =
  "Explore Wain Creative Co services: premium web design & development, social media management, content production, video editing, and creator launch systems built in Los Angeles."
const pageKeywords = [
  "Wain Creative Co",
  "Los Angeles creative agency",
  "LA web design",
  "Next.js website",
  "social media management LA",
  "content studio Los Angeles",
  "video editing LA",
  "creator services",
  "branding",
  "digital studio",
].join(", ")

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: pageKeywords,
  alternates: {
    canonical: PAGE_URL,
  },
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
        alt: "Wain Creative Co Services",
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: pageTitle,
  url: PAGE_URL,
  description: pageDescription,
  publisher: {
    "@type": "Organization",
    name: "Wain Creative Co",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.svg`,
    sameAs: [
      "https://www.instagram.com/waincreativeco/",
      "https://www.linkedin.com/in/wainmusic/",
    ],
  },
  mainEntity: {
    "@type": "ItemList",
    itemListOrder: "http://schema.org/ItemListOrderAscending",
    numberOfItems: services.length,
    itemListElement: services.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${PAGE_URL}#${s.id}`,
      item: {
        "@type": "Service",
        name: s.title,
        description: s.description,
        serviceType: s.title,
        areaServed: "Los Angeles, CA",
        provider: {
          "@type": "Organization",
          name: "Wain Creative Co",
          url: SITE_URL,
        },
      },
    })),
  },
}

export default function ServicesPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: PAGE_URL,
      },
    ],
  }

  const servicesJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: services.map((s, i) => {
      const numericPrice = parseInt(s.startingAt.replace(/[^0-9]/g, ""), 10)
      return {
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Service",
          name: s.title,
          description: s.description,
          serviceType: s.title,
          areaServed: "Los Angeles, CA",
          provider: {
            "@type": "Organization",
            name: "Wain Creative Co",
            url: SITE_URL,
          },
          offers: {
            "@type": "Offer",
            price: isNaN(numericPrice) ? undefined : numericPrice,
            priceCurrency: "USD",
            url: `${PAGE_URL}#${s.id}`,
            availability: "https://schema.org/InStock",
          },
        },
      }
    }),
  }

  return (
    <main className="relative min-h-screen pt-28 md:pt-32 pb-24 md:pb-28 px-6 md:px-10 lg:px-16 bg-[#0D0D0D] overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
      <div className="pointer-events-none absolute -top-44 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-gradient-to-br from-purple-600/25 via-pink-500/15 to-orange-500/10 blur-[130px]" />
      <div className="pointer-events-none absolute top-1/3 right-[-140px] h-[460px] w-[460px] rounded-full bg-gradient-to-br from-orange-500/18 via-pink-500/12 to-purple-600/22 blur-[120px]" />

      {/* Page Header */}
      <section className="max-w-6xl mx-auto mb-20">
        <p className="text-sm uppercase tracking-[0.18em] text-white/60 mb-6 leading-[1.45]">
          Services
        </p>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight leading-[0.9] mb-8">
          Services
        </h1>

        <div className="h-px w-40 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 mb-8" />

        <p className="text-white/70 leading-relaxed text-base md:text-lg max-w-xl">
          Wain Creative Co delivers end-to-end digital execution for brands, businesses, and creators who want a premium upgrade. Clean design, sharp storytelling, and systems that actually grow.
        </p>
        <p className="text-white/50 text-sm md:text-base mt-6">
          Trusted by 100+ releases and growing brands.
        </p>
      </section>

      {/* Anchor Menu */}
      <nav className="sticky top-[72px] md:top-[80px] z-40 max-w-6xl mx-auto mb-14 md:mb-16">
        <div className="inline-flex flex-wrap gap-2 md:gap-3 bg-neutral-950/80 backdrop-blur-md border border-white/10 p-2 md:p-2.5">
          <a
            href="#web-design"
            className="px-3.5 md:px-4 py-2 text-xs uppercase tracking-[0.18em] text-white/75 border border-white/15 hover:border-white/40 hover:text-white transition-all hover:-translate-y-[1px]"
          >
            Web
          </a>
          <a
            href="#social-content"
            className="px-3.5 md:px-4 py-2 text-xs uppercase tracking-[0.18em] text-white/75 border border-white/15 hover:border-white/40 hover:text-white transition-all hover:-translate-y-[1px]"
          >
            Social
          </a>
          <a
            href="#digital-launch"
            className="px-3.5 md:px-4 py-2 text-xs uppercase tracking-[0.18em] text-white/75 border border-white/15 hover:border-white/40 hover:text-white transition-all hover:-translate-y-[1px]"
          >
            Launch
          </a>
          <a
            href="#content-day"
            className="px-3.5 md:px-4 py-2 text-xs uppercase tracking-[0.18em] text-white/75 border border-white/15 hover:border-white/40 hover:text-white transition-all hover:-translate-y-[1px]"
          >
            Content Day
          </a>
          <a
            href="#video-editing"
            className="px-3.5 md:px-4 py-2 text-xs uppercase tracking-[0.18em] text-white/75 border border-white/15 hover:border-white/40 hover:text-white transition-all hover:-translate-y-[1px]"
          >
            Video
          </a>
          <a
            href="#creator-services"
            className="px-3.5 md:px-4 py-2 text-xs uppercase tracking-[0.18em] text-white/75 border border-white/15 hover:border-white/40 hover:text-white transition-all hover:-translate-y-[1px]"
          >
            Creator
          </a>
        </div>
      </nav>

      {/* Services Sections */}
      <div className="space-y-28 md:space-y-36 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <section key={service.id} id={service.id} className="scroll-mt-32">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 border-t border-white/10 pt-12 md:pt-16">
              {/* Left: Title */}
              <div className="lg:col-span-4">
                <div className={`flex items-center gap-4 mb-6`}>
                  <div className={`h-2.5 w-2.5 bg-gradient-to-r ${service.accent}`} />
                  <span className="text-sm md:text-base font-semibold uppercase tracking-[0.35em] text-white/50 block">
                    {service.number}
                  </span>
                </div>

                <h2 className="font-bold uppercase tracking-tight text-2xl md:text-4xl lg:text-5xl mb-4">
                  {service.title}
                </h2>

                <p className="text-white/60 leading-relaxed text-base md:text-lg font-light">
                  {service.subtitle}
                </p>
              </div>

              {/* Right: Content */}
              <div className="lg:col-span-8 space-y-10">
                <p className="text-white/70 leading-relaxed text-base md:text-lg max-w-3xl">
                  {service.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                  {/* Features */}
                  <div className="group bg-neutral-950 p-7 md:p-8 border border-white/10 rounded-lg hover:border-white/20 hover:bg-white/5 transition-all">
                    <h3 className="font-bold uppercase tracking-tight text-lg md:text-xl lg:text-2xl mb-6">
                      Included Features
                    </h3>

                    <ul className="space-y-4">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-white/80">
                          <Check className="w-5 h-5 text-pink-400 shrink-0 mt-[2px]" />
                          <span className="text-white/70 leading-relaxed text-sm md:text-base">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-white/50 text-sm md:text-base mt-6 leading-relaxed">
                      {service.featureNote}
                    </p>
                  </div>

                  {/* Outcome + CTA */}
                  <div className="group bg-neutral-950 p-7 md:p-8 border border-white/10 rounded-lg flex flex-col justify-between hover:border-white/20 hover:bg-white/5 transition-all">
                    <div>
                      <h3 className="font-bold uppercase tracking-tight text-lg md:text-xl lg:text-2xl mb-4">
                        What You Get
                      </h3>

                      <p className="text-white/70 leading-relaxed text-base md:text-lg">
                        {service.outcome}
                      </p>
                      <p className="text-white/50 text-sm md:text-base mt-3">
                        {service.startingAt}
                      </p>
                    </div>

                    <TrackedLink href="/contact" event="click_book_call" className="mt-8 block">
                      <button className="w-full min-h-[56px] md:min-h-[60px] rounded-lg bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-black py-4 px-6 font-bold uppercase tracking-[0.25em] transition-all duration-300 flex items-center justify-center gap-2 group hover:opacity-95 hover:-translate-y-[1px] hover:shadow-[0_10px_40px_rgba(0,0,0,0.6)]">
                        <span className="whitespace-pre-line text-center leading-tight">{service.cta}</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </TrackedLink>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </main>
  )
}
