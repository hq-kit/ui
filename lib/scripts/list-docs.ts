import fs from 'node:fs'
import path from 'node:path'
import { type Docs, getDocs } from '@/lib/hooks/docs'
import { goodTitle } from '@/lib/utils/modifiers'

const componentsDir = path.resolve(__dirname, '../../components')
const docsDir = path.join(componentsDir, 'docs')
const docsOutputFilePath = path.resolve(docsDir, 'generated/docs.ts')
const docsSourceFilePath = path.resolve(__dirname, '../../content')

const getAllDocs = async () => {
    const docs: Docs[] = []
    const items = fs.readdirSync(docsSourceFilePath)
    // This will be the parent (Getting Started, Dark Mode and Components)
    for (const item of items) {
        docs.push({
            title: goodTitle(item),
            order: item === 'getting-started' ? 1 : item === 'dark-mode' ? 2 : 3,
            items: []
        })
        const subItems = fs.readdirSync(path.join(docsSourceFilePath, item))
        // This will be SubItems of Getting Started and Dark Mode
        for (const subItem of subItems) {
            if (subItem.endsWith('.mdx')) {
                const frontmatter = await getDocs([item, subItem.replace('.mdx', '')])
                docs[docs.length - 1].items?.push({
                    title: goodTitle(frontmatter.title),
                    url: `/docs/${item}/${subItem}`.replace('.mdx', ''),
                    order: frontmatter.order
                })
            } else {
                // Components folder
                docs[docs.length - 1]?.items?.push({
                    title: goodTitle(subItem),
                    order: docs.length + 1,
                    items: []
                })
                const subSubItems = fs.readdirSync(path.join(docsSourceFilePath, item, subItem))
                // This will be the Components
                for (const subSubItem of subSubItems) {
                    if (subSubItem.endsWith('.mdx')) {
                        const frontmatter = await getDocs([item, subItem, subSubItem.replace('.mdx', '')])
                        docs[docs.length - 1].items![docs[docs.length - 1].items!.length - 1].items!.push({
                            title: goodTitle(frontmatter.title),
                            url: `/docs/${item}/${subItem}/${subSubItem}`.replace('.mdx', ''),
                            status: frontmatter.status,
                            order: frontmatter.order
                        })
                    }
                }
            }
        }
    }
    return docs
}

const generateDocs = async () => {
    const docs = await getAllDocs()
    const docsContent = `import { type Docs } from '@/lib/hooks/docs'
export const docs: Docs[] = ${JSON.stringify(docs, null, 2)}`
    fs.writeFileSync(docsOutputFilePath, docsContent)
}

generateDocs()
