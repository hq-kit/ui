import type { Metadata, Viewport } from "next"
import "./globals.css"
import { META_THEME_COLORS, siteConfig } from "@/config/site"
import { fontVariables } from "@/lib/fonts"
import { Scripts } from "./scripts"

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  alternates: {
    canonical: "./"
  },
  keywords: [
    "React",
    "Next.js",
    "Inertia.js",
    "Tailwind CSS",
    "UI Components",
    "UI Kit",
    "UI Library",
    "UI Framework",
    "React Aria",
    "React Aria Components",
    "Server Components",
    "React Components",
    "Next UI Components",
    "UI Design System",
    "UI for Laravel Inertia",
    "Laravel Inertia UI",
    "Laravel Inertia Components",
    "Laravel Inertia UI Components",
    "Laravel Inertia UI Kit",
    "Laravel Inertia UI Library",
    "Laravel Inertia UI Framework"
  ],
  authors: [
    {
      name: "dq-alhq",
      url: "https://x.com/dqalhq"
    }
  ],
  creator: "dq-alhq"
}
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" }
  ],
  viewportFit: "cover",
  width: "device-width",
  initialScale: 1
}
export default ({ children }: LayoutProps<"/">) => {
  return (
    <html className={fontVariables} data-scroll-behavior="smooth" lang="en" suppressHydrationWarning>
      <head>
        <meta content="HQ-UI" name="apple-mobile-web-app-title" />
        <meta content={META_THEME_COLORS.light} name="theme-color" />
        <Scripts />
      </head>

      <body className="min-h-svh font-sans antialiased">{children}</body>
    </html>
  )
}
