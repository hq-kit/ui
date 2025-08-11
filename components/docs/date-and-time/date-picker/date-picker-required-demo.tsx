'use client'

import type { CalendarDate } from '@internationalized/date'
import { type FormEvent, useState } from 'react'
import { Button, DatePicker, Form } from '@/components/ui'

export default function DatePickerValidationDemo() {
    const [value, setValue] = useState<CalendarDate>()

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        alert(value)
    }

    return (
        <Form className='flex flex-col gap-4' onSubmit={onSubmit}>
            <DatePicker isRequired label='Event date' onChange={(v) => setValue(v!)} value={value} />
            <Button type='submit'>Submit</Button>
        </Form>
    )
}
