'use client'

import React from 'react'

import { Button, DatePicker, Form } from '@/components/ui'
import { getLocalTimeZone, parseDate, startOfYear, today } from '@internationalized/date'

export default function DatePickerInvalidDemo() {
    const ly = startOfYear(today(getLocalTimeZone()))
    const now = today(getLocalTimeZone())
    const [value, setValue] = React.useState(parseDate(ly.toString()))
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        alert(value)
    }

    return (
        <Form onSubmit={onSubmit} className='flex flex-col gap-4'>
            <DatePicker
                validate={(date) => (date < now ? 'Select a future date, please.' : null)}
                value={value}
                onChange={(newValue) => setValue(newValue!)}
                label='Delivery date'
                className='mb-2'
            />

            <Button type='submit'>Submit</Button>
        </Form>
    )
}
