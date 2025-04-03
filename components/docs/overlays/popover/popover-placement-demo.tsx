'use client'

import { PopoverProps } from 'react-aria-components'

import { Button, Popover } from '@/components/ui'

const placements: PopoverProps['placement'][] = [
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

export default function PopoverPlacementDemo() {
    return (
        <div className='grid grid-cols-6 gap-2'>
            {placements.map((place, i) => (
                <Popover key={i}>
                    <Button
                        size='xs'
                        variant='outline'
                        className='nth-3:col-span-2 nth-10:col-span-2 nth-6:col-span-3 nth-7:col-span-3'
                    >
                        {place}
                    </Button>
                    <Popover.Content placement={place} className='p-4 min-w-64'>
                        Popover shown at <strong>{place}</strong>
                    </Popover.Content>
                </Popover>
            ))}
        </div>
    )
}
