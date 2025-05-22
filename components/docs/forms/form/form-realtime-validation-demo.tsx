'use client'

import { useState } from 'react'

import { Form, TextField } from '@/components/ui'

export default function FormRealtimeValidationDemo() {
    const [password, setPassword] = useState('')
    const errors = []
    if (password.length < 8) {
        errors.push('At least 8 characters')
    }
    if ((password.match(/[A-Z]/g) ?? []).length < 2) {
        errors.push('At least 2 upper case letters')
    }
    if ((password.match(/[^a-z]/gi) ?? []).length < 2) {
        errors.push('At least 2 symbols')
    }

    return (
        <Form onSubmit={() => {}}>
            <TextField
                label='Password'
                placeholder='Enter your password'
                type='password'
                isInvalid={!!errors.length}
                errorMessage={errors}
                value={password}
                onChange={setPassword}
            />
        </Form>
    )
}
