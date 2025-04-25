import chroma from 'chroma-js'
import ntc from 'ntcjs'
import { slugify } from 'usemods'

import type { ColorFormat } from '@/components/controllers/colors/select-format'

export const getColorName = (color: string): string => {
    return slugify(ntc.name(color)[1])
}

const roundNum = (num: number): number => {
    if (Number.isNaN(num)) {
        return 0
    }
    return Number(num.toFixed(3))
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
    return chroma(color).hex()
}
