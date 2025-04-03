'use client'

import { Breadcrumbs } from '@/components/ui'

const urls = [
    { id: 1, label: 'Home', href: '#' },
    { id: 2, label: 'Docs', href: '#' },
    { id: 3, label: 'Components' }
]

export default function BreadcrumbsCollectionsDemo() {
    return (
        <Breadcrumbs items={urls}>
            {(item) => <Breadcrumbs.Item href={item.href}>{item.label}</Breadcrumbs.Item>}
        </Breadcrumbs>
    )
}
