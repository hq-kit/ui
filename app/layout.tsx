import { Providers } from "@/components/providers"
import { siteConfig } from "@/config/site"
import "@/lib/styles/app.css"
import type { Metadata, Viewport } from "next"
import type { ReactNode } from "react"
import { StyleProvider } from "@/components/providers/style-provider"
import { ThemeSyncClient } from "@/components/theme-sync-client"
import { fontMono } from "@/lib/fonts/font-mono"
import { fontSans } from "@/lib/fonts/font-sans"
import { cn } from "@/lib/utils"

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
    "HQ UI",
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
    "Laravel Inertia UI Framework",
    "Laravel Inertia HQ UI",
    "Laravel HQ UI",
    "HQ UI Components",
    "HQ UI UI Components",
    "HQ UI UI Kit",
    "HQ UI UI Library",
    "HQ UI UI Framework",
    "HQ UI Laravel Inertia",
    "HQ UI Laravel",
    "HQ UI Inertia"
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

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html
      className={cn(fontSans, fontMono, "style-nova")}
      data-scroll-behavior="smooth"
      lang="en"
      suppressHydrationWarning
    >
      <body className="min-h-dvh bg-background font-sans text-foreground antialiased">
        <StyleProvider>
          <Providers>
            <ThemeSyncClient />
            {children}
          </Providers>
        </StyleProvider>
      </body>
    </html>
  )
}
