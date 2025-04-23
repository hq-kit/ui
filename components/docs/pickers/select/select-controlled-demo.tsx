'use client'

import { useState } from 'react'

import type { Key } from 'react-aria-components'

import { Select } from '@/components/ui'

const items = [
    { id: 1, name: 'Ubuntu' },
    { id: 2, name: 'Debian' },
    { id: 3, name: 'Fedora' },
    { id: 4, name: 'Arch' },
    { id: 5, name: 'Redhat' }
]

export default function SelectControlledDemo() {
    const [selected, setSelected] = useState<Key>('')
    return (
        <div className='space-y-6'>
            <Select selectedKey={selected} onSelectionChange={setSelected} label='Linux Distro' items={items}>
                {(item) => <Select.Item id={item.id}>{item.name}</Select.Item>}
            </Select>
            <code>selected: {JSON.stringify(selected)}</code>
        </div>
    )
}
