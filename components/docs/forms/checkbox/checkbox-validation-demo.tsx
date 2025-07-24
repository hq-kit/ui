'use client'

import { Button, Checkbox, Form } from '@/components/ui'
import { type FormEvent, useState } from 'react'

export default function CheckboxValidationDemo() {
    const [value, setValue] = useState<boolean>(false)
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
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
