'use client'

import React from 'react'

import { Button, Form, TextField } from '@/components/ui'

export default function TextFieldValidationDemo() {
    const [value, setValue] = React.useState<string>('')
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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
