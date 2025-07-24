'use client'

import { GridList, Radio, RadioGroup } from '@/components/ui'
import { useState } from 'react'

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

export default function GridListMultipleDemo() {
    const [selectionMode, setSelectionMode] = useState<string>('multiple')
    return (
        <div className='space-y-6'>
            <RadioGroup
                orientation='horizontal'
                label='Selection mode'
                value={selectionMode}
                onChange={setSelectionMode}
            >
                <Radio value='none'>None</Radio>
                <Radio value='single'>Single</Radio>
                <Radio value='multiple'>Multiple</Radio>
            </RadioGroup>

            <GridList
                items={items}
                aria-label='Select items'
                selectionMode={selectionMode as 'none' | 'single' | 'multiple'}
            >
                {(item) => <GridList.Item id={item.id}>{item.name}</GridList.Item>}
            </GridList>
        </div>
    )
}
