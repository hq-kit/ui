'use client'

import React from 'react'

import { IconPlus } from 'cleon-icons'

import { Button, Modal, TextField } from '@/components/ui'

export default function TextFieldSuffixButtonDemo() {
    const [open, setOpen] = React.useState(false)
    const close = () => setOpen(false)
    return (
        <>
            <Modal.Content isOpen={open} onOpenChange={close}>
                <Modal.Header>
                    <Modal.Title>New User</Modal.Title>
                    <Modal.Description>Create a new user account</Modal.Description>
                </Modal.Header>
                <Modal.Body className='flex flex-col gap-4'>
                    <TextField label='Username' placeholder='Username' />
                    <TextField label='Email' placeholder='Email' type='email' />
                </Modal.Body>
                <Modal.Footer>
                    <Modal.Close variant='outline'>Cancel</Modal.Close>
                    <Button onPress={close}>Continue</Button>
                </Modal.Footer>
            </Modal.Content>
            <TextField
                label='Username'
                suffix={
                    <Button aria-label='New user' onPress={() => setOpen(true)} variant='outline'>
                        <IconPlus />
                    </Button>
                }
            />
        </>
    )
}
