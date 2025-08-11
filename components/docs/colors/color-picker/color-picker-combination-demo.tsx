'use client'

import { useState } from 'react'
import { type ColorSpace, getColorChannels } from 'react-aria-components'
import { ColorArea, ColorField, ColorPicker, ColorSlider, Select } from '@/components/ui'

export default function ColorPickerCombinationDemo() {
    const [space, setSpace] = useState<ColorSpace>('rgb')
    return (
        <ColorPicker defaultValue='#0d6efd' label='Color picker'>
            <section className='space-y-2 sm:max-w-56'>
                <ColorArea colorSpace={space} />
                <div className='5 space-y-0'>
                    {getColorChannels(space).map((channel) => (
                        <ColorSlider channel={channel} colorSpace={space} key={channel} showOutput={false} />
                    ))}
                </div>
                <Select
                    aria-label='Color space'
                    onSelectionChange={(s) => setSpace(s as ColorSpace)}
                    selectedKey={space}
                >
                    {['rgb', 'hsb', 'hsl'].map((s) => (
                        <Select.Item id={s} key={s} textValue={s}>
                            {s}
                        </Select.Item>
                    ))}
                </Select>
                <div className='flex gap-2'>
                    {getColorChannels(space).map((channel) => (
                        <ColorField channel={channel} className='w-full' colorSpace={space} key={channel} />
                    ))}
                </div>
            </section>
        </ColorPicker>
    )
}
