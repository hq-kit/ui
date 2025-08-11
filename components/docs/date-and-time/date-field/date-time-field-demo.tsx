'use client'

import { getLocalTimeZone, now, parseZonedDateTime } from '@internationalized/date'
import { useState } from 'react'
import { DateField } from '@/components/ui'

export default function DateTimeFieldDemo() {
    const today = parseZonedDateTime(now(getLocalTimeZone()).toString())
    const [value, setValue] = useState(today)
    return (
        <DateField
            hideTimeZone
            hourCycle={24}
            label='Event date'
            onChange={(newValue) => setValue(newValue!)}
            value={value}
        />
    )
}
