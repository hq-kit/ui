'use client'

import { IconPointer } from '@tabler/icons-react'
import { Button, Tooltip } from '@/components/ui'

export default function TooltipWithoutArrowDemo() {
    return (
        <Tooltip>
            <Button aria-label='Hover Me!'>
                <IconPointer />
            </Button>
            <Tooltip.Content showArrow={false}>Hello, This is Tooltip!</Tooltip.Content>
        </Tooltip>
    )
}
