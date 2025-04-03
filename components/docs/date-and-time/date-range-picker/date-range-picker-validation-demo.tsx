'use client'

import React from 'react'

import { Button, DateRangePicker, Form } from '@/components/ui'
import { CalendarDate } from '@internationalized/date'

export default function DateRangePickerValidationDemo() {
    const [value, setValue] = React.useState<{ start: CalendarDate; end: CalendarDate }>()

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        alert(value)
    }

    return (
        <Form onSubmit={onSubmit} className='flex flex-col gap-4'>
            <DateRangePicker
                isRequired
                label='Event date'
                value={value}
                onChange={(v) => setValue(v!)}
            />
            <Button type='submit'>Submit</Button>
        </Form>
    )
}
