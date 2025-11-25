import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)
const NOTION_TOKEN = process.env.NOTION_TOKEN
const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID

const createNotionLead = async (payload: {
  name: string
  email: string
  projectType?: string
  budgetRange?: string
  message: string
}) => {
  if (!NOTION_TOKEN || !NOTION_DATABASE_ID) return false

  const { name, email, projectType, budgetRange, message } = payload
  const body = {
    parent: { database_id: NOTION_DATABASE_ID },
    properties: {
      Name: {
        title: [{ text: { content: name || "Unknown" } }],
      },
      Email: { email },
      "Project Type": {
        rich_text: [{ text: { content: projectType || "N/A" } }],
      },
      Budget: {
        rich_text: [{ text: { content: budgetRange || "N/A" } }],
      },
      Message: {
        rich_text: [{ text: { content: message || "" } }],
      },
      Source: {
        rich_text: [{ text: { content: "Contact Form" } }],
      },
    },
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
    const body = await req.json()
    const { name, email, projectType, budgetRange, message } = body

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), { status: 400 })
    }

    const { error } = await resend.emails.send({
      from: "Wain Creative Co <contact@waincreative.com>",
      to: ["contact@waincreative.com"],
      replyTo: email,
      subject: `New Project Request from ${name}`,
      html: `
        <div style="font-family: Inter, Arial, sans-serif; color:#111; line-height:1.6;">
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${projectType ? `<p><strong>Project Type:</strong> ${projectType}</p>` : ""}
          ${budgetRange ? `<p><strong>Budget:</strong> ${budgetRange}</p>` : ""}
          <p><strong>Message:</strong></p>
          <p style="white-space:pre-wrap;">${message}</p>
        </div>
      `,
    })

    let notionOk = false
    try {
      notionOk = await createNotionLead({ name, email, projectType, budgetRange, message })
    } catch (err) {
      console.error("Notion lead error", err)
    }

    if (error) {
      return new Response(JSON.stringify({ error: error.message }), { status: 500 })
    }

    return new Response(JSON.stringify({ ok: true, notion: notionOk }), { status: 200 })
  } catch (err) {
    console.error("Contact API error", err)
    return new Response(JSON.stringify({ error: "Server error" }), { status: 500 })
  }
}
