'use client'

import { Button } from '@/components/ui'

import { IconCircleCheck, IconSend, IconTrash } from 'hq-icons'
import { useState } from 'react'

export default function ButtonLoaderDemo() {
    const [loading, setLoading] = useState<'idle' | 'loading' | 'success'>('idle')

    const onPress = () => {
        setLoading('loading')
        setTimeout(() => setLoading('success'), 3000)
        setTimeout(() => setLoading('idle'), 6000)
    }

    return (
        <div className='flex items-center justify-center gap-2'>
            <Button isPending={loading === 'loading'} onPress={onPress}>
                {loading === 'success' ? <IconCircleCheck /> : <IconSend />}
                {loading === 'loading' ? 'Sending...' : loading === 'success' ? 'Sent' : 'Send'}
            </Button>
            <Button
                isPending={loading === 'loading'}
                variant={loading === 'success' ? 'default' : 'destructive'}
                onPress={onPress}
            >
                {loading === 'success' ? <IconCircleCheck /> : <IconTrash />}
                {loading === 'loading' ? 'Deleting...' : loading === 'success' ? 'Deleted' : 'Delete'}
            </Button>
        </div>
    )
}
