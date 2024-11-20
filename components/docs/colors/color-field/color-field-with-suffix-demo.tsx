'use client'

import { IconSwatchBook } from 'hq-icons'

import { ColorField } from '@/components/ui'

export default function ColorFieldWithSuffixDemo() {
    return <ColorField label='Color' suffix={<IconSwatchBook />} placeholder='#FAFAFA' />
}
