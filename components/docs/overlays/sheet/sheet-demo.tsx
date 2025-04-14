'use client'

import { Button, Checkbox, Form, Link, Sheet, TextField } from '@/components/ui'

export default function SheetDemo() {
    return (
        <Sheet>
            <Button>Login</Button>
            <Form onSubmit={() => {}}>
                <Sheet.Content>
                    <Sheet.Header>
                        <Sheet.Title>Login</Sheet.Title>
                        <Sheet.Description>Enter your credentials to sign in.</Sheet.Description>
                    </Sheet.Header>
                    <Sheet.Body className='space-y-4'>
                        <TextField isRequired type='email' label='Email' placeholder='Enter your email' />
                        <TextField isRequired label='Password' type='password' placeholder='Enter your password' />
                        <div className='flex items-center justify-between'>
                            <Checkbox name='remember-me'>Remember me</Checkbox>
                            <Link href='#'>Forgot password?</Link>
                        </div>
                    </Sheet.Body>
                    <Sheet.Footer>
                        <Button slot='close' variant='outline'>
                            Cancel
                        </Button>
                        <Button type='submit'>Login</Button>
                    </Sheet.Footer>
                </Sheet.Content>
            </Form>
        </Sheet>
    )
}
