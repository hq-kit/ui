'use client'

import { toast, type ToastT } from 'sonner'

import { Button } from '@/components/ui'

const placements: ToastT['position'][] = [
    'top-left',
    'top-center',
    'top-right',
    'bottom-left',
    'bottom-center',
    'bottom-right'
]

export default function ToastPositionsDemo() {
    return (
        <div className='grid grid-cols-3 gap-2'>
            {placements.map((place) => (
                <Button
                    size='sm'
                    key={place}
                    onPress={() =>
                        toast(`Toast from ${place} position`, {
                            position: place
                        })
                    }
                >
                    {place}
                </Button>
            ))}
        </div>
    )
}
