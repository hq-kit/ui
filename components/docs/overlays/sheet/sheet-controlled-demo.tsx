'use client'

import { IconCircleCheck, IconTrash } from '@tabler/icons-react'
import { useState } from 'react'
import { Button, Sheet } from '@/components/ui'

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
                </Sheet.Footer>
            </Sheet.Content>
        </>
    )
}
