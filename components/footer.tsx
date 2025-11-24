import Image from "next/image"
import Link from "next/link"
import { Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#0D0D0D] border-t border-white/10 px-6 md:px-10 lg:px-16 py-12 md:py-14">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-center justify-between gap-6 md:gap-8">

        {/* Left: Brand */}
        <div className="flex flex-col items-center md:items-start">
          <Link href="/" className="block">
            <Image
              src="/icon.png"
              alt="Wain Creative Co"
              width={220}
              height={68}
              className="h-auto w-[84px] md:w-[90px] lg:w-[96px] opacity-90 hover:opacity-100 transition-opacity"
              priority={false}
            />
          </Link>
          <p className="mt-2 text-white/40 text-[10px] md:text-xs tracking-[0.25em] uppercase text-center md:text-left max-w-[260px]">
            Creative systems built for modern brands.
          </p>
        </div>

        {/* Center: Nav */}
        <nav className="flex flex-wrap md:flex-nowrap justify-center gap-5 md:gap-7 text-[10px] md:text-xs uppercase tracking-[0.3em] text-white/60 whitespace-nowrap">
          <Link href="/work" className="hover:text-white transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-white/70 after:transition-all after:duration-300 hover:after:w-full">
            Work
          </Link>
          <Link href="/services" className="hover:text-white transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-white/70 after:transition-all after:duration-300 hover:after:w-full">
            Services
          </Link>
          <Link href="/about" className="hover:text-white transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-white/70 after:transition-all after:duration-300 hover:after:w-full">
            About
          </Link>
          <Link href="/contact" className="hover:text-white transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-white/70 after:transition-all after:duration-300 hover:after:w-full">
            Contact
          </Link>
        </nav>

        {/* Right: Socials */}
        <div className="flex items-center gap-6">
          <a
            href="https://www.instagram.com/waincreativeco/"
            target="_blank"
            rel="noreferrer"
            className="text-white/60 hover:text-white transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>

          <a
            href="https://www.linkedin.com/in/wainmusic/"
            target="_blank"
            rel="noreferrer"
            className="text-white/60 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>

          <Link
            href="/contact"
            className="hidden md:inline-flex items-center bg-white text-black text-[10px] uppercase tracking-[0.3em] font-bold py-1.5 px-3 rounded-lg transition-all duration-300 hover:opacity-95 hover:-translate-y-[1px] hover:shadow-[0_8px_24px_rgba(255,255,255,0.12)] active:translate-y-0 active:opacity-90"
          >
            Start a project
          </Link>
        </div>
      </div>

      {/* Bottom line */}
      <div className="max-w-6xl mx-auto mt-6 pt-4 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
        <p className="text-white/40 text-[10px] md:text-xs uppercase tracking-[0.35em]">
          © {new Date().getFullYear()} Wain Creative Co.
        </p>

        <p className="text-white/40 text-[10px] md:text-xs uppercase tracking-[0.35em]">
          Built in LA. Designed to win.
        </p>
      </div>
    </footer>
  )
}