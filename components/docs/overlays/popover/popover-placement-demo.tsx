'use client'

import type { PopoverProps } from 'react-aria-components'

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
                        className='nth-10:col-span-2 nth-3:col-span-2 nth-6:col-span-3 nth-7:col-span-3 whitespace-normal py-5 text-[10px] sm:text-sm'
                    >
                        {place}
                    </Button>
                    <Popover.Content placement={place} className='min-w-64 p-4'>
                        Popover shown at <strong>{place}</strong>
                    </Popover.Content>
                </Popover>
            ))}
        </div>
    )
}
