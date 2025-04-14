'use client'

import React from 'react'

import { Button, Checkbox, CheckboxGroup, Form } from '@/components/ui'

export default function CheckboxValidationDemo() {
    const [value, setValue] = React.useState<string[]>([])
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        alert(value)
    }
    return (
        <Form className='space-y-4' onSubmit={onSubmit}>
            <CheckboxGroup
                onChange={setValue}
                value={value}
                isRequired
                validate={(v) => (!v.includes('terms-conditions') ? 'Terms and conditions must be accepted' : null)}
                label='Agreement'
                description='Please read and agree before continuing'
            >
                <Checkbox isRequired value='terms-conditions'>
                    Terms and conditions (required)
                </Checkbox>
                <Checkbox value='privacy-policy'>Privacy policy</Checkbox>
                <Checkbox value='cookie-policy'>Cookie policy</Checkbox>
            </CheckboxGroup>
            <Button type='submit'>Save</Button>
        </Form>
    )
}
