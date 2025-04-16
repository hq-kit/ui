'use client'

import React from 'react'

import type { Selection } from 'react-aria-components'

import { GridList } from '@/components/ui'

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

export default function GridListControlledDemo() {
    const [selected, setSelected] = React.useState<Selection>(new Set([]))
    return (
        <div className='space-y-6'>
            <GridList
                selectedKeys={selected}
                onSelectionChange={setSelected}
                items={items}
                aria-label='Linux Distros'
                selectionMode='multiple'
            >
                {(item) => <GridList.Item id={item.id}>{item.name}</GridList.Item>}
            </GridList>
            <code>{JSON.stringify([...selected], null, 2)}</code>
        </div>
    )
}
