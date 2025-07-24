'use client'

import { Button, DateField, Form } from '@/components/ui'
import type { CalendarDate } from '@internationalized/date'
import { type FormEvent, useState } from 'react'

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
