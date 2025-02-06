'use client'

import { IconBell } from 'hq-icons'

import { Button, Popover } from '@/components/ui'

export default function PopoverArrowDemo() {
    return (
        <Popover>
            <Button variant='outline' size='icon'>
                <IconBell />
            </Button>
            <Popover.Content aria-label='Notifications' showArrow={false} className='min-w-72 p-4'>
                You have 3 new notifications.
            </Popover.Content>
        </Popover>
    )
}
