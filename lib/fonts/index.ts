import { fontMono } from "./font-mono"
import { fontSans } from "./font-sans"

export const FONT_SANS = fontSans.map((font) => font.style.fontFamily)
export const FONT_MONO = fontMono.map((font) => font.style.fontFamily)
export const fontVariables = `${fontSans.map((font) => font.variable)} ${fontMono.map((font) => font.variable)}`
