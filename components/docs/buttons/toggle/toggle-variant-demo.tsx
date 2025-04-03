'use client'

import { Toggle } from '@/components/ui'

export default function ToggleVariantDemo() {
    return (
        <div className='flex gap-2'>
            <Toggle variant='solid'>{({ isSelected }) => <>{isSelected ? 'ON' : 'OFF'}</>}</Toggle>
            <Toggle variant='outline'>
                {({ isSelected }) => <>{isSelected ? 'ON' : 'OFF'}</>}
            </Toggle>
            <Toggle variant='ghost'>{({ isSelected }) => <>{isSelected ? 'ON' : 'OFF'}</>}</Toggle>
        </div>
    )
}
