"use client"

import { useRef, useState } from "react"
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion"
import { Play } from "lucide-react"

export function Showreel() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isOpen, setIsOpen] = useState(false)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.94, 1])

  return (
    <section
      ref={containerRef}
      className="relative border-y border-white/10 bg-[#0D0D0D] overflow-hidden"
      aria-label="Showreel"
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none flex justify-center">
        <div className="w-[420px] h-[420px] md:w-[700px] md:h-[700px] bg-pink-500/10 blur-[160px] md:blur-[220px] rounded-full" />
      </div>
      <div onClick={() => setIsOpen(true)} className="relative w-full h-[55vh] md:h-[80vh] cursor-pointer group overflow-hidden">

        {/* Video Layer */}
        <motion.div
          style={{ scale }}
          className="absolute inset-0 bg-neutral-900 flex items-center justify-center"
        >
          {/* Video Loop (placeholder until you swap) */}
          <video
            className="absolute inset-0 w-full h-full object-cover opacity-70"
            src="/showreel-placeholder.mp4"
            poster="/showreel-poster.jpg"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />

          {/* Premium vignette + spotlight */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),rgba(13,13,13,0.9)_60%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,13,13,0.85),rgba(13,13,13,0.2),rgba(13,13,13,0.85))]" />

          {/* Overlay copy + CTA */}
          <div className="relative z-10 flex flex-col items-center text-center px-6">
            <p className="text-[10px] md:text-xs uppercase tracking-[0.35em] text-white/60 mb-3 animate-[fadeIn_0.6s_ease-out_0.1s_both]">
              Showreel
            </p>
            <h3 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight leading-[0.95] mb-3 animate-[fadeInUp_0.6s_ease-out_0.2s_both]">
              Watch the Work
            </h3>
            <p className="text-white/70 text-sm md:text-lg max-w-2xl mb-8 animate-[fadeInUp_0.6s_ease-out_0.3s_both]">
              30 seconds. Full vibe. Websites, content, and launches built for momentum.
            </p>

            <div className="group/play relative flex flex-col items-center gap-4 animate-[fadeInUp_0.6s_ease-out_0.4s_both]">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 blur-xl opacity-40 group-hover/play:opacity-70 transition-opacity" />
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-full border border-white/30 bg-black/30 backdrop-blur-sm flex items-center justify-center transition-transform duration-700 group-hover/play:scale-110 group-hover/play:border-white">
                  <Play className="w-7 h-7 md:w-8 md:h-8 text-white fill-white" />
                </div>
              </div>
              <p className="text-xs uppercase tracking-[0.25em] text-white/70 group-hover/play:text-white transition-colors">
                Play Showreel
              </p>
            </div>

            <p className="mt-10 text-[10px] md:text-xs uppercase tracking-[0.3em] text-white/50">
              Tap to play full reel
            </p>
          </div>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] md:text-xs uppercase tracking-[0.3em] text-white/50">
            Scroll to latest work ↓
          </div>
        </motion.div>

        {/* Decorative lines */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            aria-modal="true"
            role="dialog"
          >
            <motion.div
              className="relative w-full max-w-5xl aspect-video bg-black border border-white/10"
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.98, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <video
                className="w-full h-full object-cover"
                src="/showreel-placeholder.mp4"
                poster="/showreel-poster.jpg"
                controls
                autoPlay
                playsInline
              />
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-3 right-3 md:top-4 md:right-4 text-white/70 hover:text-white text-xs uppercase tracking-[0.3em]"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}