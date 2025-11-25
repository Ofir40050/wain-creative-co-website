import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

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

    if (error) {
      return new Response(JSON.stringify({ error: error.message }), { status: 500 })
    }

    return new Response(JSON.stringify({ ok: true }), { status: 200 })
  } catch {
    return new Response(JSON.stringify({ error: "Server error" }), { status: 500 })
  }
}