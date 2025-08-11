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
        <Tag.Group items={items} label='Linux Distros'>
            {(item) => (
                <Tag href={item.url} id={item.name}>
                    {item.name}
                </Tag>
            )}
        </Tag.Group>
    )
}
