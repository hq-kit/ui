'use client'

import { Button, Form, TextField } from '@/components/ui'

export default function FormCustomValidationDemo() {
    return (
        <Form onSubmit={() => {}} className='space-y-4'>
            <TextField
                isRequired
                label='Email'
                placeholder='Enter your email'
                type='email'
                errorMessage={({ validationDetails }) =>
                    validationDetails.valueMissing ? 'Fill the email, Please! 🥲' : 'None'
                }
            />
            <TextField
                isRequired
                validate={(v) => (v.length < 8 ? 'Must be at least 8 characters' : null)}
                label='Password'
                placeholder='Enter your password'
                type='password'
            />
            <Button type='submit'>Submit</Button>
        </Form>
    )
}
