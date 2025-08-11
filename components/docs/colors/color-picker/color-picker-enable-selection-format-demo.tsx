'use client'

import { useState } from 'react'
import { type ColorSpace, getColorChannels } from 'react-aria-components'
import { ColorArea, ColorField, ColorPicker, defaultColor, Select } from '@/components/ui'

export default function ColorPickerEnableSelectionFormatDemo() {
    const [color, setColor] = useState(defaultColor)
    const [isHexFormat, setIsHexFormat] = useState(false)
    const [space, setSpace] = useState<ColorSpace>('rgb')
    return (
        <ColorPicker label={color.toString(space)} onChange={setColor} value={color}>
            <section className='space-y-2'>
                <ColorArea />
                <Select
                    aria-label='Color Space'
                    defaultSelectedKey={space}
                    onSelectionChange={(s) => {
                        setSpace(s as ColorSpace)
                        setIsHexFormat(s === 'hex')
                    }}
                    selectedKey={space}
                >
                    {['rgb', 'hex', 'hsl', 'hsb'].map((s) => (
                        <Select.Item id={s} key={s} textValue={s}>
                            {s}
                        </Select.Item>
                    ))}
                </Select>
                {isHexFormat ? (
                    <ColorField aria-label='Hex color' colorSpace={space} />
                ) : getColorChannels(space).length > 0 ? (
                    <div className='flex gap-2 sm:max-w-56'>
                        {getColorChannels(space).map((channel) => (
                            <ColorField channel={channel} colorSpace={space} key={channel} />
                        ))}
                    </div>
                ) : null}
            </section>
        </ColorPicker>
    )
}
