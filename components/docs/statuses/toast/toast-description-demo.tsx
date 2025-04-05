'use client'

import { Button, toast } from '@/components/ui'

export default function ToastDescriptionDemo() {
    return (
        <Button
            onPress={() =>
                toast('This is Toast Message', {
                    description: 'And this is Message Description'
                })
            }
        >
            Toast
        </Button>
    )
}
