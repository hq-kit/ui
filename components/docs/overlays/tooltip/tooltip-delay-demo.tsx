'use client'

import { IconBrandGithub } from 'hq-icons'

import { buttonStyles, Tooltip } from '@/components/ui'

export default function TooltipDelayDemo() {
    return (
        <div className='flex gap-2'>
            <Tooltip delay={0}>
                <Tooltip.Trigger
                    aria-label='Check My Github'
                    className={buttonStyles({
                        variant: 'outline',
                        size: 'icon'
                    })}
                >
                    <IconBrandGithub />
                </Tooltip.Trigger>
                <Tooltip.Content>Follow me on Github @dq-alhq</Tooltip.Content>
            </Tooltip>
        </div>
    )
}
