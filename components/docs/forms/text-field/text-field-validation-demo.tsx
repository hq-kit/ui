'use client'

import { Button, Form, TextField } from '@/components/ui'
import { type FormEvent, useState } from 'react'

export default function TextFieldValidationDemo() {
    const [value, setValue] = useState<string>('')
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        alert(value)
    }
    return (
        <Form className='space-y-4' onSubmit={onSubmit}>
            <TextField
                isRequired
                validate={(v) => (v.length < 3 ? 'Must be at least 3 characters' : null)}
                label='Name'
                value={value}
                onChange={setValue}
            />
            <Button type='submit'>Submit</Button>
        </Form>
    )
}
