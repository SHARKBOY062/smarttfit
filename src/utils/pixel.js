export function track(event, params = {}) {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", event, params)
  }
}
