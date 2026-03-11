type AnalyticsParams = Record<string, string | number | boolean | null | undefined>

declare global {
  interface Window {
    clarity?: (command: "event", eventName: string, params?: AnalyticsParams) => void
    gtag?: (command: "event", eventName: string, params?: AnalyticsParams) => void
  }
}

export const trackEvent = (eventName: string, params: AnalyticsParams = {}) => {
  if (typeof window === "undefined") return

  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, params)
  }

  if (typeof window.clarity === "function") {
    window.clarity("event", eventName, params)
  }
}

export const sendGtagEvent = (eventName: string, params: AnalyticsParams = {}) => {
  if (typeof window === "undefined") return
  const { gtag } = window
  if (typeof gtag === "function") {
    gtag("event", eventName, params)
  }
}
