'use server'

import { promises as fs } from 'node:fs'
import path from 'node:path'
import { components } from '@/components/mdx'
import { transformerNotationDiff } from '@shikijs/transformers'
import { compileMDX } from 'next-mdx-remote/rsc'
import { notFound } from 'next/navigation'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import { titleCase } from 'usemods'

async function goodTitle(str: string) {
    return titleCase(str.replaceAll('-', ' '))
}

export type Frontmatter = {
    title: string
    description: string
    order: number
    published: boolean
    references: string[]
}

async function checkFile(slug: string[]): Promise<boolean> {
    return await fs
        .access(path.join(process.cwd(), 'content', `${slug.join('/')}.mdx`))
        .then(() => true)
        .catch(() => false)
}

const getDocs = async (slug: string[]): Promise<Frontmatter> => {
    const isFileExists = await checkFile(slug)
    if (!isFileExists) {
        notFound()
    }

    const source = await fs.readFile(path.join(process.cwd(), 'content', `${slug.join('/')}.mdx`), 'utf-8')

    const { frontmatter } = await compileMDX<Frontmatter>({
        options: { parseFrontmatter: true },
        source
    })

    return frontmatter
}

const getDocsContent = async (slug: string[]): Promise<{ frontmatter: Frontmatter; content: any }> => {
    const isFileExists = await fs
        .access(path.join(process.cwd(), 'content', `${slug.join('/')}.mdx`))
        .then(() => true)
        .catch(() => false)
    if (!isFileExists) {
        notFound()
    }

    const source = await fs.readFile(path.join(process.cwd(), 'content', `${slug.join('/')}.mdx`), 'utf-8')

    const { frontmatter, content } = await compileMDX<Frontmatter>({
        options: {
            parseFrontmatter: true,
            mdxOptions: {
                rehypePlugins: [
                    rehypeSlug,
                    [
                        rehypePrettyCode,
                        {
                            transformers: [transformerNotationDiff()],
                            theme: 'github-dark-default',
                            defaultLang: {
                                block: 'tsx',
                                inline: 'plaintext'
                            }
                        }
                    ]
                ],
                remarkPlugins: [],
                format: 'mdx'
            }
        },
        source,
        components
    })

    return { frontmatter, content }
}

type Docs = {
    title: string
    url?: string
    order: number
    items?: Docs[]
}

const getAllDocs = async (): Promise<Docs[]> => {
    const docs: Docs[] = []
    const items = await fs.readdir(path.join(process.cwd(), 'content'))
    // This will be the parent (Getting Started, Dark Mode and Components)
    for (const item of items) {
        docs.push({
            title: await goodTitle(item),
            order: docs.length + 1,
            items: []
        })
        const subItems = await fs.readdir(path.join(process.cwd(), 'content', item))
        // This will be SubItems of Getting Started and Dark Mode
        for (const subItem of subItems) {
            if (subItem.endsWith('.mdx')) {
                const frontmatter = await getDocs([item, subItem.replace('.mdx', '')])
                docs[docs.length - 1].items?.push({
                    title: await goodTitle(frontmatter.title),
                    url: `/docs/${item}/${subItem}`.replace('.mdx', ''),
                    order: frontmatter.order
                })
            } else {
                // Components folder
                docs[docs.length - 1]?.items?.push({
                    title: await goodTitle(subItem),
                    order: docs.length + 1,
                    items: []
                })
                const subSubItems = await fs.readdir(path.join(process.cwd(), 'content', item, subItem))
                // This will be the Components
                for (const subSubItem of subSubItems) {
                    if (subSubItem.endsWith('.mdx')) {
                        const frontmatter = await getDocs([item, subItem, subSubItem.replace('.mdx', '')])
                        docs[docs.length - 1].items![docs[docs.length - 1].items!.length - 1].items!.push({
                            title: await goodTitle(frontmatter.title),
                            url: `/docs/${item}/${subItem}/${subSubItem}`.replace('.mdx', ''),
                            order: frontmatter.order
                        })
                    }
                }
            }
        }
    }
    return docs
}

const getStaticParams = async (): Promise<string[]> => {
    const paths: string[] = []
    const items = await fs.readdir(path.join(process.cwd(), 'content'))
    for (const item of items) {
        const subItems = await fs.readdir(path.join(process.cwd(), 'content', item))
        for (const subItem of subItems) {
            if (subItem.endsWith('.mdx')) {
                paths.push(`${item}/${subItem}`.replace('.mdx', ''))
            } else {
                const subSubItems = await fs.readdir(path.join(process.cwd(), 'content', item, subItem))
                for (const subSubItem of subSubItems) {
                    if (subSubItem.endsWith('.mdx')) {
                        paths.push(`${item}/${subItem}/${subSubItem}`.replace('.mdx', ''))
                    }
                }
            }
        }
    }

    return paths
}

export type TocItem = { title: string; link: string; level: 2 | 3 }

const getTableOfContents = async (slug: string[]): Promise<TocItem[]> => {
    const isFileExists = await checkFile(slug)
    if (!isFileExists) {
        notFound()
    }

    const source = await fs.readFile(path.join(process.cwd(), 'content', `${slug.join('/')}.mdx`), 'utf-8')
    const tocItems: TocItem[] = []
    const lines = source.split('\n').filter((line) => line.startsWith('#'))
    for (const line of lines) {
        const level = line.startsWith('###') ? 3 : 2
        const title = line.replaceAll('#', '').trim()
        const link = line.replaceAll('#', '').trim().toLowerCase().replace(/\s+/g, '-')
        const existingItemCount = tocItems.filter((item) => item.title === title).length
        const url = existingItemCount > 0 ? `${link}-${existingItemCount}` : link
        tocItems.push({
            title,
            link: url,
            level
        })
    }
    return tocItems
}

export { getAllDocs, getDocs, getDocsContent, getStaticParams, getTableOfContents }
export type { Docs }
