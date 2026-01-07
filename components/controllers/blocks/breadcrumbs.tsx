'use client'

import { Breadcrumb } from '@/components/ui/breadcrumb'

export function BlocksBreadcrumbs({ pages }: { pages: string[] }) {
  const breadcrumbPages = [
    { id: 0, label: 'Blocks', href: '/blocks' },
    ...pages.map((p) => ({ id: p, label: p, href: `/blocks/${p}` }))
  ]
  return (
    <Breadcrumb items={breadcrumbPages}>
      {(item) => (
        <Breadcrumb.Item className='capitalize' href={item.href}>
          {item.label}
        </Breadcrumb.Item>
      )}
    </Breadcrumb>
  )
}
