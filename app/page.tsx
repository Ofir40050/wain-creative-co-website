import { Hero } from "@/components/landing/hero"
import { Services } from "@/components/landing/services"
import { Showreel } from "@/components/landing/showreel"
import { Portfolio } from "@/components/landing/portfolio"
import { About } from "@/components/landing/about"
import { Contact } from "@/components/landing/contact"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0D0D0D] text-white selection:bg-pink-500 selection:text-white overflow-x-hidden">
      <div className="animate-[fadeInUp_0.7s_ease-out]">
        <Hero />
      </div>
      {/* Highlight Offer: Website + Social Launch Package */}
      <section className="relative bg-[#111111] border-y border-white/10 py-14 md:py-20 px-6 md:px-10 lg:px-16 animate-[fadeIn_0.9s_ease-out]">
        <div className="absolute inset-0 pointer-events-none flex justify-center">
          <div className="w-[420px] h-[420px] md:w-[600px] md:h-[600px] bg-pink-500/10 blur-[140px] md:blur-[200px] rounded-full" />
        </div>
        <div className="max-w-4xl mx-auto text-center leading-snug bg-black/20 border border-white/10 rounded-xl px-6 md:px-12 py-10 md:py-14 backdrop-blur-sm shadow-[0_0_40px_-10px_rgba(0,0,0,0.6)] transition-all duration-300 hover:scale-[1.015] hover:shadow-[0_0_60px_-10px_rgba(255,0,90,0.4)]">
          <p className="inline-block mb-4 px-3 py-1 text-[10px] md:text-xs font-semibold tracking-wide uppercase bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-black rounded-full animate-[fadeIn_0.6s_ease-out_0.1s_both]">Most Popular</p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 md:mb-6 animate-[fadeInUp_0.6s_ease-out_0.2s_both]">
            Website + Social Launch Package
          </h2>

          <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-8 md:mb-10 animate-[fadeInUp_0.6s_ease-out_0.3s_both]">
            A complete digital launch built for brands and creators who want to go live fast
            with a premium website and a 30‑day content rollout. One seamless package,
            engineered for momentum.
          </p>

          <div className="text-white/70 text-sm md:text-base max-w-md mx-auto mb-8 md:mb-10 space-y-2 text-left animate-[fadeInUp_0.6s_ease-out_0.4s_both]">
            <div className="flex items-center gap-3"><span className="text-pink-400 text-lg">▶</span><span>Custom Website (4-6 pages)</span></div>
            <div className="flex items-center gap-3"><span className="text-pink-400 text-lg">▶</span><span>30-Day Content Rollout</span></div>
            <div className="flex items-center gap-3"><span className="text-pink-400 text-lg">▶</span><span>8–12 Short-Form Videos Included</span></div>
            <div className="flex items-center gap-3"><span className="text-pink-400 text-lg">▶</span><span>Brand Cohesion Across Web + Social</span></div>
          </div>

          <div className="text-white/50 text-xs md:text-sm italic mb-12 max-w-xl mx-auto leading-relaxed animate-[fadeInUp_0.6s_ease-out_0.5s_both]">
            “This package launched our brand fast and professionally. The website and content worked together perfectly.” — Client Name
          </div>

          <div className="flex justify-center">
            <a
              href="/services#digital-launch"
              className="px-10 py-4 md:py-5 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-black font-semibold uppercase tracking-wide rounded-lg shadow-[0_4px_20px_rgba(255,0,90,0.35)] hover:shadow-[0_4px_30px_rgba(255,0,90,0.55)] hover:opacity-95 transition-all animate-[fadeInUp_0.6s_ease-out_0.6s_both]"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
      <div className="mt-12 md:mt-20">
        <Services />
      </div>
      <div className="mt-12 md:mt-24">
        <Showreel />
      </div>
      <div className="mt-16 md:mt-28">
        <Portfolio />
      </div>
      <div className="mt-20 md:mt-32">
        <About />
      </div>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent my-16 md:my-24" />
      <Contact />
    </main>
  )
}
