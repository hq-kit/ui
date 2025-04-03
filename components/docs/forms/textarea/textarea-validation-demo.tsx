'use client'

import React from 'react'

import { Button, Form, Textarea } from '@/components/ui'

export default function TextareaValidationDemo() {
    const [value, setValue] = React.useState('')

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        alert(value)
    }

    return (
        <Form className='space-y-4' onSubmit={onSubmit}>
            <Textarea
                isRequired
                validate={(v) => (v.length < 10 ? 'Must be at least 10 characters' : null)}
                value={value}
                onChange={setValue}
                label='About'
            />
            <Button type='submit'>Submit</Button>
        </Form>
    )
}
