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
        chroma(color).brighten(2.5).hex(),
        chroma(color).brighten(2).hex(),
        chroma(color).brighten(1.5).hex(),
        chroma(color).brighten(1).hex(),
        chroma(color).brighten(0.5).hex(),
        color,
        chroma(color).darken(0.5).hex(),
        chroma(color).darken(1.1).hex(),
        chroma(color).darken(1.5).hex(),
        chroma(color).darken(2).hex(),
        chroma(color).darken(2.5).hex()
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
    return Math.round(num * 1000) / 1000
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
