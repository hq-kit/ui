'use client'

import { useState } from 'react'
import { type ColorSpace, getColorChannels } from 'react-aria-components'

import { ColorArea, ColorField, ColorPicker, Select, defaultColor } from '@/components/ui'

export default function ColorPickerEnableSelectionFormatDemo() {
    const [color, setColor] = useState(defaultColor)
    const [isHexFormat, setIsHexFormat] = useState(false)
    const [space, setSpace] = useState<ColorSpace>('rgb')
    return (
        <ColorPicker label={color.toString(space)} value={color} onChange={setColor}>
            <section className='space-y-2'>
                <ColorArea />
                <Select
                    aria-label='Color Space'
                    selectedKey={space}
                    defaultSelectedKey={space}
                    onSelectionChange={(s) => {
                        setSpace(s as ColorSpace)
                        setIsHexFormat(s === 'hex')
                    }}
                >
                    {['rgb', 'hex', 'hsl', 'hsb'].map((s) => (
                        <Select.Item key={s} id={s} textValue={s}>
                            {s}
                        </Select.Item>
                    ))}
                </Select>
                {isHexFormat ? (
                    <ColorField aria-label='Hex color' colorSpace={space} />
                ) : getColorChannels(space).length > 0 ? (
                    <div className='flex gap-2 sm:max-w-56'>
                        {getColorChannels(space).map((channel) => (
                            <ColorField colorSpace={space} channel={channel} key={channel} />
                        ))}
                    </div>
                ) : null}
            </section>
        </ColorPicker>
    )
}
