'use client'

import { Button, Tooltip } from '@/components/ui'
import { IconSquareMousePointer } from 'hq-icons'

export default function TooltipWithoutArrowDemo() {
    return (
        <Tooltip>
            <Button aria-label='Hover Me!'>
                <IconSquareMousePointer />
            </Button>
            <Tooltip.Content showArrow={false}>Hello, This is Tooltip!</Tooltip.Content>
        </Tooltip>
    )
}
