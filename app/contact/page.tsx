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

const pageTitle = `Contact ${SITE_NAME} | Start Your Project`
const pageDescription =
  "Start your project with Wain Creative Co in Los Angeles. Tell us what you need and get next steps within 24-48 hours."
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
      "We reply within 24-48 hours with next steps, scope, and timing.",
  },
  {
    question: "Do you work with brands outside Los Angeles?",
    answer:
      "Yes. We work remotely with clients across the US and internationally.",
  },
  {
    question: "What details should I include to get an accurate proposal?",
    answer:
      "Share your goals, deliverables, launch date, and budget range.",
  },
  {
    question: "Do you handle strategy, design, build, and content?",
    answer:
      "Yes. We can handle strategy, design, development, and content.",
  },
  {
    question: "Can you support after launch?",
    answer:
      "Yes. Ongoing support is available after launch.",
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
