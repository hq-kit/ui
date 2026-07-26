import { defaultThemeState } from "@/config/theme"
import { themes } from "@/lib/themes/generated-themes"

export function getPresetThemeStyles(name: Preset): ThemeStyles {
  if (name === "default") {
    return defaultThemeState
  }

  const preset = presets[name]

  if (!preset) {
    return defaultThemeState
  }

  return {
    light: {
      ...defaultThemeState.light,
      ...(preset.light || {})
    },
    dark: {
      ...defaultThemeState.dark,
      ...(preset.dark || {})
    }
  }
}

export type Preset = keyof typeof presets

export type ThemeStyles = {
  light: Partial<ThemeStyleProps>
  dark: Partial<ThemeStyleProps>
}

export type ThemeState = {
  preset: Preset
  styles: ThemeStyles
}

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
  "font-sans"?: string
  "font-mono"?: string
  radius?: string
}

export const presets: Record<string, ThemeStyles> = {
  ...themes
}
