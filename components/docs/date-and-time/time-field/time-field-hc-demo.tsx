'use client'

import React from 'react'

import { Switch, TimeField } from '@/components/ui'
import { Time } from '@internationalized/date'

export default function TimeFieldHcDemo() {
    const [hc, setHc] = React.useState<12 | 24>(24)
    const [value, setValue] = React.useState(new Time(13, 45))
    return (
        <>
            <div className='absolute top-4 left-4 inline-flex min-w-32 flex-col gap-1'>
                <Switch
                    isSelected={hc === 24}
                    onChange={() => setHc((prevHc) => (prevHc === 24 ? 12 : 24))}
                >
                    {hc} hour
                </Switch>
            </div>
            <TimeField
                value={value}
                onChange={(newValue) => setValue(newValue!)}
                hourCycle={hc}
                label='Event time'
            />
        </>
    )
}
