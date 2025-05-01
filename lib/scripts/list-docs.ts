import fs from 'node:fs'
import path from 'node:path'
import { docs as items } from '../../.velite'

const componentsDir = path.resolve(__dirname, '../../components')
const docsDir = path.join(componentsDir, 'docs')
const docsOutputFilePath = path.resolve(docsDir, 'generated/docs.ts')

type Docs = {
    title: string
    url?: string
    order: number
    status?: string
    items?: Docs[]
}

const getAllDocs = () => {
    const docs: Docs[] = []
    const categories = Array.from(new Set(items.map((i) => i.slug.split('/')[0]!)))
    for (const category of categories) {
        const order = category === 'getting-started' ? 0 : category === 'dark-mode' ? 1 : 2
        docs.push({
            title: category,
            order,
            items: []
        })
    }
    for (const doc of docs) {
        for (const item of items) {
            if (item.slug.startsWith(doc.title) && item.slug.split('/').length === 2) {
                doc.items!.push({
                    title: item.title,
                    url: `/docs/${item.slug}`,
                    order: item.order,
                    status: item.status
                })
            } else if (item.slug.startsWith(doc.title) && item.slug.split('/').length === 3) {
                if (!doc.items!.find((i) => i.title === item.slug.split('/')[1])) {
                    doc.items!.push({
                        title: item.slug.split('/')[1]!,
                        order: item.order,
                        items: []
                    })
                }
                doc.items!.find((i) => i.title === item.slug.split('/')[1])!.items!.push({
                    title: item.title,
                    url: `/docs/${item.slug}`,
                    order: item.order,
                    status: item.status
                })
            }
        }
    }

    return docs
}

const generateDocs = async () => {
    const docs = getAllDocs()
    const docsContent = `type Docs = {
    title: string
    url?: string
    order: number
    status?: string
    items?: Docs[]
}

export const docs: Docs[] = ${JSON.stringify(docs, null, 2)}`
    fs.writeFileSync(docsOutputFilePath, docsContent)
}

generateDocs()
