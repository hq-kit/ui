'use client'

import { Tag } from '@/components/ui'

const articles = [
    { name: 'React Tutorial', url: '#' },
    { name: 'TypeScript Handbook', url: '#' },
    { name: 'JavaScript Guide', url: '#' }
]

export default function TagGroupControlledDemo() {
    return (
        <Tag.Group label='Articles'>
            <Tag.List items={articles}>
                {(item) => (
                    <Tag id={item.name} href={item.url}>
                        {item.name}
                    </Tag>
                )}
            </Tag.List>
        </Tag.Group>
    )
}
