'use client'

import { toast } from 'sonner'

import { Button } from '@/components/ui'

export default function ToastManualDemo() {
    return (
        <div className='flex gap-2'>
            <Button
                onPress={() =>
                    toast('Manually Close', {
                        description: 'Click the action or cancel button to close',
                        duration: Infinity,
                        action: {
                            label: 'Okay',
                            onClick: () => alert('Okay')
                        },
                        cancel: {
                            label: 'Close',
                            onClick: () => alert('Closed')
                        }
                    })
                }
            >
                Manually Close
            </Button>
            <Button
                onPress={() =>
                    toast('Automatically Close', {
                        description: 'Just leave it for 4 seconds',
                        action: {
                            label: 'Okay',
                            onClick: () => alert('Okay')
                        },
                        cancel: {
                            label: 'Close',
                            onClick: () => alert('Closed')
                        }
                    })
                }
            >
                Automatically Close
            </Button>
        </div>
    )
}
