import type { MetadataRoute } from "next"
import workProjects from "./work/projects-data"

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = "https://www.waincreative.com"

  const staticRoutes = [
    "",
    "/work",
    "/services",
    "/about",
    "/contact",
  ]

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }))

  const workEntries: MetadataRoute.Sitemap = workProjects.map((project) => ({
    url: `${siteUrl}/work/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }))

  return [...staticEntries, ...workEntries]
}