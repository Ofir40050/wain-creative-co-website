"use client"

import Link from "next/link"
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react"

import { cn } from "@/lib/utils"

type Intent = "start-project" | "view-work" | "book-call"
type Variant = "primary" | "secondary" | "outline" | "ghost"
type Size = "md" | "sm"

const INTENT_LABELS: Record<Intent, string> = {
  "start-project": "Start a Project",
  "view-work": "View Work",
  "book-call": "Book a Call",
}

const INTENT_VARIANTS: Record<Intent, Variant> = {
  "start-project": "primary",
  "view-work": "secondary",
  "book-call": "primary",
}

const VARIANT_STYLES: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-black shadow-[0_4px_20px_rgba(255,0,90,0.35)] hover:shadow-[0_4px_30px_rgba(255,0,90,0.55)] border border-white/0",
  secondary:
    "bg-white/5 border border-white/15 text-white hover:bg-white/10 hover:border-white/30 backdrop-blur-sm",
  outline: "border border-white/30 text-white hover:border-white/50 hover:bg-white/5",
  ghost: "text-white/80 hover:text-white",
}

const SIZE_STYLES: Record<Size, string> = {
  md: "px-8 py-4 text-sm",
  sm: "px-5 py-3 text-xs md:text-sm",
}

type ButtonProps = {
  intent?: Intent
  variant?: Variant
  href?: string
  icon?: ReactNode
  iconPosition?: "left" | "right"
  size?: Size
  className?: string
  children?: ReactNode
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children">

export function Button({
  intent,
  variant,
  href,
  icon,
  iconPosition = "right",
  size = "md",
  className,
  children,
  ...rest
}: ButtonProps) {
  const resolvedVariant = variant ?? (intent ? INTENT_VARIANTS[intent] : "primary")
  const label = children ?? (intent ? INTENT_LABELS[intent] : "Button")

  const baseClasses =
    "group inline-flex items-center justify-center gap-2 rounded-lg font-bold uppercase tracking-[0.18em] transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-500"
  const classes = cn(baseClasses, VARIANT_STYLES[resolvedVariant], SIZE_STYLES[size], className)

  const iconLeft = icon && iconPosition === "left"
  const iconRight = icon && iconPosition === "right"

  const content = (
    <>
      {iconLeft ? <span className="shrink-0">{icon}</span> : null}
      <span className="whitespace-nowrap">{label}</span>
      {iconRight ? <span className="shrink-0 transition-transform duration-300 group-hover:translate-x-1">{icon}</span> : null}
    </>
  )

  if (href) {
    const { type: _type, ...linkProps } = rest as AnchorHTMLAttributes<HTMLAnchorElement>
    return (
      <Link href={href} className={classes} {...linkProps}>
        {content}
      </Link>
    )
  }

  const { type = "button", ...buttonProps } = rest as ButtonHTMLAttributes<HTMLButtonElement>

  return (
    <button type={type} className={classes} {...buttonProps}>
      {content}
    </button>
  )
}
