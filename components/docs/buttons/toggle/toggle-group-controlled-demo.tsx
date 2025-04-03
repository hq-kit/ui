'use client'

import React from 'react'

import type { Key } from 'react-aria-components'

import { Toggle } from '@/components/ui'

export default function ToggleGroupControlledDemo() {
    const [selected, setSelected] = React.useState(new Set<Key>(['bold']))

    return (
        <div className='space-y-6 flex flex-col items-center'>
            <Toggle.Group
                selectionMode='multiple'
                selectedKeys={selected}
                onSelectionChange={setSelected}
            >
                <Toggle id='bold'>Bold</Toggle>
                <Toggle id='italic'>Italic</Toggle>
                <Toggle id='underline'>Underline</Toggle>
            </Toggle.Group>
            <code>selected: {JSON.stringify([...selected])}</code>
        </div>
    )
}
