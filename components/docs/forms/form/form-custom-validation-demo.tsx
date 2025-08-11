'use client'

import { Button, Form, TextField } from '@/components/ui'

export default function FormCustomValidationDemo() {
    return (
        <Form className='space-y-4' onSubmit={() => {}}>
            <TextField
                errorMessage={({ validationDetails }) =>
                    validationDetails.valueMissing ? 'Fill the email, Please! 🥲' : ''
                }
                isRequired
                label='Email'
                placeholder='Enter your email'
                type='email'
            />
            <TextField
                isRequired
                label='Password'
                placeholder='Enter your password'
                type='password'
                validate={(v) => (v.length < 8 ? 'Must be at least 8 characters' : null)}
            />
            <Button type='submit'>Submit</Button>
        </Form>
    )
}
