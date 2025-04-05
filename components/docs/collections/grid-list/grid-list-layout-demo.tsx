'use client'

import React from 'react'

import { Key } from 'react-aria-components'

import { GridList, Select } from '@/components/ui'

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

export default function GridListLayoutDemo() {
    const [columns, setColumns] = React.useState<Key>(2)
    const [gap, setGap] = React.useState<Key>(4)

    return (
        <div className='flex flex-col gap-4'>
            <div className='flex gap-2 w-full'>
                <Select
                    className='w-full'
                    label='Columns'
                    selectedKey={columns}
                    onSelectionChange={setColumns}
                >
                    <Select.Item id={1}>1</Select.Item>
                    <Select.Item id={2}>2</Select.Item>
                    <Select.Item id={3}>3</Select.Item>
                    <Select.Item id={4}>4</Select.Item>
                    <Select.Item id={5}>5</Select.Item>
                    <Select.Item id={6}>6</Select.Item>
                </Select>
                <Select className='w-full' label='Gap' selectedKey={gap} onSelectionChange={setGap}>
                    <Select.Item id={0}>0</Select.Item>
                    <Select.Item id={2}>2</Select.Item>
                    <Select.Item id={4}>4</Select.Item>
                    <Select.Item id={6}>6</Select.Item>
                </Select>
            </div>
            <GridList
                selectionMode='multiple'
                items={items}
                aria-label='Linux Distros'
                columns={columns as 1 | 2 | 3 | 4 | 5 | 6}
                gap={gap as 0 | 2 | 4 | 6}
            >
                {(item) => <GridList.Item id={item.id}>{item.name}</GridList.Item>}
            </GridList>
        </div>
    )
}
