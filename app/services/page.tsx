import { ArrowRight, Check, ShieldCheck, Signal, Waves } from "lucide-react"
import type { Metadata } from "next"

import { JsonLd } from "@/components/seo/json-ld"
import { TrackedLink } from "@/components/tracking/tracked-link"
import { ABSOLUTE_LOGO_URL, BRAND_CITY, BRAND_REGION, SITE_NAME, SITE_URL, SOCIAL_LINKS } from "@/lib/site-config"
import { createBreadcrumbJsonLd, createMetadata } from "@/lib/seo"

const packageSections = [
  {
    id: "web-packages",
    eyebrow: "Web Design & Development",
    title: "Conversion-led websites built on modern technology.",
    description: "Three conversion-first website tiers.",
    layout: {
      badge: "min-h-[34px]",
      header: "lg:min-h-[116px]",
      focus: "lg:min-h-[88px]",
      features: "lg:min-h-[156px]",
      outcome: "lg:min-h-[72px]",
    },
    cards: [
      {
        name: "Starter",
        label: "Starter",
        price: "$1,800",
        title: "High-Conversion Landing Page",
        focus: "Perfect for lead generation and brand launches.",
        features: [
          "Conversion layout",
          "Fast React build",
          "SEO basics",
        ],
        outcome: "Built to turn traffic into leads.",
        popular: false,
      },
      {
        name: "Professional",
        label: "Professional",
        price: "$3,500",
        title: "Strategic Business Hub",
        focus: "A fully integrated 5-7 page website designed for scale.",
        features: [
          "Custom UX",
          "5-7 pages",
          "CMS + analytics",
        ],
        outcome: "Your brand hub for authority and growth.",
        popular: true,
      },
      {
        name: "Premium",
        label: "Premium",
        price: "$6,000+",
        title: "Custom Digital Ecosystem",
        focus: "Advanced CMS, e-commerce, and bespoke functionality for established brands.",
        features: [
          "Advanced CMS",
          "Custom commerce",
          "Scalable architecture",
        ],
        outcome: "A custom ecosystem built for scale.",
        popular: false,
      },
    ],
  },
  {
    id: "social-packages",
    eyebrow: "Social Media Management & Content Strategy",
    title: "Strategy, Performance & Production.",
    description: "Three retainers for authority, growth, and production.",
    layout: {
      badge: "min-h-[34px]",
      header: "lg:min-h-[128px]",
      focus: "lg:min-h-[98px]",
      features: "lg:min-h-[220px]",
      outcome: "lg:min-h-[72px]",
    },
    cards: [
      {
        name: "The Foundation",
        label: "Starter",
        price: "$900/mo",
        focus: "Organic Brand Identity & Consistency.",
        features: [
          "Content calendar",
          "Organic growth",
          "Community management",
        ],
        outcome: "A clean, active, trustworthy presence.",
        popular: false,
      },
      {
        name: "The Authority",
        label: "Growth",
        price: "$1,500/mo",
        focus: "Community Building & Performance Marketing.",
        features: [
          "Starter included",
          "Ads management",
          "Influencer outreach",
          "Monthly reporting",
        ],
        outcome: "More reach, more leads, measurable growth.",
        popular: true,
      },
      {
        name: "The Powerhouse",
        label: "Studio",
        price: "$2,500+/mo",
        focus: "Full-Scale Content Production & Viral Strategy.",
        features: [
          "Growth included",
          "Content day",
          "Elite post-production",
          "Viral strategy",
        ],
        outcome: "Cinematic content built to stop the scroll.",
        popular: false,
      },
    ],
  },
] as const

const trustPillars = [
  {
    number: "01",
    title: "Strategic Mastery",
    text: "Scaled organic communities to 13K+ active followers.",
    icon: Signal,
  },
  {
    number: "02",
    title: "Production Excellence",
    text: "Music production roots that make brands sound premium.",
    icon: Waves,
  },
  {
    number: "03",
    title: "Elite Execution",
    text: "Military-grade discipline with on-time, precise execution.",
    icon: ShieldCheck,
  },
] as const

const summaryHighlights = [
  "High-End Strategy",
  "Studio-Grade Production",
  "SEO Optimization",
] as const

