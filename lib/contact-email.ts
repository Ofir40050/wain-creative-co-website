import "server-only"

import { BRAND_EMAIL, SITE_NAME } from "@/lib/site-config"

export const CONTACT_SENDER = `Ofir Wainboim | ${SITE_NAME} <${BRAND_EMAIL}>`
export const CONTACT_REPLY_TO = BRAND_EMAIL
export const WHATSAPP_BUSINESS_URL = "https://wa.me/12135895458"

const getFirstName = (name: string) => name.trim().split(/\s+/)[0] || "there"
const getDisplayName = (name: string) => name.trim() || "there"

const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;")

type AlignmentCallEmailInput = {
  name: string
  brandName?: string
}

export const buildInitialContactAutoresponderEmail = (name: string) => {
  const firstName = getFirstName(name)
  const subject = "Got your project brief – Wain Creative Co"
  const text = [
    `Hey ${firstName},`,
    "",
    "Thanks for reaching out and sharing your project with Wain Creative Co.",
    "We just got your form and will review it within the next 24 hours.",
    "",
    "If it looks like a good fit, we’ll follow up with:",
    "• a few clarifying questions, or",
    "• a short alignment call to map the scope and launch.",
    "",
    "If you need to add anything in the meantime, you can reply directly to this email.",
    "",
    "Talk soon,",
    "Wain Creative Co",
    "contact@waincreative.com",
  ].join("\n")

  const html = `
    <div style="margin:0;padding:32px 20px;background:#0d0d0d;color:#f5f5f5;font-family:Arial,sans-serif;">
      <div style="max-width:640px;margin:0 auto;border:1px solid rgba(255,255,255,0.08);background:#111111;padding:32px;">
        <p style="margin:0 0 20px;font-size:16px;line-height:1.7;">Hey ${escapeHtml(firstName)},</p>
        <p style="margin:0 0 18px;font-size:16px;line-height:1.7;color:rgba(255,255,255,0.78);">
          Thanks for reaching out and sharing your project with Wain Creative Co. We just got your form and will review it within the next 24 hours.
        </p>
        <p style="margin:0 0 18px;font-size:16px;line-height:1.7;color:rgba(255,255,255,0.78);">
          If it looks like a good fit, we’ll follow up with a few clarifying questions or a short alignment call to map the scope and launch.
        </p>
        <p style="margin:0;font-size:16px;line-height:1.8;color:rgba(255,255,255,0.78);">
          If you need to add anything in the meantime, you can reply directly to this email.
          <br /><br />
          Talk soon,<br />
          Wain Creative Co<br />
          contact@waincreative.com
        </p>
      </div>
    </div>
  `

  return { subject, text, html }
}

export const buildAlignmentCallInvitationEmail = ({ name, brandName }: AlignmentCallEmailInput) => {
  const displayName = getDisplayName(name)
  const safeBrandName = brandName?.trim() || "Your Brand"

  const subject = `[WAIN] Strategic Review Complete – Next Steps for ${safeBrandName}`
  const text = [
    `Hi ${displayName},`,
    "",
    "I’ve completed the strategic review of your inquiry. Your goals align perfectly with our high-fidelity approach at WAIN Creative, and I see a clear path to scaling your digital authority.",
    "",
    'The next step is "The Blueprint" – a 15-minute alignment call to finalize your scope, timeline, and production requirements.',
    "",
    "To get started, please reply to this email with 2-3 windows of time that work best for you next week.",
    "",
    "Alternatively, for quicker coordination, you can message our business line directly here:",
    WHATSAPP_BUSINESS_URL,
    "",
    "During this call, we’ll discuss how to leverage our core pillars—mission-critical discipline, 13K+ organic growth frameworks, and studio-grade production—to move your numbers.",
    "",
    "Looking forward to building your next launch.",
    "",
    "Stay sharp,",
    "",
    "Ofir Wainboim",
    "Founder, WAIN Creative Co. | Los Angeles",
  ].join("\n")

  const html = `
    <div style="margin:0;padding:32px 20px;background:#0d0d0d;color:#f5f5f5;font-family:Arial,sans-serif;">
      <div style="max-width:640px;margin:0 auto;border:1px solid rgba(255,255,255,0.08);background:#111111;padding:32px;">
        <p style="margin:0 0 20px;font-size:16px;line-height:1.7;">Hi ${escapeHtml(displayName)},</p>
        <p style="margin:0 0 18px;font-size:16px;line-height:1.7;color:rgba(255,255,255,0.78);">
          I’ve completed the strategic review of your inquiry. Your goals align perfectly with our high-fidelity approach at WAIN Creative, and I see a clear path to scaling your digital authority.
        </p>
        <p style="margin:0 0 18px;font-size:16px;line-height:1.7;color:rgba(255,255,255,0.78);">
          The next step is <strong>"The Blueprint"</strong> – a 15-minute alignment call to finalize your scope, timeline, and production requirements.
        </p>
        <p style="margin:0 0 16px;font-size:16px;line-height:1.7;color:rgba(255,255,255,0.78);">
          To get started, please reply to this email with 2-3 windows of time that work best for you next week.
        </p>
        <p style="margin:0 0 24px;">
          <span style="display:block;margin:0 0 14px;font-size:16px;line-height:1.7;color:rgba(255,255,255,0.78);">
            Alternatively, for quicker coordination, you can message our business line directly here:
          </span>
          <a href="${escapeHtml(WHATSAPP_BUSINESS_URL)}" style="color:#f5f5f5;text-decoration:underline;font-size:16px;line-height:1.7;">
            ${escapeHtml(WHATSAPP_BUSINESS_URL)}
          </a>
        </p>
        <p style="margin:0 0 18px;font-size:16px;line-height:1.7;color:rgba(255,255,255,0.78);">
          During this call, we’ll discuss how to leverage our core pillars—mission-critical discipline, 13K+ organic growth frameworks, and studio-grade production—to move your numbers.
        </p>
        <p style="margin:0 0 20px;font-size:16px;line-height:1.7;color:rgba(255,255,255,0.78);">
          Looking forward to building your next launch.
        </p>
        <p style="margin:0;font-size:16px;line-height:1.8;">
          Stay sharp,<br /><br />
          Ofir Wainboim<br />
          Founder, WAIN Creative Co. | Los Angeles
        </p>
      </div>
    </div>
  `

  return { subject, text, html }
}
