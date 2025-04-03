'use client'

import { Breadcrumbs } from '@/components/ui'

export default function BreadcrumbsCurrentDemo() {
    return (
        <Breadcrumbs>
            <Breadcrumbs.Item href='#'>Home</Breadcrumbs.Item>
            <Breadcrumbs.Item href='#'>Docs</Breadcrumbs.Item>
            <Breadcrumbs.Item className='data-current:text-blue-500'>Components</Breadcrumbs.Item>
        </Breadcrumbs>
    )
}
