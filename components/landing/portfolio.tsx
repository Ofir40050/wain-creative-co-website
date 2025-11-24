"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

import workProjects from "../../app/work/projects-data"

const getImageSrc = (image: unknown) => {
  if (typeof image !== "string" || image.trim() === "") return "/placeholder.svg"
  return image.startsWith("/") ? image : `/uploads/${image}`
}

const featuredSlugs = ["wainstudio", "shiramosi", "silverlinerecords"]

const projects = featuredSlugs
  .map((slug) => workProjects.find((p) => p.slug === slug))
  .filter(Boolean)

function ProjectCard({ project, index }: { project: any; index: number }) {
  const images = (project.images || []).map(getImageSrc).slice(0, 3)
  const [hovered, setHovered] = useState(false)
  const [active, setActive] = useState(0)

  useEffect(() => {
    if (!hovered || images.length <= 1) {
      setActive(0)
      return
    }

    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % images.length)
    }, 1100)

    return () => clearInterval(id)
  }, [hovered, images.length])

  return (
    <motion.div
      key={project.title}
      layout
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: "easeOut" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative aspect-[4/5] overflow-hidden bg-neutral-900 rounded-xl border border-white/5 hover:border-white/15 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.6)]"
    >
      <Link href={`/work/${project.slug}`} className="block w-full h-full">
        {/* Image stack with auto-hover preview */}
        <div className="absolute inset-0">
          {(images.length ? images : [getImageSrc(project.images?.[0])]).map((src, i) => (
            <Image
              key={src + i}
              src={src}
              alt={project.title}
              fill
              className={`object-cover transition-opacity duration-700 ${i === active ? "opacity-100" : "opacity-0"}`}
              priority={i === 0}
            />
          ))}
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Info */}
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 translate-y-3 group-hover:translate-y-0 transition-transform duration-500 backdrop-blur-sm">
          <div className="flex justify-between items-end border-b border-white/15 pb-3 mb-2">
            <h3 className="font-bold uppercase tracking-tight text-lg md:text-xl text-white">
              {project.title}
            </h3>
            <span className="text-xs uppercase tracking-[0.3em] text-white/50">
              {project.year}
            </span>
          </div>

          <p className="text-[10px] md:text-xs uppercase tracking-[0.35em] font-bold bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            {project.category}
          </p>
        </div>

        {/* Hover Frame */}
        <div className="absolute inset-3 md:inset-4 border border-white/0 group-hover:border-white/20 transition-all duration-500 scale-95 group-hover:scale-100 pointer-events-none rounded-lg" />
      </Link>
    </motion.div>
  )
}

export function Portfolio() {
  return (
    <section className="relative py-24 md:py-32 bg-[#0D0D0D] px-6 md:px-10 lg:px-16 border-t border-white/5 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none flex justify-center">
        <div className="w-[420px] h-[420px] md:w-[700px] md:h-[700px] bg-purple-500/10 blur-[160px] md:blur-[220px] rounded-full" />
      </div>

      {/* Header */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 gap-6 md:gap-8 animate-[fadeInUp_0.7s_ease-out] relative z-10">
        <div>
          <h2 className="font-extrabold uppercase tracking-tight leading-[0.9] text-4xl md:text-6xl lg:text-7xl mb-3">
            Latest{" "}
            <span className="text-neutral-500">
              Works
            </span>
          </h2>

          <div className="h-px w-24 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 opacity-80" />
        </div>

        <Link href="/work">
          <button className="text-[10px] md:text-xs uppercase tracking-[0.35em] px-6 py-3 md:py-3.5 bg-white/5 border border-white/15 text-white/70 hover:text-white hover:border-white/40 hover:bg-white/10 transition-all rounded-lg backdrop-blur-sm">
            View All Projects
          </button>
        </Link>
      </div>

      {/* Projects Grid */}
      <motion.div
        layout
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 relative z-10"
      >
        {projects.map((project, index) => (
          <ProjectCard 
            key={project.slug} 
            project={project} 
            index={index} 
          />
        ))}
      </motion.div>
    </section>
  )
}