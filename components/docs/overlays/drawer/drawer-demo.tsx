'use client'

import { Button, Checkbox, Drawer, Form, Link, TextField } from '@/components/ui'

export default function DrawerDemo() {
    return (
        <Drawer>
            <Button>Login</Button>
            <Form onSubmit={() => {}}>
                <Drawer.Content>
                    <Drawer.Header>
                        <Drawer.Title>Login</Drawer.Title>
                        <Drawer.Description>Enter your credentials to sign in.</Drawer.Description>
                    </Drawer.Header>
                    <Drawer.Body className='space-y-4'>
                        <TextField isRequired type='email' label='Email' placeholder='Enter your email' />
                        <TextField isRequired label='Password' type='password' placeholder='Enter your password' />
                        <div className='flex items-center justify-between'>
                            <Checkbox name='remember-me'>Remember me</Checkbox>
                            <Link href='#'>Forgot password?</Link>
                        </div>
                    </Drawer.Body>
                    <Drawer.Footer>
                        <Button slot='close' variant='outline'>
                            Cancel
                        </Button>
                        <Button type='submit'>Login</Button>
                    </Drawer.Footer>
                </Drawer.Content>
            </Form>
        </Drawer>
    )
}
