'use client'

import { toast } from 'sonner'
import { Button } from '@/components/ui'

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
