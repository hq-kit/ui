'use client'

import { titleCase } from 'usemods'

import { Button, buttonStyles } from '@/components/ui'

type Shapes = keyof typeof buttonStyles.variants.shape

export default function ButtonShapeDemo() {
    return (
        <div className='flex flex-col gap-2 md:flex-row md:flex-wrap'>
            {Object.keys(buttonStyles.variants.shape).map((shape) => (
                <div key={shape}>
                    <Button shape={shape as Shapes}>{titleCase(shape)}</Button>
                </div>
            ))}
        </div>
    )
}
