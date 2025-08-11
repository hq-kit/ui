'use client'

import { IconEye } from '@tabler/icons-react'
import { Button, toast } from '@/components/ui'

export default function ToastActionDemo() {
    return (
        <div className='flex gap-3'>
            <Button
                onPress={() =>
                    toast('Your post has been published!', {
                        action: () => alert('Viewed'),
                        actionLabel: (
                            <>
                                <IconEye /> View
                            </>
                        )
                    })
                }
            >
                Action
            </Button>
            <Button
                onPress={() =>
                    toast('Your message has been sent!', {
                        action: () => alert('Viewed'),
                        actionLabel: (
                            <>
                                <IconEye /> View
                            </>
                        ),
                        altAction: () => alert('Cancelled'),
                        altActionLabel: 'Cancel'
                    })
                }
            >
                Do or Not
            </Button>
            <Button
                onPress={() =>
                    toast('Your data has been deleted!', {
                        altAction: () => alert('Cancelled'),
                        altActionLabel: 'Cancel'
                    })
                }
            >
                Cancel
            </Button>
        </div>
    )
}
