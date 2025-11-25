"use client"

import { useState, useEffect, useMemo } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { trackEvent, sendGtagEvent } from "@/lib/analytics"

export function Nav() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const navItems = useMemo(() => [
    { label: "Work", href: "/work" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ], [])

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      {/* HEADER */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#0D0D0D]/92 backdrop-blur-md py-3 border-b border-white/10"
            : "bg-transparent py-5"
        }`}
      >
        <div className="relative max-w-6xl mx-auto px-6 md:px-10 lg:px-16 flex items-center justify-between">
          <div className="pointer-events-none absolute -top-24 left-1/2 h-[260px] w-[260px] -translate-x-1/2 rounded-full bg-gradient-to-br from-purple-600/20 via-pink-500/10 to-orange-500/10 blur-[90px]" />

          {/* Logo */}
          <Link href="/" aria-label="Wain Creative Co home" className="flex items-center">
            <Image
              src="/website-logo.png"
              alt="Wain Creative Co"
              width={170}
              height={38}
              className="h-9 md:h-10 w-auto opacity-95 hover:opacity-100 transition-opacity"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href))
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-[10px] md:text-xs uppercase tracking-[0.3em] transition-all relative group ${
                    isActive ? "text-white" : "text-white/60 hover:text-white"
                  }`}
                >
                  {item.label}
                  <span className={`absolute -bottom-1 left-0 h-px bg-gradient-to-r from-orange-500 to-purple-600 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`} />
                </Link>
              )
            })}

            <Link href="/contact" className="ml-2">
              <button
                onClick={() => {
                  trackEvent("cta_click", { location: "nav_desktop_start_project" })
                  sendGtagEvent("click_book_call", { page: window.location.pathname })
                }}
                className="px-5 py-2.5 text-[10px] md:text-xs uppercase font-bold tracking-[0.25em] rounded-lg bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-black hover:opacity-95 hover:-translate-y-[1px] hover:shadow-[0_8px_24px_rgba(255,255,255,0.12)] transition-all duration-300"
              >
                Start Project
              </button>
            </Link>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-white/90 hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-8 h-8" />
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-[#0D0D0D]/98 backdrop-blur-xl flex flex-col items-center justify-center px-8"
          >
            <button
              className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X className="w-8 h-8" />
            </button>

            <nav className="flex flex-col items-center gap-8">
              {navItems.map((item, i) => {
                const isActive = pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href))
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.04 * i, duration: 0.35 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`text-3xl md:text-4xl font-extrabold uppercase tracking-tight transition-colors ${
                        isActive ? "text-white" : "text-white/85 hover:text-pink-500"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                )
              })}

              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <button
                  onClick={() => {
                    trackEvent("cta_click", { location: "nav_mobile_start_project" })
                    sendGtagEvent("click_book_call", { page: window.location.pathname })
                  }}
                  className="mt-6 px-8 py-3 text-base font-bold uppercase tracking-[0.2em] rounded-lg bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-black hover:opacity-95 transition-all"
                >
                  Start Project
                </button>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
