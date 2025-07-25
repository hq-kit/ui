'use client'

import { Button, Sheet } from '@/components/ui'
import { IconCircleCheck, IconTrash } from '@tabler/icons-react'
import { useState } from 'react'

export default function SheetControlledDemo() {
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
            <Button onPress={() => setOpen(true)} variant='destructive'>
                Delete Account
            </Button>
            <Sheet.Content isOpen={open} onOpenChange={setOpen}>
                <Sheet.Header>
                    <Sheet.Title>Confirm Deletion</Sheet.Title>
                    <Sheet.Description>
                        Are you sure you want to delete your account? This action cannot be undone.
                    </Sheet.Description>
                </Sheet.Header>
                <Sheet.Footer>
                    <Button variant='outline' onPress={() => setOpen(false)}>
                        Cancel
                    </Button>
                    <Button
                        isPending={loading === 'loading'}
                        variant={loading === 'success' ? 'default' : 'destructive'}
                        onPress={deleteAccount}
                    >
                        {loading === 'success' ? <IconCircleCheck /> : <IconTrash />}
                        {loading === 'loading' ? 'Deleting...' : loading === 'success' ? 'Deleted' : 'Delete'}
                    </Button>
                </Sheet.Footer>
            </Sheet.Content>
        </>
    )
}
