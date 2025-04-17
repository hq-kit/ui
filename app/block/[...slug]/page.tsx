import React from 'react'

import { IconLoaderCircle } from 'hq-icons'
import type { Metadata } from 'next'
import { deslugify, titleCase } from 'usemods'

import { previews } from '@/components/docs/generated/previews'

type Params = Promise<{ slug: string[] }>

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
    const { slug } = await params
    return {
        title: titleCase(deslugify(slug.join(' | ')))
    }
}

export async function generateStaticParams() {
    return Object.keys(previews)
        .filter((c) => c.includes('blocks') && c.includes('demo'))
        .map((c) => ({ slug: c.replace('blocks/', '').split('/') }))
}

export default async function BlocksPage({ params }: { params: Params }) {
    const { slug } = await params
    const component = `block/${slug.join('/')}`
    const Block = previews[component] ? previews[component].component : () => null

    return (
        <React.Suspense
            fallback={
                <div className='flex min-h-svh w-full items-center justify-center text-muted-fg text-sm'>
                    <IconLoaderCircle className='size-12 animate-spin' />
                </div>
            }
        >
            <Block />
        </React.Suspense>
    )
}
