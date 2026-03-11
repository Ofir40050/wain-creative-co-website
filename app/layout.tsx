import type React from "react"
import type { Metadata, Viewport } from "next"
import Script from "next/script"
import { Geist, Geist_Mono, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { JsonLd } from "@/components/seo/json-ld"
import "./globals.css"
import { cn } from "@/lib/utils"
import { Footer } from "@/components/footer"
import { Nav } from "@/components/nav"
import {
  ABSOLUTE_OG_IMAGE_URL,
  BRAND_PHONE,
  DEFAULT_OG_IMAGE_PATH,
  LOGO_PATH,
  SITE_NAME,
  SITE_URL,
  SITE_URL_OBJECT,
} from "@/lib/site-config"
import {
  siteAggregateRatingJsonLd,
  siteOrganizationJsonLd,
  siteProfessionalServiceJsonLd,
  siteWebsiteJsonLd,
} from "@/lib/seo"
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
  metadataBase: SITE_URL_OBJECT,
  title: {
    default: `${SITE_NAME} — LA Web Design & Content Studio`,
    template: `%s - ${SITE_NAME}`,
  },
  description:
    `Premium web design, content systems and brand experiences built in Los Angeles. ${SITE_NAME} helps modern brands grow online.`,
  keywords: [
    SITE_NAME,
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
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
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
  openGraph: {
    title: `${SITE_NAME} - Premium Web & Content Studio`,
    description:
      `Premium websites, content engines, and digital brand systems built in Los Angeles for creators and modern businesses.`,
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: DEFAULT_OG_IMAGE_PATH,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} - Digital Studio`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: "Premium web design and content studio based in Los Angeles.",
    images: [DEFAULT_OG_IMAGE_PATH],
  },
  verification: {
    google: "",
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    title: SITE_NAME,
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
        url: LOGO_PATH,
        type: "image/svg+xml",
      },
    ],
    shortcut: "/favicon-32x32.png",
    apple: "/apple-icon.png",
    other: [
      {
        rel: "mask-icon",
        url: LOGO_PATH,
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
        {/* Performance: critical asset preloads */}
        <link rel="preload" as="image" href="/website-logo.png" fetchPriority="high" />
        <link rel="preload" as="image" href={DEFAULT_OG_IMAGE_PATH} />
        <link rel="preload" as="image" href="/social-banner.jpg" />
        <link rel="preload" as="image" href={LOGO_PATH} type="image/svg+xml" />

        {/* PWA / mobile */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content={SITE_NAME} />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body
        className={cn(
          inter.variable,
          "font-sans bg-[#0D0D0D] text-white antialiased overflow-x-hidden selection:bg-pink-500 selection:text-white",
        )}
      >
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-FQR6DD4W6D" strategy="afterInteractive" />
        <Script
          id="ga-setup"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-FQR6DD4W6D', { page_path: window.location.pathname });
            `,
          }}
        />
        <Script
          id="clarity-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "ubj6cnr06t");
            `,
          }}
        />
        <PWARegister />
        <Nav />
        <JsonLd id="site-organization-jsonld" data={siteOrganizationJsonLd} />
        <JsonLd id="site-website-jsonld" data={siteWebsiteJsonLd} />
        <JsonLd id="site-professional-service-jsonld" data={siteProfessionalServiceJsonLd} />
        <JsonLd id="site-aggregate-rating-jsonld" data={siteAggregateRatingJsonLd} />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
