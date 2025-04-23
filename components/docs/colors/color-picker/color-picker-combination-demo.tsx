'use client'

import { useState } from 'react'
import { type ColorSpace, getColorChannels } from 'react-aria-components'

import { ColorArea, ColorField, ColorPicker, ColorSlider, Select } from '@/components/ui'

export default function ColorPickerCombinationDemo() {
    const [space, setSpace] = useState<ColorSpace>('rgb')
    return (
        <ColorPicker label='Color picker' defaultValue='#0d6efd'>
            <section className='space-y-2 sm:max-w-56'>
                <ColorArea colorSpace={space} />
                <div className='5 space-y-0'>
                    {getColorChannels(space).map((channel) => (
                        <ColorSlider showOutput={false} key={channel} colorSpace={space} channel={channel} />
                    ))}
                </div>
                <Select
                    aria-label='Color space'
                    selectedKey={space}
                    onSelectionChange={(s) => setSpace(s as ColorSpace)}
                >
                    {['rgb', 'hsb', 'hsl'].map((s) => (
                        <Select.Item key={s} id={s} textValue={s}>
                            {s}
                        </Select.Item>
                    ))}
                </Select>
                <div className='flex gap-2'>
                    {getColorChannels(space).map((channel) => (
                        <ColorField key={channel} colorSpace={space} channel={channel} className='w-full' />
                    ))}
                </div>
            </section>
        </ColorPicker>
    )
}
