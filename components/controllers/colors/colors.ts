import { color as chroma } from 'chroma.ts'

import _colors from '@/components/controllers/colors/colors.json'
import ntc from 'ntcjs'
import { slugify } from 'usemods'

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
        chroma(color).brighter(2.5).hex(),
        chroma(color).brighter(2).hex(),
        chroma(color).brighter(1.5).hex(),
        chroma(color).brighter(1).hex(),
        chroma(color).brighter(0.5).hex(),
        color,
        chroma(color).darker(0.5).hex(),
        chroma(color).darker(1.1).hex(),
        chroma(color).darker(1.5).hex(),
        chroma(color).darker(2).hex(),
        chroma(color).darker(2.5).hex()
    ]

    return shades.map((shade, index) => ({
        shade,
        color: baseColors[index]
    }))
}

export const textfg = (backgroundColor: string): string => {
    const luminance = chroma(backgroundColor).luminance()
    return luminance > 0.3 ? '#000000' : '#FFFFFF'
}

export const tailwindColorNames = [
    'slate',
    'gray',
    'zinc',
    'neutral',
    'stone',
    'red',
    'orange',
    'amber',
    'yellow',
    'lime',
    'green',
    'emerald',
    'teal',
    'cyan',
    'sky',
    'blue',
    'indigo',
    'violet',
    'purple',
    'fuchsia',
    'pink',
    'rose'
]

export const formatColorForTailwind = (colorString: string): string => {
    return colorString
        .replace(/(rgb|rgba|hsl|hsla|hsb|hsba|oklch)[(a]?/g, '')
        .replace(/[()]/g, '')
        .replace(/,\s*/g, ' ')
        .trim()
}

export const formatColorFromTailwind = (colorString: string, format = 'hsl'): string => {
    return `${format}(${colorString.replace(/ /g, ', ')})`
}

export const hslToHex = (hsl: string): string => {
    const h = Number(hsl.split(' ')[0])
    const s = Number(hsl.split(' ')[1].replace('%', ''))
    const l = Number(hsl.split(' ')[2].replace('%', ''))
    const hDecimal = l / 100
    const a = (s * Math.min(hDecimal, 1 - hDecimal)) / 100
    const f = (n: number) => {
        const k = (n + h / 30) % 12
        const color = hDecimal - a * Math.max(Math.min(k - 3, 9 - k, 1), -1)
        return Math.round(255 * color)
            .toString(16)
            .padStart(2, '0')
    }
    return `#${f(0)}${f(8)}${f(4)}`
}

export const getColorName = (color: string): string => {
    return slugify(ntc.name(color)[1])
}
