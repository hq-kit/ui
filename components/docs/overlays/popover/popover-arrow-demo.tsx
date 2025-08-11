'use client'

import { IconPointer } from '@tabler/icons-react'
import { Button, Popover } from '@/components/ui'

export default function PopoverArrowDemo() {
    return (
        <Popover>
            <Button>
                <IconPointer />
            </Button>
            <Popover.Content className='p-4' showArrow={false}>
                This popover doesn&apos;t have an arrow
            </Popover.Content>
        </Popover>
    )
}
