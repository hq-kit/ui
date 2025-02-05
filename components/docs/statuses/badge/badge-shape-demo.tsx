'use client'

import { titleCase } from 'usemods'

import { Badge, badgeStyles } from '@/components/ui'

type Shapes = keyof typeof badgeStyles.variants.shape

export default function BadgeShapeDemo() {
    return (
        <div className='flex flex-col gap-2 md:flex-row md:flex-wrap'>
            {Object.keys(badgeStyles.variants.shape).map((shape) => (
                <div key={shape}>
                    <Badge shape={shape as Shapes}>{titleCase(shape)}</Badge>
                </div>
            ))}
        </div>
    )
}
