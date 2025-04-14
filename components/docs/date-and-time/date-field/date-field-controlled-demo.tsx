'use client'

import React from 'react'

import { DateField } from '@/components/ui'
import { getLocalTimeZone, parseDate, today, type CalendarDate } from '@internationalized/date'
import { useDateFormatter } from '@react-aria/i18n'

export default function DateFieldControlledDemo() {
    const now = today(getLocalTimeZone())
    const [value, setValue] = React.useState<CalendarDate>(parseDate(now.toString()))

    const formatter = useDateFormatter({ dateStyle: 'full' })

    return (
        <div className='space-y-3'>
            <div className='divide-y [&_p]:py-2'>
                <p>{value ? formatter.format(value.toDate(getLocalTimeZone())) : '--'}</p>
                <p>{value ? value.toString() : '--'}</p>
            </div>
            <DateField value={value} onChange={(newValue) => setValue(newValue!)} label='Event date' />
        </div>
    )
}
