import Image from "next/image"
import type { Metadata } from "next"
import { ArrowRight, ShieldCheck, Signal, Waves } from "lucide-react"

import { JsonLd } from "@/components/seo/json-ld"
import { Button } from "@/components/shared/button"
import { TrackedLink } from "@/components/tracking/tracked-link"
import {
  ABSOLUTE_LOGO_URL,
  BRAND_CITY,
  BRAND_COUNTRY,
  BRAND_REGION,
  SITE_NAME,
  SITE_URL,
  SOCIAL_LINKS,
} from "@/lib/site-config"
import { createBreadcrumbJsonLd, createMetadata } from "@/lib/seo"

const impactStats = [
  {
    label: "50+ projects shipped",
    detail: "Built & Scaled 13K+ organic follower communities",
  },
  {
    label: "5+ years building",
    detail: "Design, development, content, and launch systems",
  },
  {
    label: "100+ releases supported",
    detail: "Music, creator, and brand-led digital rollouts",
  },
] as const

const highLevelServices = [
  {
    title: "Web Systems",
    text: "Conversion-first builds for brands that need a stronger digital front door.",
    href: "/services#web-design",
  },
  {
    title: "Social Growth",
    text: "Strategy, management, and production designed to build authority.",
    href: "/services#social-content",
  },
  {
    title: "Launch Packages",
    text: "Tighter digital rollouts where site, content, and story move together.",
    href: "/services#digital-launch",
  },
] as const

const trustPillars = [
  {
    title: "Strategic Mastery",
    text: "Scaled organic communities from zero to 13K+ engaged followers.",
    icon: Signal,
  },
  {
    title: "Production Excellence",
    text: "Music production background that sharpens visual and sonic quality.",
    icon: Waves,
  },
  {
    title: "Elite Execution",
    text: "Mission-driven precision derived from military leadership experience.",
    icon: ShieldCheck,
  },
] as const

const stack = [
  { name: "Next.js", mark: "N" },
  { name: "React", mark: "R" },
  { name: "TypeScript", mark: "TS" },
  { name: "Tailwind", mark: "TW" },
  { name: "Framer", mark: "F" },
  { name: "WebGL", mark: "W" },
  { name: "DaVinci", mark: "D" },
  { name: "Figma", mark: "FG" },
] as const

const clientLogos = [
  { name: "Acoustic", src: "/Logos/acoustic-logo.png" },
  { name: "Next Pro", src: "/Logos/Next-pro-logo.png" },
  { name: "Noise", src: "/Logos/Noise-logo.png" },
  { name: "Pazam", src: "/Logos/Pazam-logo.png" },
  { name: "Rotca", src: "/Logos/Rotca-logo.png" },
  { name: "Super Group", src: "/Logos/Super-Group-logo.png" },
] as const

export const metadata: Metadata = createMetadata({
  title: `About | ${SITE_NAME} - LA Web Design & Content Studio`,
  description:
    `Learn about ${SITE_NAME}, a Los Angeles content and web design studio building premium websites, social systems, and brand visuals for modern brands and creators.`,
  canonicalPath: "/about",
  openGraphTitle: `About ${SITE_NAME}`,
  openGraphDescription:
    "Built in LA for brands that want to win. Premium web design, content, and social systems under one studio.",
  openGraphAlt: `${SITE_NAME} - Los Angeles Creative Studio`,
  twitterTitle: `About ${SITE_NAME}`,
  twitterDescription: "Los Angeles content and web design studio for premium digital ecosystems.",
})

