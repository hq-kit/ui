import { titleCase } from "@/lib/modifiers"
import { fontMono } from "./font-mono"
import { fontSans } from "./font-sans"

export interface Font {
  label: string
  variable: string
}
export function extractAndFormatFonts(input: string): Font[] {
  const regex = /([a-zA-Z0-9_]+?)(?=_[a-zA-Z0-9]+-module)/g
  const matches = input.match(regex)

  if (!matches) return []

  const uniqueFonts = Array.from(new Set(matches))

  return uniqueFonts.map((font) => {
    const label = titleCase(font)
    const variable = `--font-${font.replace(/_/g, "-")}`

    return {
      label,
      variable
    }
  })
}

export const FONT_SANS = extractAndFormatFonts(fontSans)
export const FONT_MONO = extractAndFormatFonts(fontMono)
