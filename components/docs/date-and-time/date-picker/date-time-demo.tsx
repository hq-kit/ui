'use client'

import { getLocalTimeZone, now, parseZonedDateTime } from '@internationalized/date'
import { useState } from 'react'
import { DatePicker } from '@/components/ui'

export default function DateTimeDemo() {
    const today = parseZonedDateTime(now(getLocalTimeZone()).toString())
    const [value, setValue] = useState(today)

    return (
        <DatePicker
            className='max-w-xs'
            hideTimeZone
            hourCycle={24}
            label='Event date'
            onChange={(newValue) => setValue(newValue!)}
            value={value}
        />
    )
}
