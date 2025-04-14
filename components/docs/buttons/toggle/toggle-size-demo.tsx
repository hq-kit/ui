'use client'

import { Toggle } from '@/components/ui'

export default function ToggleSizeDemo() {
    return (
        <div className='flex flex-wrap gap-2'>
            <Toggle size='xs'>{({ isSelected }) => <>{isSelected ? 'ON' : 'OFF'}</>}</Toggle>
            <Toggle size='sm'>{({ isSelected }) => <>{isSelected ? 'ON' : 'OFF'}</>}</Toggle>
            <Toggle size='md'>{({ isSelected }) => <>{isSelected ? 'ON' : 'OFF'}</>}</Toggle>
            <Toggle size='lg'>{({ isSelected }) => <>{isSelected ? 'ON' : 'OFF'}</>}</Toggle>
        </div>
    )
}
