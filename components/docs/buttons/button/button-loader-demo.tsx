'use client'

import { useState } from 'react'

import { IconCircleCheck, IconTrash } from 'hq-icons'

import { Button } from '@/components/ui'

export default function ButtonLoaderDemo() {
    const [loading, setLoading] = useState<'idle' | 'loading' | 'success'>('idle')

    const onPress = () => {
        setLoading('loading')
        setTimeout(() => setLoading('success'), 3000)
        setTimeout(() => setLoading('idle'), 6000)
    }

    return (
        <Button
            isPending={loading === 'loading'}
            variant={loading === 'success' ? 'success' : 'danger'}
            onPress={onPress}
        >
            {loading === 'success' ? <IconCircleCheck /> : <IconTrash />}
            {loading === 'loading' ? 'Deleting...' : loading === 'success' ? 'Deleted' : 'Delete'}
        </Button>
    )
}
