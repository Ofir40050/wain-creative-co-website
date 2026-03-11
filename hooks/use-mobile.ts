"use client"
import { useSyncExternalStore } from "react"

const MOBILE_BREAKPOINT = 768

const getMediaQuery = () => `(max-width: ${MOBILE_BREAKPOINT - 1}px)`

const subscribe = (onStoreChange: () => void) => {
  if (typeof window === "undefined") return () => undefined

  const mediaQuery = window.matchMedia(getMediaQuery())
  mediaQuery.addEventListener("change", onStoreChange)

  return () => {
    mediaQuery.removeEventListener("change", onStoreChange)
  }
}

const getSnapshot = () => {
  if (typeof window === "undefined") return false
  return window.matchMedia(getMediaQuery()).matches
}

export function useIsMobile() {
  return useSyncExternalStore(subscribe, getSnapshot, () => false)
}
