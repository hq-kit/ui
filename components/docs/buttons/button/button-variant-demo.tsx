'use client'

import { titleCase } from 'usemods'

import { Button, buttonStyles } from '@/components/ui'

type Appearance = keyof typeof buttonStyles.variants.variant

export default function ButtonVariantDemo() {
    return (
        <div className='flex flex-col gap-2 md:flex-row md:flex-wrap'>
            {Object.keys(buttonStyles.variants.variant).map((variant) => (
                <div key={variant}>
                    <Button variant={variant as Appearance}>{titleCase(variant)}</Button>
                </div>
            ))}
        </div>
    )
}
