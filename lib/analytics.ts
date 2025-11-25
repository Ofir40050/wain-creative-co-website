export const trackEvent = (eventName: string, params: Record<string, any> = {}) => {
  if (typeof window === "undefined") return

  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, params)
  }

  if (typeof window.clarity === "function") {
    window.clarity("event", eventName, params)
  }
}
