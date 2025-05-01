import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import { defineCollection, defineConfig, s } from 'velite'

const computedFields = <T extends { slug: string }>(data: T) => ({ ...data })

const docs = defineCollection({
    name: 'Doc',
    pattern: '**/*.mdx',
    schema: s
        .object({
            slug: s.path(),
            title: s.string().max(99),
            description: s.string().max(999).optional(),
            published: s.boolean().default(true),
            order: s.number().default(0),
            status: s.string().optional(),
            toc: s.toc(),
            references: s.array(s.string()).optional(),
            body: s.mdx()
        })
        .transform(computedFields)
})

export default defineConfig({
    root: 'content',
    output: {
        data: '.velite',
        clean: true
    },
    collections: { docs },
    mdx: {
        rehypePlugins: [
            rehypeSlug as any,
            [
                rehypePrettyCode,
                {
                    theme: 'github-dark-default',
                    defaultLang: {
                        block: 'tsx',
                        inline: 'plaintext'
                    }
                }
            ],
            [
                rehypeAutolinkHeadings,
                {
                    properties: {
                        className: ['subheading-anchor'],
                        ariaLabel: 'Link to section'
                    }
                }
            ]
        ]
    }
})
