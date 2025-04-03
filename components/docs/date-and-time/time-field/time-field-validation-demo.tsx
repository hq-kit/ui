'use client'

import React from 'react'

import { Button, Form, TimeField } from '@/components/ui'
import { Time } from '@internationalized/date'

export default function TimeFieldValidationDemo() {
    const [value, setValue] = React.useState<Time>()

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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
