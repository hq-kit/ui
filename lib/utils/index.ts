import { type Docs } from '#docs'
import { slugify, titleCase } from 'usemods'

export const getInitials = (str: string): string =>
    str
        .split(' ')
        .slice(0, 2)
        .map((part) => part.charAt(0))
        .join('')

export const wait = (number: number = 1000) => new Promise((resolve) => setTimeout(resolve, number))

export const formatDate = (input: string | number): string => {
    const date = new Date(input)
    return date.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    })
}
export const formatTime = (date: Date): string => {
    const hours = date.getHours().toString().padStart(2, '0')
    const minutes = date.getMinutes().toString().padStart(2, '0')
    return `${hours}:${minutes}`
}

export const sortDocs = (docs: Array<Docs>) => docs.sort((a, b) => a.order - b.order)

export const getAllRefs = (docs: Array<Docs>) => {
    const references: Record<string, number> = {}
    docs.forEach((doc) => {
        if (doc.published) {
            doc.references?.forEach((tag: string) => {
                references[tag] = (references[tag] ?? 0) + 1
            })
        }
    })

    return references
}

export function getDocsByTagReferences(docs: Array<Docs>, tag: string) {
    return docs.filter((doc) => {
        if (!doc.references) return false
        const slugifiedTags = doc.references.map((tag: string) => slugify(tag))
        return slugifiedTags.includes(tag)
    })
}

export function goodTitle(str: string) {
    return titleCase(str.replaceAll('-', ' '))
}

export function convertSvgToJsx(svgString: string): string {
    const parser = new DOMParser()
    const svgDocument = parser.parseFromString(svgString, 'image/svg+xml')
    const svgElement = svgDocument.documentElement

    function convertAttributes(node: Element): void {
        Array.from(node.attributes).forEach((attr) => {
            const camelCaseName = attr.name.replace(/-([a-z])/g, (g) => g[1].toUpperCase())
            if (attr.name !== camelCaseName) {
                node.setAttribute(camelCaseName, attr.value)
                node.removeAttribute(attr.name)
            }
        })
    }

    function transformNode(node: Node): string {
        if (node.nodeType === Node.ELEMENT_NODE) {
            const element = node as Element
            convertAttributes(element)
            const tagName = element.tagName.toLowerCase()
            const attributes = Array.from(element.attributes)
                .map((attr) => `${attr.name}="${attr.value}"`)
                .join(' ')
            const children = Array.from(element.childNodes).map(transformNode).join('')

            return `<${tagName}${attributes ? ' ' + attributes : ''}>${children}</${tagName}>`
        } else if (node.nodeType === Node.TEXT_NODE) {
            return (node as Text).textContent || ''
        }
        return ''
    }

    return transformNode(svgElement)
}

export const convertToKebabCase = (str: string): string =>
    str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
