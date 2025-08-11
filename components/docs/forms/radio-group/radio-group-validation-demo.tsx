'use client'

import { type FormEvent, useState } from 'react'
import { Button, Form, Radio, RadioGroup } from '@/components/ui'

export default function RadioGroupControlledDemo() {
    const [selected, setSelected] = useState<string>('')
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        alert(selected)
    }
    return (
        <Form className='space-y-4' onSubmit={onSubmit}>
            <RadioGroup isRequired label='Plan' onChange={setSelected} value={selected}>
                <Radio value='bronze'>Bronze</Radio>
                <Radio value='silver'>Silver</Radio>
                <Radio value='gold'>Gold</Radio>
                <Radio value='platinum'>Platinum</Radio>
            </RadioGroup>
            <Button type='submit'>Submit</Button>
        </Form>
    )
}
