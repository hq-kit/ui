'use client'

import { IconBook, IconBox, IconHome } from 'hq-icons'

import { Breadcrumbs } from '@/components/ui'

export default function BreadcrumbsIconDemo() {
    return (
        <Breadcrumbs>
            <Breadcrumbs.Item href='#'>
                <IconHome />
                Home
            </Breadcrumbs.Item>
            <Breadcrumbs.Item href='#'>
                <IconBook />
                Docs
            </Breadcrumbs.Item>
            <Breadcrumbs.Item>
                <IconBox />
                Components
            </Breadcrumbs.Item>
        </Breadcrumbs>
    )
}
