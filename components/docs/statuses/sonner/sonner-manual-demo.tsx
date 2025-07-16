'use client'

import { Button } from '@/components/ui'
import { toast } from 'sonner'

export default function SonnerAutoDismissDemo() {
    return (
        <div className='flex gap-2'>
            <Button
                onPress={() =>
                    toast('Manually Close', {
                        description: 'Click the action or cancel button to close',
                        duration: Infinity,
                        action: {
                            label: 'Action',
                            onClick: () => {
                                toast.dismiss()
                            }
                        },
                        cancel: {
                            label: 'Close',
                            onClick: () => {
                                toast.dismiss()
                            }
                        }
                    })
                }
            >
                Manually Close
            </Button>
            <Button
                onPress={() =>
                    toast('Automatically Close', {
                        description: 'Just leave it for 3 seconds'
                    })
                }
            >
                Automatically Close
            </Button>
        </div>
    )
}
