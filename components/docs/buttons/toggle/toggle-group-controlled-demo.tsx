'use client'

import React from 'react'

import { IconBold, IconItalic, IconUnderline } from 'hq-icons'
import type { Key } from 'react-aria-components'

import { Toggle } from '@/components/ui'

export default function ToggleGroupControlledDemo() {
    const [selected, setSelected] = React.useState(new Set<Key>(['bold']))

    return (
        <div className='space-y-6 flex flex-col items-center'>
            <Toggle.Group icon selectionMode='multiple' selectedKeys={selected} onSelectionChange={setSelected}>
                <Toggle id='bold'>
                    <IconBold />
                </Toggle>
                <Toggle id='italic'>
                    <IconItalic />
                </Toggle>
                <Toggle id='underline'>
                    <IconUnderline />
                </Toggle>
            </Toggle.Group>
            <code>selected: {JSON.stringify([...selected])}</code>
        </div>
    )
}
