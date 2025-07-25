'use client'

import { Button, Menu } from '@/components/ui'
import { IconColorSwatch } from '@tabler/icons-react'
import type { Dispatch, SetStateAction } from 'react'

const ColorSelectors = [
    { type: 'hex', sample: '#0D6DFD' },
    { type: 'rgb', sample: 'rgb(13 109 253)' },
    { type: 'hsl', sample: 'hsl(216 98.4% 52.2%)' },
    { type: 'oklch', sample: 'oklch(0.576 0.229 260.191)' }
]

export type ColorFormat = (typeof ColorSelectors)[number]['type']

type SelectFormatProps = {
    selectedFormat: ColorFormat
    action: Dispatch<SetStateAction<ColorFormat>>
}

export default function SelectFormat({ selectedFormat, action }: SelectFormatProps) {
    return (
        <Menu>
            <Button variant='outline'>
                <IconColorSwatch /> Format : {selectedFormat}
            </Button>
            <Menu.Content items={ColorSelectors}>
                {(item) => (
                    <Menu.Item onAction={() => action(item.type)} id={item.type} textValue={item.type}>
                        <Menu.Details label={item.type} description={item.sample} />
                    </Menu.Item>
                )}
            </Menu.Content>
        </Menu>
    )
}