const splitPrice = (price: string) => {
  const recurringMatch = price.match(/^(.*?)(\/mo)$/i)

  if (recurringMatch) {
    return {
      amount: recurringMatch[1],
      suffix: recurringMatch[2],
    }
  }

  return {
    amount: price,
    suffix: "",
  }
}

const services = [
  {
    id: "web-design",
    number: "01",
    title: "Web Design & Development",
    subtitle: "Conversion-Led Websites Built To Scale",
    description:
      "From launch pages to full digital ecosystems, every build is engineered for conversion, speed, and flexible content operations.",
    features: [
      "Conversion-first UX architecture",
      "Next.js + React development",
      "CMS setup and content workflows",
      "Analytics, SEO, and performance optimization",
      "E-commerce and bespoke functionality",
      "Mobile-first execution",
    ],
    outcome:
      "A premium website that turns attention into leads, sales, and stronger authority.",
    cta: "Book a\nDiscovery Call",
    startingAt: "Packages start at $1,800",
    accent: "from-orange-500 via-pink-500 to-purple-600",
  },
  {
    id: "social-content",
    number: "02",
    title: "Social Media Management & Content Strategy",
    subtitle: "Organic Authority, Paid Growth, and Elite Content Production",
    description:
      "We combine community building, paid strategy, and production quality to turn social channels into authority-building assets.",
    features: [
      "Strategic content calendars and posting",
      "Organic growth systems informed by 13K+ follower scaling experience",
      "Community engagement and management",
      "Meta and Google Ads management",
      "Influencer and collaboration outreach",
      "Monthly reporting and performance insights",
    ],
    outcome:
      "A sharper brand presence with measurable growth, stronger reach, and better content quality.",
    cta: "Book a\nDiscovery Call",
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
      "Custom website (4-6 pages)",
      "Next.js + React development",
      "Launch-day motion and interactions",
      "Full social strategy and management for 30 days",
      "8-12 short-form videos included",
      "Copywriting for website and social",
      "SEO and speed optimization",
      "Brand cohesion across platforms",
    ],
    outcome: "One coordinated launch across web and social.",
    cta: "Book a\nDiscovery Call",
    startingAt: "Packages start at $3,800",
    accent: "from-orange-500 via-purple-600 to-pink-500",
  },
  {
    id: "content-day",
    number: "04",
    title: "Content Day (Shoot + Edit)",
    subtitle: "High-Fidelity Production, Delivered Fast",
    description: "Shoot once, leave with a month of short-form content.",
    features: [
      "Half-day or full-day shoots",
      "6-12 reels delivered",
      "Vertical-first framing and lighting",
      "Hook and caption guidance",
      "Same-week delivery",
      "On-brand color and sound polish",
    ],
    outcome: "A month of content, ready to post.",
    cta: "Book a\nDiscovery Call",
    startingAt: "Half-day $500 | Full-day $900",
    accent: "from-purple-600 via-pink-500 to-orange-500",
  },
  {
    id: "video-editing",
    number: "05",
    title: "Video Editing & Post-Production",
    subtitle: "Elite Post-Production for Modern Brands",
    description: "Fast, polished edits for short-form, commercial, and launch content.",
    features: [
      "Short-form social video",
      "Brand and commercial edits",
      "Color grading and finishing",
      "Motion graphics and titles",
      "Sound design and mix",
    ],
    outcome: "Sharper videos with stronger retention and a more premium feel.",
    cta: "Book a\nDiscovery Call",
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
      "Release and campaign landing pages",
      "EPKs and media kits",
      "Visualizers and lyric videos",
      "Brand identity for creators",
      "Content packs for social",
    ],
    outcome: "A cleaner digital presence for your release.",
    cta: "Book a\nDiscovery Call",
    startingAt: "Packages start at $500",
    accent: "from-orange-500 via-purple-600 to-pink-500",
  },
] as const

const PAGE_URL = `${SITE_URL}/services`

const pageTitle = `Services | ${SITE_NAME} – Elite Digital Strategy & Content Production`
const pageDescription =
  `Explore ${SITE_NAME} services: elite digital strategy, conversion-led web design, high-end content production, and social growth systems built in Los Angeles.`
