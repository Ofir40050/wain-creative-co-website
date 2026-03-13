import { Check, ArrowRight } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"
import { JsonLd } from "@/components/seo/json-ld"
import { TrackedLink } from "@/components/tracking/tracked-link"
import { ABSOLUTE_LOGO_URL, BRAND_CITY, BRAND_REGION, SITE_NAME, SITE_URL, SOCIAL_LINKS } from "@/lib/site-config"
import { createBreadcrumbJsonLd, createMetadata } from "@/lib/seo"

const pricingCollections = [
  {
    id: "website-packages",
    eyebrow: "Website Packages",
    title: "Starter, Professional, Premium",
    description: "Three clear entry points.",
    packages: [
      {
        name: "Starter",
        price: "$1,800",
        details: "Lean launch site.",
      },
      {
        name: "Professional",
        price: "$3,500",
        details: "Custom site + sharper UX.",
      },
      {
        name: "Premium",
        price: "$6,000+",
        details: "Flagship build + deeper scope.",
      },
    ],
  },
  {
    id: "social-packages",
    eyebrow: "Social Packages",
    title: "Starter, Growth, Studio",
    description: "Monthly tiers for brands that want momentum.",
    packages: [
      {
        name: "Starter",
        price: "$900/mo",
        details: "Strategy + consistency.",
      },
      {
        name: "Growth",
        price: "$1,500/mo",
        details: "More output + faster growth.",
      },
      {
        name: "Studio",
        price: "$2,500+/mo",
        details: "Hands-on studio support.",
      },
    ],
  },
] as const

const services = [
  {
    id: "web-design",
    number: "01",
    title: "Web Design & Development",
    subtitle: "High-End Websites That Actually Perform",
    description: "Custom websites with strong UX, fast performance, and premium motion.",
    features: [
      "Custom UI/UX",
      "Next.js + React Development",
      "Motion & Micro-Interactions",
      "Mobile-First Layouts",
      "CMS Setup & Training",
      "Speed + SEO Optimization",
    ],
    outcome: "A premium site built to convert and scale.",
    cta: "Start a Web\nProject",
    featureNote: "Built to convert, load fast, and feel like a real product.",
    startingAt: "Packages start at $1,800",
    accent: "from-orange-500 via-pink-500 to-purple-600",
  },
  {
    id: "social-content",
    number: "02",
    title: "Social Media Management & Content Strategy",
    subtitle: "Full-Service Social Management + Short-Form Content",
    description: "Strategy, posting, short-form production, and growth management.",
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
    outcome: "Consistent content that builds trust and drives growth.",
    cta: "Start Social\nStrategy",
    featureNote: "Engineered for consistent growth, daily trust-building, and scalable reach.",
    startingAt: "Packages start at $900/mo",
    accent: "from-purple-600 via-pink-500 to-orange-500",
  },
  {
    id: "digital-launch",
    number: "03",
    title: "Website + Social Launch Package",
    subtitle: "Full Digital Launch: Website + 30-Day Content Rollout",
    description: "Website + 30-day content rollout for a clean, fast brand launch.",
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
    outcome: "One coordinated launch across web and social.",
    cta: "Launch My\nBrand",
    featureNote: "Your entire digital identity elevated in one seamless package.",
    startingAt: "Packages start at $3,800",
    accent: "from-orange-500 via-purple-600 to-pink-500",
  },
  {
    id: "content-day",
    number: "04",
    title: "Content Day (Shoot + Edit)",
    subtitle: "High-Volume Content, Delivered Fast",
    description: "Shoot once, leave with a month of short-form content.",
    features: [
      "Half-Day or Full-Day Shoots",
      "6-12 Reels Delivered",
      "Vertical-First Framing & Lighting",
      "Hook + Caption Guidance",
      "Same-Week Delivery",
      "On-Brand Color & Sound Polish",
    ],
    outcome: "A month of content, ready to post.",
    cta: "Book a\nContent Day",
    featureNote: "The fastest way to upgrade your social presence with volume and quality.",
    startingAt: "Half-day $500 | Full-day $900",
    accent: "from-purple-600 via-pink-500 to-orange-500",
  },
  {
    id: "video-editing",
    number: "05",
    title: "Video Editing & Post-Production",
    subtitle: "Cinematic Editing for Modern Brands",
    description: "Fast, polished edits for short-form and commercial work.",
    features: [
      "Short-Form Social Video",
      "Brand & Commercial Edits",
      "Color Grading & Finishing",
      "Motion Graphics & Titles",
      "Clean Sound Design & Mix",
    ],
    outcome: "Sharper videos with stronger retention.",
    cta: "Start Editing\nProject",
    featureNote: "Cut for retention, pacing, and a premium finish.",
    startingAt: "Short-form from $95 | Commercial from $400",
    accent: "from-pink-500 via-purple-600 to-orange-500",
  },
  {
    id: "creator-services",
    number: "06",
    title: "Creator & Artist Digital Services",
    subtitle: "The Digital Identity Behind Your Release",
    description: "Release pages, EPKs, visuals, and rollout assets for creators.",
    features: [
      "Release & Campaign Landing Pages",
      "EPKs & Media Kits",
      "Visualizers & Lyric Videos",
      "Brand Identity for Creators",
      "Content Packs for Social",
    ],
    outcome: "A cleaner digital presence for your release.",
    cta: "Start Creator\nProject",
    featureNote: "A full rollout stack that makes your release look major.",
    startingAt: "Packages start at $500",
    accent: "from-orange-500 via-purple-600 to-pink-500",
  },
] as const

