'use client'

import { IconBold } from '@tabler/icons-react'
import { Keyboard, Tooltip } from '@/components/ui'

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
