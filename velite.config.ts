import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import { defineCollection, defineConfig, s } from 'velite'

import { transformerNotationDiff } from '@shikijs/transformers'

const computedFields = <T extends { slug: string }>(data: T) => ({
    ...data,
    slugAsParams: data.slug.split('/').slice(1).join('/')
})

const docs = defineCollection({
    name: 'Docs',
    pattern: '**/*.mdx',
    schema: s
        .object({
            order: s.number().optional(),
            slug: s.path(),
            title: s.string().max(99),
            description: s.string().max(999).optional(),
            references: s.array(s.string()).optional(),
            body: s.mdx(),
            toc: s.toc()
        })
        .transform(computedFields)
})

export default defineConfig({
    root: 'content',
    output: {
        data: '.velite',
        assets: 'public/static',
        base: '/static/',
        name: '[name]-[hash:6].[ext]',
        clean: true
    },
    collections: { docs },
    mdx: {
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
            ],
            [
                rehypeAutolinkHeadings,
                {
                    behavior: 'wrap',
                    properties: {
                        className: ['not-prose subheading-anchor'],
                        ariaLabel: 'Link to section'
                    }
                }
            ]
        ],
        remarkPlugins: []
    }
})
