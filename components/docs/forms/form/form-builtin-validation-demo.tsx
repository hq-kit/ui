'use client'

import { Button, Form, TextField } from '@/components/ui'

export default function FormBuiltinValidationDemo() {
    return (
        <Form className='space-y-4' onSubmit={() => {}}>
            <TextField isRequired label='Name' placeholder='Enter your name' />
            <TextField isRequired label='Email' placeholder='Enter your email' type='email' />
            <Button type='submit'>Submit</Button>
        </Form>
    )
}
