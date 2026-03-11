import { Resend } from "resend"
import {
  coerceContactInput,
  contactFormSchema,
  getContactFieldErrors,
  type ContactFormValues,
} from "@/lib/contact"

const resend = new Resend(process.env.RESEND_API_KEY)
const NOTION_TOKEN = process.env.NOTION_TOKEN
const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000
const RATE_LIMIT_MAX_REQUESTS = 5
const requestLog = new Map<string, number[]>()

const getClientKey = (req: Request) => {
  const forwardedFor = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim()
  const realIp = req.headers.get("x-real-ip")?.trim()
  const userAgent = req.headers.get("user-agent")?.trim()
  return `${forwardedFor || realIp || "unknown"}:${userAgent || "unknown"}`
}

const isRateLimited = (clientKey: string) => {
  const now = Date.now()
  const recentRequests = (requestLog.get(clientKey) || []).filter((timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS)

  if (recentRequests.length >= RATE_LIMIT_MAX_REQUESTS) {
    requestLog.set(clientKey, recentRequests)
    return true
  }

  recentRequests.push(now)
  requestLog.set(clientKey, recentRequests)
  return false
}

const createNotionLead = async (payload: ContactFormValues) => {
  if (!NOTION_TOKEN || !NOTION_DATABASE_ID) return false

  const { name, email, projectType, budgetRange, timeline, message } = payload
  const serviceOption = (() => {
    const normalized = (projectType || "").toLowerCase()
    if (normalized.includes("web")) return "Web Design"
    if (normalized.includes("social")) return "Social & Content"
    if (normalized.includes("video")) return "Video Editing"
    if (normalized.includes("artist") || normalized.includes("creator")) return "Artist Services"
    return "Other"
  })()

  const properties: Record<string, unknown> = {
    Name: {
      title: [{ text: { content: name || "Unknown" } }],
    },
    Email: { email },
    Service: {
      select: { name: serviceOption },
    },
    Message: {
      rich_text: [{ text: { content: message || "" } }],
    },
    Source: {
      select: { name: "Website Contact Form" },
    },
    Status: {
      select: { name: "New" },
    },
    "Created At": {
      date: { start: new Date().toISOString() },
    },
  }

  if (budgetRange) {
    properties.Budget = {
      rich_text: [{ text: { content: budgetRange } }],
    }
  }

  if (timeline) {
    properties.Timeline = {
      rich_text: [{ text: { content: timeline } }],
    }
  }

  const body = {
    parent: { database_id: NOTION_DATABASE_ID },
    properties,
  }

  const res = await fetch("https://api.notion.com/v1/pages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${NOTION_TOKEN}`,
      "Notion-Version": "2022-06-28",
    },
    body: JSON.stringify(body),
  })

  return res.ok
}

export async function POST(req: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return Response.json({ success: false, error: "Email service is not configured." }, { status: 500 })
    }

    const clientKey = getClientKey(req)
    if (isRateLimited(clientKey)) {
      return Response.json(
        { success: false, error: "Too many requests. Please wait a few minutes and try again." },
        { status: 429 },
      )
    }

    const contentType = req.headers.get("content-type")?.toLowerCase() || ""
    const body = contentType.includes("application/json")
      ? ((await req.json()) as Record<string, unknown>)
      : Object.fromEntries((await req.formData()).entries())

    const coercedBody = coerceContactInput(body)
    if (coercedBody.company) {
      return Response.json({ success: true }, { status: 200 })
    }

    const parsed = contactFormSchema.safeParse(coercedBody)
    if (!parsed.success) {
      return Response.json(
        {
          success: false,
          error: "Please review the highlighted fields.",
          fieldErrors: getContactFieldErrors(parsed.error),
        },
        { status: 400 },
      )
    }

    const { name, email, projectType, budgetRange, timeline, message } = parsed.data
    const timelineText = timeline || "Not specified"
    const firstName = name.split(" ")[0] || "there"

    const [internal, autoresponse] = await Promise.all([
      resend.emails.send({
        from: "Wain Creative Co <contact@waincreative.com>",
        to: ["wain@waincreative.com", "contact@waincreative.com"],
        replyTo: email,
        subject: `New project inquiry – ${name}`,
        text: [
          "New project brief from the website:",
          "",
          `• Name: ${name}`,
          `• Email: ${email}`,
          `• Project type: ${projectType}`,
          `• Budget: ${budgetRange}`,
          `• Timeline: ${timelineText}`,
          "",
          "Message:",
          message,
          "",
          "- Wain Creative Co website",
        ].join("\n"),
      }),
      resend.emails.send({
        from: "Wain Creative Co <contact@waincreative.com>",
        to: email,
        replyTo: "contact@waincreative.com",
        subject: "Got your project brief – Wain Creative Co",
        text: [
          `Hey ${firstName},`,
          "",
          "Thanks for reaching out and sharing your project with Wain Creative Co.",
          "We just got your form and will review it within the next 24-48 hours.",
          "",
          "If it looks like a good fit, we’ll follow up with:",
          "• a few clarifying questions, or",
          "• a short call to map the project and your launch.",
          "",
          "If you need to add anything in the meantime, you can reply directly to this email.",
          "",
          "Talk soon,",
          "Wain Creative Co",
          "contact@waincreative.com",
        ].join("\n"),
      }),
    ])

    if (internal.error || autoresponse.error) {
      console.error("Email send failed", internal.error || autoresponse.error)
      return Response.json({ success: false, error: "Email sending failed" }, { status: 500 })
    }

    try {
      await createNotionLead(parsed.data)
    } catch (err) {
      console.error("Notion lead error", err)
    }

    return Response.json({ success: true }, { status: 200 })
  } catch (err) {
    console.error("Contact API error", err)
    return Response.json({ success: false, error: "Server error" }, { status: 500 })
  }
}
