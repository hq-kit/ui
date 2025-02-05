import type { Metadata } from 'next'

import previews from '@/components/docs/generated/previews.json'
import Block from '@/components/mdx/block'
import { goodTitle } from '@/lib/utils'

export interface BlockProps {
    params: Promise<{
        slug: string[]
    }>
}

export async function generateMetadata(props: BlockProps): Promise<Metadata> {
    const params = await props.params
    const title = goodTitle(params.slug.reverse()[0])

    const ogSearchParams = new URLSearchParams()
    ogSearchParams.set('title', title)

    return {
        title: title,
        applicationName: 'HQ UI',
        category: 'Blocks',
        keywords: [
            `${title} components`,
            `${title}`,
            'React',
            'Next.js',
            'Inertia.js',
            'Tailwind CSS',
            'UI Components',
            'UI Kit',
            'UI Library',
            'UI Framework',
            'React Aria',
            'React Aria Components',
            'Server Components',
            'React Components',
            'Next UI Components',
            'UI Design System',
            'UI for Laravel Inertia'
        ]
    }
}

export async function generateStaticParams(): Promise<{ slug: string[] }[]> {
    return Object.keys(previews)
        .filter((preview) => preview.includes('block'))
        .map((preview) => ({ slug: preview.split('/') }))
}

export default async function BlockPage(props: BlockProps) {
    const params = await props.params
    return <Block zoomOut={0.9} height={768} page={'block/' + params.slug.join('/')} />
}
