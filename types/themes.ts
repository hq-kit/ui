import type { PRESET_ICON_LIBRARIES, PRESET_STYLES } from "shadcn/preset"
import type { FONT_MONO, FONT_SANS } from "@/lib/fonts"

export type FontSans = (typeof FONT_SANS)[number]
export type FontMono = (typeof FONT_MONO)[number]
export type Style = (typeof PRESET_STYLES)[number]
export type Icon = (typeof PRESET_ICON_LIBRARIES)[number]
export type Theme = "light" | "dark"

export type ThemeStyleProps = {
  background: string
  foreground: string
  card: string
  "card-foreground": string
  popover: string
  "popover-foreground": string
  primary: string
  "primary-foreground": string
  secondary: string
  "secondary-foreground": string
  muted: string
  "muted-foreground": string
  accent: string
  "accent-foreground": string
  destructive: string
  "destructive-foreground"?: string
  border: string
  input: string
  ring: string
  "chart-1": string
  "chart-2": string
  "chart-3": string
  "chart-4": string
  "chart-5": string
  sidebar: string
  "sidebar-foreground": string
  "sidebar-primary": string
  "sidebar-primary-foreground": string
  "sidebar-accent": string
  "sidebar-accent-foreground": string
  "sidebar-border": string
  "sidebar-ring": string
  radius?: string
  "font-sans"?: string
  "font-mono"?: string
}

export type Preset = {
  light: Partial<ThemeStyleProps>
  dark: Partial<ThemeStyleProps>
}

export type ThemeVar = {
  key: keyof ThemeStyleProps
  value: string
  theme: Theme
}

export type ColorSpace = "hsl" | "rgb" | "hex" | "oklch"
export type StyleMap = Record<string, string>
