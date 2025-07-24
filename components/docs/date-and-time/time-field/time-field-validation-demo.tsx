'use client'

import { Button, Form, TimeField } from '@/components/ui'
import type { Time } from '@internationalized/date'
import { type FormEvent, useState } from 'react'

export default function TimeFieldValidationDemo() {
    const [value, setValue] = useState<Time>()

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        alert(value)
    }
    return (
        <Form onSubmit={onSubmit} className='flex flex-col gap-4'>
            <TimeField label='Event time' isRequired value={value} onChange={(v) => setValue(v!)} />
            <Button type='submit'>Submit</Button>
        </Form>
    )
}
