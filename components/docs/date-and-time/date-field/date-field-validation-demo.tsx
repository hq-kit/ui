'use client'

import type { CalendarDate } from '@internationalized/date'
import { type FormEvent, useState } from 'react'

import { Button, DateField, Form } from '@/components/ui'

export default function DateFieldValidationDemo() {
    const [value, setValue] = useState<CalendarDate>()

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        alert(value)
    }
    return (
        <Form onSubmit={onSubmit} className='flex flex-col gap-4'>
            <DateField isRequired label='Event date' value={value} onChange={(v) => setValue(v!)} />
            <Button type='submit'>Submit</Button>
        </Form>
    )
}
