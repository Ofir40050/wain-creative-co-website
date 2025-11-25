"use client"

import Image from "next/image"

const brands = [
  { name: "Acoustic", href: "https://instagram.com/acoustic", src: "/Logos/acoustic-logo.png" },
  { name: "Next Pro", href: "https://instagram.com/nextpro", src: "/Logos/Next-pro-logo.png" },
  { name: "Noise", href: "https://instagram.com/noise", src: "/Logos/Noise-logo.png" },
  { name: "Pazam", href: "https://instagram.com/pazam", src: "/Logos/Pazam-logo.png" },
  { name: "Rotca", href: "https://instagram.com/rotca", src: "/Logos/Rotca-logo.png" },
  { name: "Super Group", href: "https://instagram.com/supergroup", src: "/Logos/Super-Group-logo.png" },
  { name: "Turkiz", href: "https://instagram.com/turkiz", src: "/Logos/turkiz-logo.png" },
  { name: "Wain Studio", href: "https://instagram.com/wainstudio", src: "/Logos/Wain studio-Logo.png" },
]

export function Brands() {
  const marqueeItems = [...brands, ...brands]

  return (
    <section className="relative py-16 md:py-20 px-6 md:px-10 lg:px-16 bg-[#0D0D0D] overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-8 md:mb-10">
          <h2 className="text-xs md:text-sm uppercase tracking-[0.32em] text-white/70">
            Trusted by brands &amp; creators
          </h2>
        </div>

        <div className="relative overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-16 pointer-events-none bg-gradient-to-r from-[#0D0D0D] via-[#0D0D0D]/80 to-transparent" />
          <div className="absolute inset-y-0 right-0 w-16 pointer-events-none bg-gradient-to-l from-[#0D0D0D] via-[#0D0D0D]/80 to-transparent" />

          <div className="relative flex">
            <div className="logo-marquee flex items-center gap-10 md:gap-14 min-w-max">
              {marqueeItems.map((brand, index) => (
                <a
                  key={`${brand.name}-${index}`}
                  href={brand.href}
                  target="_blank"
                  rel="noreferrer"
                  className="relative flex-shrink-0 logo-marquee-item"
                  aria-label={`${brand.name} on Instagram`}
                >
                  <div className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20">
                    <Image
                      src={brand.src}
                      alt={`${brand.name} logo`}
                      fill
                      sizes="120px"
                      className="object-contain drop-shadow-[0_10px_25px_rgba(0,0,0,0.55)]"
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
