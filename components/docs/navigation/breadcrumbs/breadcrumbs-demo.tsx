'use client'

import { Breadcrumbs } from '@/components/ui'

export default function BreadcrumbsDemo() {
    return (
        <Breadcrumbs>
            <Breadcrumbs.Item href='#'>Home</Breadcrumbs.Item>
            <Breadcrumbs.Item href='#'>Docs</Breadcrumbs.Item>
            <Breadcrumbs.Item>Components</Breadcrumbs.Item>
        </Breadcrumbs>
    )
}
