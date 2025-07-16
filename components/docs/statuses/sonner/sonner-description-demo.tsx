'use client'

import { Button } from '@/components/ui'
import { toast } from 'sonner'

export default function SonnerDescriptionDemo() {
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
