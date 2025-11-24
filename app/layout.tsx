import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { cn } from "@/lib/utils"
import { Footer } from "@/components/footer"
import { Nav } from "@/components/nav"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  title: "Wain Creative Co – Content Studio",
  description: "Building Digital Experiences for LA's Creators & Brands",
  generator: "v0.app",
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
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          inter.variable,
          "font-sans bg-[#0D0D0D] text-white antialiased overflow-x-hidden selection:bg-pink-500 selection:text-white",
        )}
      >
        <Nav />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
