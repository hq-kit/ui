'use client'

import type { Selection } from 'react-aria-components'
import { useState } from 'react'
import { MultiSelect } from '@/components/ui'

const items = [
    { id: 1, name: 'Ubuntu' },
    { id: 2, name: 'Debian' },
    { id: 3, name: 'Fedora' },
    { id: 4, name: 'Arch' },
    { id: 5, name: 'CentOS' },
    { id: 6, name: 'Gentoo' },
    { id: 7, name: 'OpenSuse' },
    { id: 8, name: 'Redhat' },
    { id: 9, name: 'FreeBSD' },
    { id: 10, name: 'NetBSD' }
]

export default function MultiSelectDemo() {
    const [selected, setSelected] = useState<Selection>(new Set([2, 4]))
    return (
        <div className='space-y-6'>
            <MultiSelect items={items} label='Linux Distro' onSelectionChange={setSelected} selectedKeys={selected}>
                {(item) => {
                    return <MultiSelect.Item textValue={item.name}>{item.name}</MultiSelect.Item>
                }}
            </MultiSelect>
            <code>selected: {JSON.stringify([...selected])}</code>
        </div>
    )
}
