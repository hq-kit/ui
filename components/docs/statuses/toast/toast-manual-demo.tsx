'use client'

import { Button, toast } from '@/components/ui'

export default function ToastAutoDismissDemo() {
    return (
        <div className='flex gap-2'>
            <Button
                onPress={() =>
                    toast('Manually Close', {
                        description: 'Click the action or cancel button to close',
                        actionLabel: 'Cancel',
                        altActionLabel: 'Close'
                    })
                }
            >
                Manually Close
            </Button>
            <Button
                onPress={() =>
                    toast(
                        'Automatically Close',
                        {
                            description: 'Just leave it for 3 seconds',
                            actionLabel: 'Cancel',
                            altActionLabel: 'Close'
                        },
                        { timeout: 3000 }
                    )
                }
            >
                Automatically Close
            </Button>
        </div>
    )
}
