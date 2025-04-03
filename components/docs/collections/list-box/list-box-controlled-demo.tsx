'use client'

import React from 'react'

import type { Selection } from 'react-aria-components'

import { ListBox } from '@/components/ui'

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

export default function ListBoxControlledDemo() {
    const [selected, setSelected] = React.useState<Selection>(new Set([1]))
    return (
        <div className='space-y-6'>
            <ListBox
                selectedKeys={selected}
                onSelectionChange={setSelected}
                items={items}
                aria-label='Linux Distros'
                selectionMode='multiple'
            >
                {(item) => <ListBox.Item id={item.id}>{item.name}</ListBox.Item>}
            </ListBox>

            <code>selected: {JSON.stringify(Array.from(selected))}</code>
        </div>
    )
}
