'use client'

import { IconSquareMousePointer } from 'hq-icons'

import { Button, Tooltip } from '@/components/ui'

export default function TooltipVariantDemo() {
    return (
        <Tooltip>
            <Button aria-label='Hover Me!'>
                <IconSquareMousePointer />
            </Button>
            <Tooltip.Content isInverse>
                This is a <strong>Tooltip</strong> with an <strong>inverse</strong> background.
            </Tooltip.Content>
        </Tooltip>
    )
}
