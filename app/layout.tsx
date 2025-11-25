import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { cn } from "@/lib/utils"
import { Footer } from "@/components/footer"
import { Nav } from "@/components/nav"
import PWARegister from "@/components/pwa-register"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0D0D0D",
  colorScheme: "dark",
  viewportFit: "cover",
}

export const metadata: Metadata = {
  metadataBase: new URL("https://waincreative.com"),
  title: {
    default: "Wain Creative Co - Premium Web Design & Content Studio in Los Angeles",
    template: "%s - Wain Creative Co",
  },
  description:
    "Wain Creative Co is a Los Angeles-based creative studio specializing in premium websites, content systems, social media strategy, and high-end digital brand experiences for creators and businesses.",
  keywords: [
    "Wain Creative Co",
    "web design Los Angeles",
    "Los Angeles web developer",
    "creative agency LA",
    "content studio Los Angeles",
    "social media management LA",
    "Next.js agency",
    "premium website design",
    "brand identity studio",
    "digital agency for creators",
  ],
  applicationName: "Wain Creative Co",
  authors: [{ name: "Wain Creative Co" }],
  creator: "Wain Creative Co",
  publisher: "Wain Creative Co",
  category: "Creative Agency",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0D0D0D" },
    { media: "(prefers-color-scheme: dark)", color: "#0D0D0D" },
  ],
  openGraph: {
    title: "Wain Creative Co - Premium Web & Content Studio",
    description:
      "Premium websites, content engines, and digital brand systems built in Los Angeles for creators and modern businesses.",
    url: "https://waincreative.com",
    siteName: "Wain Creative Co",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Wain Creative Co - Digital Studio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wain Creative Co",
    description: "Premium web design and content studio based in Los Angeles.",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "",
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    title: "Wain Creative Co",
    statusBarStyle: "black-translucent",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/logo.svg",
        type: "image/svg+xml",
      },
    ],
    shortcut: "/favicon-32x32.png",
    apple: "/apple-icon.png",
    other: [
      {
        rel: "mask-icon",
        url: "/logo.svg",
        color: "#0D0D0D",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Wain Creative Co" />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body
        className={cn(
          inter.variable,
          "font-sans bg-[#0D0D0D] text-white antialiased overflow-x-hidden selection:bg-pink-500 selection:text-white",
        )}
      >
        <PWARegister />
        <Nav />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Wain Creative Co",
              url: "https://waincreative.com",
              logo: "https://waincreative.com/logo.svg",
              description:
                "A premium Los Angeles creative studio specializing in high-end web design, content production, social media systems, and digital brand strategy.",
              telephone: "+1-213-589-5458",
              sameAs: [
                "https://www.instagram.com/waincreativeco/",
                "https://www.linkedin.com/in/wainmusic/",
              ],
              founder: {
                "@type": "Person",
                name: "Ofir Wainboim",
                jobTitle: "Creative Director & Lead Developer",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Los Angeles",
                addressRegion: "CA",
                addressCountry: "US",
              },
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              url: "https://waincreative.com",
              name: "Wain Creative Co",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://waincreative.com/?s={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Wain Creative Co",
              url: "https://waincreative.com",
              logo: "https://waincreative.com/logo.svg",
              image: "https://waincreative.com/og-image.jpg",
              areaServed: {
                "@type": "City",
                name: "Los Angeles",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Los Angeles",
                addressRegion: "CA",
                addressCountry: "US",
              },
              telephone: "+1-213-589-5458",
              sameAs: [
                "https://www.instagram.com/waincreativeco/",
                "https://www.linkedin.com/in/wainmusic/",
              ],
              serviceType: [
                "Web Design",
                "Web Development",
                "Social Media Management",
                "Content Strategy",
                "Video Editing",
                "Creator Services",
              ],
            }),
          }}
        />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
