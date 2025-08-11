'use client'

import type { ColorSpace, Key } from 'react-aria-components'
import { useState } from 'react'
import { ColorArea, Select } from '@/components/ui'

const spaces = ['rgb', 'hsb', 'hsl'].map((space) => ({ space }))

export default function ColorAreaSpaceDemo() {
    const [colorSpace, setColorSpace] = useState<Key | null>('rgb')
    return (
        <div className='flex flex-col gap-4'>
            <Select
                className='w-full'
                items={spaces}
                label='Color Space'
                onSelectionChange={setColorSpace}
                selectedKey={colorSpace}
            >
                {(item) => <Select.Item id={item.space}>{item.space}</Select.Item>}
            </Select>
            <ColorArea colorSpace={colorSpace as ColorSpace} />
        </div>
    )
}
