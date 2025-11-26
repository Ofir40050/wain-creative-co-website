"use client"

import Image from "next/image"

const brands = [
  { name: "Acoustic", href: "https://www.instagram.com/acousticbasalon/", src: "/Logos/acoustic-logo.png" },
  { name: "Next Pro", href: "https://www.instagram.com/nextpronext/", src: "/Logos/Next-pro-logo.png" },
  { name: "Noise", href: "https://www.instagram.com/noise_musicgroup/", src: "/Logos/Noise-logo.png" },
  { name: "Pazam", href: "https://www.instagram.com/pazam_gram/", src: "/Logos/Pazam-logo.png" },
  { name: "Rotca", href: "https://www.instagram.com/rutka_bakery/", src: "/Logos/Rotca-logo.png" },
  { name: "Super Group", href: "https://www.instagram.com/the.super.group/", src: "/Logos/Super-Group-logo.png" },
  { name: "Turkiz", href: "https://www.instagram.com/turkiz_rehitim/", src: "/Logos/turkiz-logo.png" },
  { name: "Wain Studio", href: "https://instagram.com/wainstudio", src: "/Logos/Wain studio-Logo.png" },
]

export function Brands() {
  // משכפל את הרשימה כדי שהלופ יהיה חלק
  const marqueeItems = [...brands, ...brands]

  return (
    <section className="relative py-16 md:py-20 px-6 md:px-10 lg:px-16 bg-[#0D0D0D] overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-8 md:mb-10 flex justify-center text-center">
          <h2 className="text-xs md:text-sm uppercase tracking-[0.32em] text-white/70 inline-block">
            Trusted by brands &amp; creators
          </h2>
        </div>

        <div className="relative overflow-hidden">
          {/* גרדיאנטים בצדדים */}
          <div className="absolute inset-y-0 left-0 w-16 pointer-events-none bg-gradient-to-r from-[#0D0D0D] via-[#0D0D0D]/80 to-transparent" />
          <div className="absolute inset-y-0 right-0 w-16 pointer-events-none bg-gradient-to-l from-[#0D0D0D] via-[#0D0D0D]/80 to-transparent" />

          <div className="relative">
            <div className="logo-marquee flex items-center gap-16 md:gap-24 min-w-max">
              {marqueeItems.map((brand, index) => (
                <a
                  key={`${brand.name}-${index}`}
                  href={brand.href}
                  target="_blank"
                  rel="noreferrer"
                  className="relative flex-shrink-0 logo-marquee-item opacity-60 hover:opacity-90 transition-opacity duration-300 transform-gpu"
                  aria-label={`${brand.name} on Instagram`}
                >
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-20 md:h-20">  
                    <Image
                      src={brand.src}
                      alt={`${brand.name} logo`}
                      fill
                      sizes="800px"
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
