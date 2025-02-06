'use client'

import { useListData } from 'react-stately'

import { badgeStyles, Tag, TagGroupProps } from '@/components/ui'

const carModels = [
    { id: '1', name: 'Tesla Model S', available: true },
    { id: '2', name: 'Ford Mustang', available: false },
    { id: '3', name: 'Chevrolet Camaro', available: true },
    { id: '4', name: 'BMW M3', available: false },
    { id: '5', name: 'Audi R8', available: true }
]
type Shapes = TagGroupProps['shape']

export default function TagGroupShapeDemo() {
    const carList = useListData({
        initialItems: carModels
    })
    return (
        <div className='max-w-sm space-y-6'>
            {Object.keys(badgeStyles.variants.shape).map((shape) => (
                <Tag.Group
                    key={shape}
                    label={shape}
                    selectionMode='multiple'
                    onRemove={(keys) => carList.remove(...keys)}
                    shape={shape as Shapes}
                >
                    <Tag.List items={carList.items}>{(item) => <Tag>{item.name}</Tag>}</Tag.List>
                </Tag.Group>
            ))}
        </div>
    )
}
