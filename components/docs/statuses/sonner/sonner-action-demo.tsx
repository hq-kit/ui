'use client'

import { Button } from '@/components/ui'
import { toast } from 'sonner'

export default function SonnerActionDemo() {
    return (
        <div className='flex gap-3'>
            <Button
                onPress={() =>
                    toast('Your post has been published!', {
                        action: {
                            label: 'View',
                            onClick: () => alert('Viewed')
                        }
                    })
                }
            >
                Action
            </Button>
            <Button
                onPress={() =>
                    toast('Your message has been sent!', {
                        action: {
                            label: 'View',
                            onClick: () => alert('Viewed')
                        },
                        cancel: {
                            label: 'Cancel',
                            onClick: () => alert('Cancelled')
                        }
                    })
                }
            >
                Do or Not
            </Button>
            <Button
                onPress={() =>
                    toast('Your data has been deleted!', {
                        cancel: {
                            label: 'Cancel',
                            onClick: () => alert('Cancelled')
                        }
                    })
                }
            >
                Cancel
            </Button>
        </div>
    )
}
