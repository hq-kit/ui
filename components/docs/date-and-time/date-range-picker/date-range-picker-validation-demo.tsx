'use client'

import type { CalendarDate } from '@internationalized/date'
import { type FormEvent, useState } from 'react'
import { Button, DateRangePicker, Form } from '@/components/ui'

export default function DateRangePickerValidationDemo() {
    const [value, setValue] = useState<{ start: CalendarDate; end: CalendarDate }>()

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        alert(value)
    }

    return (
        <Form className='flex flex-col gap-4' onSubmit={onSubmit}>
            <DateRangePicker isRequired label='Event date' onChange={(v) => setValue(v!)} value={value} />
            <Button type='submit'>Submit</Button>
        </Form>
    )
}
