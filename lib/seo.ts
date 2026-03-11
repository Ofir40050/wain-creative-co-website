import type { Metadata } from "next"
import {
  ABSOLUTE_LOGO_URL,
  BRAND_CITY,
  BRAND_COUNTRY,
  BRAND_PHONE,
  BRAND_REGION,
  DEFAULT_OG_IMAGE_PATH,
  DEFAULT_TWITTER_IMAGE_PATH,
  ORGANIZATION_DESCRIPTION,
  SERVICE_TYPES,
  SITE_NAME,
  SITE_URL,
  SOCIAL_LINKS,
} from "@/lib/site-config"

type MetadataOptions = {
  canonicalPath?: string
  category?: string
  description: string
  keywords?: Metadata["keywords"]
  openGraphAlt?: string
  openGraphDescription?: string
  openGraphImage?: string
  openGraphTitle?: string
  title: string
  twitterDescription?: string
  twitterImage?: string
  twitterTitle?: string
}

type BreadcrumbItem = {
  name: string
  path?: string
  url?: string
}

const DEFAULT_ROBOTS: NonNullable<Metadata["robots"]> = {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
}

export const toAbsoluteUrl = (pathOrUrl: string) => {
  if (pathOrUrl.startsWith("http://") || pathOrUrl.startsWith("https://")) {
    return pathOrUrl
  }

  return `${SITE_URL}${pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`}`
}

export const createMetadata = ({
  canonicalPath = "/",
  category,
  description,
  keywords,
  openGraphAlt = `${SITE_NAME} - Digital Studio`,
  openGraphDescription,
  openGraphImage = DEFAULT_OG_IMAGE_PATH,
  openGraphTitle,
  title,
  twitterDescription,
  twitterImage = DEFAULT_TWITTER_IMAGE_PATH,
  twitterTitle,
}: MetadataOptions): Metadata => {
  const canonicalUrl = toAbsoluteUrl(canonicalPath)

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    robots: DEFAULT_ROBOTS,
    openGraph: {
      type: "website",
      url: canonicalUrl,
      siteName: SITE_NAME,
      title: openGraphTitle ?? title,
      description: openGraphDescription ?? description,
      images: [
        {
          url: toAbsoluteUrl(openGraphImage),
          width: 1200,
          height: 630,
          alt: openGraphAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: twitterTitle ?? openGraphTitle ?? title,
      description: twitterDescription ?? openGraphDescription ?? description,
      images: [toAbsoluteUrl(twitterImage)],
    },
    category,
  }
}

export const createBreadcrumbJsonLd = (items: BreadcrumbItem[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url ?? toAbsoluteUrl(item.path || "/"),
  })),
})

export const createWebPageJsonLd = ({
  description,
  image,
  path = "/",
  title,
  type = "WebPage",
}: {
  description: string
  image?: string
  path?: string
  title: string
  type?: string
}) => ({
  "@context": "https://schema.org",
  "@type": type,
  name: title,
  url: toAbsoluteUrl(path),
  description,
  isPartOf: {
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
  },
  primaryImageOfPage: image
    ? {
        "@type": "ImageObject",
        url: toAbsoluteUrl(image),
      }
    : undefined,
  publisher: {
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: ABSOLUTE_LOGO_URL,
  },
})

export const siteOrganizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: ABSOLUTE_LOGO_URL,
  description: ORGANIZATION_DESCRIPTION,
  telephone: BRAND_PHONE,
  sameAs: SOCIAL_LINKS,
  founder: {
    "@type": "Person",
    name: "Ofir Wainboim",
    jobTitle: "Creative Director & Lead Developer",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: BRAND_CITY,
    addressRegion: BRAND_REGION,
    addressCountry: BRAND_COUNTRY,
  },
}

export const siteWebsiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: SITE_URL,
  name: SITE_NAME,
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/?s={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
}

export const siteProfessionalServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE_NAME,
  url: SITE_URL,
  logo: ABSOLUTE_LOGO_URL,
  image: toAbsoluteUrl(DEFAULT_OG_IMAGE_PATH),
  areaServed: {
    "@type": "City",
    name: BRAND_CITY,
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: BRAND_CITY,
    addressRegion: BRAND_REGION,
    addressCountry: BRAND_COUNTRY,
  },
  telephone: BRAND_PHONE,
  sameAs: SOCIAL_LINKS,
  serviceType: SERVICE_TYPES,
}

export const siteAggregateRatingJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "32",
  },
  sameAs: SOCIAL_LINKS,
}
