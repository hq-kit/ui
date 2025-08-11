'use client'

import { getLocalTimeZone, parseDate, startOfYear, today } from '@internationalized/date'
import { type FormEvent, useState } from 'react'
import { Button, DatePicker, Form } from '@/components/ui'

export default function DatePickerInvalidDemo() {
    const ly = startOfYear(today(getLocalTimeZone()))
    const now = today(getLocalTimeZone())
    const [value, setValue] = useState(parseDate(ly.toString()))
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        alert(value)
    }

    return (
        <Form className='flex flex-col gap-4' onSubmit={onSubmit}>
            <DatePicker
                className='mb-2'
                label='Delivery date'
                onChange={(newValue) => setValue(newValue!)}
                validate={(date) => (date < now ? 'Select a future date, please.' : null)}
                value={value}
            />

            <Button type='submit'>Submit</Button>
        </Form>
    )
}
