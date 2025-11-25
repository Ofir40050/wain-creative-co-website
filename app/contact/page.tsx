import type { Metadata } from "next"
import Script from "next/script"
import { ContactPageContent } from "@/components/contact/contact-page-content"

const SITE_URL = "https://www.waincreative.com"
const PAGE_URL = `${SITE_URL}/contact`
const OG_IMAGE = `${SITE_URL}/og-image.jpg`
const TW_IMAGE = `${SITE_URL}/social-banner.jpg`

const pageTitle = "Contact Wain Creative Co | Start Your Project"
const pageDescription =
  "Start your project with Wain Creative Co in Los Angeles. Tell us what you’re building and get a clear plan, timeline, and next steps within 24-48 hours."
const pageKeywords = [
  "Wain Creative Co contact",
  "Los Angeles web design studio",
  "creative agency LA contact",
  "social media management Los Angeles",
  "content studio LA",
  "start a project",
]

const faqs = [
  {
    question: "How fast will you respond after I submit?",
    answer:
      "We review every inquiry within 24-48 hours and reply with a short Loom or written plan outlining scope, timeline, and next steps.",
  },
  {
    question: "Do you work with brands outside Los Angeles?",
    answer:
      "Yes. While we are based in Los Angeles, we work with US and international clients remotely using async updates, live workshops, and clear milestones.",
  },
  {
    question: "What details should I include to get an accurate proposal?",
    answer:
      "Share your goals, required pages or deliverables, launch date, and budget range. Links to inspiration or existing assets help us scope faster.",
  },
  {
    question: "Do you handle strategy, design, build, and content?",
    answer:
      "Yes. We align strategy, UX/UI design, Next.js development, and content systems so your launch feels premium and performs across web and social.",
  },
  {
    question: "Can you support after launch?",
    answer:
      "We offer retainers for optimization, new pages, SEO improvements, and monthly content support so your site keeps improving post-launch.",
  },
]

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: pageTitle,
  url: PAGE_URL,
  description: pageDescription,
  mainEntity: {
    "@type": "Organization",
    name: "Wain Creative Co",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.svg`,
    sameAs: [
      "https://www.instagram.com/waincreativeco/",
      "https://www.linkedin.com/in/wainmusic/",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: "contact@waincreative.com",
        availableLanguage: ["English"],
        areaServed: "US",
      },
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        telephone: "+1-213-589-5458",
        availableLanguage: ["English"],
        areaServed: "US",
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Los Angeles",
      addressRegion: "CA",
      addressCountry: "US",
    },
  },
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
}

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
      name: "Contact",
      item: PAGE_URL,
    },
  ],
}

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
        alt: "Wain Creative Co - Contact",
      },
      {
        url: TW_IMAGE,
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
  category: "Contact Page",
}

export default function ContactPage() {
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
        name: "Contact",
        item: PAGE_URL,
      },
    ],
  }

  return (
    <main className="relative min-h-screen pt-28 md:pt-32 pb-24 px-6 md:px-10 lg:px-16 bg-[#0D0D0D] overflow-hidden">
      <Script
        id="contact-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      <Script
        id="contact-faq-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Script
        id="contact-breadcrumbs-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-to-br from-purple-600/25 via-pink-500/15 to-orange-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/3 right-[-120px] h-[420px] w-[420px] rounded-full bg-gradient-to-br from-orange-500/20 via-pink-500/10 to-purple-600/20 blur-[110px]" />

      <ContactPageContent faqs={faqs} />
    </main>
  )
}
