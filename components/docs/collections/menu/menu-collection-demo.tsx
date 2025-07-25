'use client'

import { Menu } from '@/components/ui'
import {
    IconBrandArc,
    IconBrandChrome,
    IconBrandEdge,
    IconBrandFirefox,
    IconBrandOpera,
    IconBrandSafari
} from '@tabler/icons-react'

const items = [
    { id: 1, name: 'Chrome', icon: IconBrandChrome },
    { id: 2, name: 'Firefox', icon: IconBrandFirefox },
    { id: 3, name: 'Opera', icon: IconBrandOpera },
    { id: 4, name: 'Arc', icon: IconBrandArc },
    { id: 5, name: 'Edge', icon: IconBrandEdge },
    { id: 6, name: 'Safari', icon: IconBrandSafari }
]

export default function MenuCollectionDemo() {
    return (
        <Menu>
            <Menu.Trigger>Open</Menu.Trigger>
            <Menu.Content items={items}>
                {(item) => (
                    <Menu.Item id={item.id}>
                        <item.icon />
                        <Menu.Label>{item.name}</Menu.Label>
                    </Menu.Item>
                )}
            </Menu.Content>
        </Menu>
    )
}
