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
        <Form className='flex flex-col gap-4' onSubmit={onSubmit}>
            <DateField isRequired label='Event date' onChange={(v) => setValue(v!)} value={value} />
            <Button type='submit'>Submit</Button>
        </Form>
    )
}
