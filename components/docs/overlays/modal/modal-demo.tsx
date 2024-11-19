'use client'

import { Button, Form, Modal, TextField } from '@/components/ui'

export default function ModalDemo() {
    return (
        <Modal>
            <Button>Turn on 2FA</Button>
            <Modal.Content>
                <Modal.Header>
                    <Modal.Title>Nice! Let&apos;s beef up your account.</Modal.Title>
                    <Modal.Description>
                        2FA beefs up your account&apos;s defense. Pop in your password to keep
                        going.
                    </Modal.Description>
                </Modal.Header>
                <Form onSubmit={() => {}}>
                    <TextField
                        isRequired
                        autoFocus
                        label='Password'
                        type='password'
                        placeholder='Enter your password'
                    />
                    <Modal.Footer>
                        <Modal.Close>Cancel</Modal.Close>
                        <Button type='submit'>Turn on 2FA</Button>
                    </Modal.Footer>
                </Form>
            </Modal.Content>
        </Modal>
    )
}
