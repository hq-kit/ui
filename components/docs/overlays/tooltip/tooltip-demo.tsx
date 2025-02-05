'use client'

import { IconBrandX } from 'hq-icons'

import { buttonStyles, Tooltip } from '@/components/ui'

export default function TooltipDemo() {
    return (
        <Tooltip>
            <Tooltip.Trigger
                aria-label='Follow My Twitter'
                className={buttonStyles({
                    variant: 'outline',
                    size: 'icon'
                })}
            >
                <IconBrandX />
            </Tooltip.Trigger>
            <Tooltip.Content>Follow me on X @dqalhq</Tooltip.Content>
        </Tooltip>
    )
}
