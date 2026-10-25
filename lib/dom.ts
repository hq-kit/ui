const getRoot = () => {
  if (typeof document === "undefined") return null
  return document.documentElement
}

const getIframes = () => {
  if (typeof document === "undefined") return []
  return Array.from(document.querySelectorAll("iframe")) as HTMLIFrameElement[]
}

export const applyStyle = (key: string, value: string) => {
  const root = getRoot()
  const iframes = getIframes()

  root?.style.setProperty(`--${key}`, value)
  iframes.forEach((iframe) => {
    !!iframe.contentWindow?.document.documentElement.style &&
      iframe.contentWindow?.document.documentElement.style.setProperty(`--${key}`, value)
  })
}
