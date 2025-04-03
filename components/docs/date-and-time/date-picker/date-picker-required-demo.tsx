'use client'

import React from 'react'

import { Button, DatePicker, Form } from '@/components/ui'
import type { CalendarDate } from '@internationalized/date'

export default function DatePickerValidationDemo() {
    const [value, setValue] = React.useState<CalendarDate>()

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        alert(value)
    }

    return (
        <Form onSubmit={onSubmit} className='flex flex-col gap-4'>
            <DatePicker
                isRequired
                value={value}
                onChange={(v) => setValue(v!)}
                label='Event date'
            />
            <Button type='submit'>Submit</Button>
        </Form>
    )
}
