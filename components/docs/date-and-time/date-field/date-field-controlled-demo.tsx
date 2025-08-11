'use client'

import { type CalendarDate, getLocalTimeZone, parseDate, today } from '@internationalized/date'
import { useDateFormatter } from '@react-aria/i18n'
import { useState } from 'react'
import { DateField } from '@/components/ui'

export default function DateFieldControlledDemo() {
    const now = today(getLocalTimeZone())
    const [value, setValue] = useState<CalendarDate>(parseDate(now.toString()))

    const formatter = useDateFormatter({ dateStyle: 'full' })

    return (
        <div className='space-y-3'>
            <div className='divide-y [&_p]:py-2'>
                <p>{value ? formatter.format(value.toDate(getLocalTimeZone())) : '--'}</p>
                <p>{value ? value.toString() : '--'}</p>
            </div>
            <DateField label='Event date' onChange={(newValue) => setValue(newValue!)} value={value} />
        </div>
    )
}
