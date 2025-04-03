'use client'

import {
    IconBrandArch,
    IconBrandDebian,
    IconBrandFedora,
    IconBrandMint,
    IconBrandRedhat,
    IconBrandUbuntu
} from 'hq-icons'

import { Menu } from '@/components/ui'

const items = [
    { id: 1, name: 'Debian', icon: IconBrandDebian },
    { id: 2, name: 'Ubuntu', icon: IconBrandUbuntu },
    { id: 3, name: 'Fedora', icon: IconBrandFedora },
    { id: 4, name: 'Arch', icon: IconBrandArch },
    { id: 5, name: 'Mint', icon: IconBrandMint },
    { id: 6, name: 'Red Hat', icon: IconBrandRedhat }
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
