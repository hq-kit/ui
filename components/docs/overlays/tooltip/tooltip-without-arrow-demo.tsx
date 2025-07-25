'use client'

import { Button, Tooltip } from '@/components/ui'
import { IconPointer } from '@tabler/icons-react'

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
