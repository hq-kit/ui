'use client'

import { Badge, badgeStyle } from '@/components/ui'

type Appearance = keyof typeof badgeStyle.variants.variant

export default function BadgeVariantDemo() {
    return (
        <div className='flex flex-col gap-2 md:flex-row md:flex-wrap'>
            {Object.keys(badgeStyle.variants.variant).map((variant) => (
                <div key={variant}>
                    <Badge variant={variant as Appearance}>{variant}</Badge>
                </div>
            ))}
        </div>
    )
}
