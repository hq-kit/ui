'use client'

import type { FormEvent } from 'react'
import { getLocalTimeZone, today } from '@internationalized/date'
import { useState } from 'react'
import { Button, DateRangePicker, Form } from '@/components/ui'

export default function DateRangePickerCustomValidationDemo() {
    const now = today(getLocalTimeZone())
    const tomorrowWeek = today(getLocalTimeZone()).add({ days: 12 })

    const [value, setValue] = useState({
        start: now,
        end: tomorrowWeek
    })
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        alert(value)
    }

    return (
        <Form className='flex flex-col gap-4' onSubmit={onSubmit}>
            <DateRangePicker
                defaultValue={{
                    start: today(getLocalTimeZone()),
                    end: today(getLocalTimeZone()).add({ weeks: 2 })
                }}
                label='Room Booking Dates'
                onChange={(v) => setValue(v!)}
                validate={(range) =>
                    range?.end.compare(range.start) > 7 ? 'Maximum booking duration is 1 week.' : null
                }
                value={value}
            />
            <Button type='submit'>Book Room</Button>
        </Form>
    )
}
