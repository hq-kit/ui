'use client'

import type { TooltipProps } from 'react-aria-components'

import { Button, Tooltip } from '@/components/ui'

const placements: TooltipProps['placement'][] = [
    'left top',
    'top left',
    'top',
    'top right',
    'right top',
    'left',
    'right',
    'left bottom',
    'bottom left',
    'bottom',
    'bottom right',
    'right bottom'
]

export default function TooltipPlacementDemo() {
    return (
        <div className='grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6 [&_.kbt32x]:w-full'>
            {placements.map((place, i) => (
                <Tooltip key={i}>
                    <Button
                        size='xs'
                        variant='outline'
                        className='nth-10:col-span-2 nth-3:col-span-2 nth-6:col-span-3 nth-7:col-span-3'
                    >
                        {place}
                    </Button>
                    <Tooltip.Content placement={place}>
                        Tooltip shown at <strong>{place}</strong>.
                    </Tooltip.Content>
                </Tooltip>
            ))}
        </div>
    )
}
