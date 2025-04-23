'use client'

import { useRef, useState } from 'react'

import { IconCircleCheck, IconTrash } from 'hq-icons'

import { Button, Popover } from '@/components/ui'

export default function PopoverControlledDemo() {
    const [open, setOpen] = useState<boolean>(false)
    const [loading, setLoading] = useState<'idle' | 'loading' | 'success'>('idle')
    const triggerRef = useRef<HTMLButtonElement>(null)

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
            <Button ref={triggerRef} onPress={() => setOpen(true)} variant='danger'>
                Delete Account
            </Button>
            <Popover.Content triggerRef={triggerRef} isOpen={open} onOpenChange={setOpen}>
                <Popover.Header>
                    <Popover.Title>Confirm Deletion</Popover.Title>
                    <Popover.Description>
                        Are you sure you want to delete your account? This action cannot be undone.
                    </Popover.Description>
                </Popover.Header>
                <Popover.Footer>
                    <Button variant='outline' onPress={() => setOpen(false)}>
                        Cancel
                    </Button>
                    <Button
                        isPending={loading === 'loading'}
                        variant={loading === 'success' ? 'success' : 'danger'}
                        onPress={deleteAccount}
                    >
                        {loading === 'success' ? <IconCircleCheck /> : <IconTrash />}
                        {loading === 'loading' ? 'Deleting...' : loading === 'success' ? 'Deleted' : 'Delete'}
                    </Button>
                </Popover.Footer>
            </Popover.Content>
        </>
    )
}
