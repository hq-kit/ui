'use client'

import { Button, Checkbox, Form, Link, Modal, TextField } from '@/components/ui'

export default function ModalDrawerDemo() {
    return (
        <Modal>
            <Button>Login</Button>
            <Form onSubmit={() => {}}>
                <Modal.Content drawer notch>
                    <div className='mx-auto w-full max-w-xl'>
                        <Modal.Header>
                            <Modal.Title>Login</Modal.Title>
                            <Modal.Description>Enter your credentials to sign in.</Modal.Description>
                        </Modal.Header>
                        <Modal.Body className='space-y-4'>
                            <TextField isRequired type='email' label='Email' placeholder='Enter your email' />
                            <TextField isRequired label='Password' type='password' placeholder='Enter your password' />
                            <div className='flex items-center justify-between'>
                                <Checkbox name='remember-me'>Remember me</Checkbox>
                                <Link href='#'>Forgot password?</Link>
                            </div>
                        </Modal.Body>
                        <Modal.Footer className='sm:flex-col-reverse sm:justify-between'>
                            <Button slot='close' variant='outline'>
                                Cancel
                            </Button>
                            <Button type='submit'>Login</Button>
                        </Modal.Footer>
                    </div>
                </Modal.Content>
            </Form>
        </Modal>
    )
}
