import { Resend } from "resend"
import { z } from "zod"
import {
  buildAlignmentCallInvitationEmail,
  CONTACT_REPLY_TO,
  CONTACT_SENDER,
} from "@/lib/contact-email"

const resend = new Resend(process.env.RESEND_API_KEY)
const CONTACT_AUTOMATION_SECRET = process.env.CONTACT_AUTOMATION_SECRET

const alignmentCallSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(200),
  brandName: z.string().trim().max(160).optional(),
  trigger: z.enum(["manual_approval", "nurture_24h"]).optional().default("manual_approval"),
})

const isAuthorized = (req: Request) => {
  const authHeader = req.headers.get("authorization")?.trim()
  const secretHeader = req.headers.get("x-automation-secret")?.trim()
  const token = authHeader?.startsWith("Bearer ") ? authHeader.slice(7).trim() : secretHeader

  return Boolean(CONTACT_AUTOMATION_SECRET && token && token === CONTACT_AUTOMATION_SECRET)
}

export async function POST(req: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return Response.json({ success: false, error: "Email service is not configured." }, { status: 500 })
    }

    if (!CONTACT_AUTOMATION_SECRET) {
      return Response.json({ success: false, error: "Automation secret is not configured." }, { status: 500 })
    }

    if (!isAuthorized(req)) {
      return Response.json({ success: false, error: "Unauthorized" }, { status: 401 })
    }

    const body = (await req.json()) as Record<string, unknown>
    const parsed = alignmentCallSchema.safeParse(body)

    if (!parsed.success) {
      return Response.json({ success: false, error: "Invalid payload." }, { status: 400 })
    }

    const { name, email, brandName, trigger } = parsed.data
    const emailContent = buildAlignmentCallInvitationEmail({ name, brandName })

    const response = await resend.emails.send({
      from: CONTACT_SENDER,
      to: email,
      replyTo: CONTACT_REPLY_TO,
      subject: emailContent.subject,
      text: emailContent.text,
      html: emailContent.html,
      tags: [
        { name: "flow", value: "alignment-call-invite" },
        { name: "trigger", value: trigger },
      ],
    })

    if (response.error) {
      console.error("Alignment call email failed", response.error)
      return Response.json({ success: false, error: "Email sending failed." }, { status: 500 })
    }

    return Response.json({ success: true, id: response.data?.id ?? null }, { status: 200 })
  } catch (error) {
    console.error("Alignment call route error", error)
    return Response.json({ success: false, error: "Server error" }, { status: 500 })
  }
}
