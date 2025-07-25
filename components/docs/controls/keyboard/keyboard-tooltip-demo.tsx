'use client'

import { Keyboard, Tooltip } from '@/components/ui'
import { IconBold } from '@tabler/icons-react'

export default function KeyboardTooltipDemo() {
    return (
        <Tooltip>
            <Tooltip.Trigger>
                <IconBold />
            </Tooltip.Trigger>
            <Tooltip.Content>
                <span className='mr-4'>Bold</span>
                <Keyboard keys={['mod', 'b']} />
            </Tooltip.Content>
        </Tooltip>
    )
}
