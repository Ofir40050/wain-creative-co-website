"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import type { ReactNode } from "react"
import { sendGtagEvent, trackEvent } from "@/lib/analytics"

type TrackedLinkProps = {
  href: string
  children: ReactNode
  className?: string
  event: string
  params?: Record<string, string | number | boolean | null | undefined>
}

export function TrackedLink({ href, children, className, event, params }: TrackedLinkProps) {
  const pathname = usePathname()

  return (
    <Link
      href={href}
      className={className}
      onClick={() => {
        const payload = { page: pathname || "/", ...(params || {}) }
        sendGtagEvent(event, payload)
        trackEvent(event, payload)
      }}
    >
      {children}
    </Link>
  )
}
