import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import workProjects from "@/app/work/projects-data"
import type { Metadata } from "next"
import { TrackedLink } from "@/components/tracking/tracked-link"

type Project = (typeof workProjects)[number]

const SITE_URL = "https://www.waincreative.com"

const getProjectData = (slug: string): Project | null => {
  return workProjects.find((p) => p.slug === slug) ?? null
}

export async function generateStaticParams() {
  return workProjects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const project = getProjectData(params.slug)

  if (!project) {
    return {
      title: "Project Not Found | Wain Creative Co",
      description: "This project hasn’t been published yet.",
      robots: { index: false, follow: false },
    }
  }

  const baseTitle = project.seo?.title ?? `${project.title} | Work | Wain Creative Co`
  const baseDescription = project.seo?.description ?? project.description
  const keywords = project.seo?.keywords
  const url = `${SITE_URL}/work/${project.slug}`
  const images = (project.images ?? []).filter(Boolean).map((img) => `${SITE_URL}${img}`)

  return {
    title: baseTitle,
    description: baseDescription,
    alternates: { canonical: url },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      type: "website",
      siteName: "Wain Creative Co",
      title: baseTitle,
      description: baseDescription,
      url,
      images: images.length ? images : [`${SITE_URL}/og-image.jpg`],
    },
    twitter: {
      card: "summary_large_image",
      title: baseTitle,
      description: baseDescription,
      images: images.length ? images : [`${SITE_URL}/social-banner.jpg`],
    },
  }
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProjectData(slug)
  if (!project) {
    return (
      <main className="min-h-screen pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <Link href="/work" className="text-sm uppercase tracking-widest text-neutral-500 hover:text-white transition-colors">
            Back to Work
          </Link>
          <h1 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mt-10">Project not found</h1>
          <p className="text-white/60 mt-4">This project hasn’t been published yet.</p>
        </div>
      </main>
    )
  }

  const images = (project.images ?? []).filter(Boolean)
  const heroImage = images[0] ?? null
  const currentIndex = workProjects.findIndex((p) => p.slug === slug)
  const nextProject = currentIndex >= 0 ? workProjects[(currentIndex + 1) % workProjects.length] : null

  const pageUrl = `${SITE_URL}/work/${project.slug}`
  const projectImagesAbs = images.map((img) => `${SITE_URL}${img}`)

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    url: pageUrl,
    image: projectImagesAbs.length ? projectImagesAbs : undefined,
    description: project.description,
    datePublished: project.year ? `${project.year}-01-01` : undefined,
    creator: {
      "@type": "Organization",
      name: "Wain Creative Co",
      url: SITE_URL,
      logo: `${SITE_URL}/logo.svg`,
      sameAs: [
        "https://www.instagram.com/waincreativeco/",
        "https://www.linkedin.com/in/wainmusic/",
      ],
    },
    about: project.services,
    inLanguage: "en-US",
    isPartOf: {
      "@type": "CollectionPage",
      name: "Work | Wain Creative Co",
      url: `${SITE_URL}/work`,
    },
  }

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Work",
        item: `${SITE_URL}/work`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: project.title,
        item: pageUrl,
      },
    ],
  }

  return (
    <main className="relative min-h-screen pt-28 md:pt-32 pb-24 px-6 md:px-10 lg:px-16 bg-[#0D0D0D] overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-to-br from-purple-600/25 via-pink-500/15 to-orange-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/3 right-[-120px] h-[420px] w-[420px] rounded-full bg-gradient-to-br from-orange-500/20 via-pink-500/10 to-purple-600/20 blur-[110px]" />
      <div className="max-w-7xl mx-auto">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 mb-16 lg:mb-20 items-start">
          {/* Left: Title + Meta */}
          <div className="space-y-7 lg:space-y-8">
            <div className="lg:static sticky top-20 z-20 backdrop-blur-md bg-black/30 py-3 px-2 -mx-2 rounded-xl border border-white/10 lg:border-0 lg:bg-transparent lg:backdrop-blur-0 lg:py-0 lg:px-0 lg:mx-0">
              <Link
                href="/work"
                className="inline-flex items-center gap-2 text-[10px] md:text-xs uppercase tracking-[0.35em] text-white/55 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Work
              </Link>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight leading-[0.9]">
                {project.title}
              </h1>

              {/* Meta chips */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                {project.category && (
                  <span className="text-[9px] md:text-[10px] uppercase tracking-[0.25em] text-white/70 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg">
                    {project.category}
                  </span>
                )}
                {project.year && (
                  <span className="text-[9px] md:text-[10px] uppercase tracking-[0.25em] text-white/60 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg">
                    {project.year}
                  </span>
                )}
                {project.type && (
                  <span className="text-[9px] md:text-[10px] uppercase tracking-[0.25em] text-white/60 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg">
                    {project.type}
                  </span>
                )}
              </div>

              {project.url && (
                <div className="flex flex-wrap gap-3">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-fit items-center gap-2 border border-white/20 px-6 py-3 text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] text-white/90 hover:border-white hover:bg-white/5 transition-colors rounded-lg"
                  >
                    Visit Live Site
                  </a>
                  <a
                    href="/services"
                    className="inline-flex w-fit items-center gap-2 border border-white/20 px-6 py-3 text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] text-white/90 hover:border-white hover:bg-white/5 transition-colors rounded-lg"
                  >
                    View Services
                  </a>
                  <TrackedLink
                    href="/contact"
                    event="click_book_call"
                    className="inline-flex w-fit items-center gap-2 border border-white/20 px-6 py-3 text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] text-white/90 hover:border-white hover:bg-white/5 transition-colors rounded-lg"
                  >
                    Start a Project
                  </TrackedLink>
                </div>
              )}
            </div>

            <div className="h-[2px] w-24 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600" />
          </div>

          {/* Right: Hero visual */}
          {heroImage && (
            <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 bg-neutral-950 shadow-[0_20px_80px_rgba(0,0,0,0.6)]">
              <Image
                src={heroImage}
                alt={`${project.title} hero preview`}
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            </div>
          )}
        </section>

        {/* Overview + Services */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 mb-14 lg:mb-16">
          <div className="space-y-4">
            <h3 className="text-[10px] md:text-xs font-bold uppercase tracking-[0.35em] text-white/50">Overview</h3>
            <p className="text-base md:text-lg text-white/75 leading-relaxed max-w-2xl">
              {project.description}
            </p>
          </div>

          {!!project.services?.length && (
            <div className="space-y-4">
              <h3 className="text-[10px] md:text-xs font-bold uppercase tracking-[0.35em] text-white/50">Services</h3>
              <ul className="flex flex-wrap gap-2">
                {project.services.map((service) => (
                  <li
                    key={service}
                    className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-white/80 bg-white/5 border border-white/10 px-3 py-2 rounded-lg"
                  >
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>

        {images.length > 0 && (
          <section className="space-y-8 lg:space-y-10">
            {images.map((img, index) => (
              <div key={index} className="space-y-3">
                <div
                  className="relative w-full bg-neutral-900 border border-white/10 rounded-2xl overflow-hidden shadow-[0_14px_60px_rgba(0,0,0,0.55)] aspect-[16/10]"
                >
                  <Image
                    src={img}
                    alt={`${project.title} shot ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-white/45">
                  {`Preview ${index + 1}`}
                </p>
              </div>
            ))}
          </section>
        )}

        {nextProject && (
          <Link
            href={`/work/${nextProject.slug}`}
            className="mt-20 pt-16 border-t border-white/10 grid grid-cols-1 md:grid-cols-[220px_1fr] gap-6 items-center group"
            aria-label={`View next project: ${nextProject.title}`}
          >
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/10 bg-neutral-950">
              {nextProject.images?.[0] && (
                <Image
                  src={nextProject.images[0]}
                  alt={`${nextProject.title} thumbnail`}
                  fill
                  className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            </div>

            <div className="space-y-2">
              <p className="text-white/50 text-[10px] md:text-xs uppercase tracking-[0.35em]">Next Project</p>
              <div className="text-2xl md:text-3xl font-bold uppercase text-white group-hover:text-pink-500 transition-colors">
                {nextProject.title}
              </div>
              <p className="text-xs md:text-sm text-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                View Next Case
              </p>
            </div>
          </Link>
        )}
      </div>
    </main>
  )
}
