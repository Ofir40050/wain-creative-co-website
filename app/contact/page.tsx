import type { Metadata } from "next"
import { JsonLd } from "@/components/seo/json-ld"
import { ContactPageContent } from "@/components/contact/contact-page-content"
import {
  ABSOLUTE_LOGO_URL,
  BRAND_CITY,
  BRAND_COUNTRY,
  BRAND_EMAIL,
  BRAND_PHONE,
  BRAND_REGION,
  SITE_NAME,
  SITE_URL,
  SOCIAL_LINKS,
} from "@/lib/site-config"
import { createBreadcrumbJsonLd, createMetadata } from "@/lib/seo"

const PAGE_URL = `${SITE_URL}/contact`

const pageTitle = `Contact ${SITE_NAME} | Start Your Next Launch`
const pageDescription =
  "Start your next launch with Wain Creative Co in Los Angeles. Tell us about your mission and get a strategic scope and timeline within 24 hours."
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
    question: "How fast can we expect results?",
    answer:
      "We focus on immediate impact and long-term authority. Web projects prioritize speed and conversion lift, while social systems apply proven organic growth frameworks. Strategy starts on day one, with measurable momentum typically building within 30 to 60 days.",
  },
  {
    question: "Do you work with brands outside of Los Angeles?",
    answer:
      "Yes. We are based in Los Angeles, but built to work globally. Our remote-first execution systems make collaboration seamless across the US and internationally.",
  },
  {
    question: 'What makes WAIN\'s production "Studio-Grade"?',
    answer:
      "Our founder's background in professional sound engineering and music production brings elite sonic and visual fidelity to every asset. We use professional tools and post-production workflows to create content that feels expensive and performs.",
  },
  {
    question: "How involved do I need to be in the process?",
    answer:
      "We value your vision and protect your time. Our process is built for elite execution, so we handle the heavy lifting from strategy to post-production while keeping you aligned through focused briefs.",
  },
  {
    question: "Do you handle both organic growth and paid advertising?",
    answer:
      "Yes. We offer full-stack digital management, including organic community building, Meta Ads, Google Ads, and lead generation systems designed to scale efficiently.",
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
      name: SITE_NAME,
      url: SITE_URL,
      logo: ABSOLUTE_LOGO_URL,
      sameAs: SOCIAL_LINKS,
      contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: BRAND_EMAIL,
        availableLanguage: ["English"],
        areaServed: "US",
      },
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        telephone: BRAND_PHONE,
        availableLanguage: ["English"],
        areaServed: "US",
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: BRAND_CITY,
      addressRegion: BRAND_REGION,
      addressCountry: BRAND_COUNTRY,
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

const breadcrumbJsonLd = createBreadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" },
])

export const metadata: Metadata = createMetadata({
  title: pageTitle,
  description: pageDescription,
  keywords: pageKeywords,
  canonicalPath: "/contact",
  category: "Contact Page",
  openGraphAlt: "Wain Creative Co - Contact",
})

export default function ContactPage() {
  return (
    <main className="relative min-h-screen pt-28 md:pt-32 pb-24 px-6 md:px-10 lg:px-16 bg-[#0D0D0D] overflow-hidden">
      <JsonLd id="contact-jsonld" data={contactJsonLd} />
      <JsonLd id="contact-faq-jsonld" data={faqJsonLd} />
      <JsonLd id="contact-breadcrumbs-jsonld" data={breadcrumbJsonLd} />

      <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-to-br from-purple-600/25 via-pink-500/15 to-orange-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/3 right-[-120px] h-[420px] w-[420px] rounded-full bg-gradient-to-br from-orange-500/20 via-pink-500/10 to-purple-600/20 blur-[110px]" />

      <ContactPageContent faqs={faqs} />
    </main>
  )
}