const pageKeywords = [
  "Wain Creative Co",
  "elite digital strategy",
  "content production Los Angeles",
  "LA web design",
  "social media management LA",
  "Next.js website",
  "organic growth strategist",
  "video editing LA",
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
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${PAGE_URL}#${service.id}`,
      item: {
        "@type": "Service",
        name: service.title,
        description: service.description,
        serviceType: service.title,
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
    itemListElement: services.map((service, index) => {
      const numericPrice = parseInt(service.startingAt.replace(/[^0-9]/g, ""), 10)
      return {
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Service",
          name: service.title,
          description: service.description,
          serviceType: service.title,
          areaServed: `${BRAND_CITY}, ${BRAND_REGION}`,
          provider: {
            "@type": "Organization",
            name: SITE_NAME,
            url: SITE_URL,
          },
          offers: {
            "@type": "Offer",
            price: Number.isNaN(numericPrice) ? undefined : numericPrice,
            priceCurrency: "USD",
            url: `${PAGE_URL}#${service.id}`,
            availability: "https://schema.org/InStock",
          },
        },
      }
    }),
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0D0D0D] px-6 pt-28 pb-24 md:px-10 md:pt-32 md:pb-28 lg:px-16">
      <JsonLd id="services-page-jsonld" data={jsonLd} />
      <JsonLd id="services-breadcrumbs-jsonld" data={breadcrumbJsonLd} />
      <JsonLd id="services-list-jsonld" data={servicesJsonLd} />

      <div className="pointer-events-none absolute -top-44 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-gradient-to-br from-purple-600/25 via-pink-500/15 to-orange-500/10 blur-[130px]" />
      <div className="pointer-events-none absolute right-[-140px] top-1/3 h-[460px] w-[460px] rounded-full bg-gradient-to-br from-orange-500/18 via-pink-500/12 to-purple-600/22 blur-[120px]" />

      <section className="mx-auto mb-28 max-w-6xl md:mb-40">
        <div className="grid gap-16 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="mb-6 text-sm uppercase tracking-[0.18em] text-white/60">
              Services
            </p>

            <h1 className="text-4xl font-extrabold uppercase tracking-tight leading-[0.9] md:text-6xl lg:text-7xl">
              Digital Strategy
              <br />
              &amp; Production
            </h1>
          </div>

          <div className="rounded-2xl border border-white/10 bg-neutral-950/70 p-6 lg:col-span-4">
            <p className="text-sm leading-relaxed text-white/70 md:text-base">
              Built on a foundation of military-grade precision, musical artistry, and a proven track record of scaling organic communities to 13K+ followers. We don&apos;t just manage brands; we build authorities.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto mb-28 max-w-6xl border-t border-white/10 pt-20 md:mb-40 md:pt-28">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.18em] text-white/50">Packages</p>
            <h2 className="text-3xl font-bold uppercase tracking-tight leading-[0.92] md:text-5xl">
              Built For Authority
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-relaxed text-white/60 md:text-base">
            Cleaner tiers. Less noise. Faster decisions.
          </p>
        </div>

        <div className="mt-16 space-y-20 md:mt-20 md:space-y-28">
          {packageSections.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-32">
              <div className="mb-10 md:mb-14">
                <p className="mb-3 text-xs uppercase tracking-[0.26em] text-white/45">
                  {section.eyebrow}
                </p>
                <h3 className="text-2xl font-bold uppercase tracking-tight md:text-4xl">
                  {section.title}
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/60 md:text-base">
                  {section.description}
                </p>
              </div>

              <div className="grid gap-8 lg:grid-cols-3">
                {section.cards.map((card) => {
                  const { amount, suffix } = splitPrice(card.price)

                  return (
                    <div
                      key={`${section.id}-${card.name}`}
                      className={`relative flex h-full flex-col overflow-hidden rounded-2xl border p-6 md:p-7 ${
                        card.popular
                          ? "border-white/25 bg-white/[0.06] shadow-[0_20px_60px_rgba(255,0,90,0.12)]"
                          : "border-white/10 bg-neutral-950/80"
                      }`}
                    >
                    <div className={`${section.layout.badge} mb-5`}>
                      {card.popular ? (
                        <div className="inline-flex w-fit rounded-full border border-white/15 bg-gradient-to-r from-orange-500/30 via-pink-500/25 to-purple-600/30 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-white">
                          Most Popular
                        </div>
                      ) : null}
                    </div>

                    <div className={`${section.layout.header} mb-7`}>
                      <p className="text-xs uppercase tracking-[0.24em] text-white/45">
                        {card.label}
                      </p>

                      <div className="mt-3 flex items-end gap-2">
                        <h4 className="text-3xl font-bold uppercase tracking-tight leading-none text-white md:text-4xl">
                          {amount}
                        </h4>
                        {suffix ? (
                          <span className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/58 md:text-sm">
                            {suffix}
                          </span>
                        ) : null}
                      </div>

                      <p className="mt-4 max-w-[11rem] text-lg font-semibold uppercase tracking-tight leading-[0.95] text-white/92 md:text-xl">
                        {card.name}
                      </p>
                    </div>

                    <div className={`${section.layout.focus} mb-5`}>
                      <p className="text-xs uppercase tracking-[0.22em] text-white/45">Focus</p>
                      <p className="mt-2 text-sm leading-relaxed text-white/74 md:text-base">{card.focus}</p>
                    </div>

                    <div className={`${section.layout.features} mb-6`}>
                      <p className="text-xs uppercase tracking-[0.22em] text-white/45">Key Features</p>
                      <ul className="mt-3 space-y-3">
                        {card.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3">
                            <Check className="mt-[2px] h-4 w-4 shrink-0 text-pink-400" />
                            <span className="text-sm leading-relaxed text-white/70 md:text-base">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className={`${section.layout.outcome} border-t border-white/10 pt-4`}>
                      <p className="text-base font-medium leading-relaxed text-white/82">
                        {card.outcome}
                      </p>
                    </div>

                    <TrackedLink href="/contact" event="click_book_discovery_call" className="mt-6 block">
                      <button className="group flex min-h-[56px] w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 px-6 py-4 text-sm font-bold uppercase tracking-[0.22em] text-black transition-all duration-300 hover:-translate-y-[1px] hover:opacity-95">
                        <span>Book a Discovery Call</span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </button>
                    </TrackedLink>
                    </div>
                  )
                })}
              </div>
            </section>
          ))}
        </div>
      </section>

      <section className="mx-auto mb-28 max-w-6xl border-t border-white/10 pt-20 md:mb-40 md:pt-28">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="mb-4 text-sm uppercase tracking-[0.18em] text-white/50">Why WAIN Creative</p>
            <h2 className="text-3xl font-bold uppercase tracking-tight md:text-5xl">
              Trust Built Into The Process
            </h2>
          </div>

          <div className="space-y-8 lg:col-span-8">
            <div className="grid gap-8 md:grid-cols-3">
              {trustPillars.map((pillar) => (
                <div
                  key={pillar.number}
                  className="rounded-2xl border border-white/10 bg-neutral-950/80 p-7 md:p-8"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
                    <pillar.icon className="h-5 w-5 text-white/78" />
                  </div>
                  <p className="mt-5 text-xs uppercase tracking-[0.24em] text-white/45">{pillar.number}</p>
                  <h3 className="mt-3 text-2xl font-bold uppercase tracking-tight leading-tight">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/68 md:text-base">
                    {pillar.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3 border-t border-white/10 pt-2">
              {summaryHighlights.map((item) => (
                <div
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-white/62"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-white/45" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <nav className="sticky top-[72px] z-40 mx-auto mb-14 hidden max-w-6xl md:top-[80px] md:mb-16 md:block">
        <div className="inline-flex flex-wrap gap-2 border border-white/10 bg-neutral-950/80 p-2 backdrop-blur-md md:gap-3 md:p-2.5">
          <a
            href="#web-design"
            className="border border-white/15 px-3.5 py-2 text-xs uppercase tracking-[0.18em] text-white/75 transition-all hover:-translate-y-[1px] hover:border-white/40 hover:text-white md:px-4"
          >
            Web
          </a>
          <a
            href="#social-content"
            className="border border-white/15 px-3.5 py-2 text-xs uppercase tracking-[0.18em] text-white/75 transition-all hover:-translate-y-[1px] hover:border-white/40 hover:text-white md:px-4"
          >
            Social
          </a>
          <a
            href="#digital-launch"
            className="border border-white/15 px-3.5 py-2 text-xs uppercase tracking-[0.18em] text-white/75 transition-all hover:-translate-y-[1px] hover:border-white/40 hover:text-white md:px-4"
          >
            Launch
          </a>
          <a
            href="#content-day"
            className="border border-white/15 px-3.5 py-2 text-xs uppercase tracking-[0.18em] text-white/75 transition-all hover:-translate-y-[1px] hover:border-white/40 hover:text-white md:px-4"
          >
            Content Day
          </a>
          <a
            href="#video-editing"
            className="border border-white/15 px-3.5 py-2 text-xs uppercase tracking-[0.18em] text-white/75 transition-all hover:-translate-y-[1px] hover:border-white/40 hover:text-white md:px-4"
          >
            Video
          </a>
          <a
            href="#creator-services"
            className="border border-white/15 px-3.5 py-2 text-xs uppercase tracking-[0.18em] text-white/75 transition-all hover:-translate-y-[1px] hover:border-white/40 hover:text-white md:px-4"
          >
            Creator
          </a>
        </div>
      </nav>

      <div className="mx-auto max-w-6xl space-y-28 md:space-y-36">
        {services.map((service) => (
          <section key={service.id} id={service.id} className="scroll-mt-32">
            <div className="grid grid-cols-1 gap-10 border-t border-white/10 pt-12 md:gap-12 md:pt-16 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <div className="mb-6 flex items-center gap-4">
                  <div className={`h-2.5 w-2.5 bg-gradient-to-r ${service.accent}`} />
                  <span className="block text-sm font-semibold uppercase tracking-[0.35em] text-white/50 md:text-base">
                    {service.number}
                  </span>
                </div>

                <h2 className="mb-4 text-2xl font-bold uppercase tracking-tight md:text-4xl lg:text-5xl">
                  {service.title}
                </h2>

                <p className="text-base font-light leading-relaxed text-white/60 md:text-lg">
                  {service.subtitle}
                </p>
              </div>

              <div className="space-y-10 lg:col-span-8">
                <p className="max-w-3xl text-base leading-relaxed text-white/70 md:text-lg">
                  {service.description}
                </p>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
                  <div className="group rounded-lg border border-white/10 bg-neutral-950 p-7 transition-all hover:border-white/20 hover:bg-white/5 md:p-8">
                    <h3 className="mb-6 text-lg font-bold uppercase tracking-tight md:text-xl lg:text-2xl">
                      Included Features
                    </h3>

                    <ul className="space-y-4">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-white/80">
                          <Check className="mt-[2px] h-5 w-5 shrink-0 text-pink-400" />
                          <span className="text-sm leading-relaxed text-white/70 md:text-base">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="group flex flex-col justify-between rounded-lg border border-white/10 bg-neutral-950 p-7 transition-all hover:border-white/20 hover:bg-white/5 md:p-8">
                    <div>
                      <h3 className="mb-4 text-lg font-bold uppercase tracking-tight md:text-xl lg:text-2xl">
                        Outcome
                      </h3>

                      <p className="text-base leading-relaxed text-white/70 md:text-lg">
                        {service.outcome}
                      </p>
                      <p className="mt-3 text-sm text-white/50 md:text-base">
                        {service.startingAt}
                      </p>
                    </div>

                    <TrackedLink href="/contact" event="click_book_discovery_call" className="mt-8 block">
                      <button className="group relative flex min-h-[56px] w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 px-6 py-4 text-sm font-bold uppercase tracking-[0.25em] text-black shadow-[0_4px_20px_rgba(255,0,90,0.35)] transition-all duration-300 hover:-translate-y-[1px] hover:opacity-95 hover:shadow-[0_4px_30px_rgba(255,0,90,0.55)] md:min-h-[60px]">
                        <span className="whitespace-pre-line text-center leading-tight">{service.cta}</span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
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
