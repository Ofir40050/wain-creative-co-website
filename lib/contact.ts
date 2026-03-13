import { z } from "zod"

export const PROJECT_TYPE_OPTIONS = [
  "Web: Professional Hub ($3,500+)",
  "Web: Custom Ecosystem ($6,000+)",
  "Social: The Authority Strategy ($1,500/mo)",
  "Social: The Powerhouse Production ($2,500/mo)",
  "The Launch Package (Web + Social)",
  "Other",
] as const

export const BUDGET_OPTIONS = [
  "$500 - $1,500",
  "$1,500 - $3,000",
  "$3,000 - $6,000",
  "$6,000 - $10,000",
  "$10,000+",
  "Not sure yet",
] as const

export const TIMELINE_OPTIONS = [
  "ASAP (this month)",
  "Next 1-3 months",
  "Just exploring",
  "Not specified",
] as const

type VisibleContactField =
  | "name"
  | "email"
  | "projectType"
  | "referralSource"
  | "budgetRange"
  | "timeline"
  | "message"

export type ContactFieldErrors = Partial<Record<VisibleContactField, string>>

const projectTypeSchema = z
  .string()
  .trim()
  .refine((value) => PROJECT_TYPE_OPTIONS.includes(value as (typeof PROJECT_TYPE_OPTIONS)[number]), {
    message: "Select a valid project type.",
  })

const budgetSchema = z
  .string()
  .trim()
  .default("Not sure yet")
  .transform((value) => value || "Not sure yet")
  .refine((value) => BUDGET_OPTIONS.includes(value as (typeof BUDGET_OPTIONS)[number]), {
    message: "Select a valid budget range.",
  })

const timelineSchema = z
  .string()
  .trim()
  .default("Not specified")
  .transform((value) => value || "Not specified")
  .refine((value) => TIMELINE_OPTIONS.includes(value as (typeof TIMELINE_OPTIONS)[number]), {
    message: "Select a valid timeline.",
  })

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Add your name so we know who to reply to.")
    .max(120, "Keep your name under 120 characters."),
  email: z
    .string()
    .trim()
    .min(1, "Use a valid email so we can respond.")
    .email("Use a valid email so we can respond.")
    .max(200, "Keep your email under 200 characters."),
  projectType: projectTypeSchema,
  referralSource: z
    .string()
    .trim()
    .min(2, "Tell us how you heard about us.")
    .max(200, "Keep this under 200 characters."),
  budgetRange: budgetSchema,
  timeline: timelineSchema,
  message: z
    .string()
    .trim()
    .min(10, "Tell us a bit more about the project or goal.")
    .max(3000, "Keep your message under 3000 characters."),
  company: z
    .string()
    .max(0, "Invalid submission.")
    .optional()
    .default(""),
})

export type ContactFormValues = z.output<typeof contactFormSchema>

export type ContactApiResponse =
  | {
      success: true
    }
  | {
      success: false
      error: string
      fieldErrors?: ContactFieldErrors
    }

export const CONTACT_FORM_DEFAULT_VALUES: ContactFormValues = {
  name: "",
  email: "",
  projectType: PROJECT_TYPE_OPTIONS[0],
  referralSource: "",
  budgetRange: "Not sure yet",
  timeline: "Next 1-3 months",
  message: "",
  company: "",
}

export const getContactFieldErrors = (error: z.ZodError): ContactFieldErrors => {
  const fieldErrors: ContactFieldErrors = {}

  for (const issue of error.issues) {
    const field = issue.path[0]
    if (typeof field !== "string" || field === "company") continue
    if (!fieldErrors[field as VisibleContactField]) {
      fieldErrors[field as VisibleContactField] = issue.message
    }
  }

  return fieldErrors
}

export const coerceContactInput = (input: Record<string, unknown>) => ({
  name: String(input.name ?? input.fullName ?? "").trim(),
  email: String(input.email ?? "").trim(),
  projectType: String(input.projectType ?? "").trim(),
  referralSource: String(input.referralSource ?? input.howDidYouHear ?? "").trim(),
  budgetRange: String(input.budgetRange ?? input.budget ?? "").trim(),
  timeline: String(input.timeline ?? "").trim(),
  message: String(input.message ?? "").trim(),
  company: String(input.company ?? "").trim(),
})