export default function AboutPage() {
  const breadcrumbJsonLd = createBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ])

  return (
    <main className="relative min-h-screen pt-28 md:pt-32 pb-32 md:pb-28 px-6 md:px-10 lg:px-16 bg-[#0D0D0D] overflow-hidden">
      <JsonLd
        id="about-jsonld"
        data={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: `About ${SITE_NAME}`,
          url: `${SITE_URL}/about`,
          description:
            `${SITE_NAME} is a Los Angeles content and web design studio built for modern attention. We create premium websites, high-performance social systems, and brand visuals that feel expensive and scale fast.`,
          isPartOf: {
            "@type": "WebSite",
            name: SITE_NAME,
            url: SITE_URL,
          },
          about: {
            "@type": "Organization",
            name: SITE_NAME,
            url: SITE_URL,
            logo: ABSOLUTE_LOGO_URL,
            sameAs: SOCIAL_LINKS,
            address: {
              "@type": "PostalAddress",
              addressLocality: BRAND_CITY,
              addressRegion: BRAND_REGION,
              addressCountry: BRAND_COUNTRY,
            },
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "business inquiries",
              email: "hello@waincreative.com",
              telephone: "+1-213-589-5458",
              areaServed: "US",
            },
          },
        }}
      />
      <JsonLd id="about-breadcrumbs-jsonld" data={breadcrumbJsonLd} />
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 bg-[radial-gradient(circle,rgba(255,120,0,0.10),rgba(255,0,128,0.06),transparent_70%)] blur-[120px]" />


      {/* HERO */}
      <section className="max-w-6xl mx-auto mb-24">
        <p className="text-sm uppercase tracking-[0.18em] text-white/60 mb-6 leading-[1.4]">
          About Wain Creative Co
        </p>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight leading-[0.9] mb-8">
          <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            Built in LA
          </span>
          <br />
          <span className="text-white">For the Brands</span>
          <br />
          <span className="text-white">That Want to Win</span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          <p className="text-lg md:text-2xl text-white/80 leading-relaxed font-light">
            Wain Creative Co is a Los Angeles content and web design studio built for modern attention.
            We create premium websites, high‑performance social systems, and brand visuals that feel expensive and scale fast.
          </p>
          <div className="w-full h-px bg-white/15" />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-center justify-center mt-10">
          <TrackedLink
            href="/work"
            event="click_view_work"
            className="group px-8 py-4 bg-white/5 border border-white/15 text-white text-sm uppercase font-bold tracking-widest hover:bg-white/10 hover:border-white/30 transition-all duration-300 rounded-lg backdrop-blur-sm flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            <span className="pointer-events-none absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-white/5 via-transparent to-white/5" />
            View Work
          </TrackedLink>
        </div>
      </section>

      {/* FOUNDER BIO */}
      <section id="founder-bio" className="max-w-6xl mx-auto mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-square bg-neutral-950 border border-white/10 rounded-xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
            <Image
              src="/Wain/wain.webp"
              alt="Wain Creative Studio"
              fill
              className="object-cover opacity-70"
              priority={false}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-orange-900/20 opacity-70" />
            <div className="absolute inset-4 rounded-lg border border-white/10" />
          </div>

          {/* Copy */}
          <div className="space-y-7">
            <p className="text-sm uppercase tracking-[0.18em] text-white/55 leading-[1.4]">
              Founder Bio
            </p>

            <h2 className="font-bold uppercase tracking-tight text-3xl md:text-4xl lg:text-5xl">
              The Visionary Behind the Lens
            </h2>

            <p className="text-white/70 leading-relaxed text-base md:text-lg">
              WAIN Creative Co. was founded by <strong className="text-white font-semibold">Ofir Wainboim</strong>, a digital strategist who operates at the intersection of creative artistry and tactical precision.
            </p>

            <p className="text-white/70 leading-relaxed text-base md:text-lg">
              With a background as a <strong className="text-white font-semibold">Combat Intelligence Officer</strong> and a <strong className="text-white font-semibold">professional sound engineer</strong>, Ofir brings a unique level of mission-critical discipline and high-fidelity production to every brand.
            </p>

            <p className="text-white/70 leading-relaxed text-base md:text-lg">
              After scaling organic communities to over <strong className="text-white font-semibold">13,000 followers</strong> and shipping <strong className="text-white font-semibold">50+ digital launches</strong>, he built WAIN to help Los Angeles brands dominate the digital landscape with systems that feel expensive and move numbers.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 pt-4">
              {impactStats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-white/10 bg-white/[0.04] px-6 py-5 shadow-[0_10px_40px_rgba(0,0,0,0.35)]"
                >
                  <p className="text-sm md:text-base leading-relaxed text-white/82">
                    {item.label}
                  </p>
                  <p className="mt-2 text-xs md:text-sm leading-relaxed text-white/55">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="max-w-6xl mx-auto mb-24 border-t border-white/10 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <h2 className="font-bold uppercase tracking-tight text-3xl md:text-4xl lg:text-5xl mb-4">
              The Process
            </h2>
            <p className="text-white/70 leading-relaxed text-base md:text-lg">
              A simple, repeatable flow that turns your brand into a premium digital product.
            </p>
            <a href="#cta" className="inline-block mt-6 text-sm uppercase tracking-[0.18em] text-white/80 border-b border-white/25 pb-1 hover:text-white hover:border-white transition-colors">
              Start a Project
            </a>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "Discover",
                text: "We lock the story, audience, and goals - so every pixel has purpose.",
                tone: "from-orange-500/12 via-transparent to-transparent",
              },
              {
                step: "02",
                title: "Build",
                text: "Design + development + content. Fast iterations, studio-level polish.",
                tone: "from-pink-500/12 via-transparent to-transparent",
              },
              {
                step: "03",
                title: "Launch",
                text: "We ship, optimize, and hand you a system built to grow.",
                tone: "from-purple-600/12 via-transparent to-transparent",
              },
            ].map((p) => (
              <div key={p.step} className="group relative border border-white/10 p-8 bg-neutral-950 rounded-xl hover:bg-white/5 hover:border-white/20 hover:scale-[1.01] hover:shadow-[0_14px_40px_rgba(0,0,0,0.55)] transition-all overflow-hidden">
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br pointer-events-none ${p.tone}`} />
                <div className="text-xs uppercase tracking-[0.2em] text-white/60 mb-4 relative z-10">{p.step}</div>
                <h3 className="font-bold uppercase tracking-tight text-lg md:text-xl mb-3">{p.title}</h3>
                <p className="text-white/70 leading-relaxed text-sm md:text-base relative z-10">{p.text}</p>
                <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CREDENTIALS STRIP */}
      <section className="max-w-6xl mx-auto mb-24">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { k: "50+ launches delivered", v: "Built & Scaled 13K+ organic follower communities" },
            { k: "5+ years in digital", v: "Design, dev, content" },
            { k: "LA-based, global-ready", v: "Remote projects worldwide" },
          ].map((b) => (
            <div key={b.k} className="border border-white/10 bg-neutral-950 rounded-xl p-6 hover:bg-white/5 hover:border-white/20 transition-all">
              <div className="text-sm md:text-base uppercase tracking-[0.18em] text-white/80 mb-2 leading-[1.45]">{b.k}</div>
              <div className="text-xs md:text-sm uppercase tracking-[0.2em] text-white/60">{b.v}</div>
            </div>
          ))}
        </div>
      </section>



      {/* WHAT WE DO */}
      <section id="what-we-do" className="max-w-6xl mx-auto mb-24 border-t border-white/10 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <h2 className="font-bold uppercase tracking-tight text-3xl md:text-4xl lg:text-5xl mb-4">
              What we do
            </h2>
            <p className="text-white/70 leading-relaxed text-base md:text-lg">
              A high-level view only. The full breakdown lives on the Services page.
            </p>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {highLevelServices.map((item) => (
              <div
                key={item.title}
                className="group relative border border-white/10 p-8 rounded-xl bg-neutral-950 hover:bg-white/5 hover:border-white/20 hover:scale-[1.01] hover:shadow-[0_14px_40px_rgba(0,0,0,0.55)] transition-all overflow-hidden"
              >
                <h3 className="font-bold uppercase tracking-tight text-lg md:text-xl lg:text-2xl mb-3">
                  {item.title}
                </h3>
                <p className="text-white/70 leading-relaxed text-base md:text-lg">
                  {item.text}
                </p>
                <TrackedLink
                  href={item.href}
                  event="click_services_from_about"
                  className="mt-6 inline-flex items-center gap-2 text-xs md:text-sm uppercase tracking-[0.18em] text-white/70 hover:text-white transition-colors"
                >
                  <span>View Service</span>
                  <ArrowRight className="w-4 h-4" />
                </TrackedLink>
                <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section id="why-us" className="max-w-6xl mx-auto mb-28 md:mb-32 border-t border-white/10 pt-24 md:pt-32">
        <h2 className="font-bold uppercase tracking-tight text-3xl md:text-4xl lg:text-5xl mb-10">
          Why Wain Creative
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {trustPillars.map((v) => (
            <div key={v.title} className="group relative border border-white/10 p-10 md:p-12 bg-neutral-950 rounded-xl hover:bg-white/5 hover:border-white/20 hover:scale-[1.01] hover:shadow-[0_14px_40px_rgba(0,0,0,0.55)] transition-all overflow-hidden">
              <div className="w-12 h-12 mb-5 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-white/75">
                <v.icon className="w-5 h-5" />
              </div>
              <h3 className="font-bold uppercase tracking-tight text-lg md:text-xl lg:text-2xl mb-3">
                {v.title}
              </h3>
              <p className="text-white/70 leading-relaxed text-base md:text-lg">
                {v.text}
              </p>
              <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
        <a href="#cta" className="inline-block mt-8 text-sm uppercase tracking-[0.18em] text-white/80 border-b border-white/25 pb-1 hover:text-white hover:border-white transition-colors">
          Book a Call
        </a>
      </section>

      {/* SOCIAL PROOF */}
      <section className="max-w-6xl mx-auto mb-24">
        <div className="bg-neutral-950/80 border border-white/10 rounded-2xl p-10 md:p-14 relative overflow-hidden">
          <div className="absolute -top-32 -right-20 w-[320px] h-[320px] bg-gradient-to-br from-orange-500/10 via-pink-500/10 to-purple-600/10 blur-[120px] pointer-events-none" />
          <div className="flex flex-col lg:flex-row lg:items-center gap-10 relative z-10">
            <div className="lg:w-1/2 space-y-4">
              <p className="text-sm uppercase tracking-[0.18em] text-white/60 leading-[1.45]">Proof of impact</p>
              <h3 className="font-bold uppercase tracking-tight text-2xl md:text-3xl">
                Premium builds that convert and retain
              </h3>
              <p className="text-white/70 leading-relaxed text-base md:text-lg">
                We ship launches that look expensive and move numbers: faster load, cleaner funnels, and content that keeps people around.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 border border-white/10 rounded-lg bg-white/[0.03]">
                  <div className="text-3xl font-bold text-white">+38%</div>
                  <p className="text-xs uppercase tracking-[0.18em] text-white/60 mt-1 leading-[1.45]">Avg. conversion lift</p>
                </div>
                <div className="p-4 border border-white/10 rounded-lg">
                  <div className="text-3xl font-bold text-white">2.4s</div>
                  <p className="text-xs uppercase tracking-[0.18em] text-white/60 mt-1 leading-[1.45]">Median LCP shipped</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 space-y-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-md mx-auto">
                {clientLogos.map((logo) => (
                  <div
                    key={logo.name}
                    className="border border-white/10 rounded-lg px-4 py-3 bg-neutral-900/60 flex items-center justify-center h-[80px]"
                  >
                    <div className="relative h-9 w-[116px]">
                      <Image
                        src={logo.src}
                        alt={`${logo.name} logo`}
                        fill
                        sizes="116px"
                        className="object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-5 border border-white/10 rounded-lg bg-white/[0.03] max-w-md mx-auto">
                <p className="text-white/80 leading-relaxed text-base">
                  “They rebuilt our launch system end-to-end in three weeks and doubled paid funnel performance. Clean, fast, premium.”
                </p>
                <p className="mt-3 text-xs uppercase tracking-[0.18em] text-white/60">Pazam, Consumer brand</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MID CTA */}
      <section className="max-w-6xl mx-auto mb-24">
        <div className="bg-neutral-950 border border-white/10 rounded-2xl p-8 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.3em] text-white/50">Want this for your brand?</p>
            <h3 className="font-bold uppercase tracking-tight text-2xl md:text-3xl">
              Let’s build your next launch.
            </h3>
            <p className="text-white/70 text-sm md:text-base max-w-xl leading-relaxed">
              If you’re ready for a premium website and social presence that move as one system, we’re ready.
            </p>
          </div>

          <Button intent="start-project" href="#cta" variant="secondary" className="w-full sm:w-auto" />
        </div>
      </section>

      {/* STACK */}
      <section id="stack" className="max-w-6xl mx-auto mb-24 border-t border-white/10 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <h2 className="font-bold uppercase tracking-tight text-3xl md:text-4xl lg:text-5xl mb-4">
              The Stack
            </h2>
            <p className="text-white/60 leading-relaxed text-base md:text-lg">
              The tools behind the build. Clean, fast, and production-ready.
            </p>
          </div>

          <div className="lg:col-span-8 rounded-2xl border border-white/10 bg-neutral-950/80 p-6 md:p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {stack.map((tool) => (
              <div
                key={tool.name}
                className="border border-white/10 bg-black/20 rounded-xl hover:bg-white/[0.03] hover:border-white/20 transition-all"
              >
                <div className="h-full w-full p-5 md:p-6 flex flex-col items-center justify-center text-center gap-3">
                  <div className="w-12 h-12 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center text-sm font-semibold uppercase tracking-[0.16em] text-white/70">
                    {tool.mark}
                  </div>
                  <span className="text-xs md:text-sm uppercase tracking-widest text-white/65 leading-tight">
                    {tool.name}
                  </span>
                </div>
              </div>
            ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="max-w-6xl mx-auto">
        <div className="bg-neutral-950 border border-white/10 p-10 md:p-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-purple-600/10 pointer-events-none" />

          <h2 className="font-bold uppercase tracking-tight text-3xl md:text-4xl lg:text-5xl mb-6 relative z-10">
            Ready to upgrade your digital presence
          </h2>

          <p className="text-white/70 leading-relaxed text-base md:text-lg max-w-2xl mx-auto mb-10 relative z-10">
            If you want a website and social presence that look premium, move with culture,
            and drive real growth, let’s talk.
          </p>

          <div className="relative z-10 inline-block">
            <Button intent="book-call" href="/contact" variant="primary" />
          </div>
        </div>
      </section>

      {/* SEO LINE */}
      <p className="max-w-6xl mx-auto mt-12 text-center text-xs md:text-sm uppercase tracking-[0.18em] text-white/40 leading-[1.5]">
        Serving Los Angeles and remote clients worldwide.
      </p>

      {/* Mobile persistent CTA */}
      <div className="fixed bottom-5 inset-x-5 md:hidden z-40">
        <Button intent="start-project" href="#cta" className="w-full" />
      </div>
    </main>
  )
}
