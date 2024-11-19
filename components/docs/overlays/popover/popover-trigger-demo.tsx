'use client'

import { Avatar, Button, Popover } from '@/components/ui'

export default function PopoverTriggerDemo() {
    return (
        <Popover>
            <Popover.Trigger aria-label='Open Popover'>
                <Avatar alt='dq-alhq' src='https://github.com/dq-alhq.png' />
            </Popover.Trigger>
            <Popover.Content aria-label='Login' className='min-w-72'>
                <Popover.Header>
                    <Popover.Title>Email</Popover.Title>
                    <Popover.Description>
                        We&apos;ll send you an email to log in.
                    </Popover.Description>
                </Popover.Header>
                <Popover.Footer>
                    <Button>Send Login Link</Button>
                </Popover.Footer>
            </Popover.Content>
        </Popover>
    )
}
