'use client'

import React from 'react'

import { Button, Checkbox, Form } from '@/components/ui'

export default function CheckboxValidationDemo() {
    const [value, setValue] = React.useState<boolean>(false)
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        alert(value)
    }
    return (
        <Form className='space-y-4' onSubmit={onSubmit}>
            <Checkbox isRequired isSelected={value} onChange={setValue}>
                I accept terms and conditions
            </Checkbox>
            <Button type='submit'>Submit</Button>
        </Form>
    )
}
