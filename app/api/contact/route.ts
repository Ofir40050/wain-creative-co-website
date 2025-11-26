import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)
const NOTION_TOKEN = process.env.NOTION_TOKEN
const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID

const createNotionLead = async (payload: {
  name: string
  email: string
  projectType?: string
  budget?: string
  timeline?: string
  message: string
}) => {
  if (!NOTION_TOKEN || !NOTION_DATABASE_ID) return false

  const { name, email, projectType, budget, timeline, message } = payload
  const serviceOption = (() => {
    const normalized = (projectType || "").toLowerCase()
    if (normalized.includes("web")) return "Web Design"
    if (normalized.includes("social")) return "Social & Content"
    if (normalized.includes("video")) return "Video Editing"
    if (normalized.includes("artist") || normalized.includes("creator")) return "Artist Services"
    return "Other"
  })()

  const properties: Record<string, any> = {
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

  if (budget) {
    properties.Budget = {
      rich_text: [{ text: { content: budget } }],
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
    const contentType = req.headers.get("content-type")?.toLowerCase() || ""
    const body = contentType.includes("application/json") ? await req.json() : Object.fromEntries((await req.formData()).entries())

    const fullName = (body.fullName || body.name || "").toString().trim()
    const email = (body.email || "").toString().trim()
    const projectType = (body.projectType || "").toString().trim()
    const budget = (body.budget || body.budgetRange || "").toString().trim()
    const timeline = (body.timeline || "").toString().trim()
    const message = (body.message || "").toString().trim()

    if (!fullName || !email || !projectType || !budget || !message) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), { status: 400 })
    }

    const timelineText = timeline || "Not specified"
    const firstName = fullName.split(" ")[0] || "there"

    const internal = await resend.emails.send({
      from: "Wain Creative Co <contact@waincreative.com>",
      to: ["wain@waincreative.com", "contact@waincreative.com"],
      replyTo: email,
      subject: `New project inquiry – ${fullName}`,
      text: [
        "New project brief from the website:",
        "",
        `• Name: ${fullName}`,
        `• Email: ${email}`,
        `• Project type: ${projectType}`,
        `• Budget: ${budget}`,
        `• Timeline: ${timelineText}`,
        "",
        "Message:",
        message,
        "",
        "- Wain Creative Co website",
      ].join("\n"),
    })

    const autoresponse = await resend.emails.send({
      from: "Wain Creative Co <contact@waincreative.com>",
      to: email,
      replyTo: "contact@waincreative.com",
      subject: "Got your project brief – Wain Creative Co",
      text: [
        `Hey ${firstName},`,
        "",
        "Thanks for reaching out and sharing your project with Wain Creative Co.",
        "We just got your form and will review it within the next 24–48 hours.",
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
    })

    if (internal.error || autoresponse.error) {
      console.error("Email send failed", internal.error || autoresponse.error)
      return new Response(JSON.stringify({ error: "Email sending failed" }), { status: 500 })
    }

    try {
      await createNotionLead({ name: fullName, email, projectType, budget, timeline, message })
    } catch (err) {
      console.error("Notion lead error", err)
    }

    return new Response(JSON.stringify({ success: true }), { status: 200 })
  } catch (err) {
    console.error("Contact API error", err)
    return new Response(JSON.stringify({ error: "Server error" }), { status: 500 })
  }
}
