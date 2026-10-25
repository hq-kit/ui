import type { ColorSpace } from "@/types/themes"
import { converter, formatHex, parse, wcagContrast } from "culori"
import { type Color, parseColor as RACParseColor } from "react-aria-components/ColorPicker"

const toRgb = converter("rgb")
const toHsl = converter("hsl")
const toOklch = converter("oklch")

export function formatColor(value: string, format: ColorSpace = "oklch"): string {
  const color = parse(value)

  if (!color) return value

  const alpha = color.alpha ?? 1

  switch (format) {
    case "hex": {
      const hex = formatHex(color)

      return alpha < 1
        ? `${hex}${Math.round(alpha * 255)
            .toString(16)
            .padStart(2, "0")}`
        : hex
    }

    case "rgb": {
      const rgb = toRgb(color)

      if (!rgb) return value

      const r = Math.round(rgb.r * 255)
      const g = Math.round(rgb.g * 255)
      const b = Math.round(rgb.b * 255)

      return alpha < 1 ? `rgb(${r} ${g} ${b} / ${alpha})` : `rgb(${r} ${g} ${b})`
    }

    case "hsl": {
      const hsl = toHsl(color)

      if (!hsl) return value

      const h = Math.round(hsl.h ?? 0)
      const s = Math.round((hsl.s ?? 0) * 100)
      const l = Math.round((hsl.l ?? 0) * 100)

      return alpha < 1 ? `hsl(${h} ${s}% ${l}% / ${alpha})` : `hsl(${h} ${s}% ${l}%)`
    }

    case "oklch": {
      const oklch = toOklch(color)

      if (!oklch) return value

      const { l, c, h = 0 } = oklch

      return alpha < 1 ? `oklch(${l} ${c} ${h} / ${alpha})` : `oklch(${l} ${c} ${h})`
    }

    default:
      return value
  }
}

export function parseColor(value: string): Color {
  const color = parse(value)
  if (!color) return RACParseColor(value)

  const rgb = toRgb(color)

  if (!rgb) return RACParseColor(value)

  const r = Math.round(rgb.r * 255)
  const g = Math.round(rgb.g * 255)
  const b = Math.round(rgb.b * 255)

  return RACParseColor(`rgb(${r}, ${g}, ${b})`)
}

export const getTextColor = (background: string) => {
  const white = wcagContrast(background, "white")
  const black = wcagContrast(background, "black")

  return white > black ? "white" : "black"
}
