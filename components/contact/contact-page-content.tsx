"use client"

import { useState, type FormEvent } from "react"
import { motion } from "framer-motion"
import { Instagram, Linkedin } from "lucide-react"

type FAQItem = {
  question: string
  answer: string
}

type ContactPageContentProps = {
  faqs: FAQItem[]
}

export function ContactPageContent({ faqs }: ContactPageContentProps) {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Web Design and Development",
    budgetRange: "Not sure yet",
    message: "",
  })

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = "Add your name so we know who to reply to."
    }

    if (!formData.email.trim() || !/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(formData.email)) {
      newErrors.email = "Use a valid email so we can respond."
    }

    if (!formData.message.trim()) {
      newErrors.message = "Tell us about the project or goal."
    }

    setFieldErrors(newErrors)
    if (Object.keys(newErrors).length > 0) {
      setIsLoading(false)
      return
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error((data as any)?.error || "Something went wrong")
      }

      setIsSubmitted(true)
      setFormData({
        name: "",
        email: "",
        projectType: "Web Design and Development",
        budgetRange: "Not sure yet",
        message: "",
      })
    } catch (err: any) {
      setError(err?.message || "Failed to send. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const nameId = "contact-name"
  const emailId = "contact-email"
  const projectTypeId = "contact-project-type"
  const budgetId = "contact-budget"
  const messageId = "contact-message"

  return (
    <>
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
        {/* Left Column: Info */}
        <div>
          <p className="text-sm uppercase tracking-[0.18em] text-white/60 mb-6 leading-[1.45]">
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
              <h3 className="text-sm uppercase tracking-[0.18em] text-white/60 leading-[1.45] mb-3">
                Email
              </h3>
              <a
                href="mailto:contact@waincreative.com"
                className="text-2xl md:text-3xl font-light text-white hover:text-purple-400 transition-colors"
              >
                contact@waincreative.com
              </a>
              <p className="text-white/60 leading-relaxed text-base md:text-lg mt-2">
                Average response time: within 24-48 hours.
              </p>
            </div>

            {/* WhatsApp Business */}
            <div>
              <h3 className="text-sm uppercase tracking-[0.18em] text-white/60 leading-[1.45] mb-3">
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
              <h3 className="text-sm uppercase tracking-[0.18em] text-white/60 leading-[1.45] mb-4">
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
            <div className="group relative p-7 bg-neutral-950 border border-white/10 rounded-none hover:border-white/20 hover:bg-white/5 transition-all overflow-hidden">
              <p className="text-white/60 leading-relaxed text-base md:text-lg">
                Now booking new projects. If you have a launch date or deadline, mention it so we can prioritize correctly.
              </p>
              <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="bg-neutral-950 p-7 md:p-10 lg:p-12 border border-white/10 rounded-none relative overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.6)]">
          {/* Decorative Gradient */}
          <div className="absolute -top-12 -right-12 w-72 h-72 bg-purple-900/25 blur-[110px] pointer-events-none" />

          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              className="h-full flex flex-col items-center justify-center text-center space-y-6 py-20 relative z-10"
              aria-live="polite"
            >
              <div className="w-20 h-20 rounded-none bg-gradient-to-br from-green-500 to-emerald-700 flex items-center justify-center border border-white/10">
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
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
            <form
              onSubmit={handleSubmit}
              className="space-y-7 relative z-10"
              noValidate
              aria-labelledby="contact-form-title"
              aria-busy={isLoading}
            >
              <h2 id="contact-form-title" className="sr-only">
                Contact form
              </h2>

              <div className="space-y-2">
                <label className="text-sm uppercase tracking-[0.18em] text-white/60 leading-[1.45]" htmlFor={nameId}>
                  Name
                </label>
                <input
                  id={nameId}
                  required
                  type="text"
                  autoComplete="name"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value })
                    setFieldErrors((prev) => ({ ...prev, name: "" }))
                  }}
                  aria-invalid={!!fieldErrors.name}
                  aria-describedby={fieldErrors.name ? `${nameId}-error` : undefined}
                  className={`w-full bg-neutral-900/50 border rounded-none p-4 text-white focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400/30 transition-all placeholder:text-white/30 ${
                    fieldErrors.name ? "border-red-400/60" : "border-white/15"
                  }`}
                  placeholder="JOHN DOE"
                />
                {fieldErrors.name && (
                  <p id={`${nameId}-error`} className="text-red-400 text-sm">
                    {fieldErrors.name}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-sm uppercase tracking-[0.18em] text-white/60 leading-[1.45]" htmlFor={emailId}>
                  Email
                </label>
                <input
                  id={emailId}
                  required
                  type="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value })
                    setFieldErrors((prev) => ({ ...prev, email: "" }))
                  }}
                  aria-invalid={!!fieldErrors.email}
                  aria-describedby={fieldErrors.email ? `${emailId}-error` : undefined}
                  className={`w-full bg-neutral-900/50 border rounded-none p-4 text-white focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400/30 transition-all placeholder:text-white/30 ${
                    fieldErrors.email ? "border-red-400/60" : "border-white/15"
                  }`}
                  placeholder="HELLO@EXAMPLE.COM"
                />
                {fieldErrors.email && (
                  <p id={`${emailId}-error`} className="text-red-400 text-sm">
                    {fieldErrors.email}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-sm uppercase tracking-[0.18em] text-white/60 leading-[1.45]" htmlFor={projectTypeId}>
                  Project Type
                </label>
                <select
                  id={projectTypeId}
                  required
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full bg-neutral-900/50 border border-white/15 rounded-none p-4 text-white focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400/30 transition-all appearance-none"
                >
                  <option>Web Design and Development</option>
                  <option>Social Media Strategy and Management</option>
                  <option>Content Production and Editing</option>
                  <option>Creator or Artist Digital Services</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm uppercase tracking-[0.18em] text-white/60 leading-[1.45]" htmlFor={budgetId}>
                  Budget Range
                </label>
                <select
                  id={budgetId}
                  value={formData.budgetRange}
                  onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                  className="w-full bg-neutral-900/50 border border-white/15 rounded-none p-4 text-white focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400/30 transition-all appearance-none"
                >
                  <option>$500 - $1,500</option>
                  <option>$1,500 - $3,000</option>
                  <option>$3,000 - $6,000</option>
                  <option>$6,000 - $10,000</option>
                  <option>$10,000+</option>
                  <option>Not sure yet</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm uppercase tracking-[0.18em] text-white/60 leading-[1.45]" htmlFor={messageId}>
                  Message
                </label>
                <textarea
                  id={messageId}
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value })
                    setFieldErrors((prev) => ({ ...prev, message: "" }))
                  }}
                  aria-invalid={!!fieldErrors.message}
                  aria-describedby={fieldErrors.message ? `${messageId}-error` : undefined}
                  className={`w-full bg-neutral-900/50 border rounded-none p-4 text-white focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400/30 transition-all placeholder:text-white/30 ${
                    fieldErrors.message ? "border-red-400/60" : "border-white/15"
                  }`}
                  placeholder="TELL US WHAT YOU NEED, YOUR GOAL, AND YOUR TIMELINE..."
                />
                {fieldErrors.message && (
                  <p id={`${messageId}-error`} className="text-red-400 text-sm">
                    {fieldErrors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full rounded-none bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-black font-bold uppercase tracking-[0.25em] py-5 hover:opacity-90 transition-all shadow-[0_10px_40px_rgba(0,0,0,0.6)] disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isLoading ? "Sending..." : "Send Message"}
              </button>

              {error && (
                <p className="text-red-400 text-sm" aria-live="polite">
                  {error}
                </p>
              )}

              <div className="space-y-2 pt-2">
                <p className="text-sm uppercase tracking-[0.18em] text-white/60 leading-[1.45]">
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

      {/* FAQ / additional content for SEO strength */}
      <section
        className="max-w-6xl mx-auto mt-20 md:mt-24 border-t border-white/10 pt-12 md:pt-16"
        aria-labelledby="contact-faq-heading"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 space-y-4">
            <p className="text-sm uppercase tracking-[0.18em] text-white/60 leading-[1.45]">
              FAQs & Expectations
            </p>
            <h2 id="contact-faq-heading" className="text-3xl md:text-4xl font-bold uppercase tracking-tight leading-[1.05]">
              What to expect when we work together
            </h2>
            <p className="text-white/70 leading-relaxed text-base">
              Transparent scope, timelines, and deliverables so you know exactly how we’ll launch your site or campaign.
            </p>
          </div>
          <div className="lg:col-span-2">
            <ul className="space-y-6">
              {faqs.map((faq) => (
                <li key={faq.question} className="p-6 bg-neutral-950 border border-white/10 hover:border-white/20 transition-colors">
                  <p className="text-lg md:text-xl font-semibold text-white mb-2">{faq.question}</p>
                  <p className="text-white/70 leading-relaxed text-base">{faq.answer}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
