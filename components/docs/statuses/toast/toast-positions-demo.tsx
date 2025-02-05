'use client'

import { toast, type ToastT } from 'sonner'

import { Button } from '@/components/ui'

const positions: ToastT['position'][] = [
    'top-left',
    'top-right',
    'bottom-left',
    'bottom-right',
    'top-center',
    'bottom-center'
]

export default function ToastPositionsDemo() {
    return (
        <div className='grid grid-cols-2 sm:grid-cols-3 gap-4'>
            {positions.map((position) => (
                <Button
                    variant='outline'
                    size='sm'
                    key={position}
                    onPress={() =>
                        toast('The registration is successful, click here to continue.', {
                            position
                        })
                    }
                >
                    {position}
                </Button>
            ))}
        </div>
    )
}
