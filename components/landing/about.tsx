"use client"

import { motion, useReducedMotion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export function About() {
  const reduceMotion = useReducedMotion()

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-24 md:py-32 bg-[#0D0D0D] px-6 md:px-10 lg:px-16"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* LEFT COLUMN */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, x: -20 }}
          whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-10 flex flex-col items-center md:items-start text-center md:text-left"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-white/50">
            Who We Are
          </p>

          {/* HEADLINE */}
          <h2
            id="about-heading"
            className="font-bold uppercase tracking-tight leading-[0.95] text-4xl md:text-5xl lg:text-6xl"
          >
            Designed for{" "}
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Impact
            </span>
            .<br />
            Built for{" "}
            <span className="text-white">Growth.</span>
          </h2>

          {/* BODY */}
          <div className="space-y-8 text-white/70 leading-relaxed text-base md:text-lg max-w-xl mx-auto md:mx-0">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">What we do</p>
              <p>
                Wain Creative Co blends design, storytelling, and sharp digital strategy to build brands that move people.
                We focus on clarity, motion, and premium execution.
              </p>
            </div>

            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">Why it works</p>
              <p>
                We build digital ecosystems that look high-end and perform with purpose - websites, content, and social systems built as one machine.
              </p>
            </div>

            <Link href="/about" className="inline-block pt-2">
              <span className="text-white text-xs uppercase tracking-[0.3em] border-b border-white/30 pb-1 hover:border-white hover:text-pink-500 transition-all">
                Read Our Story
              </span>
            </Link>
          </div>

          {/* STATS */}
          <div className="pt-10 border-t border-white/10">
            <dl className="flex items-start justify-between gap-4 md:gap-8 text-center md:text-left px-1">
              <div className="flex-1">
                <dt className="sr-only">Projects delivered</dt>
                <dd className="font-bold text-white text-2xl md:text-4xl mb-2">50+</dd>
                <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-white/50">Projects Delivered</p>
              </div>
              <div className="flex-1">
                <dt className="sr-only">Client satisfaction</dt>
                <dd className="font-bold text-white text-2xl md:text-4xl mb-2">100%</dd>
                <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-white/50">Client Satisfaction</p>
              </div>
              <div className="flex-1">
                <dt className="sr-only">Location</dt>
                <dd className="font-bold text-white text-2xl md:text-4xl mb-2">LA</dd>
                <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-white/50">Based, Global Reach</p>
              </div>
            </dl>
          </div>
        </motion.div>

        {/* RIGHT COLUMN */}
        <motion.div
          className="relative h-[380px] md:h-[520px] w-full"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
          whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="absolute inset-0 bg-neutral-900 z-10">
            <Image
              src="/Wain/wain.webp"
              alt="Wain Creative Co studio aesthetic in Los Angeles"
              fill
              priority={false}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0D0D0D] via-transparent to-transparent" />
          </div>

          {/* Decorative Corners */}
          <div className="absolute -top-4 -right-4 w-24 h-24 border-r border-t border-white/20 z-20" />
          <div className="absolute -bottom-4 -left-4 w-24 h-24 border-l border-b border-white/20 z-20" />
        </motion.div>
      </div>
    </section>
  )
}
