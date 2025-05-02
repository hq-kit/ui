import { IconLoaderCircle } from 'hq-icons'
import type { Metadata } from 'next'
import { Suspense } from 'react'

import { previews } from '@/components/docs/generated/previews'
import { titleCase } from '@/lib/utils/modifiers'

type Params = Promise<{ slug: string[] }>

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
    const { slug } = await params
    return {
        title: titleCase(slug.join(' | '))
    }
}

export async function generateStaticParams() {
    return Object.keys(previews)
        .filter((s) => s.startsWith('block'))
        .map((slug) => ({ slug: slug.split('/') }))
}

export default async function BlocksPage({ params }: { params: Params }) {
    const { slug } = await params
    const component = `block/${slug.join('/')}`
    const Block = previews[component] ? previews[component].component : () => null

    return (
        <Suspense
            fallback={
                <div className='flex min-h-svh w-full items-center justify-center text-muted-fg text-sm'>
                    <IconLoaderCircle className='size-12 animate-spin' />
                </div>
            }
        >
            <Block />
        </Suspense>
    )
}
