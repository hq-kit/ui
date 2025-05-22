'use client'

import { useState } from 'react'
import { type ColorSpace, type Key, parseColor } from 'react-aria-components'
import type { ColorChannel } from 'react-stately'

import { ColorArea, SelectionBox } from '@/components/ui'
import { Select } from '@/components/ui/select'

const RGBchannels = ['red', 'green', 'blue'].map((channel) => ({ channel }))
const HSLchannels = ['hue', 'saturation', 'lightness'].map((channel) => ({ channel }))
const HSBchannels = ['hue', 'saturation', 'brightness'].map((channel) => ({ channel }))

export default function ColorAreaControlledDemo() {
    const [color, setColor] = useState(parseColor('hsl(0, 100%, 50%)'))
    const [colorSpace, setColorSpace] = useState<Key | null>('rgb')
    const [xChannel, setXChannel] = useState<Key | null>(colorSpace === 'rgb' ? 'red' : 'hue')
    const [yChannel, setYChannel] = useState<Key | null>(colorSpace === 'rgb' ? 'green' : 'saturation')

    return (
        <div className='flex flex-col items-center gap-2'>
            <SelectionBox
                className='w-full'
                label='Color Spaces'
                selectionMode='single'
                orientation='horizontal'
                value={colorSpace}
                onChange={(v) => {
                    setColorSpace(v)
                    setXChannel(v === 'rgb' ? 'red' : 'hue')
                    setYChannel(v === 'rgb' ? 'green' : 'saturation')
                }}
            >
                <SelectionBox.Item value='rgb'>RGB</SelectionBox.Item>
                <SelectionBox.Item value='hsl'>HSL</SelectionBox.Item>
                <SelectionBox.Item value='hsb'>HSB</SelectionBox.Item>
            </SelectionBox>
            <Select
                label='X Channel'
                className='w-full'
                selectedKey={xChannel}
                onSelectionChange={(v) => setXChannel(v)}
                items={colorSpace === 'rgb' ? RGBchannels : colorSpace === 'hsl' ? HSLchannels : HSBchannels}
            >
                {(item) => <Select.Item id={item.channel}>{item.channel}</Select.Item>}
            </Select>
            <Select
                label='Y Channel'
                className='w-full'
                selectedKey={yChannel}
                onSelectionChange={(v) => setYChannel(v)}
                items={colorSpace === 'rgb' ? RGBchannels : colorSpace === 'hsl' ? HSLchannels : HSBchannels}
            >
                {(item) => <Select.Item id={item.channel}>{item.channel}</Select.Item>}
            </Select>
            <ColorArea
                value={color}
                onChange={setColor}
                xChannel={xChannel as ColorChannel}
                yChannel={yChannel as ColorChannel}
                colorSpace={colorSpace as ColorSpace}
            />
            <pre>{JSON.stringify({ color }, null, 2)}</pre>
        </div>
    )
}