const PAGE_URL = `${SITE_URL}/services`

const pageTitle = `Services | ${SITE_NAME} – LA Web Design, Social Media & Content Studio`
const pageDescription =
  `Explore ${SITE_NAME} services: premium web design & development, social media management, content production, video editing, and creator launch systems built in Los Angeles.`
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

export const metadata: Metadata = createMetadata({
  title: pageTitle,
  description: pageDescription,
  keywords: pageKeywords,
  canonicalPath: "/services",
  openGraphAlt: `${SITE_NAME} Services`,
})

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: pageTitle,
  url: PAGE_URL,
  description: pageDescription,
  publisher: {
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: ABSOLUTE_LOGO_URL,
    sameAs: SOCIAL_LINKS,
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
        areaServed: `${BRAND_CITY}, ${BRAND_REGION}`,
        provider: {
          "@type": "Organization",
          name: SITE_NAME,
          url: SITE_URL,
        },
      },
    })),
  },
}

export default function ServicesPage() {
  const breadcrumbJsonLd = createBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
  ])

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
          areaServed: `${BRAND_CITY}, ${BRAND_REGION}`,
          provider: {
            "@type": "Organization",
            name: SITE_NAME,
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
      <JsonLd id="services-page-jsonld" data={jsonLd} />
      <JsonLd id="services-breadcrumbs-jsonld" data={breadcrumbJsonLd} />
      <JsonLd id="services-list-jsonld" data={servicesJsonLd} />
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
          Premium web, content, and social systems for brands that want a sharper digital presence.
        </p>
        <p className="text-white/50 text-sm md:text-base mt-4">
          Trusted by 100+ releases and growing brands.
        </p>
      </section>

      <section className="max-w-6xl mx-auto mb-20 md:mb-24">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between border-t border-white/10 pt-12 md:pt-14">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-white/50 mb-4">Packages</p>
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight leading-[0.92]">
              Simple Pricing
            </h2>
          </div>
          <p className="max-w-xl text-white/60 leading-relaxed text-sm md:text-base">
            Clean starting points. Custom scopes available.
          </p>
        </div>

        <div className="mt-10 md:mt-12 grid gap-8 lg:grid-cols-2">
          {pricingCollections.map((collection) => (
            <section
              key={collection.id}
              aria-labelledby={collection.id}
              className="h-full border border-white/10 bg-neutral-950/80 rounded-2xl p-7 md:p-8 flex flex-col"
            >
              <div className="min-h-[128px] md:h-[200px] lg:h-[216px]">
                <p className="text-xs uppercase tracking-[0.28em] text-white/45 mb-4">
                  {collection.eyebrow}
                </p>
                <h3
                  id={collection.id}
                  className="text-2xl md:text-3xl font-bold uppercase tracking-tight mb-4"
                >
                  {collection.title}
                </h3>
                <p className="text-white/60 leading-relaxed text-sm md:text-base">
                  {collection.description}
                </p>
              </div>

              <div className="grid gap-4 flex-1 content-start lg:auto-rows-fr">
                {collection.packages.map((pkg) => (
                  <div
                    key={`${collection.id}-${pkg.name}`}
                    className="h-full rounded-xl border border-white/10 bg-white/[0.03] px-5 py-5 md:px-6"
                  >
                    <div className="flex min-h-[96px] items-center justify-between gap-4">
                      <div className="flex-1">
                        <p className="text-xs uppercase tracking-[0.28em] text-white/45 mb-2">
                          {pkg.name}
                        </p>
                        <p className="text-white/65 leading-relaxed text-sm md:text-base">
                          {pkg.details}
                        </p>
                      </div>
                      <p className="text-xl md:text-2xl font-semibold whitespace-nowrap text-white text-right">
                        {pkg.price}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      {/* Anchor Menu */}
      <nav className="sticky top-[72px] md:top-[80px] z-40 max-w-6xl mx-auto mb-14 md:mb-16 hidden md:block">
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
                  </div>

                  {/* Outcome + CTA */}
                  <div className="group bg-neutral-950 p-7 md:p-8 border border-white/10 rounded-lg flex flex-col justify-between hover:border-white/20 hover:bg-white/5 transition-all">
                    <div>
                      <h3 className="font-bold uppercase tracking-tight text-lg md:text-xl lg:text-2xl mb-4">
                        Outcome
                      </h3>

                      <p className="text-white/70 leading-relaxed text-base md:text-lg">
                        {service.outcome}
                      </p>
                      <p className="text-white/50 text-sm md:text-base mt-3">
                        {service.startingAt}
                      </p>
                    </div>

                    <TrackedLink href="/contact" event="click_book_call" className="mt-8 block"> 
                      <button className="w-full min-h-[56px] md:min-h-[60px] group relative px-8 py-4 rounded-lg tracking-widest text-sm bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-black py-4 px-6 font-bold uppercase tracking-[0.25em] transition-all duration-300 flex items-center justify-center gap-2 group hover:opacity-95 hover:-translate-y-[1px] shadow-[0_4px_20px_rgba(255,0,90,0.35)] hover:shadow-[0_4px_30px_rgba(255,0,90,0.55)]">
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
