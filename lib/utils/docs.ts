import { slugify } from 'usemods'

import { type Docs } from '@docs'

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
