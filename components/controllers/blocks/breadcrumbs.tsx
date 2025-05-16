'use client'

import { Breadcrumbs } from '@/components/ui'

export function BlocksBreadcrumbs({ pages }: { pages: string[] }) {
    const breadcrumbPages = [
        { id: 0, label: 'Home', href: '/' },
        { id: 1, label: 'Blocks', href: '/blocks' },
        ...pages.map((p) => ({ id: p, label: p, href: `/blocks/${p}` }))
    ]
    return (
        <Breadcrumbs items={breadcrumbPages}>
            {(item) => (
                <Breadcrumbs.Item className='capitalize' href={item.href}>
                    {item.label}
                </Breadcrumbs.Item>
            )}
        </Breadcrumbs>
    )
}
