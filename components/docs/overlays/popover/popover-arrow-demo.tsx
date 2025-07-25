'use client'

import { Button, Popover } from '@/components/ui'
import { IconPointer } from '@tabler/icons-react'

export default function PopoverArrowDemo() {
    return (
        <Popover>
            <Button>
                <IconPointer />
            </Button>
            <Popover.Content showArrow={false} className='p-4'>
                This popover doesn&apos;t have an arrow
            </Popover.Content>
        </Popover>
    )
}
