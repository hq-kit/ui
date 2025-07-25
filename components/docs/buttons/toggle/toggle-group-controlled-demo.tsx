'use client'

import { Toggle } from '@/components/ui'
import { IconBold, IconItalic, IconUnderline } from '@tabler/icons-react'
import { useState } from 'react'
import type { Key } from 'react-aria-components'

export default function ToggleGroupControlledDemo() {
    const [selected, setSelected] = useState(new Set<Key>(['bold']))

    return (
        <div className='flex flex-col items-center space-y-6'>
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
            <code>{JSON.stringify([...selected], null, 2)}</code>
        </div>
    )
}
