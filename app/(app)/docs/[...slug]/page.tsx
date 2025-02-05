import { docs } from '#docs'
import { type Metadata } from 'next'
import { notFound } from 'next/navigation'

import { MDXContent } from '@/components/mdx'
import Pager from '@/components/mdx/pager'
import { DocRefs } from '@/components/mdx/references'
import { TableOfContents } from '@/components/mdx/toc'
import { Card } from '@/components/ui'

export interface DocPageProps {
    params: Promise<{
        slug: string[]
    }>
}

async function getPostFromParams(params: { slug: string[] }) {
    const slug = params?.slug?.join('/')
    return docs.find((doc) => doc.slugAsParams === slug)
}

export async function generateMetadata(props: DocPageProps): Promise<Metadata> {
    const params = await props.params
    const doc = await getPostFromParams(params)

    if (!doc) {
        return {}
    }

    const ogSearchParams = new URLSearchParams()
    ogSearchParams.set('title', doc.title)

    return {
        title: doc.title,
        description: doc.description,
        applicationName: 'HQ UI',
        category: 'Docs',
        keywords: [
            doc.title,
            `${doc.title} components`,
            `${doc.title} component`,
            `${doc.title} on React`,
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
    return docs.map((doc) => ({ slug: doc.slugAsParams.split('/') }))
}

export default async function DocsPage(props: DocPageProps) {
    const params = await props.params
    const doc = await getPostFromParams(params)

    if (!doc || !doc.published) {
        notFound()
    }

    return (
        <>
            <div className='max-w-2xl min-w-0 flex-auto px-4 pt-12 pb-32 sm:pt-16 lg:max-w-none lg:pr-0 lg:pl-8 xl:px-16'>
                <main className='prose prose-img:rounded-lg prose-h2:mb-4 prose-pre:p-0 prose-headings:mb-[0.3rem] prose-headings:scroll-mt-24 prose-blue dark:prose-invert max-w-[inherit]'>
                    <Card className='not-prose'>
                        <Card.Header>
                            <Card.Title level={1}>{doc.title}</Card.Title>
                            {doc.description && (
                                <Card.Description className='mt-3 leading-tight sm:text-base'>
                                    {doc.description}
                                </Card.Description>
                            )}
                        </Card.Header>
                        {doc.references && doc.references?.length > 0 && (
                            <Card.Content className='flex flex-row gap-2'>
                                <DocRefs references={doc.references} />
                            </Card.Content>
                        )}
                    </Card>
                    <TableOfContents className='mt-8 block xl:hidden' items={doc.toc} />
                    <MDXContent code={doc.body} />
                    <Pager
                        doc={{
                            title: doc.title,
                            slug: doc.slug,
                            order: doc.order
                        }}
                        docs={docs
                            .filter((doc) => doc.slug.startsWith('docs/components'))
                            .map((doc) => ({ order: doc.order, slug: doc.slug, title: doc.title }))}
                    />
                </main>
            </div>
            <TableOfContents className='hidden xl:block' items={doc.toc} />
        </>
    )
}
