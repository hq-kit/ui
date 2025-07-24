'use client'

import { Button, Modal, TextField } from '@/components/ui'
import { IconUserPlus } from 'hq-icons'
import { useState } from 'react'

export default function TextFieldSuffixButtonDemo() {
    const [open, setOpen] = useState<boolean>(false)
    return (
        <>
            <Modal.Content isOpen={open} onOpenChange={() => setOpen(false)}>
                <Modal.Header>
                    <Modal.Title>New User</Modal.Title>
                    <Modal.Description>Create a new user account</Modal.Description>
                </Modal.Header>
                <Modal.Body className='space-y-4'>
                    <TextField label='Name' placeholder='Name' />
                    <TextField label='Email' placeholder='Email' type='email' />
                </Modal.Body>
                <Modal.Footer>
                    <Button slot='close' variant='outline'>
                        Cancel
                    </Button>
                    <Button slot='close'>Add</Button>
                </Modal.Footer>
            </Modal.Content>
            <TextField
                label='Name'
                suffix={
                    <Button aria-label='Add New User' onPress={() => setOpen(true)} icon variant='ghost'>
                        <IconUserPlus />
                    </Button>
                }
            />
        </>
    )
}
