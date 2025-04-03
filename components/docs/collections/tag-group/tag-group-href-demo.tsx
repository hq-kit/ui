'use client'

import { Tag } from '@/components/ui'

const items = [
    { id: 1, name: 'Ubuntu', url: '#' },
    { id: 2, name: 'Debian', url: '#' },
    { id: 3, name: 'Fedora', url: '#' },
    { id: 4, name: 'Arch', url: '#' }
]

export default function TagGroupControlledDemo() {
    return (
        <Tag.Group label='Linux Distros' items={items}>
            {(item) => (
                <Tag id={item.name} href={item.url}>
                    {item.name}
                </Tag>
            )}
        </Tag.Group>
    )
}
