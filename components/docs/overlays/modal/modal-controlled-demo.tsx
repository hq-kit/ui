'use client'

import { IconCircleCheck, IconTrash } from 'hq-icons'
import { useState } from 'react'

import { Button, Modal } from '@/components/ui'

export default function ModalControlledDemo() {
    const [open, setOpen] = useState<boolean>(false)
    const [loading, setLoading] = useState<'idle' | 'loading' | 'success'>('idle')

    const deleteAccount = async () => {
        setLoading('loading')
        await new Promise((resolve) => setTimeout(resolve, 2000))
        setLoading('success')
        await new Promise((resolve) => setTimeout(resolve, 500))
        setLoading('idle')
        setOpen(false)
    }
    return (
        <>
            <Button onPress={() => setOpen(true)} variant='danger'>
                Delete Account
            </Button>
            <Modal.Content isOpen={open} onOpenChange={setOpen}>
                <Modal.Header>
                    <Modal.Title>Confirm Deletion</Modal.Title>
                    <Modal.Description>
                        Are you sure you want to delete your account? This action cannot be undone.
                    </Modal.Description>
                </Modal.Header>
                <Modal.Footer>
                    <Button variant='outline' onPress={() => setOpen(false)}>
                        Cancel
                    </Button>
                    <Button
                        isPending={loading === 'loading'}
                        variant={loading === 'success' ? 'primary' : 'danger'}
                        onPress={deleteAccount}
                    >
                        {loading === 'success' ? <IconCircleCheck /> : <IconTrash />}
                        {loading === 'loading' ? 'Deleting...' : loading === 'success' ? 'Deleted' : 'Delete'}
                    </Button>
                </Modal.Footer>
            </Modal.Content>
        </>
    )
}
