'use client'

import { IconChevronDown } from '@tabler/icons-react'
import { Breadcrumbs, Menu } from '@/components/ui'

export default function BreadcrumbsMenuDemo() {
    return (
        <Breadcrumbs>
            <Breadcrumbs.Item href='#'>Home</Breadcrumbs.Item>
            <Breadcrumbs.Item>
                <Menu>
                    <Menu.Trigger className='inline-flex items-center'>
                        Docs
                        <IconChevronDown className='ml-1' />
                    </Menu.Trigger>
                    <Menu.Content>
                        <Menu.Item href='/blocks'>Blocks</Menu.Item>
                        <Menu.Item href='/icons'>Icons</Menu.Item>
                        <Menu.Item href='/colors'>Colors</Menu.Item>
                        <Menu.Item href='/themes'>Themes</Menu.Item>
                    </Menu.Content>
                </Menu>
            </Breadcrumbs.Item>
            <Breadcrumbs.Item>Components</Breadcrumbs.Item>
        </Breadcrumbs>
    )
}
