'use client'

import React from 'react'

import type { Key } from 'react-aria-components'

import { Toggle } from '@/components/ui'

export default function ToggleGroupControlledDemo() {
    const [selected, setSelected] = React.useState(new Set<Key>(['bold']))

    return (
        <>
            <Toggle.Group
                selectionMode='multiple'
                selectedKeys={selected}
                onSelectionChange={setSelected}
            >
                <Toggle id='bold'>Bold</Toggle>
                <Toggle id='italic'>Italic</Toggle>
                <Toggle id='underline'>Underline</Toggle>
            </Toggle.Group>
            {[...selected].length > 0 && (
                <p className='text-muted-foreground mt-4'>
                    Selected:{' '}
                    <strong className='text-foreground font-semibold'>
                        {[...selected].join(', ')}
                    </strong>
                </p>
            )}
        </>
    )
}
