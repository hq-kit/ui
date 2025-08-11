'use client'

import type { Key } from 'react-aria-components'
import { IconBold, IconItalic, IconUnderline } from '@tabler/icons-react'
import { useState } from 'react'
import { Toggle } from '@/components/ui'

export default function ToggleGroupControlledDemo() {
    const [selected, setSelected] = useState(new Set<Key>(['bold']))

    return (
        <div className='flex flex-col items-center space-y-6'>
            <Toggle.Group icon onSelectionChange={setSelected} selectedKeys={selected} selectionMode='multiple'>
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
