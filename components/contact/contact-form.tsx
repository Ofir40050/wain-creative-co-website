"use client"

import { useState, type FormEvent } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { sendGtagEvent, trackEvent } from "@/lib/analytics"
import {
  BUDGET_OPTIONS,
  CONTACT_FORM_DEFAULT_VALUES,
  PROJECT_TYPE_OPTIONS,
  TIMELINE_OPTIONS,
  contactFormSchema,
  getContactFieldErrors,
  type ContactApiResponse,
  type ContactFieldErrors,
  type ContactFormValues,
} from "@/lib/contact"
import { cn } from "@/lib/utils"

type ContactFormProps = {
  className?: string
  layout?: "full" | "compact"
  source: "contact_page_form" | "home_contact_form"
  submitLabel?: string
  titleId: string
}

export function ContactForm({
  className,
  layout = "full",
  source,
  submitLabel = "Start Project",
  titleId,
}: ContactFormProps) {
  const pathname = usePathname()
  const [formData, setFormData] = useState<ContactFormValues>(CONTACT_FORM_DEFAULT_VALUES)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [fieldErrors, setFieldErrors] = useState<ContactFieldErrors>({})

  const nameId = `${titleId}-name`
  const emailId = `${titleId}-email`
  const projectTypeId = `${titleId}-project-type`
  const budgetId = `${titleId}-budget`
  const timelineId = `${titleId}-timeline`
  const messageId = `${titleId}-message`
  const honeypotId = `${titleId}-company`

  const updateField = <K extends keyof ContactFormValues>(field: K, value: ContactFormValues[K]) => {
    setFormData((current) => ({ ...current, [field]: value }))
    if (field !== "company") {
      setFieldErrors((current) => ({ ...current, [field]: "" }))
    }
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsLoading(true)
    setError(null)

    const parsed = contactFormSchema.safeParse(formData)
    if (!parsed.success) {
      setFieldErrors(getContactFieldErrors(parsed.error))
      setIsLoading(false)
      return
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      })

      const data = (await response.json().catch(() => null)) as ContactApiResponse | null
      if (!response.ok || !data || !data.success) {
        const fieldErrors = data && !data.success ? data.fieldErrors : undefined
        const message = data && !data.success ? data.error : "Failed to send. Please try again."
        setFieldErrors(fieldErrors ?? {})
        throw new Error(message)
      }

      const page = pathname || "/"
      trackEvent("lead_submit", {
        projectType: parsed.data.projectType,
        budgetRange: parsed.data.budgetRange,
        source,
      })
      sendGtagEvent("submit_contact_form", { page, source })

      setIsSubmitted(true)
      setFormData(CONTACT_FORM_DEFAULT_VALUES)
      setFieldErrors({})
    } catch (submissionError) {
      const message =
        submissionError instanceof Error ? submissionError.message : "Failed to send. Please try again."
      setError(message)
    } finally {
      setIsLoading(false)
    }
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center text-center space-y-6 py-12"
        role="status"
        aria-live="polite"
      >
        <div className="flex h-20 w-20 items-center justify-center border border-white/10 bg-gradient-to-br from-green-500 to-emerald-700">
          <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-lg font-bold uppercase tracking-tight md:text-xl lg:text-2xl">
          Got it. Your project is in.
        </h3>
        <p className="max-w-md text-base leading-relaxed text-white/70 md:text-lg">
          We’ll review your details and get back to you within 24-48 hours with next steps.
        </p>
        <div className="flex flex-col items-center gap-3">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-white transition-colors hover:text-pink-400"
          >
            View Work
            <ArrowRight className="h-4 w-4" />
          </Link>
          <button
            type="button"
            onClick={() => setIsSubmitted(false)}
            className="border-b border-white/30 pb-1 text-xs uppercase tracking-[0.3em] transition-colors hover:border-white"
          >
            Start another project
          </button>
        </div>
      </motion.div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("space-y-7", className)}
      noValidate
      aria-labelledby={titleId}
      aria-busy={isLoading}
    >
      <h2 id={titleId} className="sr-only">
        Project brief form
      </h2>

      <div className="hidden" aria-hidden="true">
        <label htmlFor={honeypotId}>Company</label>
        <input
          id={honeypotId}
          type="text"
          tabIndex={-1}
          autoComplete="organization"
          value={formData.company}
          onChange={(event) => updateField("company", event.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
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
            onChange={(event) => updateField("name", event.target.value)}
            aria-invalid={Boolean(fieldErrors.name)}
            aria-describedby={fieldErrors.name ? `${nameId}-error` : undefined}
            className={cn(
              "w-full border bg-neutral-900/50 p-4 text-white placeholder:text-white/30 transition-all focus:border-purple-400 focus:outline-none focus:ring-1 focus:ring-purple-400/30",
              fieldErrors.name ? "border-red-400/60" : "border-white/15",
            )}
            placeholder="JOHN DOE"
          />
          {fieldErrors.name ? (
            <p id={`${nameId}-error`} className="text-sm text-red-400">
              {fieldErrors.name}
            </p>
          ) : null}
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
            onChange={(event) => updateField("email", event.target.value)}
            aria-invalid={Boolean(fieldErrors.email)}
            aria-describedby={fieldErrors.email ? `${emailId}-error` : undefined}
            className={cn(
              "w-full border bg-neutral-900/50 p-4 text-white placeholder:text-white/30 transition-all focus:border-purple-400 focus:outline-none focus:ring-1 focus:ring-purple-400/30",
              fieldErrors.email ? "border-red-400/60" : "border-white/15",
            )}
            placeholder="HELLO@EXAMPLE.COM"
          />
          {fieldErrors.email ? (
            <p id={`${emailId}-error`} className="text-sm text-red-400">
              {fieldErrors.email}
            </p>
          ) : null}
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm uppercase tracking-[0.18em] text-white/60 leading-[1.45]" htmlFor={projectTypeId}>
          Project Type
        </label>
        <select
          id={projectTypeId}
          required
          value={formData.projectType}
          onChange={(event) => updateField("projectType", event.target.value)}
          aria-invalid={Boolean(fieldErrors.projectType)}
          aria-describedby={fieldErrors.projectType ? `${projectTypeId}-error` : undefined}
          className={cn(
            "w-full appearance-none border bg-neutral-900/50 p-4 text-white transition-all focus:border-purple-400 focus:outline-none focus:ring-1 focus:ring-purple-400/30",
            fieldErrors.projectType ? "border-red-400/60" : "border-white/15",
          )}
        >
          {PROJECT_TYPE_OPTIONS.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
        {fieldErrors.projectType ? (
          <p id={`${projectTypeId}-error`} className="text-sm text-red-400">
            {fieldErrors.projectType}
          </p>
        ) : null}
      </div>

      {layout === "full" ? (
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm uppercase tracking-[0.18em] text-white/60 leading-[1.45]" htmlFor={budgetId}>
              Budget Range
            </label>
            <select
              id={budgetId}
              value={formData.budgetRange}
              onChange={(event) => updateField("budgetRange", event.target.value)}
              aria-invalid={Boolean(fieldErrors.budgetRange)}
              aria-describedby={fieldErrors.budgetRange ? `${budgetId}-error` : undefined}
              className={cn(
                "w-full appearance-none border bg-neutral-900/50 p-4 text-white transition-all focus:border-purple-400 focus:outline-none focus:ring-1 focus:ring-purple-400/30",
                fieldErrors.budgetRange ? "border-red-400/60" : "border-white/15",
              )}
            >
              {BUDGET_OPTIONS.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
            {fieldErrors.budgetRange ? (
              <p id={`${budgetId}-error`} className="text-sm text-red-400">
                {fieldErrors.budgetRange}
              </p>
            ) : null}
          </div>

          <div className="space-y-2">
            <label className="text-sm uppercase tracking-[0.18em] text-white/60 leading-[1.45]" htmlFor={timelineId}>
              Timeline
            </label>
            <select
              id={timelineId}
              value={formData.timeline}
              onChange={(event) => updateField("timeline", event.target.value)}
              aria-invalid={Boolean(fieldErrors.timeline)}
              aria-describedby={fieldErrors.timeline ? `${timelineId}-error` : undefined}
              className={cn(
                "w-full appearance-none border bg-neutral-900/50 p-4 text-white transition-all focus:border-purple-400 focus:outline-none focus:ring-1 focus:ring-purple-400/30",
                fieldErrors.timeline ? "border-red-400/60" : "border-white/15",
              )}
            >
              {TIMELINE_OPTIONS.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
            {fieldErrors.timeline ? (
              <p id={`${timelineId}-error`} className="text-sm text-red-400">
                {fieldErrors.timeline}
              </p>
            ) : null}
          </div>
        </div>
      ) : null}

      <div className="space-y-2">
        <label className="text-sm uppercase tracking-[0.18em] text-white/60 leading-[1.45]" htmlFor={messageId}>
          Message
        </label>
        <textarea
          id={messageId}
          required
          rows={layout === "full" ? 5 : 4}
          value={formData.message}
          onChange={(event) => updateField("message", event.target.value)}
          aria-invalid={Boolean(fieldErrors.message)}
          aria-describedby={fieldErrors.message ? `${messageId}-error` : undefined}
          className={cn(
            "w-full border bg-neutral-900/50 p-4 text-white placeholder:text-white/30 transition-all focus:border-purple-400 focus:outline-none focus:ring-1 focus:ring-purple-400/30",
            fieldErrors.message ? "border-red-400/60" : "border-white/15",
          )}
          placeholder="Tell us about your brand, goals, launch date and share any links (website, Instagram, refs)."
        />
        {fieldErrors.message ? (
          <p id={`${messageId}-error`} className="text-sm text-red-400">
            {fieldErrors.message}
          </p>
        ) : null}
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 py-5 font-bold uppercase tracking-[0.25em] text-black shadow-[0_10px_40px_rgba(0,0,0,0.6)] transition-all hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isLoading ? "Sending..." : submitLabel}
      </button>

      {error ? (
        <p className="text-sm text-red-400" aria-live="polite">
          {error}
        </p>
      ) : null}

      {layout === "full" ? (
        <div className="space-y-2 pt-2">
          <p className="text-sm uppercase tracking-[0.18em] text-white/60 leading-[1.45]">What happens next</p>
          <ul className="space-y-1 text-xs leading-relaxed text-white/70 md:text-sm">
            <li>1. We review your request within 24-48 hours.</li>
            <li>2. Quick call to align scope, timeline, and goals.</li>
            <li>3. You get a clear proposal and launch plan.</li>
          </ul>
        </div>
      ) : null}

      <p className="text-xs leading-relaxed text-white/50">
        By submitting, you agree to be contacted about your project. We never share your details.
      </p>
    </form>
  )
}
