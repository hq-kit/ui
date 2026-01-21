'use client'

import { Label } from '@/components/ui/label'
import { Tag, TagGroup, TagList } from '@/components/ui/tag'

const androidBrands = [
  { id: '1', name: 'Samsung', available: false },
  { id: '2', name: 'OnePlus', available: true },
  { id: '3', name: 'Google', available: true },
  { id: '4', name: 'Xiaomi', available: false }
]

export default function TagGroupDisabledDemo() {
  return (
    <div className='space-y-6'>
      <TagGroup
        disabledKeys={androidBrands.filter((brand) => !brand.available).map((brand) => brand.id)}
        selectionMode='multiple'
      >
        <Label>Disabled key</Label>
        <TagList items={androidBrands}>{(item) => <Tag>{item.name}</Tag>}</TagList>
      </TagGroup>

      <TagGroup selectionMode='multiple'>
        <Label>Disabled by Tag</Label>
        <TagList items={androidBrands}>{(item) => <Tag isDisabled={item.available}>{item.name}</Tag>}</TagList>
      </TagGroup>
    </div>
  )
}
