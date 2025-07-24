'use client'

import { Breadcrumbs } from '@/components/ui'
import { usePathname } from 'next/navigation'

export default function BreadcrumbsUrlDemo() {
    const pathname = usePathname()
    const urls = pathname
        .split('/')
        .filter((url) => url !== '')
        .map((url, index) => {
            return {
                id: index,
                label: url,
                href: `/${url}`
            }
        })
    return (
        <Breadcrumbs items={urls}>
            {(item) => (
                <Breadcrumbs.Item className='capitalize' href={item.href}>
                    {item.label}
                </Breadcrumbs.Item>
            )}
        </Breadcrumbs>
    )
}
