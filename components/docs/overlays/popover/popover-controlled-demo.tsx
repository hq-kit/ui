'use client'

import { IconCircleCheck, IconTrash } from '@tabler/icons-react'
import { useRef, useState } from 'react'
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
            <Button onPress={() => setOpen(true)} ref={triggerRef} variant='destructive'>
                Delete Account
            </Button>
            <Popover.Content isOpen={open} onOpenChange={setOpen} triggerRef={triggerRef}>
                <Popover.Header>
                    <Popover.Title>Confirm Deletion</Popover.Title>
                    <Popover.Description>
                        Are you sure you want to delete your account? This action cannot be undone.
                    </Popover.Description>
                </Popover.Header>
                <Popover.Footer>
                    <Button onPress={() => setOpen(false)} variant='outline'>
                        Cancel
                    </Button>
                    <Button
                        isPending={loading === 'loading'}
                        onPress={deleteAccount}
                        variant={loading === 'success' ? 'default' : 'destructive'}
                    >
                        {loading === 'success' ? <IconCircleCheck /> : <IconTrash />}
                        {loading === 'loading' ? 'Deleting...' : loading === 'success' ? 'Deleted' : 'Delete'}
                    </Button>
                </Popover.Footer>
            </Popover.Content>
        </>
    )
}
