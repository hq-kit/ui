'use client'

import { Button, Checkbox, Form, Link, Popover, TextField } from '@/components/ui'

export default function PopoverDemo() {
    return (
        <Popover>
            <Button>Login</Button>
            <Form onSubmit={() => {}}>
                <Popover.Content className='min-w-96'>
                    <Popover.Header>
                        <Popover.Title>Login</Popover.Title>
                        <Popover.Description>Enter your credentials to sign in.</Popover.Description>
                    </Popover.Header>
                    <Popover.Body className='space-y-4'>
                        <TextField isRequired label='Email' placeholder='Enter your email' type='email' />
                        <TextField isRequired label='Password' placeholder='Enter your password' type='password' />
                        <div className='flex items-center justify-between'>
                            <Checkbox name='remember-me'>Remember me</Checkbox>
                            <Link href='#'>Forgot password?</Link>
                        </div>
                    </Popover.Body>
                    <Popover.Footer>
                        <Button type='submit'>Login</Button>
                    </Popover.Footer>
                </Popover.Content>
            </Form>
        </Popover>
    )
}
