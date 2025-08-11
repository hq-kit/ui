'use client'

import { type FormEvent, useState } from 'react'
import { Button, Checkbox, CheckboxGroup, Form } from '@/components/ui'

export default function CheckboxValidationDemo() {
    const [value, setValue] = useState<string[]>([])
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        alert(value)
    }
    return (
        <Form className='space-y-4' onSubmit={onSubmit}>
            <CheckboxGroup
                description='Please read and agree before continuing'
                isRequired
                label='Agreement'
                onChange={setValue}
                validate={(v) => (!v.includes('terms-conditions') ? 'Terms and conditions must be accepted' : null)}
                value={value}
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
