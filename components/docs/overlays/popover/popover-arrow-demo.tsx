'use client'

import { Button, Popover } from '@/components/ui'
import { IconMousePointerClick } from 'hq-icons'

export default function PopoverArrowDemo() {
    return (
        <Popover>
            <Button>
                <IconMousePointerClick />
            </Button>
            <Popover.Content showArrow={false} className='p-4'>
                This popover doesn&apos;t have an arrow
            </Popover.Content>
        </Popover>
    )
}
