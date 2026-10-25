export const siteConfig = {
  name: "HQ-UI",
  url: process.env.NEXT_PUBLIC_APP_URL ?? "https://hq-ui.vercel.app",
  description: "HQ-UI is a collection of open source components for building modern web applications.",
  author: {
    username: "dq-alhq",
    name: "Diqi Al-Haqqi",
    url: "https://x.com/dqalhq"
  },
  links: {
    github: "https://github.com/dq-alhq/hq-ui"
  },
  repo: {
    url: "https://github.com/dq-alhq/hq-ui"
  },
  cli: {
    version: "latest",
    command: "shadcn@latest"
  },
  shadcn: "npx shadcn@latest"
}

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "oklch(0.141 0.005 285.823)"
}
