export const SITE_NAME = "Wain Creative Co"
export const SITE_URL = "https://www.waincreative.com"
export const SITE_URL_OBJECT = new URL(SITE_URL)

export const DEFAULT_OG_IMAGE_PATH = "/og-image.jpg"
export const DEFAULT_TWITTER_IMAGE_PATH = "/social-banner.jpg"
export const LOGO_PATH = "/logo.svg"

export const BRAND_EMAIL = "contact@waincreative.com"
export const BRAND_PHONE = "+1-213-589-5458"
export const BRAND_CITY = "Los Angeles"
export const BRAND_REGION = "CA"
export const BRAND_COUNTRY = "US"

export const SOCIAL_LINKS = [
  "https://www.instagram.com/waincreativeco/",
  "https://www.linkedin.com/in/wainmusic/",
] as const

export const ORGANIZATION_DESCRIPTION =
  "A premium Los Angeles creative studio specializing in high-end web design, content production, social media systems, and digital brand strategy."

export const SERVICE_TYPES = [
  "Web Design",
  "Web Development",
  "Social Media Management",
  "Content Strategy",
  "Video Editing",
  "Creator Services",
] as const

export const ABSOLUTE_LOGO_URL = `${SITE_URL}${LOGO_PATH}`
export const ABSOLUTE_OG_IMAGE_URL = `${SITE_URL}${DEFAULT_OG_IMAGE_PATH}`
export const ABSOLUTE_TWITTER_IMAGE_URL = `${SITE_URL}${DEFAULT_TWITTER_IMAGE_PATH}`
