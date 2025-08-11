'use client'

import { type FormEvent, useState } from 'react'
import { Button, Form, SearchField } from '@/components/ui'

export default function SearchFieldValidationDemo() {
    const [value, setValue] = useState<string>('')
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        alert(value)
    }

    return (
        <Form className='space-y-4' onSubmit={onSubmit}>
            <SearchField
                isRequired
                label='Search for Products'
                onChange={setValue}
                validate={(v) => (v.length < 3 ? 'Must be at least 3 characters' : null)}
                value={value}
            />
            <Button type='submit'>Submit</Button>
        </Form>
    )
}
