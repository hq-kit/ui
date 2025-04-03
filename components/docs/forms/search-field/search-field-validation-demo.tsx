'use client'

import React from 'react'

import { Button, Form, SearchField } from '@/components/ui'

export default function SearchFieldValidationDemo() {
    const [value, setValue] = React.useState<string>('')
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        alert(value)
    }

    return (
        <Form className='space-y-4' onSubmit={onSubmit}>
            <SearchField
                isRequired
                validate={(v) => (v.length < 3 ? 'Must be at least 3 characters' : null)}
                value={value}
                onChange={setValue}
                label='Search for Products'
            />
            <Button type='submit'>Submit</Button>
        </Form>
    )
}
