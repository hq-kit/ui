'use client'

import { Button, Drawer } from '@/components/ui'
import { IconCircleCheck, IconTrash } from 'hq-icons'
import { useState } from 'react'

export default function DrawerControlledDemo() {
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
            <Drawer.Content isOpen={open} onOpenChange={setOpen}>
                <Drawer.Header>
                    <Drawer.Title>Confirm Deletion</Drawer.Title>
                    <Drawer.Description>
                        Are you sure you want to delete your account? This action cannot be undone.
                    </Drawer.Description>
                </Drawer.Header>
                <Drawer.Footer>
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
                </Drawer.Footer>
            </Drawer.Content>
        </>
    )
}
