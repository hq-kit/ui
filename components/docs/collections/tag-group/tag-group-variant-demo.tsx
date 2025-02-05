'use client'

import { useListData } from 'react-stately'

import { badgeStyles, Tag, TagGroupProps } from '@/components/ui'

const shoes = [
    { id: '1', name: 'Nike', available: true },
    { id: '2', name: 'Adidas', available: false },
    { id: '3', name: 'Puma', available: true },
    { id: '4', name: 'Reebok', available: true }
]

type Appearance = TagGroupProps['variant']

export default function TagGroupVariantDemo() {
    const shoesList = useListData({
        initialItems: shoes
    })
    return (
        <div className='max-w-sm space-y-2'>
            {Object.keys(badgeStyles.variants.variant).map((variant) => (
                <Tag.Group
                    key={variant}
                    aria-label={variant}
                    selectionMode='multiple'
                    onRemove={(keys) => shoesList.remove(...keys)}
                    variant={variant as Appearance}
                >
                    <Tag.List items={shoesList.items}>{(item) => <Tag>{item.name}</Tag>}</Tag.List>
                </Tag.Group>
            ))}
        </div>
    )
}
