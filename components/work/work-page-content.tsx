"use client"

import { useMemo, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import type { WorkProject } from "@/app/work/projects-data"
import { trackEvent } from "@/lib/analytics"

type CategoryFilter = WorkProject["category"] | "All"

type WorkPageContentProps = {
  projects: WorkProject[]
}

const getPreviewImage = (project: WorkProject) => {
  const src = project?.images?.[0] || "/placeholder.svg"
  const withSlash = src.startsWith("/") ? src : `/${src}`
  return withSlash.replace(/ /g, "%20")
}

const getSecondaryPreviewImage = (project: WorkProject) => {
  const src = project?.images?.[1]
  if (!src) return null
  const withSlash = src.startsWith("/") ? src : `/${src}`
  return withSlash.replace(/ /g, "%20")
}

export function WorkPageContent({ projects }: WorkPageContentProps) {
  const categories = useMemo<CategoryFilter[]>(() => {
    const unique = Array.from(new Set(projects.map((p) => p.category)))
    return ["All", ...unique]
  }, [projects])

  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("All")

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects
    return projects.filter((p) => p.category === activeCategory)
  }, [activeCategory, projects])

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-16">
        <div>
          <p className="text-sm uppercase tracking-[0.18em] text-white/60 mb-4 leading-[1.45]">
            Portfolio
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight leading-[0.9]">
            Selected <br />
            <span className="text-white/40">Works</span>
          </h1>

          <div className="mt-6 h-px w-40 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600" />

          <p className="mt-6 text-sm md:text-base text-white/65 max-w-xl leading-relaxed">
            A focused selection of real client websites crafted for modern brands, creators, and businesses in Los Angeles and beyond.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 lg:static sticky top-20 z-20 backdrop-blur-md bg-black/30 py-3 px-2 -mx-2 border border-white/10 lg:border-0 lg:bg-transparent lg:backdrop-blur-0 lg:py-0 lg:px-0 lg:mx-0">
          {categories.map((cat) => {
            const isActive = activeCategory === cat
            return (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat)
                  trackEvent("work_filter_change", { category: cat })
                }}
                className={[
                  "text-xs uppercase tracking-[0.18em] px-4 md:px-5 py-2.5 md:py-3 border transition-all duration-300",
                  "focus:outline-none focus:ring-1 focus:ring-white/40",
                  isActive
                    ? "border-white text-white bg-white/8"
                    : "border-white/15 text-white/70 hover:text-white hover:border-white/50 hover:bg-white/[0.04]",
                ].join(" ")}
                aria-pressed={isActive}
              >
                {cat}
              </button>
            )
          })}
        </div>
      </div>

      {/* Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.article
              layout
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              key={project.slug}
              className="group relative aspect-[4/5] overflow-hidden bg-neutral-950 border border-white/10 hover:border-white/25 transition-all cursor-pointer active:scale-[0.99] active:border-white/40 focus-within:border-white/35"
            >
              <Link href={`/work/${project.slug}`} aria-label={`View case study: ${project.title}`} className="block w-full h-full">
                <Image
                  src={getPreviewImage(project)}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.05] opacity-80 group-hover:opacity-0"
                />

                {getSecondaryPreviewImage(project) && (
                  <Image
                    src={getSecondaryPreviewImage(project) as string}
                    alt={`${project.title} secondary preview`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  />
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Bottom content */}
                <div className="absolute bottom-0 left-0 w-full p-6 md:p-7 translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex justify-between items-end border-b border-white/15 pb-3 mb-2">
                    <h3 className="text-lg md:text-xl font-bold uppercase tracking-tight leading-tight">
                      {project.title}
                    </h3>
                    <div className="flex items-end gap-2">
                      {project.type && (
                        <span className="text-xs uppercase tracking-[0.18em] text-white/60 bg-white/5 border border-white/10 px-2 py-1">
                          {project.type}
                        </span>
                      )}
                      <span className="text-xs text-white/65 tracking-[0.12em] uppercase">
                        {project.year}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs uppercase tracking-[0.18em] font-semibold">
                    <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                      {project.category}
                    </span>
                  </p>
                  <p className="mt-2 text-xs md:text-sm text-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    View Case
                  </p>
                </div>

                {/* Sharp hover frame */}
                <div className="absolute inset-3 border border-white/0 group-hover:border-white/20 transition-all duration-500 pointer-events-none shadow-[0_0_0_0_rgba(255,255,255,0)] group-hover:shadow-[0_0_30px_rgba(255,255,255,0.08)]" />
              </Link>
            </motion.article>
          ))}
          {filteredProjects.length === 0 && (
            <div className="col-span-full border border-white/10 bg-neutral-950 p-10 md:p-14 text-center">
              <h4 className="font-bold uppercase tracking-tight text-lg md:text-xl mb-2 text-white">
                New work dropping soon
              </h4>
              <p className="text-white/60 text-sm md:text-base mb-6">
                We’re currently building the next launches. Check back shortly.
              </p>
              <button
                onClick={() => setActiveCategory("All")}
                className="text-[10px] md:text-xs uppercase tracking-[0.3em] px-5 py-3 border transition-all duration-300 border-white/20 text-white/70 hover:text-white hover:border-white/50 hover:bg-white/[0.04]"
              >
                Back to All
              </button>
            </div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
