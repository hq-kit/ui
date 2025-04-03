'use client'

import { IconSquareMousePointer } from 'hq-icons'

import { Button, Tooltip } from '@/components/ui'

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
