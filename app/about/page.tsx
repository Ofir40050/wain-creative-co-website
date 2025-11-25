import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import Script from "next/script"
import { TrackedLink } from "@/components/tracking/tracked-link"

export const metadata = {
  title: "About | Wain Creative Co - LA Web Design & Content Studio",
  description:
    "Learn about Wain Creative Co, a Los Angeles content and web design studio building premium websites, social systems, and brand visuals for modern brands and creators.",
  alternates: {
    canonical: "https://www.waincreative.com/about",
  },
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
    url: "https://www.waincreative.com/about",
    siteName: "Wain Creative Co",
    title: "About Wain Creative Co",
    description:
      "Built in LA for brands that want to win. Premium web design, content, and social systems under one studio.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Wain Creative Co - Los Angeles Creative Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Wain Creative Co",
    description:
      "Los Angeles content and web design studio for premium digital ecosystems.",
    images: ["/og-image.jpg"],
  },
}

export default function AboutPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.waincreative.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About",
        item: "https://www.waincreative.com/about",
      },
    ],
  }

  return (
    <main className="relative min-h-screen pt-28 md:pt-32 pb-32 md:pb-28 px-6 md:px-10 lg:px-16 bg-[#0D0D0D] overflow-hidden">
      <Script
        id="about-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "About Wain Creative Co",
            url: "https://www.waincreative.com/about",
            description:
              "Wain Creative Co is a Los Angeles content and web design studio built for modern attention. We create premium websites, high-performance social systems, and brand visuals that feel expensive and scale fast.",
            isPartOf: {
              "@type": "WebSite",
              name: "Wain Creative Co",
              url: "https://www.waincreative.com",
            },
            about: {
              "@type": "Organization",
              name: "Wain Creative Co",
              url: "https://www.waincreative.com",
              logo: "https://www.waincreative.com/logo.svg",
              sameAs: [
                "https://www.instagram.com/waincreativeco/",
                "https://www.linkedin.com/in/wainmusic/",
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Los Angeles",
                addressRegion: "CA",
                addressCountry: "US",
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "business inquiries",
                email: "hello@waincreative.com",
                telephone: "+1-213-589-5458",
                areaServed: "US",
              },
            },
          }),
        }}
      />
      <Script
        id="about-breadcrumbs-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
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

        <div className="flex flex-col sm:flex-row gap-4 sm:items-center mt-10">
          <Link href="#cta" className="inline-flex">
            <button className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-black px-7 py-3 md:px-8 md:py-4 font-bold uppercase tracking-[0.22em] rounded-lg shadow-[0_4px_20px_rgba(255,0,90,0.35)] hover:shadow-[0_4px_30px_rgba(255,0,90,0.55)] transition-all inline-flex items-center gap-3">
              Start Project
              <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
          <TrackedLink
            href="/work"
            event="click_view_work"
            className="inline-flex px-7 py-3 md:px-8 md:py-4 border border-white/15 text-white/80 hover:text-white hover:border-white/40 transition-all rounded-lg backdrop-blur-sm uppercase tracking-[0.22em] text-xs font-semibold"
          >
            View Work
          </TrackedLink>
        </div>
      </section>

      {/* STORY + IMAGE */}
      <section id="story" className="max-w-6xl mx-auto mb-24">
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
            <h2 className="font-bold uppercase tracking-tight text-3xl md:text-4xl lg:text-5xl">
              Built for modern attention
            </h2>

            <p className="text-white/70 leading-relaxed text-base md:text-lg">
              Websites, content, and social as one system. Built to feel premium and perform like a product.
            </p>

            <p className="text-white/70 leading-relaxed text-base md:text-lg">
              Full‑stack and hands‑on: design, development, content, and social that drive trust and growth.
            </p>

            <p className="text-white/70 leading-relaxed text-base md:text-lg">
              No templates. Custom, grid‑aligned builds engineered to convert and scale.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="border border-white/10 p-6 bg-neutral-950">
                <div className="text-3xl md:text-4xl font-bold text-white">5+ Years</div>
                <div className="text-xs uppercase tracking-[0.3em] text-white/50 mt-2">
                  Digital experience
                </div>
              </div>
              <div className="border border-white/10 p-6 bg-neutral-950">
                <div className="text-3xl md:text-4xl font-bold text-white">50+ Projects</div>
                <div className="text-xs uppercase tracking-[0.3em] text-white/50 mt-2">
                  Delivered end to end
                </div>
              </div>
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
              Start your project
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
            { k: "50+ launches delivered", v: "Across web + social" },
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
              End‑to‑end creative and digital execution for brands that want a serious upgrade in look, motion, and performance.
            </p>
            <a href="#cta" className="inline-block mt-6 text-sm uppercase tracking-[0.18em] text-white/80 border-b border-white/25 pb-1 hover:text-white hover:border-white transition-colors">
              Book the next slot
            </a>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Web Design and Development",
                text:
                  "High-end websites and landing pages that feel cinematic but load fast and convert hard.",
                meta: "Typical build: 2-3 weeks",
              },
              {
                title: "Social Media Management",
                text:
                  "Monthly content systems, daily brand presence, and platforms that grow consistently.",
                meta: "30-day content roadmap",
              },
              {
                title: "Content Production",
                text:
                  "Short-form and long-form visuals built for attention, retention, and brand authority.",
                meta: "8-12 short-form videos",
              },
              {
                title: "Brand Identity and Visuals",
                text:
                  "Design language, typography, layouts, and a cohesive look across every touchpoint.",
                meta: "Full visual cohesion",
              },
              {
                title: "Growth Strategy",
                text:
                  "Organic and paid campaigns, funnels, and distribution that push real outcomes.",
                meta: "Funnels + paid support",
              },
              {
                title: "Creator Services",
                text:
                  "Release pages, EPKs, visualizers, and digital systems tailored for artists and creators.",
                meta: "Artist-ready launches",
              },
            ].map((item, idx) => (
              <div
                key={item.title}
                className={`group relative border border-white/10 p-8 rounded-xl hover:scale-[1.01] hover:shadow-[0_14px_40px_rgba(0,0,0,0.55)] transition-all overflow-hidden ${
                  idx % 3 === 1 ? "bg-white/[0.04] hover:border-white/30" : "bg-neutral-950 hover:bg-white/5 hover:border-white/20"
                }`}
              >
                <h3 className="font-bold uppercase tracking-tight text-lg md:text-xl lg:text-2xl mb-3">
                  {item.title}
                </h3>
                <p className="text-white/70 leading-relaxed text-base md:text-lg">
                  {item.text}
                </p>
                <p className="mt-4 text-xs md:text-sm uppercase tracking-[0.18em] text-white/60">
                  {item.meta}
                </p>
                <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section id="why-us" className="max-w-6xl mx-auto mb-24 border-t border-white/10 pt-20">
        <h2 className="font-bold uppercase tracking-tight text-3xl md:text-4xl lg:text-5xl mb-10">
          Why Wain Creative
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Design that performs",
              text:
                "Every pixel has a job. We build clean hierarchy, sharp grids, and conversion paths that feel effortless.",
            },
            {
              title: "Content that moves fast",
              text:
                "Built for modern attention spans. Storytelling, motion, and scroll‑stopping clarity that earns retention.",
            },
            {
              title: "Systems over randomness",
              text:
                "No posting and praying. We build repeatable content engines and funnels that grow predictably.",
            },
          ].map((v) => (
            <div key={v.title} className="group relative border border-white/10 p-8 bg-neutral-950 rounded-xl hover:bg-white/5 hover:border-white/20 hover:scale-[1.01] hover:shadow-[0_14px_40px_rgba(0,0,0,0.55)] transition-all overflow-hidden">
              <div className="w-10 h-10 mb-4 rounded-full bg-gradient-to-br from-orange-500/20 to-purple-600/20 border border-white/10 flex items-center justify-center text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                Win
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
          Schedule a build
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
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {["Astra Labs", "Northwave", "Cedar House", "Studio W", "Nova Sound", "Beachline"].map((logo) => (
                  <div key={logo} className="border border-white/10 rounded-lg px-4 py-3 bg-neutral-900/60 text-center text-sm uppercase tracking-[0.18em] text-white/70">
                    {logo}
                  </div>
                ))}
              </div>
              <div className="p-5 border border-white/10 rounded-lg bg-white/[0.03]">
                <p className="text-white/80 leading-relaxed text-base">
                  “They rebuilt our launch system end-to-end in three weeks and doubled paid funnel performance. Clean, fast, premium.”
                </p>
                <p className="mt-3 text-xs uppercase tracking-[0.18em] text-white/60">CMO, Consumer brand</p>
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

          <a
            href="#cta"
            className="text-xs uppercase tracking-[0.22em] px-7 py-3 bg-white/5 border border-white/15 text-white/70 hover:text-white hover:border-white/40 hover:bg-white/10 transition-all rounded-lg backdrop-blur-sm w-fit"
          >
            Start a Project
          </a>
        </div>
      </section>

      {/* STACK */}
      <section id="stack" className="max-w-6xl mx-auto mb-24 border-t border-white/10 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <h2 className="font-bold uppercase tracking-tight text-3xl md:text-4xl lg:text-5xl mb-4">
              <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                The Stack
              </span>
            </h2>
            <p className="text-white/60 leading-relaxed text-base md:text-lg">
              Tools we trust to ship premium digital products with speed and precision.
            </p>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Next.js",
              "React",
              "TypeScript",
              "Tailwind",
              "Framer Motion",
              "WebGL",
              "DaVinci Resolve",
              "Figma",
            ].map((tool) => (
              <div
                key={tool}
                className="border border-white/10 bg-neutral-950 rounded-lg hover:bg-white/5 hover:border-white/20 transition-all"
              >
                <div className="h-full w-full p-5 flex items-center justify-center text-center">
                  <span className="text-xs md:text-sm uppercase tracking-widest text-white/80 leading-tight">
                    {tool}
                  </span>
                </div>
              </div>
            ))}
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

          <TrackedLink href="/contact" event="click_book_call" className="relative z-10 inline-block">
            <button className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-black px-10 py-5 font-bold uppercase tracking-widest rounded-lg shadow-[0_4px_20px_rgba(255,0,90,0.35)] hover:shadow-[0_4px_30px_rgba(255,0,90,0.55)] transition-all inline-flex items-center gap-3">
              Start Project
              <ArrowRight className="w-5 h-5" />
            </button>
          </TrackedLink>
        </div>
      </section>

      {/* SEO LINE */}
      <p className="max-w-6xl mx-auto mt-12 text-center text-xs md:text-sm uppercase tracking-[0.18em] text-white/40 leading-[1.5]">
        Serving Los Angeles and remote clients worldwide.
      </p>

      {/* Mobile persistent CTA */}
      <div className="fixed bottom-5 inset-x-5 md:hidden z-40">
        <a
          href="#cta"
          className="block text-center bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-black font-bold uppercase tracking-[0.22em] py-4 rounded-xl shadow-[0_10px_50px_rgba(0,0,0,0.55)]"
        >
          Start Project
        </a>
      </div>
    </main>
  )
}
