'use client'

import { type TooltipProps } from 'react-aria-components'

import { Button, Popover } from '@/components/ui'

type Placement = Pick<TooltipProps, 'placement'>['placement']
const placements: Placement[] = ['bottom', 'top', 'left', 'start', 'right', 'end']
export default function PopoverPlacementDemo() {
    return (
        <div className='grid grid-cols-2 gap-2 sm:grid-cols-3'>
            {placements.map((placement, idx) => (
                <Popover key={idx}>
                    <Button className='mx-auto' size='sm' variant='outline'>
                        {placement}
                    </Button>
                    <Popover.Content aria-label='Placement' placement={placement} className='p-4'>
                        Popover shown at <strong>{placement}</strong>
                    </Popover.Content>
                </Popover>
            ))}
        </div>
    )
}
