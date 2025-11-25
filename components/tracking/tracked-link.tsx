"use client"

import Link from "next/link"
import type { ReactNode } from "react"
import { sendGtagEvent, trackEvent } from "@/lib/analytics"

type TrackedLinkProps = {
  href: string
  children: ReactNode
  className?: string
  event: string
  params?: Record<string, any>
}

export function TrackedLink({ href, children, className, event, params }: TrackedLinkProps) {
  return (
    <Link
      href={href}
      className={className}
      onClick={() => {
        const payload = { page: window.location.pathname, ...(params || {}) }
        sendGtagEvent(event, payload)
        trackEvent(event, payload)
      }}
    >
      {children}
    </Link>
  )
}
