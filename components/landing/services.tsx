"use client"

import { motion } from "framer-motion"
import { Globe, Video, Music, Smartphone } from "lucide-react"
import Link from "next/link"

const services = [
  {
    title: "Web Design",
    description: "Premium websites for creators and small businesses, fast, modern, mobile-first.",
    icon: Globe,
    gradient: "from-orange-500 to-pink-500",
    id: "web-design",
  },
  {
    title: "Social & Content",
    description: "30-day content systems and short-form strategy built for rapid social growth.",
    icon: Smartphone,
    gradient: "from-pink-500 to-purple-500",
    id: "social-content",
  },
  {
    title: "Video Editing",
    description: "High-retention short-form edits with clean pacing, color, and motion for viral performance.",
    icon: Video,
    gradient: "from-purple-500 to-indigo-500",
    id: "video-editing",
  },
  {
    title: "Artist Services",
    description: "EPKs, release pages, visuals, and creative direction to launch artists with momentum.",
    icon: Music,
    gradient: "from-indigo-500 to-blue-500",
    id: "artist-services",
  },
]

export function Services() {
  return (
    <section className="relative py-24 md:py-32 px-6 md:px-10 lg:px-16 bg-[#0D0D0D] border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none flex justify-center"><div className="w-[420px] h-[420px] md:w-[600px] md:h-[600px] bg-purple-500/10 blur-[140px] md:blur-[200px] rounded-full" /></div>
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-20 gap-8 animate-[fadeInUp_0.7s_ease-out]">
          <h2 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight leading-[0.9]">
            Our <span className="text-neutral-500">Services</span>
          </h2>

          <p className="text-white/60 text-[11px] md:text-xs uppercase tracking-[0.3em] border-l border-white/15 pl-4 max-w-sm leading-relaxed">
            End-to-end creative and digital execution for brands that want to win online.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-white/10">
          {services.map((service, index) => (
            <Link key={service.id} href={`/services#${service.id}`} className="group block">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
                className="relative p-10 border-r border-b border-white/10 min-h-[320px] flex flex-col justify-between hover:bg-white/[0.04] transition-all duration-300 hover:scale-[1.02]"
              >

                {/* Icon + Title */}
                <div className="space-y-5 min-h-[140px] md:min-h-[150px] flex flex-col">
                  <div
                    className={`w-14 h-14 flex items-center justify-center bg-gradient-to-br ${service.gradient} rounded-lg opacity-80 group-hover:opacity-100 shadow-[0_0_20px_rgba(255,0,90,0.25)] transition-all`}
                  >
                    <service.icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight text-white group-hover:text-pink-400 transition-colors leading-tight min-h-[48px] md:min-h-[56px] flex items-end">
                    {service.title}
                  </h3>
                </div>

                {/* Divider + Description */}
                <div className="space-y-4">
                  <div className="w-10 h-[1px] bg-white/10 group-hover:w-full group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:via-pink-500 group-hover:to-purple-600 transition-all duration-500" />

                  <p className="text-[13px] md:text-sm text-white/70 leading-relaxed font-light max-w-full min-h-[72px] md:min-h-[80px]">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}