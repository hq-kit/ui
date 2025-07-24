'use client'

import { Button, Tooltip } from '@/components/ui'
import { IconSquareMousePointer } from 'hq-icons'

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
