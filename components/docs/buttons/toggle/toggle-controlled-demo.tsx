'use client'

import React from 'react'

import { IconLock, IconLockOpen } from 'hq-icons'

import { Toggle } from '@/components/ui'

export default function ToggleControlledDemo() {
    const [isSelected, setSelected] = React.useState(false)
    return (
        <div className='flex flex-col space-y-6 items-center'>
            <Toggle size='icon' isSelected={isSelected} onChange={setSelected}>
                {({ isSelected }) => <>{isSelected ? <IconLock /> : <IconLockOpen />}</>}
            </Toggle>
            <code>value: {JSON.stringify(isSelected)}</code>
        </div>
    )
}
