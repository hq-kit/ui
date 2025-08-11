'use client'

import type { Key } from 'react-aria-components'
import { useState } from 'react'
import { Select } from '@/components/ui'

const items = [
    { id: 1, name: 'Ubuntu' },
    { id: 2, name: 'Debian' },
    { id: 3, name: 'Fedora' },
    { id: 4, name: 'Arch' },
    { id: 5, name: 'Redhat' }
]

export default function SelectControlledDemo() {
    const [selected, setSelected] = useState<Key | null>('')
    return (
        <div className='space-y-6'>
            <Select items={items} label='Linux Distro' onSelectionChange={setSelected} selectedKey={selected}>
                {(item) => <Select.Item id={item.id}>{item.name}</Select.Item>}
            </Select>
            <code>selected: {JSON.stringify(selected)}</code>
        </div>
    )
}
