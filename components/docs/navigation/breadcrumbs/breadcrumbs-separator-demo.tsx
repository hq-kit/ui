'use client'

import { Breadcrumbs } from '@/components/ui'

const urls = [
    { id: 1, label: 'Home', href: '#' },
    { id: 2, label: 'Docs', href: '#' },
    { id: 3, label: 'Components' }
]

export default function BreadcrumbsSeparatorDemo() {
    return (
        <div className='space-y-4'>
            <Breadcrumbs items={urls} separator='chevron'>
                {(item) => <Breadcrumbs.Item href={item.href}>{item.label}</Breadcrumbs.Item>}
            </Breadcrumbs>
            <Breadcrumbs items={urls} separator='slash'>
                {(item) => <Breadcrumbs.Item href={item.href}>{item.label}</Breadcrumbs.Item>}
            </Breadcrumbs>
            <Breadcrumbs items={urls} separator='dash'>
                {(item) => <Breadcrumbs.Item href={item.href}>{item.label}</Breadcrumbs.Item>}
            </Breadcrumbs>
            <Breadcrumbs items={urls} separator='dot'>
                {(item) => <Breadcrumbs.Item href={item.href}>{item.label}</Breadcrumbs.Item>}
            </Breadcrumbs>
        </div>
    )
}
