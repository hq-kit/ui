'use client'

import { Button, Tooltip } from '@/components/ui'

const delays = [0, 500, 1000, 1500, 2000, 2500, 3000, 3500, 4000]

export default function TooltipDelayDemo() {
    return (
        <div className='flex gap-2'>
            {delays.map((delay, i) => (
                <Tooltip delay={delay} key={i}>
                    <Button>
                        {delay}
                        {delay === 1500 && ' (default)'}
                    </Button>
                    <Tooltip.Content>
                        This tooltip shown after <strong>{delay}</strong>ms.
                    </Tooltip.Content>
                </Tooltip>
            ))}
        </div>
    )
}
