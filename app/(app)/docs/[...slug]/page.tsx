import { DocRefs } from '@/components/mdx/references'
import { TableOfContents } from '@/components/mdx/toc'
import { Card } from '@/components/ui'
import { getDocs, getDocsContent, getStaticParams, getTableOfContents } from '@/lib/hooks/docs'
import type { Metadata } from 'next'

export interface DocPageProps {
    params: Promise<{
        slug: string[]
    }>
}

export async function generateMetadata(props: DocPageProps): Promise<Metadata> {
    const params = await props.params
    const frontmatter = await getDocs(params.slug)

    const ogSearchParams = new URLSearchParams()
    ogSearchParams.set('title', frontmatter.title)

    return {
        title: frontmatter.title,
        description: frontmatter.description,
        applicationName: 'HQ UI',
        category: 'Docs',
        keywords: [
            frontmatter.title,
            `${frontmatter.title} components`,
            `${frontmatter.title} component`,
            `${frontmatter.title} on React`,
            'React',
            'Next.js',
            'Inertia.js',
            'Tailwind CSS',
            'UI Components',
            'UI Kit',
            'UI Library',
            'UI Framework',
            'HQ-Kit',
            'HQ-UI',
            'React Aria',
            'React Aria Components',
            'Server Components',
            'React Components',
            'Next UI Components',
            'UI Design System',
            'UI for Laravel Inertia',
            'HQ Components',
            'HQ UI Components',
            'HQ UI Kit',
            'HQ UI Library',
            'HQ UI Framework',
            'HQ Laravel Inertia',
            'HQ Laravel',
            'HQ Inertia'
        ]
    }
}

export async function generateStaticParams(): Promise<{ slug: string[] }[]> {
    const docs = await getStaticParams()
    return docs.map((doc) => ({ slug: doc.split('/') }))
}

export default async function DocsPage(props: DocPageProps) {
    const params = await props.params
    const { frontmatter, content } = await getDocsContent(params.slug)

    const tocItems = await getTableOfContents(params.slug)

    return (
        <>
            <div className='min-w-0 max-w-2xl flex-auto px-4 pt-12 pb-32 sm:pt-16 lg:max-w-none lg:pr-0 lg:pl-8 xl:px-16'>
                <main className='prose prose-blue dark:prose-invert prose-h2:mb-4 prose-headings:mb-[0.3rem] max-w-[inherit] prose-headings:scroll-mt-24 prose-img:rounded-lg prose-pre:p-0'>
                    <Card className='not-prose'>
                        <Card.Header>
                            <Card.Title>{frontmatter.title}</Card.Title>
                            {frontmatter.description && <Card.Description>{frontmatter.description}</Card.Description>}
                        </Card.Header>
                        {frontmatter.references && frontmatter.references?.length > 0 && (
                            <Card.Content className='flex flex-row gap-2 pb-6'>
                                <DocRefs references={frontmatter.references} />
                            </Card.Content>
                        )}
                    </Card>
                    <TableOfContents className='mt-8 block xl:hidden' items={tocItems} />
                    {content}
                </main>
            </div>
            <TableOfContents className='hidden xl:block' items={tocItems} />
        </>
    )
}
