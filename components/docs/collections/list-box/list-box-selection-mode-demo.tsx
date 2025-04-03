'use client'

import React from 'react'

import { Key } from 'react-aria-components'

import { ListBox, Select } from '@/components/ui'

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

export default function ListBoxMultipleDemo() {
    const [selectionMode, setSelectionMode] = React.useState<Key>('multiple')
    return (
        <div className='space-y-6'>
            <Select
                label='Selection mode'
                selectedKey={selectionMode}
                onSelectionChange={setSelectionMode}
            >
                <Select.Item id='none'>None</Select.Item>
                <Select.Item id='single'>Single</Select.Item>
                <Select.Item id='multiple'>Multiple</Select.Item>
            </Select>

            <ListBox
                items={items}
                aria-label='Select items'
                selectionMode={selectionMode as 'none' | 'single' | 'multiple'}
            >
                {(item) => <ListBox.Item id={item.id}>{item.name}</ListBox.Item>}
            </ListBox>
        </div>
    )
}
