'use client'

import React from 'react'

import { IconLock, IconLockOpen } from 'hq-icons'

import { Toggle } from '@/components/ui'

export default function ToggleControlledDemo() {
    const [isSelected, setSelected] = React.useState(false)
    return (
        <div className='flex flex-col items-center space-y-6'>
            <Toggle icon isSelected={isSelected} onChange={setSelected}>
                {({ isSelected }) => <>{isSelected ? <IconLock /> : <IconLockOpen />}</>}
            </Toggle>
            <code>{JSON.stringify({ isSelected }, null, 2)}</code>
        </div>
    )
}
