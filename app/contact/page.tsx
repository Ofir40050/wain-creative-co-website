"use client"

import { useState, type FormEvent } from "react"
import { motion } from "framer-motion"
import { Instagram, Linkedin } from "lucide-react"

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  return (
    <main className="relative min-h-screen pt-28 md:pt-32 pb-24 px-6 md:px-10 lg:px-16 bg-[#0D0D0D] overflow-hidden">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-to-br from-purple-600/25 via-pink-500/15 to-orange-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/3 right-[-120px] h-[420px] w-[420px] rounded-full bg-gradient-to-br from-orange-500/20 via-pink-500/10 to-purple-600/20 blur-[110px]" />
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
        {/* Left Column: Info */}
        <div>
          <p className="text-[10px] md:text-xs uppercase tracking-[0.35em] text-white/50 mb-6">
            Start Project
          </p>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight leading-[0.9] mb-8">
            Let’s Build <br />
            Something <br />
            Iconic
          </h1>

          <div className="h-px w-40 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 mb-10" />

          <p className="text-white/70 leading-relaxed text-base md:text-lg max-w-xl mb-12">
            Tell us what you’re building. Whether it’s a premium website, a social system, or a content rollout, we’ll reply with a clear plan, timeline, and next steps.
          </p>

          <div className="space-y-10">
            {/* Email */}
            <div>
              <h3 className="text-[10px] md:text-xs uppercase tracking-[0.35em] text-white/50 mb-3">
                Email
              </h3>
              <a
                href="mailto:hello@waincreative.com"
                className="text-2xl md:text-3xl font-light text-white hover:text-purple-400 transition-colors"
              >
                hello@waincreative.com
              </a>
              <p className="text-white/60 leading-relaxed text-base md:text-lg mt-2">
                Average response time: within 24-48 hours.
              </p>
            </div>

            {/* WhatsApp Business */}
            <div>
              <h3 className="text-[10px] md:text-xs uppercase tracking-[0.35em] text-white/50 mb-3">
                WhatsApp Business
              </h3>
              <a
                href="https://wa.me/12135895458"
                target="_blank"
                rel="noreferrer"
                className="text-xl md:text-2xl font-light text-white hover:text-purple-400 transition-colors"
              >
                +1 (213) 589-5458
              </a>
              <p className="text-white/60 leading-relaxed text-base md:text-lg mt-2">
                Fast coordination for moving parts and tight timelines.
              </p>
            </div>

            {/* Socials */}
            <div>
              <h3 className="text-[10px] md:text-xs uppercase tracking-[0.35em] text-white/50 mb-4">
                Socials
              </h3>

              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                <a
                  href="https://www.instagram.com/waincreativeco/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white hover:text-purple-400 transition-colors inline-flex items-center gap-3"
                >
                  <Instagram className="w-5 h-5" />
                  <span className="text-sm uppercase tracking-widest">
                    Instagram
                  </span>
                </a>

                <a
                  href="https://www.linkedin.com/in/wainmusic/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white hover:text-purple-400 transition-colors inline-flex items-center gap-3"
                >
                  <Linkedin className="w-5 h-5" />
                  <span className="text-sm uppercase tracking-widest">
                    LinkedIn
                  </span>
                </a>

                <div className="text-white/40 inline-flex items-center gap-3 cursor-not-allowed">
                  <span className="font-bold text-lg">Tk</span>
                  <span className="text-sm uppercase tracking-widest">
                    TikTok - coming soon
                  </span>
                </div>
              </div>
            </div>

            {/* Availability Note */}
            <div className="group relative p-7 bg-neutral-950 border border-white/10 rounded-xl hover:border-white/20 hover:bg-white/5 transition-all overflow-hidden">
              <p className="text-white/60 leading-relaxed text-base md:text-lg">
                Now booking new projects. If you have a launch date or deadline, mention it so we can prioritize correctly.
              </p>
              <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="bg-neutral-950 p-7 md:p-10 lg:p-12 border border-white/10 rounded-2xl relative overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.6)]">
          {/* Decorative Gradient */}
          <div className="absolute -top-12 -right-12 w-72 h-72 bg-purple-900/25 blur-[110px] pointer-events-none" />

          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              className="h-full flex flex-col items-center justify-center text-center space-y-6 py-20 relative z-10"
            >
              <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-green-500 to-emerald-700 flex items-center justify-center border border-white/10">
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>

              <h3 className="font-bold uppercase tracking-tight text-lg md:text-xl lg:text-2xl">
                Request received
              </h3>

              <p className="text-white/70 leading-relaxed text-base md:text-lg max-w-sm">
                Thanks for reaching out. We’ll review your request and reply with next steps.
              </p>

              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-6 text-xs uppercase tracking-[0.3em] border-b border-white/30 pb-1 hover:border-white transition-colors"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-7 relative z-10">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-[0.3em] text-white/50">
                  Name
                </label>
                <input
                  required
                  type="text"
                  className="w-full bg-neutral-900/50 border border-white/15 rounded-lg p-4 text-white focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400/30 transition-all placeholder:text-white/30"
                  placeholder="JOHN DOE"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-[0.3em] text-white/50">
                  Email
                </label>
                <input
                  required
                  type="email"
                  className="w-full bg-neutral-900/50 border border-white/15 rounded-lg p-4 text-white focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400/30 transition-all placeholder:text-white/30"
                  placeholder="HELLO@EXAMPLE.COM"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-[0.3em] text-white/50">
                  Project Type
                </label>
                <select className="w-full bg-neutral-900/50 border border-white/15 rounded-lg p-4 text-white focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400/30 transition-all appearance-none">
                  <option>Web Design and Development</option>
                  <option>Social Media Strategy and Management</option>
                  <option>Content Production and Editing</option>
                  <option>Creator or Artist Digital Services</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-[0.3em] text-white/50">
                  Budget Range
                </label>
                <select className="w-full bg-neutral-900/50 border border-white/15 rounded-lg p-4 text-white focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400/30 transition-all appearance-none">
                  <option>$500 - $1,500</option>
                  <option>$1,500 - $3,000</option>
                  <option>$3,000 - $6,000</option>
                  <option>$6,000 - $10,000</option>
                  <option>$10,000+</option>
                  <option>Not sure yet</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-[0.3em] text-white/50">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  className="w-full bg-neutral-900/50 border border-white/15 rounded-lg p-4 text-white focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400/30 transition-all placeholder:text-white/30"
                  placeholder="TELL US WHAT YOU NEED, YOUR GOAL, AND YOUR TIMELINE..."
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-black font-bold uppercase tracking-[0.25em] py-5 hover:opacity-90 transition-all shadow-[0_10px_40px_rgba(0,0,0,0.6)]"
              >
                Send Message
              </button>

              <div className="space-y-2 pt-2">
                <p className="text-[10px] md:text-xs uppercase tracking-[0.35em] text-white/50">
                  What happens next
                </p>
                <ul className="space-y-1 text-white/70 text-xs md:text-sm leading-relaxed">
                  <li>1. We review your request within 24-48 hours.</li>
                  <li>2. Quick call to align scope, timeline, and vibe.</li>
                  <li>3. You get a clear proposal and launch plan.</li>
                </ul>
              </div>

              <p className="text-white/50 text-xs leading-relaxed">
                By submitting, you agree to be contacted about your project. We never share your details.
              </p>
            </form>
          )}
        </div>
      </div>
    </main>
  )
}