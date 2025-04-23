'use client'

import { type FormEvent, useState } from 'react'

import { Button, Form, NumberField } from '@/components/ui'

export default function NumberFieldValidationDemo() {
    const [value, setValue] = useState<number>()
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        alert(value)
    }
    return (
        <Form className='space-y-4' onSubmit={onSubmit}>
            <NumberField
                isRequired
                validate={(v) => (v < 100 ? 'Value must be greater than 100' : null)}
                label='Size'
                value={value}
                onChange={setValue}
            />
            <Button type='submit'>Submit</Button>
        </Form>
    )
}
