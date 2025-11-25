export type WorkCategory = "Websites" | "Social" | "Music" | "Other"

export type WorkProject = {
  title: string
  category: WorkCategory
  year: string
  type: string
  slug: string
  url: string
  description: string
  services: string[]
  images: string[]
  // SEO helpers (used by pages for 100/100 Lighthouse SEO)
  seo?: {
    title?: string
    description?: string
    keywords?: string[]
    ogAlt?: string
  }
}

const SITE_URL = "https://www.waincreative.com"

const workProjects: WorkProject[] = [
  {
    title: "Wain Studio",
    category: "Websites",
    year: "2024",
    type: "Full Website",
    slug: "wainstudio",
    url: "https://wainstudio.com/",
    description:
      "A full-scale studio platform built to express a modern LA identity – bold, cinematic, and meticulously structured. Designed as a living portfolio engine, the site blends motion, clarity, and sharp visual systems to position Wain Studio as a premium creative partner.",
    services: [
      "Brand Identity System",
      "Premium UI/UX Architecture",
      "High-Performance Development",
      "Animated Interactions & Motion Design",
      "Full Launch, Optimization & Publishing"
    ],
    images: [
      "/projects/Wain Studio/wainstudio-1.jpg",
      "/projects/Wain Studio/wainstudio-2.jpg",
      "/projects/Wain Studio/wainstudio-3.jpg",
      "/projects/Wain Studio/wainstudio-4.jpg",
      "/projects/Wain Studio/wainstudio-5.jpg",
      "/projects/Wain Studio/wainstudio-6.jpg",
    ],
    seo: {
      title: "Wain Studio Website | Wain Creative Co",
      description:
        "Premium LA studio website built end-to-end by Wain Creative Co. Full brand system, high-performance Next.js build, and cinematic motion design.",
      keywords: [
        "Wain Studio website",
        "Los Angeles web design",
        "Next.js agency",
        "premium studio site",
        "cinematic website",
      ],
      ogAlt: "Wain Studio premium website preview",
    },
  },
  {
    title: "Shir Amosi",
    category: "Websites",
    year: "2025",
    type: "Full Website",
    slug: "shiramosi",
    url: "https://www.shiramosi.com/",
    description:
      "A clean, atmospheric portfolio built to highlight a creator’s voice through simplicity and refined visual hierarchy. The design emphasizes storytelling, soft motion, and minimal color language to create a calm, high-end browsing experience.",
    services: [
      "UI/UX Redesign",
      "Responsive Grid System",
      "Lightweight Web Development",
      "Visual Language & Brand Cohesion",
      "Navigation Flow Optimization"
    ],
    images: [
      "/projects/shir amosi/shiramosi-1.jpg",
        "/projects/shir amosi/shiramosi-2.jpg",
        "/projects/shir amosi/shiramosi-3.jpg",
        "/projects/shir amosi/shiramosi-4.jpg",
    ],
    seo: {
      title: "Shir Amosi Portfolio Website | Wain Creative Co",
      description:
        "High-end creator portfolio website designed in Los Angeles. Clean grid, refined hierarchy, and smooth narrative flow.",
      keywords: [
        "Shir Amosi website",
        "creator portfolio site",
        "Los Angeles web design",
        "minimal premium website",
      ],
      ogAlt: "Shir Amosi portfolio website preview",
    },
 },
  {
    title: "Silverline Records",
    category: "Websites",
    year: "2025",
    type: "Full Website",
    slug: "silverlinerecords",
    url: "https://silverlinerecords.website/",
    description:
      "A cinematic label website built with a dark, polished aesthetic that reflects the energy of modern music culture. Designed to elevate artists and releases with a bold content layout, dynamic imagery, and a sharp editorial presence.",
    services: [
      "Brand System Development",
      "Cinematic UI/UX",
      "Multi-page Web Experience",
      "Artist/Release Layout Design",
      "High-End Visual Architecture"
    ],
    images: [
      "/projects/silverlinerecords/silverlinerecords-1.jpg",
      "/projects/silverlinerecords/silverlinerecords-2.jpg",
      "/projects/silverlinerecords/silverlinerecords-3.jpg",
      "/projects/silverlinerecords/silverlinerecords-4.jpg",
      "/projects/silverlinerecords/silverlinerecords-5.jpg",
      "/projects/silverlinerecords/silverlinerecords-6.jpg",
    ],
    seo: {
      title: "Silverline Records Website | Wain Creative Co",
      description:
        "Cinematic label website with dark premium aesthetic, editorial layout, and dynamic release presentation.",
      keywords: [
        "Silverline Records website",
        "music label site",
        "cinematic web design",
        "LA creative agency",
      ],
      ogAlt: "Silverline Records label website preview",
    },
  },
  {
    title: "Soundfield",
    category: "Websites",
    year: "2025",
    type: "Full Website",
    slug: "soundfield",
    url: "https://soundfield.website/",
    description:
      "A modern, conversion-driven brand site built with a clean editorial grid and fast-loading architecture. Designed for clarity, credibility, and a premium tech-forward presence that feels both minimal and powerful.",
    services: [
      "UI/UX Framework",
      "Rapid Development",
      "Editorial Layout System",
      "Brand Identity Refinement",
      "High-Performance Optimization"
    ],
    images: [
      "/projects/SOUNDFIELD/SOUNDFIELD-1.jpg",
      "/projects/SOUNDFIELD/SOUNDFIELD-2.jpg",
      "/projects/SOUNDFIELD/SOUNDFIELD-3.jpg",
      "/projects/SOUNDFIELD/SOUNDFIELD-4.jpg",
    ],
    seo: {
      title: "Soundfield Website | Wain Creative Co",
      description:
        "Modern conversion-driven brand website with fast-loading architecture and sharp editorial grid.",
      keywords: [
        "Soundfield website",
        "brand website",
        "conversion focused web design",
        "Los Angeles agency",
      ],
      ogAlt: "Soundfield brand website preview",
    },
  },
]

export const workProjectSlugs = workProjects.map((p) => p.slug)

export const getWorkProjectBySlug = (slug: string) =>
  workProjects.find((p) => p.slug === slug)

export const getWorkProjectIndex = (slug: string) =>
  workProjects.findIndex((p) => p.slug === slug)

export const getWorkProjectOgImage = (slug: string) => {
  const p = getWorkProjectBySlug(slug)
  const first = p?.images?.[0]
  return first ? `${SITE_URL}${first}` : `${SITE_URL}/og-image.jpg`
}

export default workProjects