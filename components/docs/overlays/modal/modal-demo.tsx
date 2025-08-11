'use client'

import { Button, Checkbox, Form, Link, Modal, TextField } from '@/components/ui'

export default function ModalDemo() {
    return (
        <Modal>
            <Button>Login</Button>
            <Form onSubmit={() => {}}>
                <Modal.Content>
                    <Modal.Header>
                        <Modal.Title>Login</Modal.Title>
                        <Modal.Description>Enter your credentials to sign in.</Modal.Description>
                    </Modal.Header>
                    <Modal.Body className='space-y-4'>
                        <TextField isRequired label='Email' placeholder='Enter your email' type='email' />
                        <TextField isRequired label='Password' placeholder='Enter your password' type='password' />
                        <div className='flex items-center justify-between'>
                            <Checkbox name='remember-me'>Remember me</Checkbox>
                            <Link href='#'>Forgot password?</Link>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button slot='close' variant='outline'>
                            Cancel
                        </Button>
                        <Button type='submit'>Login</Button>
                    </Modal.Footer>
                </Modal.Content>
            </Form>
        </Modal>
    )
}
