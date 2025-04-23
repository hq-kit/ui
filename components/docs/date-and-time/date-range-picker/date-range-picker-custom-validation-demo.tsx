'use client'

import { useState } from 'react'
import type { FormEvent } from 'react'

import { Button, DateRangePicker, Form } from '@/components/ui'
import { getLocalTimeZone, today } from '@internationalized/date'

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
        <Form onSubmit={onSubmit} className='flex flex-col gap-4'>
            <DateRangePicker
                label='Room Booking Dates'
                validate={(range) =>
                    range?.end.compare(range.start) > 7 ? 'Maximum booking duration is 1 week.' : null
                }
                defaultValue={{
                    start: today(getLocalTimeZone()),
                    end: today(getLocalTimeZone()).add({ weeks: 2 })
                }}
                value={value}
                onChange={(v) => setValue(v!)}
            />
            <Button type='submit'>Book Room</Button>
        </Form>
    )
}
