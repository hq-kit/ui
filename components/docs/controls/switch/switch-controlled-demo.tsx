'use client'

import React from 'react'
import { Switch } from '@/components/ui'

export default function SwitchControlledDemo() {
    const [value, setValue] = React.useState<boolean>(false)
    return (
        <div className='flex flex-col gap-6'>
            <Switch isSelected={value} onChange={setValue} value='selected'>
                Switch
            </Switch>

            <code>value: {JSON.stringify(value)}</code>
        </div>
    )
}
