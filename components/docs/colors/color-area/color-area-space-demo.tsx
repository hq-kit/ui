'use client'

import { ColorArea, Select } from '@/components/ui'
import { useState } from 'react'
import type { ColorSpace, Key } from 'react-aria-components'

const spaces = ['rgb', 'hsb', 'hsl'].map((space) => ({ space }))

export default function ColorAreaSpaceDemo() {
    const [colorSpace, setColorSpace] = useState<Key | null>('rgb')
    return (
        <div className='flex flex-col gap-4'>
            <Select
                className='w-full'
                label='Color Space'
                selectedKey={colorSpace}
                onSelectionChange={setColorSpace}
                items={spaces}
            >
                {(item) => <Select.Item id={item.space}>{item.space}</Select.Item>}
            </Select>
            <ColorArea colorSpace={colorSpace as ColorSpace} />
        </div>
    )
}
