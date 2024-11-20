'use client'

import { IconSwatchBook } from 'hq-icons'

import { ColorField } from '@/components/ui'

export default function ColorFieldWithPrefixDemo() {
    return <ColorField label='Color' prefix={<IconSwatchBook />} placeholder='#FAFAFA' />
}
