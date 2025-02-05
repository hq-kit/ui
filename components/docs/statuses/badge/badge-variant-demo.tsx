'use client'

import { titleCase } from 'usemods'

import { Badge, badgeStyles } from '@/components/ui'

type Appearance = keyof typeof badgeStyles.variants.variant

export default function BadgeVariantDemo() {
    return (
        <div className='flex flex-col gap-2 md:flex-row md:flex-wrap'>
            {Object.keys(badgeStyles.variants.variant).map((variant) => (
                <div key={variant}>
                    <Badge variant={variant as Appearance}>{titleCase(variant)}</Badge>
                </div>
            ))}
        </div>
    )
}
