"use client"

import { motion, useReducedMotion } from "framer-motion"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/shared/button"
import { trackEvent, sendGtagEvent } from "@/lib/analytics"

export function Hero() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden pt-28 md:pt-32 pb-20 bg-[#0D0D0D]">
      <div className="absolute inset-0 pointer-events-none flex justify-center"><div className="w-[600px] h-[600px] md:w-[900px] md:h-[900px] bg-pink-500/10 blur-[180px] md:blur-[260px] rounded-full" /></div>
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,128,0.08)_0%,rgba(13,13,13,1)_70%)] pointer-events-none" />

      {/* Content */}
      <div className="z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10 md:gap-14">
        {/* Left Column: Logo */}
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, x: -20, scale: 0.96 }}
          animate={reduceMotion ? undefined : { opacity: 1, x: 0, scale: 1 }}
          transition={reduceMotion ? undefined : { duration: 0.8 }}
          className="flex-shrink-0"
        >
          <Image
            src="/Lead%20Logo%20-%20B%20N%20BACK.png"
            alt="Wain Creative Co"
            width={800}
            height={400}
            className="w-[260px] md:w-[360px] lg:w-[440px] h-auto"
            priority
          />
        </motion.div>

        {/* Right Column: Text */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-xl mt-6 md:mt-8">
          <motion.h1
          className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight uppercase leading-[0.9] mb-6 drop-shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
          initial={reduceMotion ? undefined : { opacity: 0, y: 20 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={reduceMotion ? undefined : { duration: 0.8, delay: 0.2 }}
        >
            Where ideas become<br />
            Digital presence<br />
            <span className="text-gradient">Built for LA&apos;s creators</span>
          </motion.h1>

          <motion.p
            className="text-xs md:text-base text-white/70 font-light mb-10 max-w-md leading-relaxed"
            initial={reduceMotion ? undefined : { opacity: 0, y: 20 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={reduceMotion ? undefined : { duration: 0.8, delay: 0.4 }}
          >
            Design-forward websites, thoughtful content, and seamless digital systems, crafted to feel as good as they look.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto mb-8 md:mb-10"
            initial={reduceMotion ? undefined : { opacity: 0, y: 20 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={reduceMotion ? undefined : { duration: 0.8, delay: 0.6 }}
          >
            <Button
              intent="book-call"
              href="/contact"
              onClick={() => {
                trackEvent("cta_click", { action: "book_call", location: "hero" })
                sendGtagEvent("click_book_call", { page: window.location.pathname })
              }}
              className="w-full sm:w-auto"
            />

            <Button
              intent="view-work"
              href="/work"
              variant="secondary"
              icon={<ArrowRight className="w-4 h-4" />}
              onClick={() => {
                trackEvent("cta_click", { action: "view_work", location: "hero" })
                sendGtagEvent("click_view_work", { page: window.location.pathname })
              }}
              className="w-full sm:w-auto"
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="w-full flex justify-center">
        <motion.div
          className="mt-8 md:mt-10 flex flex-col items-center gap-2 text-white/50 text-[10px] md:text-xs uppercase tracking-[0.35em] z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          Scroll
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
        </motion.div>
      </div>
    </section>
  )
}
