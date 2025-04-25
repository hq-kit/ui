import chroma from 'chroma-js'
import ntc from 'ntcjs'
import { slugify } from 'usemods'

import _colors from '@/components/controllers/colors/colors.json'
import type { ColorFormat } from '@/components/controllers/colors/select-format'

const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]
type ColorData = Record<number, string>

export const generateColorScale = (color: string): { shade: number; color: string }[] => {
    const inputColor = color.toLowerCase()
    const colorEntry = (_colors as Array<[string, ColorData]>).find(([, colors]) => {
        return colors['500'].toLowerCase() === inputColor
    })

    if (colorEntry) {
        const [, colorData] = colorEntry

        return shades.map((shade) => ({
            shade,
            color: colorData[shade] || ''
        }))
    }

    const baseColors = [
        chroma(color).brighten(5).tint(0.9).hex(),
        chroma(color).brighten(4).tint(0.8).hex(),
        chroma(color).brighten(3).tint(0.6).hex(),
        chroma(color).brighten(2).tint(0.4).hex(),
        chroma(color).brighten(1).tint(0.2).hex(),
        color,
        chroma(color).darken(1).shade(0.2).hex(),
        chroma(color).darken(2).shade(0.4).hex(),
        chroma(color).darken(3).shade(0.6).hex(),
        chroma(color).darken(4).shade(0.8).hex(),
        chroma(color).darken(5).shade(0.9).hex()
    ]

    return shades.map((shade, index) => ({
        shade,
        color: baseColors[index]
    }))
}

export const textfg = (backgroundColor: string): string => {
    const luminance = chroma(backgroundColor).luminance()
    return luminance > 0.5 ? '#000000' : '#FFFFFF'
}

export const getColorName = (color: string): string => {
    return slugify(ntc.name(color)[1])
}

const roundNum = (num: number): number => {
    if (Number.isNaN(num)) {
        return 0
    }
    return Number(num.toFixed(2))
}

export const formatColor = (color: string, format: ColorFormat) => {
    if (format === 'rgb') {
        return `rgb(${chroma(color).rgb().join(' ')})`
    }
    if (format === 'hsl') {
        const hsl = chroma(color).hsl()
        return `hsl(${roundNum(hsl[0])} ${roundNum(hsl[1]) * 100}% ${roundNum(hsl[2]) * 100}%)`
    }
    if (format === 'oklch') {
        const oklch = chroma(color).oklch()
        return `oklch(${roundNum(oklch[0])} ${roundNum(oklch[1])} ${roundNum(oklch[2])})`
    }
    return color
}
