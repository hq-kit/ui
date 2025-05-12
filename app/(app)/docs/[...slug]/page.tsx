import { docs } from '@/.velite'
import { MDXContent } from '@/components/mdx'
import { DocRefs } from '@/components/mdx/references'
import { TableOfContents } from '@/components/mdx/toc'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

type Props = {
    params: Promise<{ slug: string[] }>
}

function getDocsBySlug(slug: string) {
    return docs.find((doc) => doc.slug === slug)
}

export async function generateMetadata(props: Props): Promise<Metadata> {
    const { slug } = await props.params
    const doc = getDocsBySlug(slug.join('/'))

    if (!doc) return {}

    const ogSearchParams = new URLSearchParams()
    ogSearchParams.set('title', doc?.title)

    return {
        title: doc?.title,
        description: doc?.description,
        applicationName: 'HQ UI',
        category: 'Docs',
        keywords: [
            doc?.title,
            `${doc?.title} components`,
            `${doc?.title} component`,
            `${doc?.title} on React`,
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
export function generateStaticParams() {
    return docs.map((doc) => ({ slug: doc.slug.split('/') }))
}

export default async function DocsPage(props: Props) {
    const { slug } = await props.params
    const doc = getDocsBySlug(slug.join('/'))

    if (!doc) notFound()

    return (
        <>
            <div className='min-w-0 max-w-2xl flex-auto pt-12 pb-32 sm:pt-16 lg:max-w-none lg:pr-0 lg:pl-8 xl:px-16'>
                <main className='prose prose-blue dark:prose-invert prose-h2:mb-4 prose-headings:mb-[0.3rem] max-w-[inherit] prose-headings:scroll-mt-24 prose-img:rounded-lg prose-pre:p-0'>
                    <div className='mb-8'>
                        <h1 className='mt-2 font-semibold text-2xl tracking-tight sm:text-3xl'>{doc.title}</h1>
                        {doc.description && <p className='mt-2.5 text-base leading-relaxed'>{doc.description}</p>}
                        {doc.references && <DocRefs references={doc.references} />}
                    </div>
                    <MDXContent code={doc.body} />
                </main>
            </div>
            <TableOfContents className='hidden xl:block' items={doc.toc} />
        </>
    )
}
