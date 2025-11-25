import type { Metadata } from "next"
import Script from "next/script"
import { WorkPageContent } from "@/components/work/work-page-content"
import workProjects, { type WorkProject } from "@/app/work/projects-data"

const SITE_URL = "https://www.waincreative.com"
const PAGE_URL = `${SITE_URL}/work`
const OG_IMAGE = `${SITE_URL}/og-image.jpg`
const TW_IMAGE = `${SITE_URL}/social-banner.jpg`

const pageTitle = "Work | Wain Creative Co Case Studies"
const pageDescription =
  "Explore selected high-end web and content projects by Wain Creative Co. Real client builds from Los Angeles, crafted for speed, aesthetics, and conversion."
const pageKeywords = [
  "Wain Creative Co work",
  "LA creative agency portfolio",
  "Los Angeles web design case studies",
  "premium brand websites",
  "content studio portfolio",
  "Next.js agency LA",
]

const getJsonLd = (projects: WorkProject[]) => ({
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: pageTitle,
  url: PAGE_URL,
  description: pageDescription,
  isPartOf: {
    "@type": "WebSite",
    name: "Wain Creative Co",
    url: SITE_URL,
  },
  mainEntity: {
    "@type": "ItemList",
    itemListElement: projects.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: p.title,
      url: `${PAGE_URL}/${p.slug}`,
      image: p.images?.[0] ? `${SITE_URL}${p.images[0]}` : undefined,
      datePublished: p.year ? `${p.year}-01-01` : undefined,
      item: {
        "@type": "CreativeWork",
        name: p.title,
        url: `${PAGE_URL}/${p.slug}`,
        description: p.description,
        about: p.services,
        image: p.images?.[0] ? `${SITE_URL}${p.images[0]}` : undefined,
      },
    })),
  },
})

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
    siteName: "Wain Creative Co",
    title: pageTitle,
    description: pageDescription,
    url: PAGE_URL,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Wain Creative Co - Work",
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

export default function WorkPage() {
  const jsonLd = getJsonLd(workProjects)
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
        name: "Work",
        item: PAGE_URL,
      },
    ],
  }

  return (
    <main className="relative min-h-screen pt-28 md:pt-32 pb-24 px-6 md:px-10 lg:px-16 bg-[#0D0D0D] overflow-hidden">
      <Script
        id="work-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Script
        id="work-breadcrumbs-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-to-br from-purple-600/25 via-pink-500/15 to-orange-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/3 right-[-120px] h-[420px] w-[420px] rounded-full bg-gradient-to-br from-orange-500/20 via-pink-500/10 to-purple-600/20 blur-[110px]" />

      <WorkPageContent projects={workProjects} />
    </main>
  )
}
