'use client'

import { Tooltip } from '@/components/ui'

export default function TooltipDemo() {
    return (
        <Tooltip>
            <Tooltip.Trigger>Hover Me!</Tooltip.Trigger>
            <Tooltip.Content>Hello, This is Tooltip!</Tooltip.Content>
        </Tooltip>
    )
}
