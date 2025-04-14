'use client'

import { Toggle } from '@/components/ui'

export default function ToggleShapeDemo() {
    return (
        <div className='flex gap-2'>
            <Toggle shape='square'>{({ isSelected }) => <>{isSelected ? 'Squared' : 'Square'}</>}</Toggle>
            <Toggle shape='circle'>{({ isSelected }) => <>{isSelected ? 'Circled' : 'Circle'}</>}</Toggle>
        </div>
    )
}
