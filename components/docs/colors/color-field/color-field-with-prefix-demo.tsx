'use client'

import { IconPalette, IconSwatchBook } from 'hq-icons'

import { ColorField } from '@/components/ui'

export default function ColorFieldWithPrefixSuffixDemo() {
    return (
        <div className='space-y-4'>
            <ColorField label='Color' prefix={<IconSwatchBook />} placeholder='#FAFAFA' />
            <ColorField label='Color' suffix={<IconSwatchBook />} placeholder='#FAFAFA' />
            <ColorField
                label='Color'
                prefix={<IconSwatchBook />}
                suffix={<IconPalette />}
                placeholder='#FAFAFA'
            />
        </div>
    )
}
