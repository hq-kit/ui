'use client'

import { IconColorSwatch, IconPalette } from '@tabler/icons-react'
import { ColorField } from '@/components/ui'

export default function ColorFieldWithPrefixSuffixDemo() {
    return (
        <div className='space-y-4'>
            <ColorField label='Color' placeholder='#FAFAFA' prefix={<IconColorSwatch />} />
            <ColorField label='Color' placeholder='#FAFAFA' suffix={<IconColorSwatch />} />
            <ColorField label='Color' placeholder='#FAFAFA' prefix={<IconColorSwatch />} suffix={<IconPalette />} />
        </div>
    )
}
