import { COMMON_STYLES, defaultThemeState } from '@/lib/themes/default'
import type { ThemeStyleProps } from '@/lib/types/theme'

export const variableNames = Object.keys(defaultThemeState.light || {})
const nonColorVariables = COMMON_STYLES
const VARIABLE_PREFIX = '--'

export const parseCssInput = (input: string) => {
    const lightColors: ThemeStyleProps = {} as ThemeStyleProps
    const darkColors: ThemeStyleProps = {} as ThemeStyleProps

    try {
        const rootContent = extractCssBlockContent(input, ':root')
        const darkContent = extractCssBlockContent(input, '.dark')

        if (rootContent) {
            parseColorVariables(rootContent, lightColors, variableNames)
        }

        if (darkContent) {
            parseColorVariables(darkContent, darkColors, variableNames)
        }
    } catch (error) {
        console.error('Error parsing CSS input:', error)
    }

    return { lightColors, darkColors }
}

const extractCssBlockContent = (input: string, selector: string): string | null => {
    const regex = new RegExp(`${escapeRegExp(selector)}\\s*{([^}]+)}`)

    return input.match(regex)?.[1]?.trim() || null
}

const parseColorVariables = (cssContent: string, target: ThemeStyleProps, validNames: string[]) => {
    const variableDeclarations = cssContent.match(/--[^:]+:\s*[^;]+/g) || []

    // biome-ignore lint/complexity/noForEach: <explanation>
    variableDeclarations.forEach((declaration) => {
        const [name, value] = declaration.split(':').map((part) => part.trim())
        const cleanName = name.replace(VARIABLE_PREFIX, '')

        if (validNames.includes(cleanName)) {
            if (nonColorVariables.includes(cleanName)) {
                // For non-color variables, store as is
                target[cleanName as keyof ThemeStyleProps] = value

                return
            }

            target[cleanName as keyof ThemeStyleProps] = processColorValue(value)
        }
    })
}

const processColorValue = (value: string): string => {
    if (value.startsWith('oklch')) {
        return value.replace(/\s+/g, ' ')
    }

    return value
}

// Helper function to escape regex special characters
const escapeRegExp = (string: string): string => {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

export const parseShadowVariables = (cssContent: string) => {
    const lightShadows: ThemeStyleProps = {} as ThemeStyleProps
    const darkShadows: ThemeStyleProps = {} as ThemeStyleProps

    try {
        const rootContent = extractCssBlockContent(cssContent, ':root')
        const darkContent = extractCssBlockContent(cssContent, '.dark')

        if (rootContent) {
            extractBasicShadowProperties(rootContent, lightShadows)
        }

        if (darkContent) {
            extractBasicShadowProperties(darkContent, darkShadows)
        }
    } catch (error) {
        console.error('Error parsing shadow variables:', error)
    }

    return { lightShadows, darkShadows }
}

// Extract only the basic shadow properties from a CSS string
const extractBasicShadowProperties = (cssContent: string, target: ThemeStyleProps) => {
    const directPropertiesRegex = /--shadow-(color|opacity|blur|spread|offset-x|offset-y):\s*([^;]+);/g

    target['shadow-offset-x'] = '0'
    target['shadow-offset-y'] = '1px'
    target['shadow-blur'] = '3px'
    target['shadow-spread'] = '0px'
    target['shadow-color'] = 'hsl(0 0% 0%)'
    target['shadow-opacity'] = '0.1'

    let match: RegExpExecArray | null
    let foundDirectProperties = false

    // biome-ignore lint/suspicious/noAssignInExpressions: <explanation>
    while ((match = directPropertiesRegex.exec(cssContent)) !== null) {
        const property = `shadow-${match[1]}` // e.g., "shadow-color"
        target[property as keyof ThemeStyleProps] = match[2].trim()
        foundDirectProperties = true
    }

    if (foundDirectProperties) {
        return
    }

    const shadowRegex = /--shadow(?:-[a-z0-9]+)?:\s*([^;]+);/g
    const shadowValues = []

    // biome-ignore lint/suspicious/noAssignInExpressions: <explanation>
    while ((match = shadowRegex.exec(cssContent)) !== null) {
        shadowValues.push({
            value: match[1],
            hasComma: match[1].includes(','),
            name: match[0].match(/--([^:]+):/)?.[1] || ''
        })
    }

    if (shadowValues.length === 0) {
        return
    }

    const orderedNames = ['shadow-2xs', 'shadow-xs', 'shadow-sm', 'shadow']

    const bestShadow =
        shadowValues
            .filter((s) => !s.hasComma) // Prefer shadows without commas (single layer)
            .sort((a, b) => {
                const aIndex = orderedNames.indexOf(a.name)
                const bIndex = orderedNames.indexOf(b.name)

                if (aIndex !== -1 && bIndex !== -1) return aIndex - bIndex
                if (aIndex !== -1) return -1
                if (bIndex !== -1) return 1

                return 0
            })[0] || shadowValues[0]
    if (!bestShadow) return

    const parts = bestShadow.value.split(',')[0].trim().split(/\s+/)

    if (parts.length >= 5) {
        target['shadow-offset-x'] = parts[0]
        target['shadow-offset-y'] = parts[1]
        target['shadow-blur'] = parts[2]
        target['shadow-spread'] = parts[3]

        const colorPart = parts.slice(4).join(' ')

        const colorRegex = /(?:hsl|rgb|oklch)\(([^/]+)(?:\/\s*([^)]+))?\)/
        const colorMatch = colorPart.match(colorRegex)

        if (colorMatch) {
            const [, colorValues, opacity] = colorMatch
            const colorType = colorPart.substring(0, 3) // "hsl", "rgb", or "okl"(ch)

            target['shadow-color'] = `${colorType}${colorType === 'okl' ? 'ch' : ''}(${colorValues})`

            if (opacity) {
                target['shadow-opacity'] = formatOpacity(opacity)
            }
        }
    }
}

const formatOpacity = (opacityStr: string): string => {
    const cleanOpacity = opacityStr.replace('%', '').trim()

    if (cleanOpacity.includes('.')) {
        return parseFloat(cleanOpacity).toString()
    }

    if (!Number.isNaN(parseInt(cleanOpacity, 10))) {
        return (parseInt(cleanOpacity, 10) / 100).toString()
    }

    return '0.1'
}

export const parseLetterSpacing = (cssContent: string): string => {
    return cssContent.match(/--tracking-normal:\s*([^;]+);/)?.[1] || '0.2em'
}
