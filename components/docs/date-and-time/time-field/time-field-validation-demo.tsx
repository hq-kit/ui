'use client'

import type { Time } from '@internationalized/date'
import { type FormEvent, useState } from 'react'
import { Button, Form, TimeField } from '@/components/ui'

export default function TimeFieldValidationDemo() {
    const [value, setValue] = useState<Time>()

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        alert(value)
    }
    return (
        <Form className='flex flex-col gap-4' onSubmit={onSubmit}>
            <TimeField isRequired label='Event time' onChange={(v) => setValue(v!)} value={value} />
            <Button type='submit'>Submit</Button>
        </Form>
    )
}
