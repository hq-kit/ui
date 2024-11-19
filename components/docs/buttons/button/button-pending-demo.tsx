'use client'

import React from 'react'

import { IconPlus } from 'cleon-icons'

import { Button, ProgressCircle } from '@/components/ui'

export default function ButtonPendingDemo() {
    const [isLoading, setLoading] = React.useState(false)

    const handlePress = () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 4500)
    }
    return (
        <Button onPress={handlePress} isPending={isLoading}>
            {({ isPending }) => (
                <>
                    {isPending ? (
                        <ProgressCircle isIndeterminate aria-label='Creating...' />
                    ) : (
                        <IconPlus />
                    )}
                    {isLoading ? 'Creating...' : 'Create'}
                </>
            )}
        </Button>
    )
}
