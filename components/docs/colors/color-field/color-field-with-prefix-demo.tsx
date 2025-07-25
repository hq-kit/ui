'use client'

import { ColorField } from '@/components/ui'
import { IconColorSwatch, IconPalette } from '@tabler/icons-react'

export default function ColorFieldWithPrefixSuffixDemo() {
    return (
        <div className='space-y-4'>
            <ColorField label='Color' prefix={<IconColorSwatch />} placeholder='#FAFAFA' />
            <ColorField label='Color' suffix={<IconColorSwatch />} placeholder='#FAFAFA' />
            <ColorField label='Color' prefix={<IconColorSwatch />} suffix={<IconPalette />} placeholder='#FAFAFA' />
        </div>
    )
}
